import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';
import { sendNewsletter } from '@/actions';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    await connectToDatabase();

    const subscribers = await NewsletterSubscriber.find({}, 'email');
    const subscriberEmails = subscribers.map(sub => sub.email);

    const result = await sendNewsletter(subscriberEmails, content);

    if (result.success) {
      return NextResponse.json({ message: 'Newsletter sent successfully' });
    } else {
      throw new Error(result.error || 'Failed to send newsletter');
    }
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return NextResponse.json({ message: 'Error sending newsletter' }, { status: 500 });
  }
}