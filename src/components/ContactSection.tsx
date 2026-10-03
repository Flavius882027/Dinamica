import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Building, 
  User, 
  Phone, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Diagnóstico',
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    empresa: '',
    cargo: '',
    whatsapp: '',
    email: '',
    cidade: 'São Paulo - SP',
    servico: initialService,
    desafio: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, servico: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (!formData.nome.trim() || !formData.empresa.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios marcados com *.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedProtocol = `DIN-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setProtocol(generatedProtocol);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const constructWhatsAppMessage = () => {
    const text = `*Solicitação de Diagnóstico — Dinâmica Consultoria*\n` +
      `*Protocolo:* ${protocol || 'DIN-NOVO'}\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Empresa:* ${formData.empresa} (${formData.cargo || 'Gestor'})\n` +
      `*Cidade:* ${formData.cidade}\n` +
      `*Serviço:* ${formData.servico}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Desafio:* ${formData.desafio || 'Gostaria de agendar um diagnóstico inicial com o consultor Marco Aurélio.'}`;
    return encodeURIComponent(text);
  };

  const constructMailtoLink = () => {
    const subject = encodeURIComponent(`Solicitação de Diagnóstico: ${formData.empresa} - ${formData.servico}`);
    const body = encodeURIComponent(
      `Prezado Marco Aurélio / Dinâmica Consultoria,\n\n` +
      `Gostaria de solicitar um diagnóstico com as seguintes informações:\n\n` +
      `Nome: ${formData.nome}\n` +
      `Empresa: ${formData.empresa}\n` +
      `Cargo: ${formData.cargo}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `E-mail: ${formData.email}\n` +
      `Cidade: ${formData.cidade}\n` +
      `Serviço de Interesse: ${formData.servico}\n\n` +
      `Desafio / Necessidade:\n${formData.desafio}\n\n` +
      `Atenciosamente,\n${formData.nome}`
    );
    return `mailto:marco@dinamicagestao.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Canais Oficiais</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Vamos encontrar a solução?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Conte-nos qual desafio sua empresa está enfrentando. A Dinâmica pode ajudar a transformar esse desafio em um caminho estruturado de solução.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">E-mail Direto do Consultor</div>
                  <a
                    href="mailto:marco@dinamicagestao.com.br"
                    className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    marco@dinamicagestao.com.br
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Localização & Atendimento</div>
                  <div className="text-sm font-bold text-white">São Paulo – SP</div>
                  <div className="text-xs text-slate-400">Atendimento presencial e remoto em todo o Brasil</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Atendimento Rápido via WhatsApp</div>
                  <a
                    href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20com%20a%20Din%C3%A2mica%20Consultoria."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-400 hover:underline flex items-center gap-1.5"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Privacy & LGPD Brief */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Seus dados serão tratados com sigilo profissional estrito de acordo com a LGPD e utilizados exclusivamente para responder ao seu contato comercial.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Fale com a Dinâmica
                    </h3>
                    <p className="text-xs text-slate-400">
                      Preencha o formulário abaixo para agendar seu diagnóstico empresarial.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: Carlos Oliveira"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ex: Metalúrgica Alfa Ltda"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Cargo / Função
                      </label>
                      <input
                        type="text"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Ex: Diretor Geral / Gerente de Operações"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Cidade / UF
                      </label>
                      <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        placeholder="Ex: São Paulo - SP"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        WhatsApp para Contato *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Área de Interesse Principal *
                    </label>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="RMP / Processos">RMP — Gestão e Melhoria de Processos</option>
                      <option value="ISO 9001">ISO 9001 — Preparação para Certificação</option>
                      <option value="Gestão Financeira">Gestão Financeira e Controle de Custos</option>
                      <option value="Consultoria Empresarial">Consultoria Empresarial Geral / Diagnóstico 360°</option>
                      <option value="Compliance">Compliance & Controles Internos</option>
                      <option value="Diagnóstico">Diagnóstico Geral Sem Compromisso</option>
                      <option value="Outro">Outra Necessidade Específica</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Descreva seu desafio atual
                    </label>
                    <textarea
                      name="desafio"
                      rows={3}
                      value={formData.desafio}
                      onChange={handleChange}
                      placeholder="Conte resumidamente o que está gerando gargalos, desperdícios ou qual o objetivo com a certificação..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Enviando solicitação...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>Enviar Solicitação de Diagnóstico</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center pt-1">
                    Ao enviar, você concorda com nossa{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-amber-400 underline hover:text-amber-300"
                    >
                      Política de Privacidade (LGPD)
                    </button>.
                  </div>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-6 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                      Protocolo Registrado: {protocol}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Obrigado, <strong className="text-white">{formData.nome}</strong>. Nossa equipe técnica analisará as informações da empresa <strong className="text-white">{formData.empresa}</strong> e retornará em até 24 horas úteis.
                    </p>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-left">
                    <div className="text-xs font-semibold text-slate-300">
                      Deseja agilizar seu atendimento agora mesmo?
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={`https://wa.me/5511999999999?text=${constructWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enviar no WhatsApp Direto</span>
                      </a>

                      <a
                        href={constructMailtoLink()}
                        className="py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700"
                      >
                        <Mail className="w-4 h-4 text-amber-400" />
                        <span>Abrir E-mail</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nome: '',
                          empresa: '',
                          cargo: '',
                          whatsapp: '',
                          email: '',
                          cidade: 'São Paulo - SP',
                          servico: 'Diagnóstico',
                          desafio: '',
                        });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
