import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';

export async function GET() {
  try {
    await connectToDatabase();
    const subscribers = await NewsletterSubscriber.find({}, 'email');
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json({ message: 'Error fetching subscribers' }, { status: 500 });
  }
}