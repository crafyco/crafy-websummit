# Setup de Email com Resend

## Passo 1: Criar conta no Resend

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta gratuita (3.000 emails/mês)
3. Verifique seu email

## Passo 2: Obter API Key

1. No dashboard do Resend, vá em **API Keys**
2. Clique em **Create API Key**
3. Dê um nome (ex: "Crafy Website")
4. Copie a chave gerada (começa com `re_`)

## Passo 3: Configurar localmente

Adicione no arquivo `.env.local`:

```env
RESEND_API_KEY=re_sua_chave_aqui
```

## Passo 4: Configurar na Vercel

1. Acesse o dashboard da Vercel
2. Vá no seu projeto
3. Settings → Environment Variables
4. Adicione:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_sua_chave_aqui`
   - **Environments**: Production, Preview, Development
5. Clique em **Save**

## Passo 5: Fazer redeploy

Após adicionar a variável de ambiente, faça um novo deploy:

```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

## Emails configurados

Os emails serão enviados para:
- vinicius@crafy.com.br
- crafydrive@gmail.com
- lucas@crafy.com.br

## Tipos de notificação

### 📧 Formulário de Contato
- Subject: `🎯 New Contact Form - Brand/Creator`
- Contém: nome, email, telefone, empresa, mensagem, tipo

### 📧 Newsletter
- Subject: `📧 Nova inscrição na Newsletter`
- Contém: email, fonte, data

## Testar localmente

1. Configure o `.env.local` com sua API key
2. Rode `npm run dev`
3. Preencha um formulário no site
4. Verifique se o email chegou

## Troubleshooting

### Email não chega
- Verifique se a API key está correta
- Confira se adicionou na Vercel
- Redeploy o projeto
- Verifique spam/lixeira

### Erro de autenticação
- Certifique-se que a API key começa com `re_`
- Recrie a API key no Resend se necessário

## Plano Gratuito

✅ 3.000 emails/mês  
✅ 100 emails/dia  
✅ Sem cartão de crédito necessário

Para mais emails, upgrade em [resend.com/pricing](https://resend.com/pricing)
