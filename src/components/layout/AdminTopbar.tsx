import { Bell, Search, User } from 'lucide-react';

export default function AdminTopbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
            placeholder="검색어를 입력하세요..."
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-500 relative">
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          <Bell className="h-6 w-6" />
        </button>
        
        <div className="flex items-center space-x-3 border-l border-gray-200 pl-4 ml-2">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900">관리자</span>
            <span className="text-xs text-gray-500">admin@seungmin.com</span>
          </div>
          <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
