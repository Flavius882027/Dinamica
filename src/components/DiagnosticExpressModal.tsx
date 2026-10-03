import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { EagleIcon } from './EagleLogo';

interface DiagnosticExpressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceAndContact: (service: string, notes: string) => void;
}

export const DiagnosticExpressModal: React.FC<DiagnosticExpressModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndContact,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    processos: '',
    iso: '',
    financas: '',
    equipe: '',
    empresa: '',
  });

  if (!isOpen) return null;

  const handleOptionSelect = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleFinish = () => {
    let suggestedService = 'Diagnóstico Geral';
    if (answers.iso.includes('ISO 9001')) {
      suggestedService = 'ISO 9001';
    } else if (answers.financas.includes('extrato') || answers.financas.includes('dificuldade')) {
      suggestedService = 'Gestão Financeira';
    } else if (answers.processos.includes('cabeça') || answers.processos.includes('Planilha')) {
      suggestedService = 'RMP / Processos';
    }

    const notes = `Diagnóstico Rápido: Processos (${answers.processos}) | ISO (${answers.iso}) | Finanças (${answers.financas}) | Porte (${answers.equipe})`;
    onSelectServiceAndContact(suggestedService, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl p-6 sm:p-8 z-10 text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-slate-800 border border-amber-500/30 text-amber-400">
            <EagleIcon size={28} className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
              Diagnóstico Express Dinâmica
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Análise Rápida de Maturidade Empresarial
            </h3>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-amber-400 transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>

        {/* Question Steps */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Etapa 01 de 04: Processos Operacionais
            </div>
            <h4 className="text-base font-bold text-white">
              Como estão organizados os processos na rotina da sua empresa hoje?
            </h4>
            <div className="space-y-2.5">
              {[
                'A maior parte do conhecimento está na cabeça das pessoas (sem manuais)',
                'Temos algumas planilhas e rotinas, mas ocorrem falhas recorrentes',
                'Temos procedimentos escritos, mas falta engajamento e indicadores',
                'Nossos processos são estruturados, mas queremos elevar a eficiência',
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect('processos', opt)}
                  className={`w-full p-3.5 rounded-xl text-xs sm:text-sm text-left transition-all border ${
                    answers.processos === opt
                      ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-end">
              <button
                disabled={!answers.processos}
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 transition-colors flex items-center gap-1.5"
              >
                <span>Próximo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Etapa 02 de 04: Qualidade & Certificação
            </div>
            <h4 className="text-base font-bold text-white">
              Qual é a principal prioridade da sua empresa em Gestão da Qualidade?
            </h4>
            <div className="space-y-2.5">
              {[
                'Preparar a empresa para conquistar a Certificação ISO 9001',
                'Já temos certificação, mas queremos reformular e desburocratizar o SGQ',
                'Eliminar gargalos e retrabalhos sem foco imediato em selo externo',
                'Entender se a ISO 9001 se aplica ao nosso segmento e porte',
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect('iso', opt)}
                  className={`w-full p-3.5 rounded-xl text-xs sm:text-sm text-left transition-all border ${
                    answers.iso === opt
                      ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Voltar
              </button>
              <button
                disabled={!answers.iso}
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 transition-colors flex items-center gap-1.5"
              >
                <span>Próximo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Etapa 03 de 04: Controle Financeiro
            </div>
            <h4 className="text-base font-bold text-white">
              Como sua empresa monitora os números e resultados mensais?
            </h4>
            <div className="space-y-2.5">
              {[
                'Olhamos apenas o saldo no extrato bancário (sem fluxo projetado)',
                'Anotamos entradas e saídas em planilhas, mas sem DRE ou margem precisa',
                'Sabemos o faturamento, mas temos dificuldade de enxergar onde o lucro fica',
                'Possuímos controle estruturado, mas queremos refinar custos e indicadores',
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect('financas', opt)}
                  className={`w-full p-3.5 rounded-xl text-xs sm:text-sm text-left transition-all border ${
                    answers.financas === opt
                      ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Voltar
              </button>
              <button
                disabled={!answers.financas}
                onClick={() => setCurrentStep(4)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 transition-colors flex items-center gap-1.5"
              >
                <span>Próximo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Etapa 04 de 04: Porte da Operação
            </div>
            <h4 className="text-base font-bold text-white">
              Quantos colaboradores compõem sua empresa atualmente?
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {['Até 10 pessoas', '11 a 30 pessoas', '31 a 100 pessoas', 'Mais de 100 pessoas'].map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('equipe', opt)}
                    className={`p-3.5 rounded-xl text-xs text-center transition-all border ${
                      answers.equipe === opt
                        ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                )
              )}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-amber-400">Resumo da Avaliação Concluída!</div>
              <p className="text-slate-400 text-[11px]">
                Com base nas suas respostas, a Dinâmica identificou oportunidades imediatas para padronização de processos e proteção do seu caixa.
              </p>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Voltar
              </button>
              <button
                disabled={!answers.equipe}
                onClick={handleFinish}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 transition-colors flex items-center gap-1.5"
              >
                <span>Concluir e Solicitar Contato</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
