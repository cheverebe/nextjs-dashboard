'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../button';
import { authenticate } from '@/app/lib/actions';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export type State = {
  error?: string | null;
  pending?: boolean;
};

export default function LoginForm() {
  const initialState: State = { pending: false, error: null };
  const [state, setState] = useState(initialState);
  const formAction = async (data: FormData) => {
    setState((prev) => ({ ...prev, pending: true }));
    const response = await authenticate(state, data);
    if (response) {
      setState((prev) => ({ pending: false, error: response }));
    }
    return response;
  };

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" required />
      </div>
      <Button type="submit" className="w-full">
        Sign in
      </Button>
      <div className="flex h-8 items-end space-x-1">
        {state.error && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state.error}</p>
          </>
        )}
      </div>
    </form>
  );
}
