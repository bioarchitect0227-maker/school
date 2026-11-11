import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { SCHOOL_INFO, HIGHLIGHT_STATS } from '../data/schoolData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-[#0A1224] text-white">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Unboxed Editorial Meta (Zero-Pill discipline) */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-300/80 mb-4 tracking-wide">
          <span>2026학년도 신입생 정시 모집</span>
          <span aria-hidden="true">·</span>
          <span>프로젝트 기반 융합 스쿨</span>
          <span aria-hidden="true">·</span>
          <span>서울 서초 캠퍼스</span>
        </div>

        {/* Hero Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance italic">
              Where Curiosity Begins,
              <br />
              <span className="text-blue-400">Shaping the Future of Learning</span>
              <br />
              <span>{SCHOOL_INFO.name}</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed max-w-xl">
              정답을 외우는 공부를 넘어 질문을 던지고 가설을 세웁니다.
              인공지능·소프트웨어, 수리 논증, 글로벌 토론을 결합한 융합 프로젝트로
              아이 스스로 문제를 정의하고 해결하는 주체적 힘을 키웁니다.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-blue-950/60 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1224]"
              >
                1:1 맞춤 입학 상담 신청
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-medium text-blue-200 bg-[#122040] hover:bg-[#182b54] hover:text-white border border-blue-800/60 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                교육과정 둘러보기
              </a>
            </div>

            {/* Trust signal / Advisory note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-blue-300/80">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>클래스당 최대 6~8인 정원제 · 학생 맞춤형 사전 진단 면담 필수</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Dominant Focal Carrier) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-blue-800/60 shadow-2xl shadow-blue-950/50 bg-[#0E1A33] aspect-16/10 lg:aspect-16/11 group">
              <img
                src="/src/assets/images/hero_chans_school_1794375147900.jpg"
                alt="Chan's School 캠퍼스 메인 커먼스에서 자유롭게 토론하고 프로젝트를 수행하는 학생들"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Subtle Gradient Scrim for photo depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D1A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-medium tracking-wide text-blue-300">
                  Chan's Collaborative Commons
                </div>
                <div className="text-sm font-semibold text-white/95">
                  개방형 메이커 스페이스 & 프로젝트 협업 라운지
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative KPI Strip (adjacent proof, tabular numbers) */}
        <div className="mt-14 pt-8 border-t border-blue-900/60 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-blue-100">
                {stat.label}
              </div>
              <div className="text-xs text-blue-300/70">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
