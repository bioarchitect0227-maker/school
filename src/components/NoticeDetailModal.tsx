import React, { useEffect } from 'react';
import { X, Calendar, Eye } from 'lucide-react';
import { Notice } from '../data/schoolData';

interface NoticeDetailModalProps {
  notice: Notice | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({
  notice,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (notice) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [notice, onClose]);

  if (!notice) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0B152A] rounded-2xl shadow-2xl border border-blue-800/70 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-blue-900/60 flex items-start justify-between gap-4 bg-[#0E1B38]">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-blue-300/80 mb-2">
              <span className="font-semibold text-blue-400">[{notice.category}]</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {notice.date}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                조회수 {notice.views}
              </span>
            </div>
            <h3 id="notice-modal-title" className="text-lg sm:text-xl font-bold text-white leading-snug">
              {notice.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-blue-300 hover:text-white hover:bg-blue-900/50 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="공지 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="whitespace-pre-line text-sm text-blue-100/90 leading-relaxed font-sans">
            {notice.content}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#0E1B38] border-t border-blue-900/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
