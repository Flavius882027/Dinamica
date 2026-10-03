import React, { useState } from 'react';
import { EagleIcon } from './EagleLogo';
import { Search, Compass, Wrench, PlayCircle, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';

interface SistemaDinamicaProps {
  onOpenDiagnostic: () => void;
}

export const SistemaDinamica: React.FC<SistemaDinamicaProps> = ({ onOpenDiagnostic }) => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      number: '01',
      name: 'Diagnóstico',
      tagline: 'Entender a realidade atual.',
      icon: Search,
      description:
        'Mapeamento completo do cenário presente da organização. Levantamos dados, entrevistamos lideranças, observamos a rotina operacional e identificamos gargalos invisíveis no dia a dia.',
      deliverables: [
        'Mapeamento situacional da empresa',
        'Levantamento de gargalos e perdas operacionais',
        'Diagnóstico de maturidade em gestão e qualidade',
        'Relatório executivo de oportunidades identificadas',
      ],
    },
    {
      number: '02',
      name: 'Análise',
      tagline: 'Identificar causas, riscos e oportunidades.',
      icon: Compass,
      description:
        'Investigação aprofundada da causa-raiz dos problemas. Diferenciamos os sintomas aparentes das falhas estruturais, avaliando riscos de processo e conformidade.',
      deliverables: [
        'Análise de causa-raiz (Diagrama de Ishikawa / 5 Porquês)',
        'Matriz de riscos e priorização de ações',
        'Avaliação da aderência aos requisitos ISO 9001',
        'Diagnóstico das métricas e fluxo financeiro',
      ],
    },
    {
      number: '03',
      name: 'Solução',
      tagline: 'Definir ações e soluções adequadas.',
      icon: Wrench,
      description:
        'Desenho de soluções sob medida. Nada de modelos genéricos ou burocracia desnecessária. Desenhamos processos simplificados, procedimentos claros e rotinas eficientes.',
      deliverables: [
        'Plano de Ação estruturado (5W2H)',
        'Padronização de processos e procedimentos (POPs)',
        'Definição de indicadores de desempenho (KPIs)',
        'Estruturação dos controles financeiros gerenciais',
      ],
    },
    {
      number: '04',
      name: 'Implementação',
      tagline: 'Colocar as soluções em prática.',
      icon: PlayCircle,
      description:
        'Atuação lado a lado com os colaboradores. Capacitamos os envolvidos, acompanhamos a virada de rotina e fornecemos suporte direto para que as mudanças se consolidem.',
      deliverables: [
        'Treinamento operacional das equipes',
        'Implantação das ferramentas e planilhas/sistemas',
        'Aplicação prática das rotinas do SGQ',
        'Ajustes finos em tempo real com os gestores',
      ],
    },
    {
      number: '05',
      name: 'Monitoramento',
      tagline: 'Acompanhar resultados e promover melhoria contínua.',
      icon: BarChart3,
      description:
        'Garantia de sustentabilidade. Monitoramos os indicadores estabelecidos, realizamos auditorias internas periódicas e asseguramos que a empresa continue evoluindo.',
      deliverables: [
        'Reuniões mensais de análise crítica de indicadores',
        'Auditorias internas de conformidade e qualidade',
        'Prevenção contra o retorno a velhos hábitos',
        'Ciclo contínuo de otimização de resultados',
      ],
    },
  ];

  return (
    <section id="sistema-dinamica" className="py-24 bg-slate-900/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>Metodologia Própria</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sistema Dinâmica
          </h2>
          <div className="text-amber-300 font-semibold text-base sm:text-lg">
            Diagnosticar · Analisar · Solucionar · Implementar · Evoluir
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Uma metodologia estruturada para compreender a realidade de cada negócio e transformar problemas crônicos em planos de ação executáveis com métricas e prazos.
          </p>
        </div>

        {/* Steps Visual Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = selectedStep === index;
            return (
              <button
                key={step.number}
                onClick={() => setSelectedStep(index)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-slate-950 border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-950/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold tabular-nums ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                </div>
                <div className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {step.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-mono text-amber-300">
                <span>ETAPA {steps[selectedStep].number} DE 05</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {steps[selectedStep].name} — {steps[selectedStep].tagline}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {steps[selectedStep].description}
              </p>

              <div className="pt-4">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Entregas Principais desta Etapa:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[selectedStep].deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="p-3 rounded-2xl bg-slate-800 border border-amber-500/30 text-amber-400 mb-4">
                <EagleIcon size={44} className="w-11 h-11" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Compromisso Dinâmica
              </div>
              <div className="text-sm font-bold text-white mb-2">
                "Justificativa Não. Soluções Sim."
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs">
                Acompanhamos a execução prática em sua empresa até que o processo esteja rodando e gerando valor.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/10"
              >
                Solicitar Diagnóstico desta Etapa
              </button>
            </div>
          </div>
        </div>

        {/* Feature Section: A Águia & Visão Estratégica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800">
          
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden aspect-video lg:aspect-[4/3] border border-slate-800">
            <img
              src="/src/assets/images/section_eagle_vision_1791042644663.jpg"
              alt="Águia e visão estratégica da Dinâmica Consultoria"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-amber-400">Símbolo Dinâmica:</span> Visão ampla, precisão cirúrgica e foco irrestrito na solução.
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <span>Identidade & Essência</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Visão para enxergar além do problema.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A águia representa a essência da Dinâmica: <strong>visão ampla, precisão e capacidade de identificar aquilo que muitas vezes passa despercebido</strong> pela rotina acelerada da empresa.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Na gestão empresarial, enxergar apenas o sintoma não é suficiente. É preciso entender o cenário como um todo, encontrar a causa primordial e construir o caminho definitivo para a solução.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-amber-400 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-amber-400 block mb-1">
                JUSTIFICATIVA NÃO. SOLUÇÕES SIM!
              </span>
              Uma postura consultiva que substitui desculpas operacionais por metas claras, procedimentos escritos e responsabilidade compartilhada.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
