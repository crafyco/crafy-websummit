import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, userType } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email via Resend (only if configured)
    if (resend) {
      try {
        await resend.emails.send({
        from: 'Crafy Website <onboarding@resend.dev>',
        to: ['vinicius@crafy.com.br', 'crafydrive@gmail.com', 'lucas@crafy.com.br'],
        subject: `🎯 New Contact Form - ${userType === 'brand' ? 'Brand' : 'Creator'}`,
        html: `
          <h2>Nova submissão de formulário de contato</h2>
          <p><strong>Tipo:</strong> ${userType === 'brand' ? '🏢 Brand' : '🎨 Creator'}</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
          <p><strong>Empresa/Canal:</strong> ${company || 'Não informado'}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message || 'Nenhuma mensagem'}</p>
          <hr>
          <p><small>Enviado em: ${new Date().toLocaleString('pt-BR')}</small></p>
        `,
        })
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Continue even if email fails
      }
    } else {
      console.warn('Resend not configured - email not sent')
    }

    console.log('Contact Form Submission processed:', { name, email, userType })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: { name, email, userType }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
