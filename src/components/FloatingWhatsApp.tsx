import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = '5511999999999';
  const message = encodeURIComponent(
    'Olá! Gostaria de solicitar um diagnóstico com a Dinâmica Consultoria, Certificações.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5">
      {/* Discreet Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white shadow-xl text-xs backdrop-blur-md animate-fade-in">
          <span>Precisa de um diagnóstico rápido? <strong>Fale conosco</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Atendimento rápido via WhatsApp Dinâmica Consultoria"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
