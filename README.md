const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { asyncHandler } = require('../middleware/errorHandler');

// Columns the UI is allowed to sort by, per listing. Whitelisting avoids
// building SQL ORDER BY from arbitrary user input.
const USER_SORT_COLUMNS = { name: 'u.name', email: 'u.email', address: 'u.address', role: 'u.role', created_at: 'u.created_at' };
const STORE_SORT_COLUMNS = { name: 's.name', email: 's.email', address: 's.address', rating: 'average_rating' };

// GET /api/admin/dashboard
const getDashboard = asyncHandler(async (req, res) => {
  const [users, stores, ratings] = await Promise.all([
    db.query('SELECT COUNT(*)::int AS count FROM users'),
    db.query('SELECT COUNT(*)::int AS count FROM stores'),
    db.query('SELECT COUNT(*)::int AS count FROM ratings'),
  ]);

  return res.json({
    totalUsers: users.rows[0].count,
    totalStores: stores.rows[0].count,
    totalRatings: ratings.rows[0].count,
  });
});

// POST /api/admin/users — create an admin, normal user, or store-owner account.
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, address, role } = req.body;

  const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
  if (existing.rows.length > 0) {
    return res.status(409).json({ message: 'A user with this email already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const result = await db.query(
    `INSERT INTO users (name, email, password_hash, address, role)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, name, email, address, role, created_at`,
    [name, email, passwordHash, address, role]
  );

  return res.status(201).json({ user: result.rows[0] });
});

// GET /api/admin/users?name=&email=&address=&role=&sortBy=&sortOrder=
const listUsers = asyncHandler(async (req, res) => {
  const { name, email, address, role, sortBy = 'name', sortOrder = 'asc' } = req.query;

  const conditions = [];
  const params = [];

  if (name) { params.push(`%${name}%`); conditions.push(`u.name ILIKE $${params.length}`); }
  if (email) { params.push(`%${email}%`); conditions.push(`u.email ILIKE $${params.length}`); }
  if (address) { params.push(`%${address}%`); conditions.push(`u.address ILIKE $${params.length}`); }
  if (role) { params.push(role); conditions.push(`u.role = $${params.length}`); }

  const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const orderColumn = USER_SORT_COLUMNS[sortBy] || USER_SORT_COLUMNS.name;
  const orderDirection = sortOrder === 'desc' ? 'DESC' : 'ASC';

  // Store owners also carry their store's average rating in this listing,
  // since the admin's "view user detail" screen needs to show it.
  const result = await db.query(
    `SELECT u.id, u.name, u.email, u.address, u.role, u.created_at,
            ROUND(AVG(r.rating)::numeric, 2) AS owner_rating
     FROM users u
     LEFT JOIN stores st ON st.owner_id = u.id
     LEFT JOIN ratings r ON r.store_id = st.id
     ${whereClause}
     GROUP BY u.id
     ORDER BY ${orderColumn} ${orderDirection}`,
    params
  );

  return res.json({ users: result.rows });
});

// GET /api/admin/users/:id
const getUserDetail = asyncHandler(async (req, res) => {
  const result = await db.query(
    `SELECT u.id, u.name, u.email, u.address, u.role, u.created_at,
            ROUND(AVG(r.rating)::numeric, 2) AS owner_rating
     FROM users u
     LEFT JOIN stores st ON st.owner_id = u.id
     LEFT JOIN ratings r ON r.store_id = st.id
     WHERE u.id = $1
     GROUP BY u.id`,
    [req.params.id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.json({ user: result.rows[0] });
});

// POST /api/admin/stores — ownerId must reference an existing user with role 'owner'.
const createStore = asyncHandler(async (req, res) => {
  const { name, email, address, ownerId } = req.body;

  if (ownerId) {
    const owner = await db.query("SELECT id FROM users WHERE id = $1 AND role = 'owner'", [ownerId]);
    if (owner.rows.length === 0) {
      return res.status(400).json({ message: 'ownerId must reference an existing store-owner account' });
    }
  }

  const result = await db.query(
    `INSERT INTO stores (name, email, address, owner_id)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, address, owner_id, created_at`,
    [name, email, address, ownerId || null]
  );

  return res.status(201).json({ store: result.rows[0] });
});

// GET /api/admin/stores?name=&email=&address=&sortBy=&sortOrder=
const listStores = asyncHandler(async (req, res) => {
  const { name, email, address, sortBy = 'name', sortOrder = 'asc' } = req.query;

  const conditions = [];
  const params = [];

  if (name) { params.push(`%${name}%`); conditions.push(`s.name ILIKE $${params.length}`); }
  if (email) { params.push(`%${email}%`); conditions.push(`s.email ILIKE $${params.length}`); }
  if (address) { params.push(`%${address}%`); conditions.push(`s.address ILIKE $${params.length}`); }

  const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const orderColumn = STORE_SORT_COLUMNS[sortBy] || STORE_SORT_COLUMNS.name;
  const orderDirection = sortOrder === 'desc' ? 'DESC' : 'ASC';

  const result = await db.query(
    `SELECT s.id, s.name, s.email, s.address, s.owner_id,
            ROUND(AVG(r.rating)::numeric, 2) AS average_rating,
            COUNT(r.id)::int AS rating_count
     FROM stores s
     LEFT JOIN ratings r ON r.store_id = s.id
     ${whereClause}
     GROUP BY s.id
     ORDER BY ${orderColumn} ${orderDirection}`,
    params
  );

  return res.json({ stores: result.rows });
});

module.exports = { getDashboard, createUser, listUsers, getUserDetail, createStore, listStores };
