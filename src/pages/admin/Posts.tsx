import { Plus, Search, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function Posts() {
  const [activeTab, setActiveTab] = useState('all');

  const posts = [
    { id: 1, title: '2023년 하반기 신규 설비 도입 안내', category: '공지사항', author: '관리자', date: '2023-10-20', status: '게시중', views: 142 },
    { id: 2, title: '대형 파이프 벤딩 가공 사례 업데이트', category: '작업갤러리', author: '관리자', date: '2023-10-18', status: '게시중', views: 89 },
    { id: 3, title: '추석 연휴 휴무 안내', category: '공지사항', author: '관리자', date: '2023-09-25', status: '숨김', views: 320 },
    { id: 4, title: '신제품 H빔 벤딩기 출시', category: '제품소개', author: '관리자', date: '2023-09-10', status: '게시중', views: 512 },
    { id: 5, title: 'ISO 9001 품질경영시스템 인증 획득', category: '보도자료', author: '관리자', date: '2023-08-15', status: '게시중', views: 215 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">게시물 관리</h1>
          <p className="text-gray-500 mt-1">공지사항, 제품소개, 갤러리 등의 콘텐츠를 관리합니다.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center shadow-sm">
          <Plus className="w-5 h-5 mr-2" />
          새 게시물 작성
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
            {['전체', '공지사항', '제품소개', '작업갤러리'].map((tab) => (
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
                placeholder="게시물 검색..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <th className="px-6 py-4 w-12 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="px-6 py-4">제목</th>
                <th className="px-6 py-4">카테고리</th>
                <th className="px-6 py-4">작성자</th>
                <th className="px-6 py-4">작성일</th>
                <th className="px-6 py-4">조회수</th>
                <th className="px-6 py-4">상태</th>
                <th className="px-6 py-4 text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 line-clamp-1">{post.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.views}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.status === '게시중' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm text-gray-500">총 <span className="font-medium text-gray-900">24</span>개의 게시물 중 1-5</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>이전</button>
            <button className="px-3 py-1 border border-blue-600 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">다음</button>
          </div>
        </div>
      </div>
    </div>
  );
}
