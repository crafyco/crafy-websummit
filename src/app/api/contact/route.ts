import { NextRequest, NextResponse } from 'next/server'

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

    // Log submission (in production, you would save to database or send email)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      company,
      message,
      userType,
      timestamp: new Date().toISOString(),
    })

    // TODO: In production, integrate with:
    // - Email service (SendGrid, AWS SES, etc.)
    // - Database (save to contacts table)
    // - CRM system (HubSpot, Salesforce, etc.)
    
    // For now, we'll simulate a successful response
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
