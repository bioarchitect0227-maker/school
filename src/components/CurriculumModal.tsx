import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, Users, Calendar, ArrowRight } from 'lucide-react';
import { Course } from '../data/schoolData';

interface CurriculumModalProps {
  course: Course | null;
  onClose: () => void;
  onSelectForConsultation: (courseTitle: string) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  course,
  onClose,
  onSelectForConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0B152A] rounded-2xl shadow-2xl border border-blue-800/70 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-blue-900/60 flex items-start justify-between gap-4 bg-[#0E1B38]">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-blue-300/80 mb-1">
              <span>{course.grade}</span>
              <span aria-hidden="true">·</span>
              <span>정원 {course.capacity}</span>
              <span aria-hidden="true">·</span>
              <span>{course.schedule}</span>
            </div>
            <h3 id="course-modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {course.title}
            </h3>
            <p className="text-xs sm:text-sm text-blue-200/70 mt-1">
              {course.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-blue-300 hover:text-white hover:bg-blue-900/50 rounded-lg transition-colors cursor-pointer"
            aria-label="창 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-blue-100/80">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              과정 개요
            </h4>
            <p className="text-blue-100/80 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#070D1A] border border-blue-900/60 text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="block text-blue-300/60">대상 연령</span>
                <span className="font-semibold text-white">{course.grade}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="block text-blue-300/60">정원</span>
                <span className="font-semibold text-white">{course.capacity}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="block text-blue-300/60">수업 일정</span>
                <span className="font-semibold text-white">{course.schedule}</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
              수업 특장점
            </h4>
            <ul className="space-y-2">
              {course.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-blue-100/90">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 12-Week Syllabus */}
          <div>
            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
              주요 주차별 커리큘럼
            </h4>
            <div className="space-y-3">
              {course.syllabus.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-lg border border-blue-900/60 bg-[#0E1A33]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-semibold text-blue-400">
                      {s.week}
                    </span>
                    <span className="text-xs font-bold text-white">{s.topic}</span>
                  </div>
                  <p className="text-xs text-blue-200/70 mt-1 leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              기대 산출물 (Outcomes)
            </h4>
            <div className="flex items-center gap-2 text-xs text-blue-200/80 flex-wrap">
              {course.outcomes.map((out, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-medium text-white">✓ {out}</span>
                  {idx < course.outcomes.length - 1 && (
                    <span aria-hidden="true" className="text-blue-800">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#0E1B38] border-t border-blue-900/60 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-blue-300 hover:text-white hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer"
          >
            닫기
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForConsultation(course.title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            이 트랙으로 입학 상담 신청
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
