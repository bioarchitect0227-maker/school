import React, { useState } from 'react';
import { Calendar as CalendarIcon, Bell, ChevronRight, Clock } from 'lucide-react';
import { NOTICES, CALENDAR_EVENTS, Notice } from '../data/schoolData';
import { NoticeDetailModal } from './NoticeDetailModal';

export const NoticesAndCalendar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notices' | 'calendar'>('notices');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <section id="notices" className="py-16 sm:py-24 bg-[#0B152A] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
              School News & Academic Events
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              찬스 스쿨 소식 & 학사 일정
            </h2>
            <p className="mt-2 text-sm text-blue-200/80">
              정규 학기 원서 접수, 학부모 설명회, 방학 특별 워크숍 일정을 실시간으로 안내합니다.
            </p>
          </div>

          {/* Segmented Tab Controls */}
          <div className="inline-flex p-1 bg-[#0E1A33] border border-blue-900/60 rounded-xl shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('notices')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                activeTab === 'notices'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-300/80 hover:text-white'
              }`}
            >
              <Bell className="w-4 h-4 text-blue-300" />
              공지사항 ({NOTICES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-300/80 hover:text-white'
              }`}
            >
              <CalendarIcon className="w-4 h-4 text-blue-300" />
              학사 일정 (2026 봄)
            </button>
          </div>
        </div>

        {/* Tab Content 1: Notices List */}
        {activeTab === 'notices' && (
          <div className="bg-[#0E1A33] rounded-2xl border border-blue-900/60 divide-y divide-blue-900/40 overflow-hidden shadow-xs">
            {NOTICES.map((notice) => (
              <div
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#122244] transition-colors cursor-pointer group"
              >
                <div className="space-y-1.5 sm:max-w-3xl">
                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-blue-300/80">
                    <span className="font-semibold text-blue-400">[{notice.category}]</span>
                    <span aria-hidden="true">·</span>
                    <span>{notice.date}</span>
                    {notice.isImportant && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-red-400 font-semibold">주요 공지</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200/70 line-clamp-1">
                    {notice.content.replace(/\n/g, ' ')}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="text-xs text-blue-300/60 font-mono tabular-nums">조회 {notice.views}</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-950 group-hover:bg-blue-900 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Academic Calendar Events */}
        {activeTab === 'calendar' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CALENDAR_EVENTS.map((event, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1A33] border border-blue-900/60 hover:border-blue-500/60 hover:bg-[#122244] transition-all space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                      {event.date.split('.')[1]}.{event.date.split('.')[2]}
                    </div>
                    <div className="text-xs text-blue-300/70 font-medium">
                      2026년 ({event.day}요일)
                    </div>
                  </div>
                  <div className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800/60">
                    {event.category}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs text-blue-200/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-900/50 flex items-center gap-1.5 text-xs text-blue-300/70">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notice Modal */}
      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />
    </section>
  );
};
