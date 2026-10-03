import React from 'react';
import { EagleLogo } from './EagleLogo';
import { Mail, MapPin, MessageSquare, Linkedin, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <EagleLogo variant="inline" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Consultoria empresarial em São Paulo especializada em gestão de processos (RMP), estruturação de Sistema de Gestão da Qualidade, preparação para certificação ISO 9001 e controle financeiro gerencial.
            </p>

            <div className="pt-2">
              <div className="inline-block py-1 px-3 rounded-lg bg-slate-900 border border-amber-500/20 text-amber-400 font-bold text-[11px] tracking-wider uppercase">
                Soluções Sim! Justificativas Não!
              </div>
            </div>
          </div>

          {/* Nav Links Col 1: Institutional */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Institucional
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('sistema-dinamica')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Sistema Dinâmica (Metodologia)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('posicionamento')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Soluções Sim! Justificativas Não!
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('compliance')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Compliance & Governança
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-amber-400 transition-colors"
                >
                  Política de Privacidade (LGPD)
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2: Soluções */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Soluções
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('solucoes')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Gestão de Processos (RMP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('iso-9001')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Preparação ISO 9001
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('gestao-financeira')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Gestão Financeira
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('solucoes')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Consultoria Empresarial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('faq')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Perguntas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Canais Oficiais
            </div>
            
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>São Paulo – SP</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:marco@dinamicagestao.com.br"
                  className="hover:text-white transition-colors"
                >
                  marco@dinamicagestao.com.br
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Din%C3%A2mica%20Consultoria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Atendimento WhatsApp
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="LinkedIn Dinâmica Consultoria"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Instagram Dinâmica Consultoria"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:marco@dinamicagestao.com.br"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="E-mail Dinâmica Consultoria"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dinâmica Consultoria, Certificações. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              Termos & LGPD
            </button>
            <button
              onClick={() => onNavClick('compliance')}
              className="hover:text-slate-300 transition-colors"
            >
              Código de Ética
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
              aria-label="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
