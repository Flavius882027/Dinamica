import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, AlertCircle, FileCheck, Layers, Award, Sparkles } from 'lucide-react';

interface IsoSectionProps {
  onOpenDiagnostic: () => void;
}

export const IsoSection: React.FC<IsoSectionProps> = ({ onOpenDiagnostic }) => {
  const roadmap = [
    {
      step: '01',
      title: 'Diagnóstico Inicial',
      desc: 'Avaliação de gap entre a rotina atual e os requisitos da norma ISO 9001.',
    },
    {
      step: '02',
      title: 'Planejamento do SGQ',
      desc: 'Cronograma, comitê de qualidade e desenho da arquitetura de processos.',
    },
    {
      step: '03',
      title: 'Implementação Prática',
      desc: 'Elaboração de procedimentos, políticas, indicadores e capacitação dos colaboradores.',
    },
    {
      step: '04',
      title: 'Auditoria Interna',
      desc: 'Simulação rigorosa de auditoria para identificar conformidades e oportunidades de melhoria.',
    },
    {
      step: '05',
      title: 'Auditoria de Certificação',
      desc: 'Acompanhamento e suporte técnico durante a avaliação do Organismo Certificador Credenciado.',
    },
  ];

  const benefits = [
    'Processos claros, organizados e independentes de pessoas específicas',
    'Padronização de atividades com redução drástica de erros e retrabalho',
    'Controle operacional assertivo através de indicadores de desempenho (KPIs)',
    'Maior credibilidade e diferencial competitivo em licitações e grandes contas',
    'Foco na satisfação contínua do cliente final',
    'Cultura de gestão de riscos e mitigação de falhas antes que ocorram',
  ];

  return (
    <section id="iso-9001" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Sistema de Gestão da Qualidade</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sua empresa preparada para um novo padrão de gestão.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A <strong>ISO 9001</strong> estabelece diretrizes reconhecidas globalmente para garantir qualidade, consistência operacional e satisfação dos clientes. Nossa consultoria apoia sua empresa em cada etapa da preparação, desmistificando a norma e tornando os processos ágeis e produtivos.
          </p>
        </div>

        {/* Visual Roadmap Flow */}
        <div className="mb-16">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
            O Roteiro Dinâmica para a Preparação ISO 9001
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {roadmap.map((item, idx) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-amber-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-sm font-bold text-amber-400 tabular-nums">
                      FASE {item.step}
                    </span>
                    {idx < roadmap.length - 1 && (
                      <span className="hidden md:inline text-slate-600 font-bold">→</span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Transparency Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Benefits Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Benefícios práticos ao estruturar o seu SGQ:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Crucial Ethical Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">Clareza e Transparência Regulamentar:</strong>
                A <strong>Dinâmica Consultoria, Certificações</strong> presta todo o serviço especializado de diagnóstico, consultoria, estruturação, documentação, treinamento e auditoria interna. A auditoria de certificação oficial e a emissão do certificado ISO 9001 são de competência exclusiva de Organismos Certificadores de Sistemas de Gestão credenciados pelo Inmetro.
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 text-center space-y-5 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Quero preparar minha empresa para a ISO 9001
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Solicite uma análise preliminar da maturidade dos seus processos e saiba exatamente quanto tempo e quais etapas serão necessárias para sua empresa estar 100% pronta.
            </p>
            <button
              onClick={onOpenDiagnostic}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>Solicitar Diagnóstico de ISO 9001</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
