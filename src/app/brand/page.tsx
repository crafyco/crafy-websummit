'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import FeatureSection from '@/components/FeatureSection'
import HeroBrand from '@/components/Brand/HeroBrand'
import ClaraSection from '@/components/Brand/ClaraSection'
import PartnerTopCreators from '@/components/Brand/PartnerTopCreators'
// import Testimonials from '@/components/Testimonials'
import NewsletterSection from '@/components/Brand/NewsletterSection'
import PricingSection from '@/components/Brand/PricingSection'
import Footer from '@/components/Footer'
import { Building2, TrendingUp, Users, Shield, Search, BarChart3 } from 'lucide-react'
import { useAnalytics } from '@/lib/analytics'
import { FixedAvatar } from '@/components/FixedAvatar'
import Testimonials from '@/components/Testimonials'

const brandFeatures = [
  {
    icon: Search,
    title: 'Encontre creators perfeitos',
    description: 'Use nossa IA avançada para descobrir creators que realmente se conectam com sua audiência e valores da marca.'
  },
  {
    icon: BarChart3,
    title: 'Análise de audiência',
    description: 'Entenda profundamente a audiência dos creators antes de fechar parcerias. Dados demográficos, interesses e comportamentos.'
  },
  {
    icon: Shield,
    title: 'Gestão completa de campanhas',
    description: 'Desde o briefing até a entrega final, gerencie tudo em uma plataforma única com aprovações e feedbacks centralizados.'
  },
  {
    icon: TrendingUp,
    title: 'ROI mensurável',
    description: 'Acompanhe conversões, vendas e impacto real das campanhas com relatórios detalhados e insights acionáveis.'
  },
  {
    icon: Users,
    title: 'Escalabilidade inteligente',
    description: 'Execute campanhas com dezenas de creators simultaneamente mantendo qualidade e controle total do processo.'
  },
  {
    icon: Building2,
    title: 'Compliance e segurança',
    description: 'Contratos automatizados, pagamentos seguros e conformidade com regulamentações de publicidade.'
  }
]

const brandTestimonials = [
  {
    content: 'Conseguimos aumentar nossa receita em 250% usando a Crafy para encontrar creators que realmente se conectam com nosso público.',
    author: {
      name: 'Carla Mendes',
      role: 'Diretora de Marketing',
      company: 'Fashion Forward',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'A plataforma nos poupou meses de trabalho manual. Agora conseguimos gerenciar 50+ creators em uma única campanha.',
    author: {
      name: 'Roberto Silva',
      role: 'Head of Growth',
      company: 'Tech Solutions',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'O ROI das nossas campanhas triplicou depois que começamos a usar os insights de audiência da Crafy.',
    author: {
      name: 'Lucia Santos',
      role: 'CMO',
      company: 'Beauty Brands',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'Finalmente uma plataforma que entende as necessidades das marcas corporativas. Compliance e resultados em primeiro lugar.',
    author: {
      name: 'Fernando Costa',
      role: 'Marketing Director',
      company: 'Global Corp',
      avatar: ''
    },
    rating: 5
  }
]


export default function BrandPage() {
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Brand Page - Crafy')
  }, [analytics])

  return (
    <div className="min-h-screen bg-white">
      {/* <FixedAvatar /> */}
      <Header />
      
      <main>
        {/* Hero específico do design */}
        <HeroBrand />

        
        <ClaraSection />

        <Testimonials
          // title="O que nossas marcas parceiras dizem"
          // testimonials={brandTestimonials}
        />

        {/* <FeatureSection
          title="Tudo que sua marca precisa para dominar o marketing de influência"
          subtitle="Da descoberta de creators aos relatórios de ROI, nossa plataforma cobre cada etapa da sua estratégia."
          features={brandFeatures}
        /> */}

        {/* <section className="py-24 sm:py-32 bg-crafy-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-crafy-gray-900 sm:text-4xl">
                Como funciona na prática
              </h2>
              <p className="mt-6 text-lg leading-8 text-crafy-gray-600">
                Três passos simples para transformar sua estratégia de marketing
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crafy-red text-white font-bold text-xl mb-6">
                    1
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-crafy-gray-900">
                    Defina seus objetivos
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-crafy-gray-600">
                    Conte-nos sobre sua marca, público-alvo e metas de campanha. Nossa IA analisa e sugere a estratégia ideal.
                  </dd>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crafy-red text-white font-bold text-xl mb-6">
                    2
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-crafy-gray-900">
                    Conecte com creators
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-crafy-gray-600">
                    Receba matches personalizados de creators alinhados com seus valores. Analise audiências e escolha os parceiros ideais.
                  </dd>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crafy-red text-white font-bold text-xl mb-6">
                    3
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-crafy-gray-900">
                    Meça resultados reais
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-crafy-gray-600">
                    Acompanhe performance em tempo real, otimize campanhas e comprove ROI com relatórios detalhados.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section> */}

        {/* Testimonials removidos conforme solicitação */}

        {/* <PartnerTopCreators /> */}
        
        <FeatureSection mode="brand" />

        <PricingSection />

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}