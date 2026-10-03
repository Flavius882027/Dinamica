import React from 'react';
import { ShieldCheck, Scale, FileText, Lock, CheckCircle, Eye, AlertTriangle } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  const pillars = [
    {
      title: 'Ética & Conduta',
      desc: 'Todas as relações com clientes, parceiros e fornecedores são pautadas pela retidão moral, honestidade intelectual e respeito estrito aos acordos celebrados.',
    },
    {
      title: 'Integridade dos Dados',
      desc: 'Tratamento de dados gerenciais e financeiros com sigilo absoluto (NDA), protegendo informações sensíveis das empresas que atendemos.',
    },
    {
      title: 'Transparência nos Resultados',
      desc: 'Apresentamos diagnósticos realistas e sem maquiagem. Não prometemos certificações garantidas nem números irreais: comunicamos fatos e planos exequíveis.',
    },
    {
      title: 'Gestão de Riscos & Controles',
      desc: 'Apoio na criação de controles internos que reduzem vulnerabilidades operacionais, trabalhistas e fiscais na rotina da empresa.',
    },
    {
      title: 'Conformidade Regulatória (LGPD)',
      desc: 'Atendimento aos requisitos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com boas práticas de coleta, guarda e descarte de dados pessoais.',
    },
    {
      title: 'Responsabilidade Empresarial',
      desc: 'Foco na sustentabilidade do negócio e na perenidade das melhorias implementadas, respeitando equipes e a sociedade.',
    },
  ];

  return (
    <section id="compliance" className="py-24 bg-slate-900/80 border-t border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Governança & Integridade</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Compliance começa com atitude.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Na <strong>Dinâmica Consultoria, Certificações</strong>, acreditamos que conformidade não é um mero conjunto de papéis em uma pasta. É um compromisso prático com a retidão, a transparência na comunicação e o respeito à legislação brasileira.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              Canal de Contato Oficial de Compliance & LGPD
            </div>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Para esclarecimentos sobre a conduta ética da Dinâmica ou solicitações relativas ao tratamento de dados pessoais conforme a LGPD, entre em contato direto pelo canal oficial do responsável.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <a
              href="mailto:marco@dinamicagestao.com.br?subject=Contato%20Compliance%20Dinâmica"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
            >
              <span>marco@dinamicagestao.com.br</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
