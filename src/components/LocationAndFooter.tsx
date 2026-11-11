import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const LocationAndFooter: React.FC = () => {
  return (
    <>
      {/* Location & Directions Section */}
      <section id="location" className="py-16 sm:py-24 bg-[#0B152A] border-b border-blue-900/50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
              Campus Location & Transit
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              오시는 길 및 캠퍼스 안내
            </h2>
            <p className="mt-2 text-sm text-blue-200/80">
              교대역 도보 3분 거리의 최적의 접근성을 갖춘 찬스 스쿨 서초 캠퍼스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Location Spec Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#0E1A33] border border-blue-900/60 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-blue-300/60">캠퍼스 주소</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {SCHOOL_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-blue-900/50">
                  <Train className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-blue-300/60">지하철 대중교통</div>
                    <div className="text-sm text-blue-100/90 mt-0.5">
                      {SCHOOL_INFO.subway}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-blue-900/50">
                  <Car className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-blue-300/60">주차 안내</div>
                    <div className="text-sm text-blue-100/90 mt-0.5">
                      본관 지하 1~2층 주차장 무료 발렛 주차 제공 (상담 및 학부모 2시간 무료)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-blue-900/50">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-blue-300/60">상담 및 행정실 운영시간</div>
                    <div className="text-sm text-blue-100/90 mt-0.5">
                      {SCHOOL_INFO.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#0E1A33] border border-blue-900/60 hover:border-blue-500/60 text-blue-200 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  전화 문의
                </a>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#0E1A33] border border-blue-900/60 hover:border-blue-500/60 text-blue-200 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  이메일 문의
                </a>
              </div>
            </div>

            {/* Right: Modern Styled Campus Map & Guide Card */}
            <div className="lg:col-span-7 bg-[#0E1A33] p-6 sm:p-8 rounded-2xl border border-blue-900/60 space-y-6 text-white">
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/50">
                <span className="text-sm font-bold text-white">
                  서초 본관 층별 안내
                </span>
                <span className="text-xs text-blue-300/70 font-mono">
                  B2F - 5F
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between p-3 rounded-xl bg-[#070D1A] border border-blue-900/60">
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-400 mr-2">5F</span>
                    <span className="text-sm font-semibold text-white">아카데믹 라이브러리 & 세미나 라운지</span>
                    <p className="text-xs text-blue-200/70 mt-0.5">심층 리서치 서가, 1:1 진로 상담실, 집중 학습 팟</p>
                  </div>
                </div>

                <div className="flex items-start justify-between p-3 rounded-xl bg-[#070D1A] border border-blue-900/60">
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-400 mr-2">4F</span>
                    <span className="text-sm font-semibold text-white">크리에이티브 테크 & AI 로보틱스 랩</span>
                    <p className="text-xs text-blue-200/70 mt-0.5">소프트웨어 코딩 스튜디오, 3D 프로토타이핑 메이커 존</p>
                  </div>
                </div>

                <div className="flex items-start justify-between p-3 rounded-xl bg-[#070D1A] border border-blue-900/60">
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-400 mr-2">3F</span>
                    <span className="text-sm font-semibold text-white">인포데스크 & 협업 그랜드 아고라</span>
                    <p className="text-xs text-blue-200/70 mt-0.5">신입생 접수처, 학부모 대기 라운지, 개방형 토론 스테이지</p>
                  </div>
                </div>

                <div className="flex items-start justify-between p-3 rounded-xl bg-[#070D1A] border border-blue-900/60">
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-400/60 mr-2">B1-B2</span>
                    <span className="text-sm font-semibold text-blue-200">전용 지하 주차장 (발렛 서비스)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/70 border border-blue-800/60 text-xs text-blue-200 leading-relaxed">
                ※ 캠퍼스 사전 방문 및 시설 견학은 1:1 상담 예약자에 한하여 운영되오니, 방문 전 반드시 사전 예약을 부탁드립니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet, Professional Footer (Single-Line brand + quiet copyright & links) */}
      <footer className="bg-[#070D1A] border-t border-blue-900/60 py-12 text-blue-300/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-blue-900/50">
            {/* Wordmark */}
            <div>
              <div className="text-lg font-bold text-white">
                {SCHOOL_INFO.name}
              </div>
              <p className="text-xs text-blue-300/70 mt-1">
                {SCHOOL_INFO.tagline}
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 font-medium text-blue-200">
              <a href="#philosophy" className="hover:text-white transition-colors">교육 철학</a>
              <a href="#curriculum" className="hover:text-white transition-colors">교육과정</a>
              <a href="#campus" className="hover:text-white transition-colors">캠퍼스 투어</a>
              <a href="#notices" className="hover:text-white transition-colors">학사 일정</a>
              <a href="#admissions" className="hover:text-white transition-colors">입학 상담</a>
            </div>
          </div>

          {/* Legal / License Registry info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-blue-400/60 leading-relaxed">
            <div>
              <p>상호명: (주)찬스에듀케이션 | 대표자: 박찬우 | 학원설립운영등록번호: 제12026호 서울강남서초교육지원청</p>
              <p>주소: {SCHOOL_INFO.address} | 대표번호: {SCHOOL_INFO.phone} | 이메일: {SCHOOL_INFO.email}</p>
            </div>
            <div className="shrink-0 text-blue-400/60">
              © {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
