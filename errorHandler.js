import { useEffect, useState } from 'react';
import api from '../../api/axios';
import AppLayout from '../../components/AppLayout';
import SortableTable from '../../components/SortableTable';

export default function OwnerDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/owner/dashboard')
      .then((res) => setData(res.data))
      .catch(() => setError('Could not load your dashboard.'));
  }, []);

  const columns = [
    { key: 'name', label: 'Customer', sortable: false },
    { key: 'email', label: 'Email', sortable: false },
    { key: 'rating', label: 'Rating', sortable: false, render: (r) => `${r.rating} / 5` },
    { key: 'updated_at', label: 'Last updated', render: (r) => new Date(r.updated_at).toLocaleDateString() },
  ];

  return (
    <AppLayout>
      <div className="page-header">
        <div>
          <h1>Store dashboard</h1>
          <p>How your store is doing, and who's been rating it.</p>
        </div>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {data && data.stores.length === 0 && (
        <div className="card">
          <div className="empty-state">No store is linked to your account yet. Ask an administrator to assign one.</div>
        </div>
      )}

      {data && data.stores.length > 0 && (
        <>
          <div className="stat-grid">
            <div className="stat-card">
              <span className="seal">
                <span className="seal-value">{data.averageRating ?? '—'}</span>
                <span className="seal-label">Avg</span>
              </span>
              <div className="stat-text">
                <div className="stat-title">Average rating</div>
                <div className="stat-value">{data.averageRating ?? 'No ratings yet'}</div>
              </div>
            </div>
            <div className="stat-card">
              <span className="seal seal-muted">
                <span className="seal-value">{data.ratingCount}</span>
                <span className="seal-label">Total</span>
              </span>
              <div className="stat-text">
                <div className="stat-title">Ratings received</div>
                <div className="stat-value">{data.ratingCount}</div>
              </div>
            </div>
          </div>

          <div className="card-title">Customers who rated your store</div>
          <SortableTable columns={columns} rows={data.raters} emptyMessage="No ratings yet." />
        </>
      )}
    </AppLayout>
  );
}
