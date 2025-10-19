'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import { Sparkles, DollarSign, Calendar, Shield, Zap, Heart } from 'lucide-react'
import { useAnalytics } from '@/lib/analytics'

const creatorFeatures = [
  {
    icon: Sparkles,
    title: 'Oportunidades personalizadas',
    description: 'Receba convites de marcas que realmente se alinham com seu conteúdo, valores e audiência. Sem matches forçados.'
  },
  {
    icon: DollarSign,
    title: 'Pagamentos garantidos',
    description: 'Sistema de escrow protege seus pagamentos. Receba automaticamente após entrega aprovada. Sem atrasos ou complicações.'
  },
  {
    icon: Calendar,
    title: 'Gestão simplificada',
    description: 'Organize campanhas, prazos e entregas em um dashboard intuitivo. Mais tempo criando, menos tempo administrando.'
  },
  {
    icon: Shield,
    title: 'Contratos transparentes',
    description: 'Termos claros, direitos protegidos e negociações justas. Você mantém controle total sobre seu conteúdo.'
  },
  {
    icon: Zap,
    title: 'Crescimento acelerado',
    description: 'Ferramentas de analytics para otimizar seu conteúdo e insights sobre sua audiência para crescer mais rápido.'
  },
  {
    icon: Heart,
    title: 'Comunidade ativa',
    description: 'Conecte-se com outros creators, compartilhe experiências e aprenda estratégias que realmente funcionam.'
  }
]

const creatorTestimonials = [
  {
    content: 'Em 3 meses na Crafy já consegui triplicar minha receita com parcerias. Só trabalho com marcas que fazem sentido para mim.',
    author: {
      name: 'Julia Rodrigues',
      role: 'Content Creator',
      company: '@julialifestyle',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'Nunca mais me preocupei com pagamentos atrasados. A Crafy garante que sempre recebo no prazo combinado.',
    author: {
      name: 'Marcus Oliveira',
      role: 'Tech Reviewer',
      company: '@marcustech',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'O dashboard da Crafy me ajuda a gerenciar todas as minhas campanhas sem perder nenhum prazo. Game changer!',
    author: {
      name: 'Beatriz Silva',
      role: 'Fashion Influencer',
      company: '@beatrizstyle',
      avatar: ''
    },
    rating: 5
  },
  {
    content: 'As marcas que encontrei aqui são muito mais alinhadas com meu conteúdo. Parcerias autênticas que minha audiência ama.',
    author: {
      name: 'Diego Santos',
      role: 'Fitness Coach',
      company: '@diegofit',
      avatar: ''
    },
    rating: 5
  }
]

const creatorPricing = [
  {
    name: 'Creator Free',
    price: 'R$ 0',
    description: 'Comece gratuitamente e cresça com a gente',
    features: [
      'Até 3 campanhas simultâneas',
      'Pagamentos protegidos',
      'Dashboard básico',
      'Suporte da comunidade'
    ],
    trackingId: 'creator-free-plan'
  },
  {
    name: 'Creator Pro',
    price: 'R$ 97',
    description: 'Para creators que querem maximizar suas oportunidades',
    features: [
      'Campanhas ilimitadas',
      'Prioridade nos matches',
      'Analytics avançadas',
      'Suporte prioritário',
      'Ferramentas de crescimento',
      'Acesso antecipado a novidades'
    ],
    popular: true,
    trackingId: 'creator-pro-plan'
  }
]

export default function CreatorPage() {
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page(window.location.pathname, 'Creator Page - Crafy')
  }, [analytics])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero
          title="Monetize sua criatividade com parcerias autênticas"
          subtitle="Crafy para Creators"
          description="Conecte-se com marcas que valorizam seu trabalho, receba pagamentos garantidos e tenha controle total sobre suas parcerias. Criatividade com segurança financeira."
          ctaPrimary={{
            text: 'Começar gratuitamente',
            trackingId: 'creator-hero-cta-primary'
          }}
          ctaSecondary={{
            text: 'Ver creators de sucesso',
            trackingId: 'creator-hero-cta-secondary'
          }}
          showStats={true}
        />

        <FeatureSection
          title="Tudo que você precisa para crescer como creator"
          subtitle="Ferramentas profissionais para gerenciar parcerias, garantir pagamentos e escalar seu negócio de conteúdo."
          features={creatorFeatures}
        />

        <section className="py-24 sm:py-32 bg-crafy-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-crafy-gray-900 sm:text-4xl">
                Sua jornada de sucesso
              </h2>
              <p className="mt-6 text-lg leading-8 text-crafy-gray-600">
                De creator emergente a influenciador estabelecido em passos simples
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crafy-red text-white font-bold text-xl mb-6">
                    1
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-crafy-gray-900">
                    Crie seu perfil
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-crafy-gray-600">
                    Conte sua história, mostre seu estilo e defina seus valores. Nossa IA entende seu perfil e conecta você com marcas alinhadas.
                  </dd>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crafy-red text-white font-bold text-xl mb-6">
                    2
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-crafy-gray-900">
                    Receba oportunidades
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-crafy-gray-600">
                    Marcas interessadas no seu trabalho enviam convites personalizados. Você escolhe apenas as parcerias que fazem sentido.
                  </dd>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crafy-red text-white font-bold text-xl mb-6">
                    3
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-crafy-gray-900">
                    Crie e monetize
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-crafy-gray-600">
                    Produza conteúdo autêntico, entregue no prazo e receba pagamento garantido. Construa um negócio sustentável fazendo o que ama.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Testimonials
          title="Creators que transformaram suas carreiras"
          subtitle="Histórias reais de creators que encontraram na Crafy o parceiro ideal para crescer"
          testimonials={creatorTestimonials}
        />

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-crafy-red">Ganhos médios</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-crafy-gray-900 sm:text-4xl">
                Creators Crafy ganham até 5x mais
              </p>
              <p className="mt-6 text-lg leading-8 text-crafy-gray-600">
                Nossa plataforma conecta você com marcas dispostas a pagar justo pelo seu trabalho
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <dt className="text-sm font-semibold leading-6 text-crafy-gray-600">Micro influencers</dt>
                  <dd className="text-4xl font-bold tracking-tight text-crafy-red">R$ 800</dd>
                  <dd className="text-sm leading-6 text-crafy-gray-600 text-center mt-2">por campanha em média</dd>
                </div>
                <div className="flex flex-col items-center">
                  <dt className="text-sm font-semibold leading-6 text-crafy-gray-600">Mid-tier creators</dt>
                  <dd className="text-4xl font-bold tracking-tight text-crafy-red">R$ 3.200</dd>
                  <dd className="text-sm leading-6 text-crafy-gray-600 text-center mt-2">por campanha em média</dd>
                </div>
                <div className="flex flex-col items-center">
                  <dt className="text-sm font-semibold leading-6 text-crafy-gray-600">Top creators</dt>
                  <dd className="text-4xl font-bold tracking-tight text-crafy-red">R$ 15K+</dd>
                  <dd className="text-sm leading-6 text-crafy-gray-600 text-center mt-2">por campanha em média</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Pricing
          title="Planos que crescem com você"
          subtitle="Comece grátis e evolua conforme seus ganhos aumentam"
          plans={creatorPricing}
        />

        <Newsletter
          title="Dicas exclusivas para creators"
          description="Receba estratégias de monetização, tendências de conteúdo e oportunidades exclusivas para impulsionar sua carreira."
        />
      </main>

      <Footer />
    </div>
  )
}