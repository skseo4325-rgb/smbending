import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white tracking-tight mb-4 block">승민산업벤딩</span>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              최고의 기술력과 노하우로 고객이 원하는 완벽한 벤딩 가공 서비스를 제공합니다. 
              신뢰할 수 있는 파트너, 승민산업벤딩과 함께하세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">회사소개</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">제품안내</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">작업갤러리</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">고객지원</a></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객센터</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">서울특별시 금천구 가산디지털1로 123, 승민빌딩 1층</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">02-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@seungminbending.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 승민산업벤딩. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
