import React, { useState } from 'react';
import { 
  GitBranch, 
  Award, 
  DollarSign, 
  Briefcase, 
  Shield, 
  Check, 
  ArrowRight, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rmp' | 'iso' | 'financas' | 'consultoria'>('all');

  const solutions = [
    {
      id: 'rmp',
      category: 'rmp',
      number: '01',
      tag: 'Gestão de Processos',
      title: 'RMP — Gestão e Melhoria de Processos',
      headline: 'Processos claros. Operação eficiente.',
      description:
        'Mapeamos, analisamos e estruturamos processos para identificar gargalos, reduzir falhas e criar uma operação mais organizada e autônoma.',
      icon: GitBranch,
      items: [
        'Mapeamento completo de fluxos e atividades',
        'Identificação e eliminação de gargalos operacionais',
        'Padronização de procedimentos (POPs e manuais)',
        'Definição de indicadores de desempenho (KPIs)',
        'Matriz de gestão de riscos e oportunidades',
        'Cultura prática de melhoria contínua',
        'Redução de desperdícios e retrabalhos',
      ],
      cta: 'Solicitar Diagnóstico de Processos (RMP)',
      serviceFormValue: 'RMP / Processos',
    },
    {
      id: 'iso',
      category: 'iso',
      number: '02',
      tag: 'Sistema de Gestão da Qualidade',
      title: 'Preparação para Certificação ISO 9001',
      headline: 'Qualidade não deve depender do acaso.',
      description:
        'Apoiamos sua empresa na estruturação e implementação do Sistema de Gestão da Qualidade (SGQ), capacitando a organização para o processo de certificação.',
      icon: Award,
      items: [
        'Diagnóstico inicial de aderência à norma',
        'Análise de requisitos aplicáveis ao negócio',
        'Estruturação dos processos do SGQ',
        'Criação e organização do controle documental',
        'Indicadores de qualidade e satisfação do cliente',
        'Auditoria interna prévia rigorosa',
        'Preparação completa para a auditoria de certificação',
      ],
      notice:
        'Aviso de Transparência: A Dinâmica realiza toda a preparação técnica e implantação do SGQ. A certificação oficial é concedida exclusivamente por organismos certificadores acreditados.',
      cta: 'Preparar Minha Empresa para ISO 9001',
      serviceFormValue: 'ISO 9001',
    },
    {
      id: 'financas',
      category: 'financas',
      number: '03',
      tag: 'Controle & Estratégia',
      title: 'Gestão e Controle Financeiro',
      headline: 'Controle financeiro para decidir com clareza.',
      description:
        'Transformamos números soltos em ferramentas de inteligência gerencial para que o empresário tenha clareza absoluta sobre caixa, custos, margens e resultados.',
      icon: DollarSign,
      items: [
        'Organização e conciliação do fluxo de caixa',
        'Estruturação de contas a pagar e a receber',
        'Apuração detalhada de custos fixos e variáveis',
        'Construção de DRE Gerencial periódica',
        'Cálculo do Ponto de Equilíbrio e Margem de Contribuição',
        'Indicadores de liquidez e rentabilidade',
        'Planejamento orçamentário e projeção financeira',
        'Apoio direto à tomada de decisão estratégica',
      ],
      cta: 'Solicitar Diagnóstico Financeiro',
      serviceFormValue: 'Gestão Financeira',
    },
    {
      id: 'consultoria',
      category: 'consultoria',
      number: '04',
      tag: 'Visão Integrada',
      title: 'Consultoria Empresarial Geral',
      headline: 'Uma visão externa para encontrar novas soluções.',
      description:
        'Analisamos a realidade da empresa de forma integrada para identificar oportunidades de melhoria, sanar ineficiências e apoiar o crescimento sustentável.',
      icon: Briefcase,
      items: [
        'Diagnóstico empresarial 360°',
        'Análise sistêmica entre áreas (Operação, Vendas e Finanças)',
        'Estruturação de governança e papéis de liderança',
        'Definição de metas e alinhamento de equipe',
        'Planos de ação práticos com cronograma e responsáveis',
        'Acompanhamento e evolução contínua',
      ],
      cta: 'Falar com Consultor Empresarial',
      serviceFormValue: 'Consultoria Empresarial',
    },
    {
      id: 'compliance',
      category: 'consultoria',
      number: '05',
      tag: 'Governança & Integridade',
      title: 'Compliance & Controles Internos',
      headline: 'Compliance começa com atitude.',
      description:
        'Estruturação de práticas, rotinas e controles que proporcionam uma gestão transparente, ética, responsável e alinhada à legislação aplicável.',
      icon: Shield,
      items: [
        'Definição de código de conduta e diretrizes éticas',
        'Mapeamento de riscos regulatórios e operacionais',
        'Controles internos para prevenir desvios',
        'Adequação de processos à LGPD e proteção de dados',
        'Responsabilidade corporativa e segurança jurídica',
      ],
      cta: 'Consultar Solução de Compliance',
      serviceFormValue: 'Compliance',
    },
  ];

  const filteredSolutions = activeFilter === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeFilter);

  return (
    <section id="solucoes" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <span>Nossas Soluções</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Estrutura técnica para transformar desafios em resultados práticos.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Não entregamos relatórios teóricos que ficam na gaveta. Atuamos com metodologias práticas que conectam processos, qualidade e números reais da operação.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-12 max-w-2xl">
          {[
            { id: 'all', label: 'Todas as Soluções' },
            { id: 'rmp', label: 'RMP / Processos' },
            { id: 'iso', label: 'ISO 9001' },
            { id: 'financas', label: 'Gestão Financeira' },
            { id: 'consultoria', label: 'Empresarial & Compliance' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSolutions.map((sol) => {
            const Icon = sol.icon;
            const isIso = sol.id === 'iso';
            return (
              <div
                key={sol.id}
                className={`p-8 rounded-2xl bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between relative ${
                  isIso 
                    ? 'border-amber-500/40 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 shadow-xl shadow-amber-500/5' 
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold tracking-wider uppercase text-amber-400">
                        {sol.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 tabular-nums">
                      {sol.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {sol.title}
                  </h3>

                  <div className="text-sm font-semibold text-amber-300/90 mt-1 mb-3">
                    "{sol.headline}"
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {sol.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-2">
                      Entregáveis e Atividades:
                    </div>
                    {sol.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* ISO Transparency Notice */}
                  {sol.notice && (
                    <div className="mb-6 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5 text-[11px] text-slate-400 leading-relaxed">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{sol.notice}</span>
                    </div>
                  )}
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectService(sol.serviceFormValue)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-amber-400 hover:text-slate-950 transition-all flex items-center justify-center gap-2 group border border-slate-700/80 active:scale-98"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
