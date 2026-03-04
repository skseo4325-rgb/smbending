import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    { id: 1, title: '대형 파이프 벤딩 가공', category: '파이프 벤딩', date: '2023-10-18', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: '스테인리스 철판 절곡', category: '철판 절곡', date: '2023-10-15', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: '건축용 H빔 벤딩', category: 'H빔 벤딩', date: '2023-10-10', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: '특수 합금 정밀 가공', category: '특수 합금', date: '2023-10-05', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: '산업용 배관 벤딩', category: '파이프 벤딩', date: '2023-09-28', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop' },
    { id: 6, title: '구조물 프레임 제작', category: '철판 절곡', date: '2023-09-20', image: 'https://images.unsplash.com/photo-1565439390115-08a5141e63d0?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">갤러리 관리</h1>
          <p className="text-gray-500 mt-1">작업 갤러리에 표시될 이미지와 포트폴리오를 관리합니다.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center shadow-sm">
          <Plus className="w-5 h-5 mr-2" />
          새 이미지 추가
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
            {['전체', '파이프 벤딩', '철판 절곡', 'H빔 벤딩', '특수 합금'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab === '전체' ? 'all' : tab)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  (activeTab === 'all' && tab === '전체') || activeTab === tab
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="이미지 검색..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                <button className="p-2 bg-white text-gray-900 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white text-gray-900 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900 line-clamp-1" title={item.title}>{item.title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                  {item.category}
                </span>
                <span className="text-gray-500 text-xs">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <span className="text-sm text-gray-500">총 <span className="font-medium text-gray-900">42</span>개의 이미지 중 1-6</span>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>이전</button>
          <button className="px-3 py-1 border border-blue-600 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">다음</button>
        </div>
      </div>
    </div>
  );
}
