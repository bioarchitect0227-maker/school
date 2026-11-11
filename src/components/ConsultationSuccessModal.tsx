import React from 'react';
import { CheckCircle2, Calendar, Phone, User, BookOpen, X, Download } from 'lucide-react';
import { ConsultationBooking } from './ConsultationModal';

interface ConsultationSuccessModalProps {
  booking: ConsultationBooking | null;
  onClose: () => void;
}

export const ConsultationSuccessModal: React.FC<ConsultationSuccessModalProps> = ({
  booking,
  onClose,
}) => {
  if (!booking) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#0B152A] rounded-2xl shadow-2xl border border-blue-800/70 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Success Icon */}
        <div className="p-6 text-center bg-[#0E1B38] border-b border-blue-900/60">
          <div className="w-12 h-12 rounded-full bg-blue-900/60 border border-blue-500/80 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6 text-blue-300" />
          </div>
          <h3 id="success-modal-title" className="text-xl font-bold text-white">
            입학 상담 예약이 완료되었습니다
          </h3>
          <p className="text-xs text-blue-200/70 mt-1">
            담당 수석 멘토가 예약 내역을 확인 후 24시간 이내에 확인 전화를 드립니다.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="p-6 space-y-4 text-xs sm:text-sm">
          <div className="p-4 bg-[#070D1A] rounded-xl border border-blue-900/60 space-y-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-blue-900/60">
              <span className="text-blue-300/60 font-medium">예약 접수 번호</span>
              <span className="font-mono font-bold text-blue-400 text-sm tracking-wider">
                {booking.id}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-300/60 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-400" />
                학생 이름 / 학년
              </span>
              <span className="font-semibold text-white">
                {booking.studentName} ({booking.grade})
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-300/60 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                보호자 연락처
              </span>
              <span className="font-mono text-white font-medium">
                {booking.parentPhone}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-300/60 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                신청 트랙
              </span>
              <span className="font-semibold text-blue-300 truncate max-w-[200px]">
                {booking.course}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-blue-900/60">
              <span className="text-blue-300/60 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                희망 일시
              </span>
              <span className="font-semibold text-white">
                {booking.date} · {booking.timeSlot}
              </span>
            </div>
          </div>

          {/* Next Steps Guide */}
          <div className="space-y-1.5 text-xs text-blue-100/90 bg-[#0E1A33] p-3.5 rounded-lg border border-blue-900/60">
            <div className="font-bold text-blue-300">상담 당일 방문 안내</div>
            <p>• 장소: 서울 서초구 반포대로 140 찬스스쿨 3층 인포데스크</p>
            <p>• 지참물: 최근 학교 생활기록부 또는 기존 학습 산출물 (선택 사항)</p>
            <p>• 주차: 건물 지하 주차장 2시간 무료 지원</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#0E1B38] border-t border-blue-900/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            확인 완료
          </button>
        </div>
      </div>
    </div>
  );
};
