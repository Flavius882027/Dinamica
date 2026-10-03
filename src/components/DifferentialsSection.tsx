import React from 'react';
import { Network, Sliders, Play, Search, HeartHandshake, Repeat } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: Network,
      title: 'Visão Integrada',
      desc: 'Processos, qualidade e finanças analisados de forma conectada. Melhorar uma área sem desestabilizar outra.',
    },
    {
      icon: Sliders,
      title: 'Soluções Personalizadas',
      desc: 'Cada empresa possui sua própria realidade e velocidade. Nossas metodologias adaptam-se à estrutura da sua empresa.',
    },
    {
      icon: Play,
      title: 'Abordagem Prática',
      desc: 'Menos teoria e mais aplicação prática. Desenhamos rotinas que seu time realmente consegue executar com autonomia.',
    },
    {
      icon: Search,
      title: 'Foco na Causa',
      desc: 'Não tratamos apenas os sintomas repetitivos. Investigamos e resolvemos as causas primárias que geram retrabalho.',
    },
    {
      icon: HeartHandshake,
      title: 'Acompanhamento Próximo',
      desc: 'Nossa equipe não entrega um manual e vai embora. Caminhamos lado a lado durante a virada operacional.',
    },
    {
      icon: Repeat,
      title: 'Melhoria Contínua',
      desc: 'O objetivo é construir uma organização estruturada e previsível, capacitada para evoluir continuamente ano após ano.',
    },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Nossos Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Por que Dinâmica Consultoria?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Conheça os pilares de conduta e método que nos diferenciam no mercado de consultoria empresarial em São Paulo e no Brasil.
          </p>
        </div>

        {/* Differentials 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                  DIFERENCIAL 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
