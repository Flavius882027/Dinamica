import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'iso',
      question: 'O que é a ISO 9001?',
      answer:
        'A ISO 9001 é uma norma internacionalmente reconhecida que estabelece requisitos para a implantação de um Sistema de Gestão da Qualidade (SGQ). Seu objetivo é ajudar as organizações a garantir consistência em seus produtos e serviços, aumentar a satisfação dos clientes e promover a melhoria contínua dos processos.',
    },
    {
      id: 'faq-2',
      category: 'iso',
      question: 'Qual a diferença entre ISO 9000 e ISO 9001?',
      answer:
        'A família ISO 9000 engloba um conjunto de normas sobre gestão da qualidade. A ISO 9000 propriamente dita descreve os fundamentos, princípios e vocabulário da qualidade. Já a ISO 9001 é a norma específica de requisitos técnicos auditáveis — ou seja, é ela que uma empresa efetivamente implementa e pela qual pode ser auditada e certificada.',
    },
    {
      id: 'faq-3',
      category: 'iso',
      question: 'A Dinâmica realiza a certificação ISO diretamente?',
      answer:
        'Não, e essa transparência é fundamental: a Dinâmica Consultoria realiza todo o diagnóstico, consultoria técnica, desenho de processos, elaboração de documentação, treinamento das equipes e a realização da auditoria interna preparatória. A certificação oficial e a emissão do certificado são atos privativos de um Organismo de Certificação credenciado junto ao Inmetro. Isso garante total idoneidade ao processo.',
    },
    {
      id: 'faq-4',
      category: 'iso',
      question: 'Minha empresa precisa ser de grande porte para buscar a ISO 9001?',
      answer:
        'Absolutamente não. A ISO 9001 foi desenhada para qualquer tipo e tamanho de organização — desde microempresas e startups até indústrias e prestadoras de serviços de médio porte. Na Dinâmica, adaptamos a complexidade dos controles à realidade e estrutura real da sua empresa, evitando qualquer burocracia desnecessária.',
    },
    {
      id: 'faq-5',
      category: 'iso',
      question: 'Quanto tempo leva para preparar uma empresa para a certificação?',
      answer:
        'O prazo varia conforme a maturidade atual dos processos, o tamanho da empresa e a dedicação da equipe interna. Em geral, projetos de estruturação e preparação para certificação duram entre 4 e 10 meses. Durante nosso diagnóstico inicial, apresentamos um cronograma realista e viável para o seu caso.',
    },
    {
      id: 'faq-6',
      category: 'rmp',
      question: 'O que é RMP na gestão empresarial?',
      answer:
        'RMP refere-se à metodologia de Gestão e Melhoria de Processos (Mapeamento de Processos, Padronização e Rotinas). Consiste em mapear o fluxo de ponta a ponta das atividades, identificar onde ocorrem desperdícios de tempo e retrabalho, padronizar as melhores práticas em Procedimentos Operacionais Padrão (POPs) e estabelecer indicadores confiáveis para medição contínua.',
    },
    {
      id: 'faq-7',
      category: 'financas',
      question: 'Como funciona a consultoria financeira da Dinâmica?',
      answer:
        'Atuamos para dar ao empresário clareza sobre suas contas reais. Organizamos o fluxo de caixa diário e projetado, conciliamos contas a pagar e receber, apuramos custos fixos e variáveis, calculamos o ponto de equilíbrio e elaboramos a DRE gerencial periódica, fornecendo uma base sólida para a tomada de decisões estratégicas.',
    },
    {
      id: 'faq-8',
      category: 'geral',
      question: 'A consultoria acompanha a empresa durante a implantação prática?',
      answer:
        'Sim, este é um dos nossos maiores diferenciais. Não entregamos apenas diagnósticos ou pastas de documentos em PDF. Apoiamos os gestores e líderes no treinamento das equipes, na virada das rotinas e no acompanhamento dos primeiros ciclos operacionais até a consolidação da mudança.',
    },
    {
      id: 'faq-9',
      category: 'geral',
      question: 'Como funciona o diagnóstico empresarial inicial?',
      answer:
        'O diagnóstico é uma análise preliminar em que conversamos com a diretoria, analisamos os principais pontos de atrito da operação (processos, qualidade ou finanças) e identificamos onde estão os gargalos prioritários. A partir dessa análise, apresentamos uma proposta transparente com o plano de ação adequado.',
    },
    {
      id: 'faq-10',
      category: 'geral',
      question: 'A consultoria pode criar indicadores de desempenho (KPIs) para a minha empresa?',
      answer:
        'Sim. Um dos pilares do Sistema Dinâmica é garantir que a gestão não se baseie em achismos. Ajudamos a selecionar poucos e bons indicadores (KPIs de produtividade, qualidade, satisfação de clientes e índices financeiros) que reflitam a saúde real da operação.',
    },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <section id="faq" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tire suas dúvidas sobre a consultoria.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Respostas diretas, sem promessas milagrosas e com clareza sobre como atuamos no dia a dia da sua empresa.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todas as Dúvidas' },
            { id: 'iso', label: 'ISO 9001' },
            { id: 'rmp', label: 'Processos & RMP' },
            { id: 'financas', label: 'Gestão Financeira' },
            { id: 'geral', label: 'Atendimento & Diagnóstico' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-slate-950 border border-slate-800/90 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-md bg-slate-800 text-amber-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal border-t border-slate-900">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Sua dúvida não está listada aqui?</h4>
            <p className="text-xs text-slate-400">
              Converse diretamente com o consultor Marco Aurélio e receba esclarecimentos objetivos.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20a%20Din%C3%A2mica%20Consultoria."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
