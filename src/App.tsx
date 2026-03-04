import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FrontLayout from './components/layout/FrontLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/front/Home';
import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/Posts';
import Gallery from './pages/admin/Gallery';
import Settings from './pages/admin/Settings';
import Login from './pages/admin/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Front-end Routes */}
          <Route path="/" element={<FrontLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Dashboard Routes (Protected) */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
