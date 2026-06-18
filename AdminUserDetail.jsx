/* ===========================================================
   Design tokens
   Subject: a registry of trust between shoppers and storekeepers.
   The signature element is the "seal" — a stamped medallion used
   wherever a rating or count needs to feel like an official mark,
   not just a number.
   =========================================================== */
:root {
  --ink: #14213d;
  --ink-soft: #1f2d4d;
  --ink-faint: #2c3b60;
  --brass: #c98a3e;
  --brass-light: #e0ad6c;
  --brass-dark: #9c6a28;
  --parchment: #f7f3ec;
  --parchment-deep: #efe6d4;
  --paper: #fffdf9;
  --slate: #5b6472;
  --slate-light: #8a91a0;
  --success: #3f7a5e;
  --success-bg: #e7f0ea;
  --error: #b3473c;
  --error-bg: #f7e9e7;
  --border: #ddd3ba;
  --white: #ffffff;

  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;

  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --shadow-card: 0 1px 2px rgba(20, 33, 61, 0.06), 0 6px 16px rgba(20, 33, 61, 0.05);
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

* { box-sizing: border-box; }

html, body, #root { height: 100%; }

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--ink);
  background: var(--parchment);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
}

a { color: inherit; }

button { font-family: var(--font-body); }

:focus-visible {
  outline: 2px solid var(--brass);
  outline-offset: 2px;
}

/* ---------------- App shell ---------------- */

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 252px;
  flex-shrink: 0;
  background: var(--ink);
  color: var(--parchment);
  display: flex;
  flex-direction: column;
  padding: 1.75rem 1.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 2.25rem;
  padding-left: 0.25rem;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px double var(--brass-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brass-light);
  flex-shrink: 0;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  line-height: 1.1;
}

.brand-name small {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--slate-light);
  margin-top: 0.15rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.sidebar-nav a, .sidebar-nav button.nav-link {
  display: block;
  text-decoration: none;
  color: rgba(247, 243, 236, 0.78);
  font-size: 0.92rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: background 0.15s ease, color 0.15s ease;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
  font-family: var(--font-body);
}

.sidebar-nav a:hover, .sidebar-nav button.nav-link:hover {
  background: var(--ink-soft);
  color: var(--white);
}

.sidebar-nav a.active {
  background: var(--ink-faint);
  color: var(--white);
  font-weight: 500;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--ink-faint);
}

.sidebar-user {
  font-size: 0.85rem;
  color: var(--parchment);
  margin-bottom: 0.75rem;
}

.sidebar-user .role-tag {
  display: inline-block;
  margin-top: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--brass-light);
}

.main-content {
  flex: 1;
  min-width: 0;
  padding: 2.25rem 2.75rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.page-header h1 {
  font-size: 1.7rem;
}

.page-header p {
  color: var(--slate);
  margin: 0.35rem 0 0;
  font-size: 0.92rem;
}

/* ---------------- Seal / medallion signature element ---------------- */

.seal {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 4px double var(--brass-dark);
  background: radial-gradient(circle at 32% 28%, var(--brass-light) 0%, var(--brass) 62%, var(--brass-dark) 100%);
  color: var(--ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
}

.seal .seal-value {
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 700;
  line-height: 1;
}

.seal .seal-label {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.15rem;
  opacity: 0.85;
}

.seal.seal-muted {
  background: var(--parchment-deep);
  border-color: var(--border);
  color: var(--slate);
}

/* ---------------- Stat / summary cards ---------------- */

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.stat-card .stat-text .stat-title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--slate);
}

.stat-card .stat-text .stat-value {
  font-family: var(--font-display);
  font-size: 1.9rem;
  margin-top: 0.15rem;
}

/* ---------------- Cards / panels ---------------- */

.card {
  background: var(--paper);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: 1.5rem;
}

.card + .card { margin-top: 1.25rem; }

.card-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  margin-bottom: 1rem;
}

/* ---------------- Buttons ---------------- */

