'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real application, you would send this to your backend
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: 'Subscribed!',
          description: "You've successfully subscribed to our newsletter.",
        });
        setEmail('');
        router.refresh();
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <h2 className="text-center text-2xl font-bold">
        Subscribe to This Newsletter
      </h2>
      <p className="text-center text-muted-foreground">
        Stay updated with the latest news and articles
      </p>
      <div className="mx-auto flex max-w-md">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
          aria-label="Email address"
        />
        <Button type="submit" disabled={isLoading} className="ml-2">
          {isLoading ? (
            'Subscribing...'
          ) : (
            <>
              Subscribe <Mail className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
