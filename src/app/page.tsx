'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import { Zap, Users, BarChart3, Shield, Rocket, Target } from 'lucide-react'
import { useAnalytics } from '@/lib/analytics'
import Image from 'next/image'

const mainFeatures = [
  {
    icon: Users,
    title: 'Rede de Creators',
    description: 'Acesse milhares de creators verificados em todas as plataformas e nichos de mercado.'
  },
  {
    icon: Target,
    title: 'Match Inteligente',
    description: 'Nossa IA conecta sua marca com os creators ideais baseado em audiência, engajamento e valores.'
  },
  {
    icon: BarChart3,
    title: 'Análise em Tempo Real',
    description: 'Acompanhe o desempenho das suas campanhas com métricas detalhadas e insights acionáveis.'
  },
  {
    icon: Shield,
    title: 'Pagamentos Seguros',
    description: 'Sistema de escrow que protege tanto marcas quanto creators em todas as transações.'
  },
  {
    icon: Zap,
    title: 'Automação Completa',
    description: 'Gerencie campanhas, aprovações e entregas em uma única plataforma automatizada.'
  },
  {
    icon: Rocket,
    title: 'Escala Global',
    description: 'Expanda sua presença para mercados internacionais com creators locais autênticos.'
  }
]

const testimonials = [
  {
    content: 'A Crafy revolucionou nossa estratégia de marketing. Conseguimos 300% mais engajamento com campanhas autênticas.',
    author: {
      name: 'Maria Silva',
      role: 'CMO',
      company: 'TechCorp',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'Finalmente uma plataforma que entende tanto marcas quanto creators. ROI incrível!',
    author: {
      name: 'João Santos',
      role: 'Fundador',
      company: 'StartupXYZ',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'Como creator, a Crafy me conectou com marcas alinhadas aos meus valores. Parcerias genuínas.',
    author: {
      name: 'Ana Costa',
      role: 'Content Creator',
      company: '@anacosta',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'A análise de dados da Crafy nos ajudou a otimizar campanhas e aumentar conversões significativamente.',
    author: {
      name: 'Pedro Lima',
      role: 'Growth Manager',
      company: 'E-commercePlus',
      avatar: ''
    },
    rating: 5
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'R$ 497',
    description: 'Perfeito para pequenas empresas começando no marketing de influência',
    features: [
      'Até 5 campanhas por mês',
      'Acesso a 1.000+ creators',
      'Métricas básicas',
      'Suporte por email'
    ],
    trackingId: 'starter-plan'
  },
  {
    name: 'Professional',
    price: 'R$ 1.497',
    description: 'Ideal para empresas que querem escalar suas campanhas',
    features: [
      'Campanhas ilimitadas',
      'Rede completa de creators',
      'Analytics avançadas',
      'Suporte prioritário',
      'Match por IA',
      'Automações personalizadas'
    ],
    popular: true,
    trackingId: 'professional-plan'
  }
]

export default function Home() {
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Home - Crafy')
  }, [analytics])

  return (
    <div className="min-h-screen bg-white">
      
      <Header />

      <main>

        <Hero
          title="Conecte sua marca com creators autênticos"
          subtitle="Web Summit Lisboa 2024"
          description="A primeira plataforma que usa IA para criar campanhas de marketing de influência verdadeiramente eficazes. Resultados mensuráveis, parcerias autênticas."
          ctaPrimary={{
            text: 'Começar gratuitamente',
            trackingId: 'hero-cta-primary'
          }}
          ctaSecondary={{
            text: 'Ver demonstração',
            trackingId: 'hero-cta-secondary'
          }}
          showStats={true}
        />

        <FeatureSection
          title="Tudo que você precisa para campanhas de sucesso"
          subtitle="Nossa plataforma integra todas as ferramentas necessárias para criar, gerenciar e otimizar campanhas de marketing de influência."
          features={mainFeatures}
        />

        <Testimonials
          title="Mais de 10.000 marcas confiam na Crafy"
          subtitle="Descubra como empresas de todos os tamanhos estão alcançando resultados extraordinários"
          testimonials={testimonials}
        />

        <Pricing
          title="Planos que crescem com seu negócio"
          subtitle="Escolha o plano ideal e comece a ver resultados hoje mesmo"
          plans={pricingPlans}
        />

        <Newsletter
          title="Não perca as novidades do Web Summit"
          description="Receba conteúdo exclusivo sobre marketing de influência e atualizações da Crafy direto do evento em Lisboa."
        />
      </main>

      <Footer />
    </div>
  )
}
