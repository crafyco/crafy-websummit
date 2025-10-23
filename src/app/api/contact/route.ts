import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

    // Save to JSON file
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contacts.json')

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or initialize empty array
    let contacts = []
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      contacts = JSON.parse(fileContent)
    }

    // Add new submission
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      message: message || '',
      userType,
      timestamp: new Date().toISOString(),
    }

    contacts.push(newContact)

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2))

    console.log('Contact Form Submission saved:', newContact)

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
