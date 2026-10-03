import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 z-10 text-left overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-slate-800 text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Política de Privacidade e Proteção de Dados (LGPD)
            </h3>
            <span className="text-xs text-slate-400">
              Dinâmica Consultoria, Certificações · São Paulo / SP
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          <p>
            A <strong>Dinâmica Consultoria, Certificações</strong>, com sede em São Paulo – SP, tem o compromisso de resguardar a privacidade e a segurança dos dados pessoais de seus clientes, usuários e parceiros, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD)</strong>.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">
            1. Dados Pessoais Coletados
          </h4>
          <p>
            Ao utilizar nossos formulários eletrônicos de contato e solicitação de diagnóstico, coletamos apenas os dados estritamente necessários para viabilizar o atendimento comercial e consultivo, tais como:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Nome completo;</li>
            <li>Nome da empresa e cargo exercido;</li>
            <li>Número de WhatsApp / telefone;</li>
            <li>E-mail corporativo;</li>
            <li>Cidade e estado de localização;</li>
            <li>Descrição sucinta das necessidades e desafios operacionais.</li>
          </ul>

          <h4 className="font-bold text-white text-sm pt-2">
            2. Finalidade do Tratamento dos Dados
          </h4>
          <p>
            Os dados coletados são tratados com base no legítimo interesse e nos procedimentos preliminares relacionados a contrato a pedido do titular (art. 7º, V e IX da LGPD), destinando-se exclusivamente a:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Responder a dúvidas e solicitações de diagnóstico encaminhadas pelo usuário;</li>
            <li>Elaborar propostas comerciais técnicas personalizadas de consultoria;</li>
            <li>Estabelecer comunicação direta via e-mail ou WhatsApp oficial.</li>
          </ul>

          <h4 className="font-bold text-white text-sm pt-2">
            3. Não Compartilhamento com Terceiros
          </h4>
          <p>
            A Dinâmica Consultoria <strong>não comercializa, não aluga e não compartilha</strong> informações pessoais com terceiros para fins de marketing ou qualquer outro propósito externo alheio à nossa prestação de serviços.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">
            4. Segurança da Informação e Sigilo (NDA)
          </h4>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda ou alteração acidental. No âmbito dos projetos consultivos, atuamos formalmente sob acordos de confidencialidade (NDA).
          </p>

          <h4 className="font-bold text-white text-sm pt-2">
            5. Direitos do Titular de Dados
          </h4>
          <p>
            Conforme o artigo 18 da LGPD, o titular poderá, a qualquer momento e mediante requisição simples, solicitar:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Confirmação da existência de tratamento e acesso aos dados;</li>
            <li>Correção de dados incompletos ou inexatos;</li>
            <li>Eliminação ou revogação do consentimento para tratamento.</li>
          </ul>

          <h4 className="font-bold text-white text-sm pt-2">
            6. Canal Oficial do Encarregado (DPO)
          </h4>
          <p>
            Para exercer seus direitos ou tirar qualquer dúvida relacionada a esta política, entre em contato diretamente com o responsável:
          </p>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
            <strong>Responsável:</strong> Marco Aurélio<br />
            <strong>E-mail:</strong>{' '}
            <a href="mailto:marco@dinamicagestao.com.br" className="text-amber-400 underline">
              marco@dinamicagestao.com.br
            </a><br />
            <strong>Localidade:</strong> São Paulo – SP
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
