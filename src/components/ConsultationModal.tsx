import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, User, Phone, BookOpen, MessageSquare } from 'lucide-react';
import { COURSES } from '../data/schoolData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
  onSuccess: (bookingData: ConsultationBooking) => void;
}

export interface ConsultationBooking {
  id: string;
  studentName: string;
  parentPhone: string;
  grade: string;
  course: string;
  date: string;
  timeSlot: string;
  inquiry: string;
  createdAt: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse = '',
  onSuccess,
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [grade, setGrade] = useState('초등 4~6학년');
  const [course, setCourse] = useState(preselectedCourse || '전체/상담 후 결정');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('14:00 - 15:00');
  const [inquiry, setInquiry] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setErrorMsg('학생 이름을 입력해 주세요.');
      return;
    }
    const phoneDigits = parentPhone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorMsg('올바른 학부모 연락처(전화번호)를 입력해 주세요.');
      return;
    }
    if (!date) {
      setErrorMsg('희망 상담 날짜를 선택해 주세요.');
      return;
    }

    const booking: ConsultationBooking = {
      id: `CHAN-${Date.now().toString().slice(-6)}`,
      studentName: studentName.trim(),
      parentPhone: parentPhone.trim(),
      grade,
      course,
      date,
      timeSlot,
      inquiry: inquiry.trim(),
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('chans_school_consultations') || '[]');
      existing.unshift(booking);
      localStorage.setItem('chans_school_consultations', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setErrorMsg('');
    onSuccess(booking);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#0B152A] rounded-2xl shadow-2xl border border-blue-800/70 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-blue-900/60 flex items-start justify-between bg-[#0E1B38]">
          <div>
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-1">
              Admissions Mentoring
            </div>
            <h3 id="consultation-modal-title" className="text-xl font-bold text-white">
              Chan's School 1:1 맞춤 입학 상담 신청
            </h3>
            <p className="text-xs text-blue-200/70 mt-1">
              전문 학습 컨설턴트가 학생의 현재 역량과 목표에 최적화된 로드맵을 제안해 드립니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-blue-300 hover:text-white hover:bg-blue-900/50 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="상담 신청 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-sm">
          {errorMsg && (
            <div className="p-3 text-xs font-medium text-red-200 bg-red-950/80 border border-red-800 rounded-lg">
              {errorMsg}
            </div>
          )}

          {/* Student Name */}
          <div>
            <label className="block text-xs font-semibold text-blue-300 mb-1">
              학생 이름 *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-blue-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="예: 김찬영"
                className="w-full pl-9 pr-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white placeholder-blue-300/40"
              />
            </div>
          </div>

          {/* Parent Phone */}
          <div>
            <label className="block text-xs font-semibold text-blue-300 mb-1">
              학부모 연락처 *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-blue-400 absolute left-3 top-3" />
              <input
                type="tel"
                required
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                placeholder="예: 010-1234-5678"
                className="w-full pl-9 pr-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white placeholder-blue-300/40"
              />
            </div>
          </div>

          {/* Grade & Interested Course */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-blue-300 mb-1">
                대상 학년
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white"
              >
                <option value="초등 3~4학년">초등 3~4학년</option>
                <option value="초등 5~6학년">초등 5~6학년</option>
                <option value="중학교 1~2학년">중학교 1~2학년</option>
                <option value="중학교 3학년">중학교 3학년</option>
                <option value="고등 1~2학년">고등 1~2학년</option>
                <option value="기타/유학생">기타 / 해외 유학생</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-blue-300 mb-1">
                관심 희망 트랙
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 text-blue-400 absolute left-3 top-3" />
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white"
                >
                  <option value="전체/상담 후 결정">전체 / 상담 후 결정</option>
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-blue-300 mb-1">
                희망 상담 날짜 *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-blue-400 absolute left-3 top-3" />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-blue-300 mb-1">
                희망 시간대
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white"
              >
                <option value="11:00 - 12:00">11:00 - 12:00 (오전)</option>
                <option value="14:00 - 15:00">14:00 - 15:00 (오후 1)</option>
                <option value="16:00 - 17:00">16:00 - 17:00 (오후 2)</option>
                <option value="18:30 - 19:30">18:30 - 19:30 (저녁)</option>
                <option value="토요일 오전 10:30">토요일 오전 10:30</option>
                <option value="토요일 오후 14:00">토요일 오후 14:00</option>
              </select>
            </div>
          </div>

          {/* Message / Inquiry */}
          <div>
            <label className="block text-xs font-semibold text-blue-300 mb-1">
              기존 학습 경험 및 궁금한 점 (선택)
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-blue-400 absolute left-3 top-3" />
              <textarea
                rows={3}
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                placeholder="예: 파이썬을 독학으로 조금 해보았는데 심화 프로젝트 과정으로 바로 진입 가능한지 궁금합니다."
                className="w-full pl-9 pr-3 py-2 text-sm border border-blue-900/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#070D1A] text-white placeholder-blue-300/40"
              />
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="p-3 bg-[#070D1A] border border-blue-900/60 rounded-lg text-[11px] text-blue-300/70 leading-normal">
            입력하신 개인정보는 찬스 스쿨 입학 심층 상담 및 안내 용도로만 안전하게 활용되며 관계 법령에 따라 보호됩니다.
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium text-blue-300 hover:text-white rounded-lg hover:bg-blue-950 transition-colors cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-md shadow-blue-950"
            >
              상담 예약 확정하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
