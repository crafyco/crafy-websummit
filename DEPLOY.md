# 🚀 Deploy da Crafy Web Summit

Guia rápido para fazer o deploy da Landing Page da Crafy.

## ⚡ Deploy Rápido na Vercel (Recomendado)

1. **Conectar repositório:**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Conecte sua conta GitHub/GitLab
   - Selecione este repositório

2. **Configurar variáveis de ambiente:**
   ```bash
   NEXT_PUBLIC_APP_URL=https://seu-dominio.vercel.app
   NEXT_PUBLIC_POSTHOG_KEY=seu_posthog_key_aqui
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```

3. **Deploy automático:**
   - Vercel detecta Next.js automaticamente
   - Build e deploy acontecem automaticamente
   - Deploy estará live em ~2 minutos

## 🔧 Deploy na Netlify

1. **Conectar repositório:**
   - Acesse [app.netlify.com/start](https://app.netlify.com/start)
   - Conecte seu repositório

2. **Configurações de build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

3. **Variáveis de ambiente:**
   - Adicione as mesmas variáveis da Vercel no dashboard

## 🌐 Deploy manual

### Usando servidor próprio:

```bash
# Build de produção
npm run build

# Iniciar servidor
npm run start
```

### Usando Docker:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Configuração de Analytics

### PostHog:
1. Criar conta em [posthog.com](https://posthog.com)
2. Obter Project Key
3. Adicionar `NEXT_PUBLIC_POSTHOG_KEY` nas env vars

### Vercel Analytics:
- Habilitado automaticamente na Vercel
- Para outros providers, instalar separadamente

## 🔐 Variáveis de Ambiente Necessárias

```env
# Obrigatórias para produção
NEXT_PUBLIC_APP_URL=https://seu-dominio.com

# Opcionais para analytics
NEXT_PUBLIC_POSTHOG_KEY=seu_key_aqui
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## ✅ Checklist Pré-Deploy

- [ ] ✅ Build local funcionando (`npm run build`)
- [ ] ✅ Tipos TypeScript validados (`npm run type-check`)
- [ ] ✅ Linting sem erros (`npm run lint`)
- [ ] ✅ Variáveis de ambiente configuradas
- [ ] ✅ URLs de produção atualizadas
- [ ] ✅ Analytics configurado (opcional)

## 🎯 URLs da aplicação

Depois do deploy, você terá:

- **Home:** `/` - Landing page principal
- **Brand:** `/brand` - Página para marcas
- **Creator:** `/creator` - Página para creators

## 📈 Performance esperada

- **Lighthouse Score:** 90+ em todas as métricas
- **First Load:** ~200kB
- **Build Time:** ~30-45 segundos
- **Deploy Time:** ~2-3 minutos

## 🚨 Troubleshooting

### Build falhando?
```bash
npm run clean
npm install
npm run build
```

### Tipos TypeScript com erro?
```bash
npm run type-check
```

### Analytics não funcionando?
- Verificar env vars no dashboard do provider
- Verificar console do browser para erros

---

**🎉 Deploy concluído! Sua landing page está pronta para o Web Summit Lisboa 2024!**