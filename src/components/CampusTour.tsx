import React, { useState } from 'react';
import { Eye, ShieldCheck, Cpu, BookOpen, Sparkles } from 'lucide-react';

interface CampusSpace {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  aspectRatio: string;
  description: string;
  features: string[];
  equipment: string[];
}

const SPACES: CampusSpace[] = [
  {
    id: 'commons',
    name: '협업 커먼스 & 그랜드 아고라',
    subtitle: 'Chan\'s Collaborative Commons (3F)',
    image: '/src/assets/images/hero_chans_school_1794375147900.jpg',
    aspectRatio: 'aspect-16/9',
    description: '높은 층고와 자연 채광이 쏟아지는 개방형 학습 공간으로, 학생들이 자유롭게 모여 브레인스토밍하고 아이디어를 펼치는 메인 허브입니다.',
    features: ['스칸디나비안 친환경 원목 건축', '전면 글래스 채광 설계', '이동형 모듈러 워크테이블'],
    equipment: ['스마트 전자칠판', '무선 스크린 미러링 허브', '고속 WiFi 6 기가비트망'],
  },
  {
    id: 'maker-lab',
    name: '크리에이티브 테크 & AI 랩',
    subtitle: 'Innovation Maker & Prototyping Lab (4F)',
    image: '/src/assets/images/chans_maker_lab_1794375148715.jpg',
    aspectRatio: 'aspect-4/3',
    description: '직접 손으로 만들며 배우는 테크 실험실입니다. 3D 프린터, 아두이노/라즈베리파이 키트, 소프트웨어 개발 환경이 완벽히 구축되어 있습니다.',
    features: ['정전기 방지 안전 작업대', '유리 벽면 아이디어 화이트보드', '부품 및 센서 정밀 정리함'],
    equipment: ['듀얼 노즐 3D 프린터 4기', '라즈베리파이 5 & AI 가속기', '로보틱스 구동 테스트 필드'],
  },
  {
    id: 'library-lounge',
    name: '아카데믹 라이브러리 & 세미나 라운지',
    subtitle: 'Focus & Research Reading Lounge (5F)',
    image: '/src/assets/images/chans_library_lounge_1794375147457.jpg',
    aspectRatio: 'aspect-4/3',
    description: '3,000여 권의 최신 과학·컴퓨팅·인문 철학 원서와 프라이빗 독서 팟(Pod)을 갖추어 깊은 사색과 1:1 심층 멘토링이 이루어집니다.',
    features: ['방음 설계 독서 팟 & 리딩 누크', '인체공학적 하워스 체어', '원목 서가 및 안락한 소파석'],
    equipment: ['학술 DB 검색용 아이패드 존', '소규모 그룹 세미나 테이블', '공기정화 큐브 시스템'],
  },
];

export const CampusTour: React.FC = () => {
  const [activeSpaceId, setActiveSpaceId] = useState<string>('commons');
  const activeSpace = SPACES.find((s) => s.id === activeSpaceId) || SPACES[0];

  return (
    <section id="campus" className="py-16 sm:py-24 bg-[#080E1E] border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
              Campus & Creative Spaces
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              몰입과 영감을 주는 친환경 캠퍼스 공간
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-200/80">
              찬스 스쿨은 아이들이 머무는 공간 자체가 최고의 교육 도구라는 철학 아래,
              자연 채광과 첨단 테크 장비가 공존하는 최적의 배움터를 구축했습니다.
            </p>
          </div>

          {/* Space Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0E1A33] border border-blue-900/60 rounded-xl overflow-x-auto max-w-full">
            {SPACES.map((space) => (
              <button
                key={space.id}
                type="button"
                onClick={() => setActiveSpaceId(space.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeSpaceId === space.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-blue-300/80 hover:text-white'
                }`}
              >
                {space.name.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Space Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Canvas (Dominant) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-blue-800/60 bg-[#0E1A33] relative group min-h-[340px] sm:min-h-[460px]">
            <img
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D1A]/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <span className="text-xs font-medium text-blue-300">
                  {activeSpace.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeSpace.name}
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/90 bg-blue-950/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-700/50">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>현장 실사 촬영 공간</span>
              </div>
            </div>
          </div>

          {/* Details & Specifications Deck */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0E1A33] border border-blue-900/60 space-y-6 text-white">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  공간 스토리
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {activeSpace.name}
                </h4>
                <p className="text-sm text-blue-200/70 mt-2 leading-relaxed">
                  {activeSpace.description}
                </p>
              </div>

              {/* Space highlights */}
              <div>
                <span className="text-xs font-semibold text-white flex items-center gap-1.5 mb-2.5">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  주요 공간 특징
                </span>
                <ul className="space-y-1.5 text-xs text-blue-200/80">
                  {activeSpace.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lab equipment */}
              <div>
                <span className="text-xs font-semibold text-white flex items-center gap-1.5 mb-2.5">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  보유 전문 장비 및 환경
                </span>
                <ul className="space-y-1.5 text-xs text-blue-200/80">
                  {activeSpace.equipment.map((eq, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Environmental Safety badge */}
            <div className="pt-4 border-t border-blue-900/60 flex items-center gap-3 text-xs text-blue-300/70">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>미세먼지 안심 구역 · 소방 안전 1등급 완비 캠퍼스</span>
            </div>
          </div>
        </div>

        {/* Thumbnail quick switcher strip */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {SPACES.map((space) => (
            <button
              key={space.id}
              type="button"
              onClick={() => setActiveSpaceId(space.id)}
              className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeSpaceId === space.id
                  ? 'border-blue-400 bg-blue-950/80 ring-1 ring-blue-400'
                  : 'border-blue-900/60 bg-[#0A1224] hover:border-blue-700/80'
              }`}
            >
              <div className="w-14 h-12 rounded-lg overflow-hidden shrink-0 bg-blue-950">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white truncate">
                  {space.name}
                </div>
                <div className="text-[11px] text-blue-300/70 truncate">
                  {space.subtitle.split('(')[1]?.replace(')', '') || 'Campus'}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
