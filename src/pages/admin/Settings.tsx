import { Save, Upload, Palette, Type, Globe, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleSaveClick = () => {
    setIsConfirmDialogOpen(true);
  };

  const handleConfirmSave = () => {
    // Save logic would go here
    setIsConfirmDialogOpen(false);
  };

  const handleCancelSave = () => {
    setIsConfirmDialogOpen(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">사이트 설정</h1>
          <p className="text-gray-500 mt-1">웹사이트의 기본 정보와 디자인을 커스터마이징합니다.</p>
        </div>
        <button 
          onClick={handleSaveClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center shadow-sm"
        >
          <Save className="w-5 h-5 mr-2" />
          변경사항 저장
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {[
              { id: 'general', label: '기본 정보', icon: <Globe className="w-5 h-5" /> },
              { id: 'contact', label: '연락처 정보', icon: <Phone className="w-5 h-5" /> },
              { id: 'appearance', label: '테마 및 색상', icon: <Palette className="w-5 h-5" /> },
              { id: 'typography', label: '폰트 설정', icon: <Type className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4">기본 정보 설정</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">사이트 이름</label>
                  <input
                    type="text"
                    defaultValue="승민산업벤딩"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">사이트 설명 (SEO)</label>
                  <textarea
                    rows={3}
                    defaultValue="최고의 기술력과 노하우로 고객이 원하는 완벽한 벤딩 가공 서비스를 제공합니다."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                  <p className="mt-1 text-xs text-gray-500">검색 엔진 결과에 표시될 사이트의 간단한 설명입니다.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">로고 이미지</label>
                  <div className="mt-1 flex items-center space-x-4">
                    <div className="h-16 w-48 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">승민산업벤딩</span>
                    </div>
                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center">
                      <Upload className="w-4 h-4 mr-2" />
                      이미지 변경
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4">연락처 정보 설정</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">대표 전화번호</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      defaultValue="02-1234-5678"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이메일 주소</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      defaultValue="info@seungminbending.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">회사 주소</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      defaultValue="서울특별시 금천구 가산디지털1로 123, 승민빌딩 1층"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4">테마 및 색상 설정</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">포인트 컬러 (Primary Color)</label>
                  <div className="flex space-x-4">
                    {[
                      { name: '블루 (기본)', class: 'bg-blue-600', selected: true },
                      { name: '네이비', class: 'bg-slate-800', selected: false },
                      { name: '에메랄드', class: 'bg-emerald-600', selected: false },
                      { name: '오렌지', class: 'bg-orange-500', selected: false },
                    ].map((color, i) => (
                      <div key={i} className="flex flex-col items-center space-y-2 cursor-pointer">
                        <div className={`w-12 h-12 rounded-full ${color.class} ${color.selected ? 'ring-4 ring-offset-2 ring-blue-500' : 'ring-1 ring-gray-200'}`}></div>
                        <span className="text-xs font-medium text-gray-600">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'typography' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4">폰트 설정</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">기본 폰트 (Base Font)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-2 border-blue-500 rounded-lg p-4 cursor-pointer bg-blue-50">
                      <p className="font-sans text-lg font-medium text-gray-900 mb-1">Inter (기본)</p>
                      <p className="font-sans text-sm text-gray-500">가장 깔끔하고 현대적인 산세리프 폰트입니다.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-300">
                      <p className="font-serif text-lg font-medium text-gray-900 mb-1">Noto Serif KR</p>
                      <p className="font-serif text-sm text-gray-500">신뢰감과 전문성을 주는 세리프 폰트입니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {isConfirmDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">설정 저장</h3>
              <p className="text-gray-600 text-sm">Are you sure you want to save these settings?</p>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-center space-x-3">
              <button 
                onClick={handleCancelSave}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-1"
              >
                취소
              </button>
              <button 
                onClick={handleConfirmSave}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex-1"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
