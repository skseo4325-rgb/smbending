import { Users, Eye, FileText, TrendingUp, ArrowUpRight, ArrowDownRight, Image as ImageIcon, Settings } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const stats = [
    { label: '총 방문자 수', value: '12,450', change: '+12.5%', isPositive: true, icon: <Users className="w-6 h-6 text-blue-600" /> },
    { label: '페이지 뷰', value: '45,210', change: '+8.2%', isPositive: true, icon: <Eye className="w-6 h-6 text-emerald-600" /> },
    { label: '새로운 문의', value: '124', change: '-2.4%', isPositive: false, icon: <FileText className="w-6 h-6 text-amber-600" /> },
    { label: '전환율', value: '3.2%', change: '+1.1%', isPositive: true, icon: <TrendingUp className="w-6 h-6 text-purple-600" /> },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-500 mt-1">웹사이트의 주요 지표와 최근 활동을 확인하세요.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                {stat.icon}
              </div>
              <div className={`flex items-center text-sm font-medium px-2.5 py-1 rounded-full ${
                stat.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
              }`}>
                {stat.isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">최근 문의 내역</h2>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">전체 보기</button>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { name: '김철수', company: '(주)대한건설', date: '2023-10-25', status: '대기중' },
              { name: '이영희', company: '미래산업', date: '2023-10-24', status: '답변완료' },
              { name: '박지성', company: '글로벌테크', date: '2023-10-23', status: '답변완료' },
              { name: '최동원', company: '한국엔지니어링', date: '2023-10-22', status: '진행중' },
            ].map((inquiry, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900">{inquiry.name} <span className="text-gray-500 font-normal ml-2">{inquiry.company}</span></p>
                  <p className="text-xs text-gray-500 mt-1">{inquiry.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  inquiry.status === '대기중' ? 'bg-amber-100 text-amber-800' :
                  inquiry.status === '진행중' ? 'bg-blue-100 text-blue-800' :
                  'bg-emerald-100 text-emerald-800'
                }`}>
                  {inquiry.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">빠른 실행</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-900">새 게시물 작성</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-900">갤러리 이미지 추가</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-900">사이트 설정 변경</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
