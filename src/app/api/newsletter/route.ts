import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate required field
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // Send email notification via Resend (only if configured)
    if (resend) {
      try {
        await resend.emails.send({
        from: 'Crafy Newsletter <onboarding@resend.dev>',
        to: ['vinicius@crafy.com.br', 'crafydrive@gmail.com', 'lucas@crafy.com.br'],
        subject: '📧 Nova inscrição na Newsletter',
        html: `
          <h2>Nova inscrição na Newsletter</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fonte:</strong> Website</p>
          <hr>
          <p><small>Inscrito em: ${new Date().toLocaleString('pt-BR')}</small></p>
        `,
        })
      } catch (emailError) {
        console.error('Error sending newsletter notification:', emailError)
        // Continue even if email fails
      }
    } else {
      console.warn('Resend not configured - newsletter notification not sent')
    }

    console.log('Newsletter Subscription processed:', { email })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        email
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
