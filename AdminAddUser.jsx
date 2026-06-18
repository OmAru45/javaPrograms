import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminAddUser from './pages/admin/AdminAddUser';
import AdminUserDetail from './pages/admin/AdminUserDetail';
import AdminStores from './pages/admin/AdminStores';
import AdminAddStore from './pages/admin/AdminAddStore';

import StoreList from './pages/user/StoreList';
import OwnerDashboard from './pages/owner/OwnerDashboard';

const HOME_BY_ROLE = { admin: '/admin', user: '/stores', owner: '/owner' };

function Home() {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={HOME_BY_ROLE[user.role] || '/login'} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />

      <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/users" element={<ProtectedRoute roles={['admin']}><AdminUsers /></ProtectedRoute>} />
      <Route path="/admin/users/new" element={<ProtectedRoute roles={['admin']}><AdminAddUser /></ProtectedRoute>} />
      <Route path="/admin/users/:id" element={<ProtectedRoute roles={['admin']}><AdminUserDetail /></ProtectedRoute>} />
      <Route path="/admin/stores" element={<ProtectedRoute roles={['admin']}><AdminStores /></ProtectedRoute>} />
      <Route path="/admin/stores/new" element={<ProtectedRoute roles={['admin']}><AdminAddStore /></ProtectedRoute>} />

      <Route path="/stores" element={<ProtectedRoute roles={['user']}><StoreList /></ProtectedRoute>} />

      <Route path="/owner" element={<ProtectedRoute roles={['owner']}><OwnerDashboard /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
