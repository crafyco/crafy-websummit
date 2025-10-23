import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

    // Save to JSON file
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'newsletter.json')

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or initialize empty array
    let subscribers = []
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      subscribers = JSON.parse(fileContent)
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find((sub: any) => sub.email === email)
    if (existingSubscriber) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Already subscribed to newsletter',
          email
        },
        { status: 200 }
      )
    }

    // Add new subscriber
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      timestamp: new Date().toISOString(),
      source: 'website',
    }

    subscribers.push(newSubscriber)

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2))

    console.log('Newsletter Subscription saved:', newSubscriber)

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
