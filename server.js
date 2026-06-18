import { useState } from 'react';
import api from '../api/axios';
import AppLayout from '../components/AppLayout';

export default function ChangePassword() {
  const [form, setForm] = useState({ currentPassword: '', newPassword: '' });
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrors([]);
    setSubmitting(true);
    try {
      await api.put('/auth/password', form);
      setMessage('Password updated successfully.');
      setForm({ currentPassword: '', newPassword: '' });
    } catch (err) {
      const data = err.response?.data;
      if (data?.errors) setErrors(data.errors.map((x) => x.message));
      else setErrors([data?.message || 'Could not update your password.']);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppLayout>
      <div className="page-header">
        <div>
          <h1>Change password</h1>
          <p>Update the password you use to sign in.</p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: 480 }}>
        {message && <div className="alert alert-success">{message}</div>}
        {errors.length > 0 && (
          <div className="alert alert-error">
            {errors.map((msg, i) => <div key={i}>{msg}</div>)}
          </div>
        )}
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="currentPassword">Current password</label>
            <input id="currentPassword" name="currentPassword" type="password" required value={form.currentPassword} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="newPassword">New password</label>
            <input id="newPassword" name="newPassword" type="password" required value={form.newPassword} onChange={handleChange} />
            <span className="hint">8–16 characters, with one uppercase letter and one special character</span>
          </div>
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Updating…' : 'Update password'}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
