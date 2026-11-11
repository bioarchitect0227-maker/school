import React from 'react';
import { Compass, Code2, Users2, Globe } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/schoolData';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-blue-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Users2: <Users2 className="w-5 h-5 text-blue-400" />,
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
};

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-[#080E1E] border-y border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            Educational Core Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            찬스 스쿨이 지향하는 4가지 교육 철학
          </h2>
          <p className="mt-3 text-base sm:text-lg text-blue-100/80 leading-relaxed">
            단기적인 시험 성적만을 목표로 하지 않습니다. 평생을 스스로 배우고 문제를 해결할 수 있는
            단단한 사고력의 뼈대를 만듭니다.
          </p>
        </div>

        {/* 4 Pillars Grid with Natural Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex flex-col justify-between p-6 rounded-xl bg-[#0E1A33] border border-blue-900/60 hover:border-blue-600/60 hover:bg-[#122244] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-blue-300/60 group-hover:text-blue-300 transition-colors">
                    {pillar.number}.
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800/80 flex items-center justify-center">
                    {iconMap[pillar.iconName]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <div className="text-xs font-medium text-blue-300/70 mb-3">
                  {pillar.enTitle}
                </div>

                <p className="text-sm text-blue-100/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-blue-900/50 text-xs text-blue-300/60 flex items-center justify-between">
                <span>프로젝트 지향 커리큘럼</span>
                <span className="text-blue-400 font-medium">Step {pillar.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
