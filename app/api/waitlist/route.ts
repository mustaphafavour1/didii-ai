import { NextResponse } from 'next/server'

// Simple in-memory stub — replace with your CRM/DB integration
const waitlist: string[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
    }

    const normalised = email.trim().toLowerCase()

    if (waitlist.includes(normalised)) {
      return NextResponse.json(
        { success: true, message: "You're already on the list. We'll reach out soon." },
        { status: 200 }
      )
    }

    waitlist.push(normalised)

    // Log for now; wire to SendGrid / Mailchimp / Supabase as needed
    console.log(`[didii waitlist] ${normalised} — total: ${waitlist.length}`)

    return NextResponse.json(
      { success: true, message: "E don set. We'll reach you sharp sharp." },
      { status: 201 }
    )
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 })
  }
}
