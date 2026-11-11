import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COURSES, Course } from '../data/schoolData';
import { CurriculumModal } from './CurriculumModal';

interface CurriculumSectionProps {
  onSelectCourseForConsultation: (courseTitle: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  onSelectCourseForConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'junior' | 'middle' | 'senior'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-[#0B152A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
              Programs & Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              체계적인 4대 프로젝트 정규 트랙
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-200/80">
              기초 컴퓨팅 사고력부터 실제 서비스 배포 및 학술 리서치 페이퍼 작성까지,
              단계별로 성장하는 Chan's School의 검증된 커리큘럼입니다.
            </p>
          </div>

          {/* Interactive Filter Control (Functional segmented buttons per §1.A) */}
          <div className="inline-flex p-1 bg-[#0E1A33] border border-blue-900/60 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-300/80 hover:text-white'
              }`}
            >
              전체 과정
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('junior')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'junior'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-300/80 hover:text-white'
              }`}
            >
              초등 주니어
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('middle')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'middle'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-300/80 hover:text-white'
              }`}
            >
              중등 심화
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('senior')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'senior'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-300/80 hover:text-white'
              }`}
            >
              고등 캡스톤
            </button>
          </div>
        </div>

        {/* Curriculum Cards Grid (Asymmetric & Single-Elevation Depth) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-[#0E1A33] rounded-2xl border border-blue-900/60 hover:border-blue-500/60 hover:bg-[#122244] transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
                <div className="flex items-center gap-2 text-xs font-medium text-blue-300/70">
                  <span className="text-blue-400 font-semibold">{course.grade}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.capacity}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.schedule}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-300/70 mt-1">
                    {course.subtitle}
                  </p>
                </div>

                <p className="text-sm text-blue-100/70 leading-relaxed">
                  {course.description}
                </p>

                {/* Topics / Tags as Unboxed text */}
                <div className="pt-2 flex items-center gap-2 text-xs text-blue-300/80 flex-wrap">
                  {course.tags.map((tag, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-blue-300 font-medium">#{tag}</span>
                      {idx < course.tags.length - 1 && (
                        <span aria-hidden="true" className="text-blue-800">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-blue-900/50 flex items-center justify-between gap-4">
                <span className="text-xs text-blue-300/60">
                  12주 프로젝트 완성 트랙
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(course)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-white group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  상세 커리큘럼 보기
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Detail Modal */}
      <CurriculumModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onSelectForConsultation={onSelectCourseForConsultation}
      />
    </section>
  );
};
