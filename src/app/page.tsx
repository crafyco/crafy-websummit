'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import Newsletter from '@/components/Newsletter'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
// import { Zap, Users, BarChart3, Shield, Rocket, Target } from 'lucide-react'
import { useAnalytics } from '@/lib/analytics'

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

        <FeatureSection mode='creator'/>

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
