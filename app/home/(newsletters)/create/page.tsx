'use client';

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../../components/ui/card"
import { Label } from '../../../../components/ui/label';
import { Input } from '../../../../components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';
import { Button } from '../../../../components/ui/button';
import { createNewsletter } from '../../../lib/actions';
import { NewsletterState } from "../../../lib/utils";
import { useSession } from "next-auth/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-hot-toast';

export default function Component() {
    const { data: session } = useSession();
    const initialState: NewsletterState = { pending: false, errors: {} };
    const [state, setState] = useState(initialState);
    const formAction = async (data: FormData) => {
        data.set('ownerId', session?.user?.id || '');
        const response = await createNewsletter(initialState, data);
        if (response?.errors || response?.generalError) {
            setState((prev) => ({ ...prev, errors: response.errors, generalError: response.generalError }));
        } else{
            toast.success('Newsletter created!');
        }
        return response;
    };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Create New Newsletter</CardTitle>
            <CardDescription>Fill out the form to create a new newsletter.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" action={formAction}>
              <div className="grid gap-2">
                <Label htmlFor="name">Newsletter Name</Label>
                <Input id="name" name="name" placeholder="Enter newsletter name" />
                <Input id="ownerId" name="ownerId" type="hidden" value={session?.user?.id || ''}/>
                {state.errors?.name && (
                    <div className="flex h-8 items-end space-x-1">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{state.errors.name}</p>
                    </div>
                )}
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="sources">News Sources</Label>
                <Textarea id="sources" placeholder="Enter news sources (one per line)" rows={4} />
              </div> */}
              <div className="grid gap-2">
                <Label htmlFor="frequency">Frequency</Label>
                <select id="frequency" name="frequency" className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option value="DAILY">Daily</option>
                  <option value="WEEKLY" selected>Weekly</option>
                  <option value="MONTHLY">Monthly</option>
                </select>
                {state.errors?.frequency && (
                    <div className="flex h-8 items-end space-x-1">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{state.errors.frequency}</p>
                    </div>
                )}
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="recipients">Recipients</Label>
                <Textarea id="recipients" placeholder="Enter recipient emails (one per line)" rows={4} />
              </div> */}
              <Button type="submit" className="justify-self-end">
                Create Newsletter
              </Button>
                {state.generalError && (
                    <div className="flex h-8 items-end space-x-1">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{state.generalError}</p>
                    </div>
                )}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}