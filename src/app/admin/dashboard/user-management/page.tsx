'use client';

import { useState, useEffect } from 'react';

export default function UserManagement() {
  const [subscribers, setSubscribers] = useState([]);
  const [newsletterContent, setNewsletterContent] = useState('');

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/newsletter/subscribers');
      if (response.ok) {
        const data = await response.json();
        setSubscribers(data);
      } else {
        throw new Error('Failed to fetch subscribers');
      }
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  const handleSendNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newsletterContent }),
      });

      if (response.ok) {
        alert('Newsletter sent successfully!');
        setNewsletterContent('');
      } else {
        throw new Error('Failed to send newsletter');
      }
    } catch (error) {
      console.error('Error sending newsletter:', error);
      alert('Failed to send newsletter. Please try again.');
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <h2>Newsletter Subscribers</h2>
      <ul>
        {subscribers.map((subscriber: { email: string }) => (
          <li key={subscriber.email}>{subscriber.email}</li>
        ))}
      </ul>
      <h2>Send Newsletter</h2>
      <form onSubmit={handleSendNewsletter}>
        <textarea
          value={newsletterContent}
          onChange={(e) => setNewsletterContent(e.target.value)}
          placeholder="Enter newsletter content"
          required
        />
        <button type="submit">Send Newsletter</button>
      </form>
    </div>
  );
}