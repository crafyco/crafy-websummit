# Crafy Web Summit Landing Page

Landing page moderna e responsiva da Crafy para o Web Summit Lisboa 2024, construída com Next.js 14, TypeScript, TailwindCSS e Framer Motion.

## 🚀 Features

- **Design Moderno**: Interface limpa e elegante com animações suaves
- **100% Responsivo**: Otimizado para desktop, tablet e mobile
- **Analytics Integrado**: Vercel Analytics + PostHog para tracking completo
- **Performance Otimizada**: Lazy loading, otimização de imagens e build otimizado
- **TypeScript**: Type safety em todo o projeto
- **Animações**: Framer Motion para transições suaves

## 🛠 Stack Tecnológica

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Styling**: TailwindCSS + CSS personalizado
- **Animações**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + PostHog
- **Deploy**: Vercel / Netlify ready

## 📁 Estrutura do Projeto

```
crafy-websummit/
├── src/
│   ├── app/
│   │   ├── brand/          # Página específica para marcas
│   │   ├── creator/        # Página específica para creators
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página home
│   │   └── globals.css     # Estilos globais
├── components/
│   ├── ui/                 # Componentes base
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── Hero.tsx           # Seção hero
│   ├── FeatureSection.tsx # Seção de features
│   ├── Testimonials.tsx   # Depoimentos
│   ├── Newsletter.tsx     # Inscrição newsletter
│   ├── Pricing.tsx        # Planos e preços
│   └── Footer.tsx         # Rodapé
├── lib/
│   ├── utils.ts          # Utilitários
│   └── analytics.ts      # Sistema de analytics
└── public/               # Assets estáticos
```

## 🏃‍♂️ Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:
```bash
git clone [repository-url]
cd crafy-websummit
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📊 Analytics e Tracking

O projeto inclui sistema completo de analytics para rastrear:

- **Page Views**: Visualizações de página
- **Button Clicks**: Cliques em botões e CTAs  
- **Form Submissions**: Inscrições na newsletter
- **Custom Events**: Eventos personalizados

### Configuração do PostHog

1. Crie uma conta no [PostHog](https://posthog.com)
2. Obtenha sua chave de projeto
3. Adicione no `.env.local`:
```
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
```

### Vercel Analytics

Automaticamente habilitado quando deployed na Vercel. Para outros providers, configure manualmente.

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

1. Conecte seu repositório na [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no dashboard
3. Deploy automático a cada push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy na Netlify

1. Conecte seu repositório na [Netlify](https://netlify.com)
2. Configure build command: `npm run build`
3. Configure publish directory: `.next`
4. Adicione variáveis de ambiente

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## 🎨 Páginas Incluídas

### Página Principal (`/`)
- Hero section com CTAs principais
- Features da plataforma
- Depoimentos de clientes
- Planos e preços
- Newsletter signup

### Página Brand (`/brand`)
- Focada em empresas e marcas
- Features específicas para B2B
- Cases de sucesso corporativos
- Planos enterprise

### Página Creator (`/creator`) 
- Focada em criadores de conteúdo
- Benefícios para influenciadores
- Histórias de creators de sucesso
- Planos para indivíduos

## ⚡ Performance

- **Core Web Vitals**: Otimizado para pontuação 90+
- **Lazy Loading**: Imagens e componentes carregados sob demanda
- **Code Splitting**: Código dividido automaticamente pelo Next.js
- **Compressão**: Assets otimizados para produção

## 🎯 SEO

- **Meta Tags**: Configuradas para todas as páginas
- **Open Graph**: Otimizado para compartilhamento social
- **Schema Markup**: Dados estruturados incluídos
- **Sitemap**: Gerado automaticamente

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linter
npm run type-check   # Verificação de tipos TypeScript
npm run preview      # Build + preview local
npm run clean        # Limpa cache e builds
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📱 Responsividade

O projeto é 100% responsivo e otimizado para:

- **Desktop**: 1920px+
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px 
- **Mobile**: 320px - 767px

## 🎨 Customização

### Cores

As cores da Crafy estão configuradas no `tailwind.config.ts`:

```typescript
crafy: {
  red: "#E53E3E",
  "red-dark": "#C53030",
  gray: {
    50: "#F7FAFC",
    // ... outras variações
  }
}
```

### Componentes

Todos os componentes são modulares e reutilizáveis, localizados na pasta `/components`.

## 📝 Licença

Este projeto é propriedade da Crafy. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o Web Summit Lisboa 2024**
