import React from 'react';
import { ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { EagleIcon } from './EagleLogo';

interface FinalCtaSectionProps {
  onOpenDiagnostic: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 text-center space-y-6 shadow-2xl">
          
          <div className="flex justify-center">
            <div className="p-2.5 rounded-xl bg-slate-800 border border-amber-500/30 text-amber-400">
              <EagleIcon size={36} className="w-9 h-9" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Dê o Primeiro Passo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Sua empresa pode ser mais organizada, eficiente e preparada para crescer.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Agende uma conversa técnica com a equipe da <strong>Dinâmica Consultoria, Certificações</strong> e descubra quais processos, controles e melhorias podem gerar mais segurança e rentabilidade para o seu negócio.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-95 whitespace-nowrap"
            >
              <span>Solicitar Diagnóstico Agora</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20conversa%20com%20a%20equipe%20da%20Din%C3%A2mica%20Consultoria."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-750 hover:text-white transition-all border border-slate-700 whitespace-nowrap active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Atendimento em São Paulo e todo o Brasil
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Retorno rápido em até 24 horas úteis
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Sigilo garantido (NDA)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
