import React from 'react';
import { Target, Users, Zap, RefreshCw, Eye, ShieldAlert } from 'lucide-react';

export const PurposeSection: React.FC = () => {
  const cards = [
    {
      icon: Eye,
      title: 'Visão Estratégica',
      description:
        'Avaliamos a organização de forma ampla e com precisão cirúrgica, identificando gargalos que passam despercebidos no dia a dia.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description:
        'Sem receitas prontas ou modelos engessados. Nossas soluções respeitam o porte, o segmento e a maturidade de cada empresa.',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description:
        'Cada plano de ação é orientado para gerar eficiência operacional real, redução de desperdícios e segurança na tomada de decisão.',
    },
    {
      icon: RefreshCw,
      title: 'Melhoria Contínua',
      description:
        'Estruturamos indicadores confiáveis e rotinas que garantem que as soluções permaneçam vivas e evoluindo ao longo do tempo.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>O Nosso Propósito</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Problemas existem. O que muda é a forma de enfrentá-los.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A <strong className="text-white">Dinâmica Consultoria, Certificações</strong> atua ao lado das empresas para identificar problemas, compreender suas causas e construir soluções adequadas à realidade de cada negócio. Nossa abordagem une visão estratégica, organização de processos, gestão da qualidade e controle financeiro para ajudar nossos clientes a tomar decisões mais seguras e melhorar continuamente seus resultados.
          </p>

          <div className="pt-2">
            <div className="inline-block py-2.5 px-6 rounded-xl bg-slate-950/80 border border-amber-500/30 text-amber-300 font-bold text-sm sm:text-base tracking-wide shadow-lg">
              "Não procuramos culpados. Procuramos causas e soluções."
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>PILAR 0{index + 1}</span>
                  <span className="text-amber-400/80">DINÂMICA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
