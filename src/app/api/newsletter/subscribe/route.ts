import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    await connectToDatabase();

    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 400 });
    }

    await NewsletterSubscriber.create({ email });
    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json({ message: 'Error subscribing to newsletter' }, { status: 500 });
  }
}