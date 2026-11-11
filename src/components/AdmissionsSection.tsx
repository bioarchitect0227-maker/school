import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ClipboardCheck, UserCheck, Sparkles, GraduationCap } from 'lucide-react';
import { FAQ_LIST } from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenConsultation: () => void;
}

const STEPS = [
  {
    step: '01',
    title: '온라인 상담 예약',
    description: '웹사이트 또는 전화를 통해 희망 일시와 관심 교육 트랙을 선택하여 1:1 상담을 신청합니다.',
    icon: ClipboardCheck,
  },
  {
    step: '02',
    title: '1:1 심층 진단 면담',
    description: '수석 멘토와 함께 약 40분간 학생의 흥미, 문제해결 성향 및 컴퓨팅·수리 사고력을 종합 진단합니다.',
    icon: UserCheck,
  },
  {
    step: '03',
    title: '맞춤형 트랙 배정',
    description: '진단 결과를 토대로 학생에게 최적화된 클래스(6~8인 소수정예)와 맞춤 로드맵을 확정합니다.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: '오리엔테이션 & 시작',
    description: '개인별 웰컴 키트 수령 후, 담임 멘토와 함께 자기주도 프로젝트 여정을 본격 시작합니다.',
    icon: GraduationCap,
  },
];

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  onOpenConsultation,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="admissions" className="py-16 sm:py-24 bg-[#080E1E] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            Admissions & Enrollment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            찬스 스쿨 입학 절차 및 FAQ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-blue-200/80">
            소수 정예(클래스당 6~8인) 원칙으로 운영되며, 
            아이의 잠재력을 정확히 파악하는 사전 진단 면담을 거쳐 입학이 확정됩니다.
          </p>
        </div>

        {/* 4-Step Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="relative p-6 rounded-2xl bg-[#0E1A33] border border-blue-900/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-400">
                      STEP {stepItem.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200/70 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#080E1E] border border-blue-800/80 text-blue-400 items-center justify-center text-xs font-mono">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Admissions */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-950 via-[#102246] to-blue-950 border border-blue-800/70 text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-20 shadow-xl shadow-blue-950/50">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              2026 봄학기 소수정예 입학 상담 접수 중
            </h3>
            <p className="text-xs sm:text-sm text-blue-200/80 max-w-xl">
              원하는 날짜와 시간대를 선택하시면 1:1 맞춤 진단 테스트와 캠퍼스 투어를 함께 진행해 드립니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-blue-50 rounded-xl transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
          >
            지금 무료 입학 상담 예약하기
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              자주 묻는 질문 (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-blue-300/70 mt-1">
              학부모님들께서 가장 많이 문의하시는 내용을 모았습니다.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-blue-900/60 bg-[#0E1A33] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-blue-400 text-sm font-bold shrink-0">
                        Q.
                      </span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed border-t border-blue-900/60 bg-[#080E1E]/80">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
