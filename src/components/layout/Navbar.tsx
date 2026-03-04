import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* 상단 연락처 정보 바 */}
      <div className="bg-blue-600 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 02-1234-5678</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@seungminbending.com</span>
          </div>
          <div>
            <Link to="/admin" className="hover:text-blue-200 transition-colors">관리자 로그인</Link>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">승민산업벤딩</span>
            </Link>
          </div>
          
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">회사소개</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">제품안내</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">작업갤러리</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">고객지원</Link>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
              견적 문의
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">회사소개</Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">제품안내</Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">작업갤러리</Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">고객지원</Link>
            <Link to="/admin" className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md">관리자 로그인</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
