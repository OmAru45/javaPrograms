import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../api/axios';
import AppLayout from '../../components/AppLayout';

export default function AdminUserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get(`/admin/users/${id}`)
      .then((res) => setUser(res.data.user))
      .catch(() => setError('Could not load this user.'));
  }, [id]);

  return (
    <AppLayout>
      <div className="page-header">
        <div>
          <h1>User detail</h1>
          <p>Full profile for this account.</p>
        </div>
        <Link className="btn btn-outline" to="/admin/users">Back to users</Link>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {user && (
        <div className="card" style={{ maxWidth: 520 }}>
          <div className="form-grid" style={{ gap: '1rem' }}>
            <div>
              <div className="hint">Name</div>
              <div>{user.name}</div>
            </div>
            <div>
              <div className="hint">Email</div>
              <div>{user.email}</div>
            </div>
            <div>
              <div className="hint">Address</div>
              <div>{user.address}</div>
            </div>
            <div>
              <div className="hint">Role</div>
              <div><span className={`badge badge-${user.role}`}>{user.role}</span></div>
            </div>
            {user.role === 'owner' && (
              <div>
                <div className="hint">Store rating</div>
                <div>{user.owner_rating ?? 'No ratings yet'}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </AppLayout>
  );
}
