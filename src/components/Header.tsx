import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080E1E]/90 backdrop-blur-md border-b border-blue-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single clean text element) */}
        <a
          href="#home"
          className="group flex items-baseline gap-2 whitespace-nowrap shrink-0 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-blue-300 transition-colors">
            {SCHOOL_INFO.name}
          </span>
          <span className="text-xs font-medium text-blue-300/70 tracking-normal hidden sm:inline">
            찬스 스쿨
          </span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-blue-200/80">
          <a
            href="#philosophy"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            교육 철학
          </a>
          <a
            href="#curriculum"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            교육과정
          </a>
          <a
            href="#campus"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            캠퍼스 투어
          </a>
          <a
            href="#notices"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            학사 및 공지
          </a>
          <a
            href="#admissions"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            입학 안내
          </a>
          <a
            href="#location"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            오시는 길
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-lg transition-all duration-150 shadow-md shadow-blue-950 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E1E]"
          >
            입학 상담 신청
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md whitespace-nowrap"
          >
            상담 신청
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-blue-200 hover:text-white hover:bg-blue-900/50 rounded-md focus-visible:outline-none"
            aria-label="메뉴 열기/닫기"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-blue-900/60 bg-[#0A1224] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-950/70 hover:text-white rounded-lg"
          >
            교육 철학
          </a>
          <a
            href="#curriculum"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-950/70 hover:text-white rounded-lg"
          >
            교육과정
          </a>
          <a
            href="#campus"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-950/70 hover:text-white rounded-lg"
          >
            캠퍼스 투어
          </a>
          <a
            href="#notices"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-950/70 hover:text-white rounded-lg"
          >
            학사 및 공지
          </a>
          <a
            href="#admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-950/70 hover:text-white rounded-lg"
          >
            입학 안내
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-950/70 hover:text-white rounded-lg"
          >
            오시는 길
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              1:1 입학 상담 예약하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
