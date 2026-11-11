import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { CurriculumSection } from './components/CurriculumSection';
import { CampusTour } from './components/CampusTour';
import { NoticesAndCalendar } from './components/NoticesAndCalendar';
import { AdmissionsSection } from './components/AdmissionsSection';
import { LocationAndFooter } from './components/LocationAndFooter';
import { ConsultationModal, ConsultationBooking } from './components/ConsultationModal';
import { ConsultationSuccessModal } from './components/ConsultationSuccessModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string>('');
  const [recentBooking, setRecentBooking] = useState<ConsultationBooking | null>(null);

  const handleOpenConsultation = (courseTitle: string = '') => {
    setPreselectedCourse(courseTitle);
    setIsConsultationModalOpen(true);
  };

  const handleBookingSuccess = (booking: ConsultationBooking) => {
    setIsConsultationModalOpen(false);
    setRecentBooking(booking);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070D1A] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-blue-100">
      {/* 1. Header (One-row, 3-zone contract) */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3. Educational Philosophy (4 Core Pillars) */}
        <Philosophy />

        {/* 4. Curriculum Section */}
        <CurriculumSection onSelectCourseForConsultation={(title) => handleOpenConsultation(title)} />

        {/* 5. Campus Tour & Spaces */}
        <CampusTour />

        {/* 6. Notices & Academic Calendar */}
        <NoticesAndCalendar />

        {/* 7. Admissions & FAQ */}
        <AdmissionsSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 8. Campus Location, Transit & Quiet Footer */}
        <LocationAndFooter />
      </main>

      {/* 1:1 Consultation Reservation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedCourse={preselectedCourse}
        onSuccess={handleBookingSuccess}
      />

      {/* Booking Confirmation Success Receipt Modal */}
      <ConsultationSuccessModal
        booking={recentBooking}
        onClose={() => setRecentBooking(null)}
      />
    </div>
  );
}
