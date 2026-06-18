import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NAV_BY_ROLE = {
  admin: [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/stores', label: 'Stores' },
  ],
  user: [
    { to: '/stores', label: 'Browse stores' },
  ],
  owner: [
    { to: '/owner', label: 'Dashboard' },
  ],
};

export default function AppLayout({ children }) {
  const { user, logout } = useAuth();
  const links = NAV_BY_ROLE[user?.role] || [];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-name">
            Registry
            <small>Store Ratings Platform</small>
          </span>
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to !== '/admin'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/password" className={({ isActive }) => (isActive ? 'active' : '')}>
            Change password
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            {user?.name}
            <span className="role-tag">{user?.role}</span>
          </div>
          <button type="button" className="btn btn-outline btn-sm" onClick={logout} style={{ width: '100%', color: '#F7F3EC', borderColor: 'rgba(247,243,236,0.3)' }}>
            Log out
          </button>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}
