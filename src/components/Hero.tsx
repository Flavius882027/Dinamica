import React from 'react';
import { ArrowUpRight, MessageSquare, CheckCircle2, ShieldCheck, Compass, TrendingUp } from 'lucide-react';
import { EagleIcon } from './EagleLogo';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDiagnostic,
  onExploreSolutions,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_eagle_corporate_1791042635365.jpg"
          alt="Vista aérea de São Paulo e visão estratégica corporativa da Dinâmica Consultoria"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Deep Navy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        {/* Subtle Geometric Precision Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-300">
                Soluções Sim! Justificativas Não!
              </span>
              <span className="text-slate-500 text-xs">·</span>
              <span className="text-xs text-slate-300 font-medium">São Paulo, SP</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Sua empresa precisa de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                soluções
              </span>
              , não de justificativas.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
              A <strong className="text-white font-semibold">Dinâmica Consultoria, Certificações</strong> transforma desafios de processos, qualidade, preparação para certificação <span className="text-amber-300 font-medium">ISO 9001</span> e controle financeiro em soluções estruturadas, práticas e sustentáveis para sua empresa.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-98 whitespace-nowrap"
              >
                <span>Solicite um Diagnóstico</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20da%20Din%C3%A2mica%20Consultoria."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white transition-all border border-slate-700/80 backdrop-blur-sm whitespace-nowrap active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Falar com um Consultor</span>
              </a>

              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
              >
                <span>Conhecer Soluções</span>
                <span>↓</span>
              </button>
            </div>

            {/* Confidence Indicators (Anti-slop clean metadata) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Pilares Estratégicos de Atuação
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Gestão & RMP
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Preparação ISO 9001
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  Controle Financeiro
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  Metodologia Dinâmica
                </span>
              </div>
            </div>

          </div>

          {/* Focal Card / Eagle Brand Stance */}
          <div className="lg:col-span-4">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 shadow-2xl backdrop-blur-xl">
              {/* Subtle top amber highlight */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-amber-500/30 shadow-inner">
                  <EagleIcon size={38} className="w-9 h-9" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400">
                    Posicionamento
                  </span>
                  <p className="text-xs text-slate-400">Direto ao Ponto</p>
                </div>
              </div>

              <blockquote className="space-y-3">
                <p className="text-lg font-bold text-white tracking-tight leading-snug">
                  "Enxergar o problema. Entender a causa. Construir a solução."
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Não apontamos apenas falhas. Atuamos lado a lado com sua diretoria e equipe para estruturar processos sólidos, assegurar a conformidade da qualidade e blindar a saúde financeira do negócio.
                </p>
              </blockquote>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-200">Marco Aurélio</div>
                  <div className="text-slate-400 text-[11px]">marco@dinamicagestao.com.br</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700 text-amber-400 font-mono text-[11px] tabular-nums">
                  São Paulo / SP
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
