import { useEffect, useState } from 'react';
import api from '../../api/axios';
import AppLayout from '../../components/AppLayout';
import SortableTable from '../../components/SortableTable';
import StarRating from '../../components/StarRating';

export default function StoreList() {
  const [filters, setFilters] = useState({ name: '', address: '' });
  const [sort, setSort] = useState({ sortBy: 'name', sortOrder: 'asc' });
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState(null);

  const fetchStores = async () => {
    setLoading(true);
    setError('');
    try {
      const params = { ...sort };
      Object.entries(filters).forEach(([k, v]) => { if (v) params[k] = v; });
      const res = await api.get('/stores', { params });
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

  const handleRate = async (storeId, rating) => {
    setSavingId(storeId);
    try {
      await api.post(`/stores/${storeId}/ratings`, { rating });
      setStores((prev) => prev.map((s) => (s.id === storeId ? { ...s, my_rating: rating } : s)));
    } catch (err) {
      setError('Could not save your rating. Please try again.');
    } finally {
      setSavingId(null);
    }
  };

  const columns = [
    { key: 'name', label: 'Store name', sortable: true },
    { key: 'address', label: 'Address', sortable: true },
    {
      key: 'rating',
      label: 'Overall rating',
      sortable: true,
      render: (r) => (r.average_rating ? <span className="rating-pill"><StarRating value={Number(r.average_rating)} size="0.95rem" />{r.average_rating} ({r.rating_count})</span> : <span className="cell-muted">No ratings yet</span>),
    },
    {
      key: 'my_rating',
      label: 'Your rating',
      render: (r) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <StarRating
            value={r.my_rating || 0}
            onChange={(n) => handleRate(r.id, n)}
            disabled={savingId === r.id}
          />
          {r.my_rating ? <span className="cell-muted text-sm">saved</span> : null}
        </div>
      ),
    },
  ];

  return (
    <AppLayout>
      <div className="page-header">
        <div>
          <h1>Browse stores</h1>
          <p>Search the registry and rate the stores you've visited.</p>
        </div>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input placeholder="Search by name" value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} />
        <input placeholder="Search by address" value={filters.address} onChange={(e) => setFilters({ ...filters, address: e.target.value })} />
        <button className="btn btn-outline" type="submit">Search</button>
      </form>

      {error && <div className="alert alert-error">{error}</div>}

      <SortableTable
        columns={columns}
        rows={stores}
        sortBy={sort.sortBy}
        sortOrder={sort.sortOrder}
        onSort={handleSort}
        emptyMessage={loading ? 'Loading stores…' : 'No stores match your search.'}
      />
    </AppLayout>
  );
}
