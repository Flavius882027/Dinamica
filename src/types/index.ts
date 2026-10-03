export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  items: string[];
  benefits: string[];
  ctaText: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'iso' | 'rmp' | 'financas' | 'geral';
}

export interface MethodStep {
  step: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  cargo: string;
  whatsapp: string;
  email: string;
  cidade: string;
  servico: string;
  desafio: string;
}
