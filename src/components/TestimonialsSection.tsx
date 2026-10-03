import React from 'react';
import { Quote, Building2, Factory, Truck, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const applicationCases = [
    {
      segment: 'Indústria Metalmecânica (PME)',
      icon: Factory,
      challenge: 'Gargalos no chão de fábrica e falta de padronização para atender grandes clientes industriais que exigiam ISO 9001.',
      solution: 'Aplicação da metodologia Dinâmica: mapeamento RMP de processos, eliminação de desperdícios e estruturação de SGQ preparatório para auditoria.',
      outcome: 'Processos padronizados com redução expressiva de retrabalho e equipe preparada com segurança para a auditoria externa.',
      status: 'Cenário Prático de Aplicação RMP + ISO 9001',
    },
    {
      segment: 'Empresa de Serviços Corporativos',
      icon: Building2,
      challenge: 'Faturamento em alta, mas constante insegurança no fluxo de caixa no final do mês devido a custos fixos não apurados.',
      solution: 'Implantação da consultoria financeira: conciliação, DRE gerencial, separação de despesas e cálculo do ponto de equilíbrio.',
      outcome: 'Clareza total sobre quais contratos trazem margem real e previsibilidade de caixa de 60 dias.',
      status: 'Cenário Prático de Controle Financeiro',
    },
    {
      segment: 'Distribuidora & Logística',
      icon: Truck,
      challenge: 'Erros recorrentes de separação e expedição que causavam atrito com clientes e retrabalho constante da equipe.',
      solution: 'Criação de Procedimentos Operacionais Padrão (POPs) práticos e implementação de indicadores visuais de qualidade.',
      outcome: 'Redução drástica de falhas operacionais e autonomia para os líderes de setor sem dependência do dono.',
      status: 'Cenário Prático de Mapeamento & Melhoria',
    },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <span>Metodologia em Ação</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Casos de aplicação e desafios reais do mercado.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Veja como a abordagem estruturada da Dinâmica atua nos problemas mais comuns enfrentados por pequenas e médias empresas em diferentes segmentos.
          </p>
        </div>

        {/* Demonstrative Badge Policy (Strict Anti-Fabrication Rule) */}
        <div className="mb-10 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Nota de Integridade Dinâmica:</strong> Os cenários abaixo ilustram casos típicos resolvidos pela nossa metodologia de trabalho. Em respeito à confidencialidade acordada com nossos clientes através de termos de sigilo (NDA), detalhes nominais são preservados.
          </span>
        </div>

        {/* 3 Application Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applicationCases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.segment}
                className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      Caso Típico
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.segment}
                  </h3>

                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <span className="font-semibold text-rose-400 block mb-0.5">Desafio Encontrado:</span>
                      <p className="text-slate-300 font-normal leading-relaxed">{item.challenge}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-amber-400 block mb-0.5">Solução Aplicada:</span>
                      <p className="text-slate-300 font-normal leading-relaxed">{item.solution}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-400 block mb-0.5">Resultado Conquistado:</span>
                      <p className="text-slate-300 font-normal leading-relaxed">{item.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                  {item.status}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
