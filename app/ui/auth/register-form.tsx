'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../button';
import { createUser } from '@/app/lib/actions';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export type RegisterState = {
  error?: string | null;
  pending?: boolean;
};

export default function RegisterForm() {
  const initialState: RegisterState = { pending: false, error: null };
  const [state, setState] = useState(initialState);
  const formAction = async (data: FormData) => {
    if (!checkPasswordsMatch(data)) {
      setState((prev) => ({ ...prev, error: 'Passwords do not match' }));
      return;
    }
    setState((prev) => ({ ...prev, pending: true }));
    const response = await createUser(state, data);
    return response;
  };

  const checkPasswordsMatch = (data: FormData) => {
    const password = data.get('password') as string;
    const password2 = data.get('password2') as string;
    return password === password2;
  };

  return (
    <form action={formAction} className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="John Doe"
        required
      />
    </div>
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
      <div className="space-y-2">
        <Label htmlFor="password">Confirm Password</Label>
        <Input id="password2" type="password" name="password2" required />
      </div>
      <Button type="submit" className="w-full">
        Register
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
