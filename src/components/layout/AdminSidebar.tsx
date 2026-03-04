import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, Image as ImageIcon } from 'lucide-react';

export default function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: <LayoutDashboard className="w-5 h-5" />, label: '대시보드' },
    { path: '/admin/posts', icon: <FileText className="w-5 h-5" />, label: '게시물 관리' },
    { path: '/admin/gallery', icon: <ImageIcon className="w-5 h-5" />, label: '갤러리 관리' },
    { path: '/admin/settings', icon: <Settings className="w-5 h-5" />, label: '설정' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col min-h-screen">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <span className="text-xl font-bold tracking-tight text-white">승민산업벤딩<span className="text-blue-500 ml-2 text-sm">Admin</span></span>
      </div>
      
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="ml-3 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <Link 
          to="/"
          className="flex items-center px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="ml-3 font-medium">사이트로 돌아가기</span>
        </Link>
      </div>
    </aside>
  );
}
