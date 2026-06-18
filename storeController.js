import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import AppLayout from '../../components/AppLayout';

export default function AdminAddUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', address: '', password: '', role: 'user' });
  const [errors, setErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSubmitting(true);
    try {
      await api.post('/admin/users', form);
      navigate('/admin/users');
    } catch (err) {
      const data = err.response?.data;
      if (data?.errors) setErrors(data.errors.map((x) => x.message));
      else setErrors([data?.message || 'Could not create this user.']);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppLayout>
      <div className="page-header">
        <div>
          <h1>Add a new user</h1>
          <p>Create an admin, normal user, or store-owner account.</p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: 480 }}>
        {errors.length > 0 && (
          <div className="alert alert-error">
            {errors.map((msg, i) => <div key={i}>{msg}</div>)}
          </div>
        )}
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" required value={form.name} onChange={handleChange} />
            <span className="hint">20–60 characters</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" rows={3} required value={form.address} onChange={handleChange} />
            <span className="hint">Up to 400 characters</span>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required value={form.password} onChange={handleChange} />
            <span className="hint">8–16 characters, with one uppercase letter and one special character</span>
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={form.role} onChange={handleChange}>
              <option value="user">Normal user</option>
              <option value="owner">Store owner</option>
              <option value="admin">System administrator</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Creating…' : 'Create user'}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
