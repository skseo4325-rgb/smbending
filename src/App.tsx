import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontLayout from './components/layout/FrontLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/front/Home';
import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/Posts';
import Settings from './pages/admin/Settings';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Front-end Routes */}
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Posts />} /> {/* Reusing Posts component for demo */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
