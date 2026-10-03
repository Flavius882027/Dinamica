import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PurposeSection } from './components/PurposeSection';
import { SolutionsSection } from './components/SolutionsSection';
import { SistemaDinamica } from './components/SistemaDinamica';
import { ManifestoSection } from './components/ManifestoSection';
import { IsoSection } from './components/IsoSection';
import { FinancialDashboardSection } from './components/FinancialDashboardSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ComplianceSection } from './components/ComplianceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DiagnosticExpressModal } from './components/DiagnosticExpressModal';
import { PrivacyModal } from './components/PrivacyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Diagnóstico');

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      const yOffset = -80;
      const y = contactElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDiagnosticComplete = (service: string, notes: string) => {
    setSelectedService(service);
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      const yOffset = -80;
      const y = contactElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      
      {/* Fixed Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
          onExploreSolutions={() => handleNavClick('solucoes')}
        />

        {/* 2. Propósito Dinâmica */}
        <PurposeSection />

        {/* 3. Nossas Soluções (RMP, ISO 9001, Financeiro, Consultoria, Compliance) */}
        <SolutionsSection onSelectService={handleSelectService} />

        {/* 4. Sistema Dinâmica (Metodologia em 5 Etapas & Visão da Águia) */}
        <SistemaDinamica onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* 5. Manifesto Institucional: Soluções Sim! Justificativas Não! */}
        <ManifestoSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* 6. Seção Específica: Preparação para Certificação ISO 9001 */}
        <IsoSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* 7. Controle Financeiro & Dashboard Interativo Demonstrativo */}
        <FinancialDashboardSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* 8. Nossos Diferenciais */}
        <DifferentialsSection />

        {/* 9. Compliance & Governança Corporativa */}
        <ComplianceSection />

        {/* 10. Casos de Aplicação da Metodologia */}
        <TestimonialsSection />

        {/* 11. FAQ Completo com Expansíveis */}
        <FaqSection />

        {/* 12. Final CTA de Impacto */}
        <FinalCtaSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* 13. Formulário de Contato & Diagnóstico */}
        <ContactSection
          initialService={selectedService}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Express Diagnostic Modal */}
      <DiagnosticExpressModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectServiceAndContact={handleDiagnosticComplete}
      />

      {/* LGPD Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

    </div>
  );
}
