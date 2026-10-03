import React from 'react';
import { EagleIcon } from './EagleLogo';
import { ArrowRight, AlertTriangle, Search, Cpu, CheckCircle2, Award, TrendingUp } from 'lucide-react';

interface ManifestoSectionProps {
  onOpenDiagnostic: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ onOpenDiagnostic }) => {
  const sequenceSteps = [
    {
      label: 'Problema',
      desc: 'O sintoma aparente que trava a rotina',
      icon: AlertTriangle,
      color: 'text-amber-400',
    },
    {
      label: 'Causa',
      desc: 'A raiz do gargalo que ninguém mapeou',
      icon: Search,
      color: 'text-sky-400',
    },
    {
      label: 'Análise',
      desc: 'Diagnóstico técnico com dados reais',
      icon: Cpu,
      color: 'text-indigo-400',
    },
    {
      label: 'Solução',
      desc: 'Procedimentos práticos e estruturados',
      icon: CheckCircle2,
      color: 'text-emerald-400',
    },
    {
      label: 'Ação',
      desc: 'Execução lado a lado com a equipe',
      icon: TrendingUp,
      color: 'text-amber-400',
    },
    {
      label: 'Melhoria',
      desc: 'Resultados duradouros e previsibilidade',
      icon: Award,
      color: 'text-amber-300',
    },
  ];

  return (
    <section id="posicionamento" className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
        <EagleIcon size={800} className="w-[800px] h-[800px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Manifesto & Posicionamento Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            "Problemas fazem parte do negócio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Permanecer sem solução, não.
            </span>"
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            A Dinâmica acredita que uma consultoria séria deve ir infinitamente além de apontar defeitos. Nosso compromisso é compreender a realidade do empresário, desvendar a causa de cada ineficiência e construir a ponte sólida até a solução definitiva.
          </p>
        </div>

        {/* Visual Sequence Chain */}
        <div className="mb-16">
          <div className="text-center text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
            A Cadeia de Valor Dinâmica
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {sequenceSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center flex flex-col items-center justify-between group hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div className="text-xs font-mono text-slate-500 tabular-nums mb-1">
                    0{index + 1}
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {step.label}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Impact Statement Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 text-center shadow-2xl relative">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-2xl bg-slate-800 border border-amber-500/40 shadow-lg shadow-amber-500/10">
              <EagleIcon size={48} className="w-12 h-12" />
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase">
              O Princípio Inegociável da Nossa Consultoria
            </span>

            <div className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              JUSTIFICATIVA NÃO.
            </div>
            
            <div className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              SOLUÇÕES SIM!
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal pt-2">
              Transformamos falhas recorrentes em padronização, falta de clareza em indicadores confiáveis e insegurança em decisões fundamentadas.
            </p>

            <div className="pt-6">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-95"
              >
                <span>Agendar Conversa com a Equipe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
