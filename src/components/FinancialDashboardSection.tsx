import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  DollarSign, 
  PieChart, 
  BarChart, 
  ShieldCheck, 
  AlertTriangle,
  ArrowRight,
  Calculator
} from 'lucide-react';

interface FinancialDashboardSectionProps {
  onOpenDiagnostic: () => void;
}

export const FinancialDashboardSection: React.FC<FinancialDashboardSectionProps> = ({
  onOpenDiagnostic,
}) => {
  const [simulationActive, setSimulationActive] = useState(false);

  // Indicators data (demonstrative model to show the power of organized numbers)
  const currentModel = {
    visibilidade: 'Baixa (Sem DRE)',
    previsaoCaixa: '7 a 15 dias',
    gargalo: 'Custos invisíveis e atrasos',
    pontoEquilibrio: 'Desconhecido',
    margemReal: 'Indefinida',
    status: 'Incerteza na Tomada de Decisão',
  };

  const dynamicModel = {
    visibilidade: 'Total (DRE Mensal + Fluxo Diário)',
    previsaoCaixa: '60 a 90 dias projetados',
    gargalo: 'Mapeado e Controlado',
    pontoEquilibrio: 'Calculado com Precisão',
    margemReal: 'Acompanhada por Linha de Produto/Serviço',
    status: 'Decisões com Margem de Segurança',
  };

  const active = simulationActive ? dynamicModel : currentModel;

  return (
    <section id="gestao-financeira" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <DollarSign className="w-4 h-4 text-amber-400" />
            <span>Gestão & Controle Financeiro</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Você sabe exatamente como está a saúde financeira da sua empresa?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Ter faturamento não significa necessariamente ter controle. Um controle financeiro estruturado permite entender para onde o dinheiro está indo, identificar custos ocultos, acompanhar resultados reais e tomar decisões de investimento e expansão com segurança absoluta.
          </p>
        </div>

        {/* Interactive Dashboard Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Visual Dashboard Canvas */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative">
            
            {/* Top Bar of Dashboard */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Painel de Controle Gerencial Demonstrativo
                </div>
                <div className="text-base font-bold text-white">
                  Estrutura de Análise Financeira Dinâmica
                </div>
              </div>

              {/* Simulation Toggle */}
              <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
                <button
                  onClick={() => setSimulationActive(false)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    !simulationActive
                      ? 'bg-slate-800 text-slate-200 border border-slate-700 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Sem Gestão Estruturada
                </button>
                <button
                  onClick={() => setSimulationActive(true)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    simulationActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Com Consultoria Dinâmica
                </button>
              </div>
            </div>

            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium uppercase mb-1">
                  Visibilidade do DRE
                </div>
                <div className={`text-sm font-bold ${simulationActive ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {active.visibilidade}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium uppercase mb-1">
                  Projeção de Fluxo de Caixa
                </div>
                <div className={`text-sm font-bold ${simulationActive ? 'text-emerald-400' : 'text-slate-300'}`}>
                  {active.previsaoCaixa}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-400 font-medium uppercase mb-1">
                  Ponto de Equilíbrio
                </div>
                <div className={`text-sm font-bold ${simulationActive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {active.pontoEquilibrio}
                </div>
              </div>

            </div>

            {/* Visual Process Bars */}
            <div className="space-y-4 mb-6 pt-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Controle de Custos & Despesas</span>
                  <span className="text-slate-400 font-mono tabular-nums">
                    {simulationActive ? 'Auditoria Contínua' : 'Controle Disperso'}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      simulationActive ? 'w-4/5 bg-amber-400' : 'w-1/4 bg-rose-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">Previsibilidade Financeira & Segurança</span>
                  <span className="text-slate-400 font-mono tabular-nums">
                    {simulationActive ? '90 Dias Planejados' : 'Instabilidade'}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      simulationActive ? 'w-11/12 bg-emerald-400' : 'w-1/5 bg-amber-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Explanatory callout */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">Diagnóstico Financeiro Dinâmica:</strong>
                Identificamos onde o dinheiro vaza no dia a dia da operação, organizamos as contas a pagar e receber, e entregamos uma rotina gerencial clara que o próprio gestor ou seu setor financeiro consegue manter com facilidade.
              </div>
            </div>

          </div>

          {/* Side Presentation Card with Office Meeting Image */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-800 relative aspect-video sm:aspect-[4/3]">
              <img
                src="/src/assets/images/financial_dashboard_concept_1791042654946.jpg"
                alt="Reunião consultiva de gestão financeira e análise de resultados"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                Acompanhamento próximo: Transformamos planilhas confusas em decisões seguras.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Tenha clareza sobre os números da sua empresa.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Agende uma conversa com nosso especialista financeiro e descubra como organizar o fluxo de caixa da sua empresa de maneira prática.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
              >
                <span>Solicitar Diagnóstico Financeiro</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
