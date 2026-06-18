import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import AppLayout from '../../components/AppLayout';
import SortableTable from '../../components/SortableTable';
import StarRating from '../../components/StarRating';

export default function AdminStores() {
  const [filters, setFilters] = useState({ name: '', email: '', address: '' });
  const [sort, setSort] = useState({ sortBy: 'name', sortOrder: 'asc' });
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchStores = async () => {
    setLoading(true);
    setError('');
    try {
      const params = { ...sort };
      Object.entries(filters).forEach(([k, v]) => { if (v) params[k] = v; });
      const res = await api.get('/admin/stores', { params });
      setStores(res.data.stores);
    } catch (err) {
      setError('Could not load stores.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchStores();
  };

  const handleSort = (key) => {
    setSort((prev) => ({
      sortBy: key,
      sortOrder: prev.sortBy === key && prev.sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  };

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'address', label: 'Address', sortable: true, render: (r) => <span title={r.address}>{r.address?.slice(0, 40)}{r.address?.length > 40 ? '…' : ''}</span> },
    {
      key: 'rating',
      label: 'Rating',
      sortable: true,
      render: (r) => (r.average_rating ? <span className="rating-pill"><StarRating value={Number(r.average_rating)} size="0.95rem" />{r.average_rating}</span> : <span className="cell-muted">No ratings yet</span>),
    },
  ];

  return (
    <AppLayout>
      <div className="page-header">
        <div>
          <h1>Stores</h1>
          <p>Every store registered on the platform, with its current rating.</p>
        </div>
        <Link className="btn btn-accent" to="/admin/stores/new">+ Add store</Link>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input placeholder="Filter by name" value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} />
        <input placeholder="Filter by email" value={filters.email} onChange={(e) => setFilters({ ...filters, email: e.target.value })} />
        <input placeholder="Filter by address" value={filters.address} onChange={(e) => setFilters({ ...filters, address: e.target.value })} />
        <button className="btn btn-outline" type="submit">Apply filters</button>
      </form>

      {error && <div className="alert alert-error">{error}</div>}

      <SortableTable
        columns={columns}
        rows={stores}
        sortBy={sort.sortBy}
        sortOrder={sort.sortOrder}
        onSort={handleSort}
        emptyMessage={loading ? 'Loading stores…' : 'No stores match these filters.'}
      />
    </AppLayout>
  );
}