.btn {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  padding: 0.55rem 1.1rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: filter 0.15s ease, background 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.btn:disabled { opacity: 0.55; cursor: not-allowed; }

.btn-primary {
  background: var(--ink);
  color: var(--white);
}
.btn-primary:hover:not(:disabled) { background: var(--ink-soft); }

.btn-accent {
  background: var(--brass);
  color: var(--white);
}
.btn-accent:hover:not(:disabled) { background: var(--brass-dark); }

.btn-outline {
  background: transparent;
  border-color: var(--border);
  color: var(--ink);
}
.btn-outline:hover:not(:disabled) { background: var(--parchment-deep); }

.btn-danger {
  background: transparent;
  border-color: var(--error);
  color: var(--error);
}
.btn-danger:hover:not(:disabled) { background: var(--error-bg); }

.btn-sm { padding: 0.35rem 0.75rem; font-size: 0.8rem; }

/* ---------------- Forms ---------------- */

.form-grid {
  display: grid;
  gap: 1.1rem;
  max-width: 480px;
}

.field { display: flex; flex-direction: column; gap: 0.4rem; }

.field label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-soft);
}

.field .hint {
  font-size: 0.74rem;
  color: var(--slate-light);
}

.field input, .field select, .field textarea {
  font-family: var(--font-body);
  font-size: 0.92rem;
  padding: 0.62rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--paper);
  color: var(--ink);
}

.field input:focus, .field select:focus, .field textarea:focus {
  border-color: var(--brass);
  outline: none;
  box-shadow: 0 0 0 3px rgba(201, 138, 62, 0.18);
}

.field-error {
  color: var(--error);
  font-size: 0.78rem;
}

.search-bar {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.search-bar input, .search-bar select {
  font-family: var(--font-body);
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--paper);
  font-size: 0.88rem;
  min-width: 180px;
}

/* ---------------- Tables (ledger style) ---------------- */

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--paper);
}

table.ledger {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}

table.ledger thead th {
  text-align: left;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--slate);
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--parchment-deep);
  white-space: nowrap;
}

table.ledger thead th.sortable {
  cursor: pointer;
  user-select: none;
}

table.ledger thead th.sortable:hover { color: var(--ink); }

table.ledger thead th .sort-arrow {
  margin-left: 0.3rem;
  color: var(--brass-dark);
}

table.ledger tbody td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

table.ledger tbody tr:last-child td { border-bottom: none; }

table.ledger tbody tr:hover { background: rgba(201, 138, 62, 0.05); }

.cell-muted { color: var(--slate-light); }

.empty-state {
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: var(--slate);
  font-size: 0.92rem;
}

/* ---------------- Badges ---------------- */

.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--border);
}

.badge-admin { background: var(--ink); color: var(--white); border-color: var(--ink); }
.badge-owner { background: var(--brass); color: var(--white); border-color: var(--brass); }
.badge-user { background: var(--parchment-deep); color: var(--ink-soft); }

/* ---------------- Star rating widget ---------------- */

.star-row { display: inline-flex; gap: 0.15rem; }

.star-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.1rem;
  font-size: 1.25rem;
  line-height: 1;
  color: var(--border);
  transition: color 0.1s ease, transform 0.1s ease;
}

.star-btn.filled { color: var(--brass); }
.star-btn:hover { transform: scale(1.12); }
.star-btn:disabled { cursor: default; }

.rating-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--ink-soft);
}

/* ---------------- Alerts / banners ---------------- */

.alert {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.86rem;
  margin-bottom: 1.1rem;
}

.alert-error { background: var(--error-bg); color: var(--error); border: 1px solid rgba(179, 71, 60, 0.25); }
.alert-success { background: var(--success-bg); color: var(--success); border: 1px solid rgba(63, 122, 94, 0.25); }

/* ---------------- Auth pages ---------------- */

.auth-shell {
  min-height: 100vh;
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-image: radial-gradient(circle at 18% 20%, rgba(201, 138, 62, 0.16), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(201, 138, 62, 0.1), transparent 40%);
}

.auth-card {
  background: var(--paper);
  border-radius: var(--radius-lg);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
}

.auth-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.75rem;
  gap: 0.6rem;
}

.auth-brand .brand-mark {
  width: 52px;
  height: 52px;
  font-size: 1.4rem;
  color: var(--brass-dark);
  border-color: var(--brass);
}

.auth-brand h1 {
  font-size: 1.4rem;
}

.auth-brand p {
  color: var(--slate);
  font-size: 0.85rem;
  margin: 0;
}

.auth-switch {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: var(--slate);
}

.auth-switch a, .auth-switch button {
  color: var(--brass-dark);
  font-weight: 500;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0;
}

/* ---------------- Utility ---------------- */

.flex-between { display: flex; justify-content: space-between; align-items: center; }
.muted { color: var(--slate); }
.mt-lg { margin-top: 1.75rem; }
.text-sm { font-size: 0.84rem; }
