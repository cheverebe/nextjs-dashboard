'use client';

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../../components/ui/card';
import { createNewsletter } from '../../../lib/actions';
import { NewsletterState } from '../../../lib/utils';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import NewsletterForm from '@/app/ui/newsletters/newsletter-form';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function Component() {
  const { data: session } = useSession();
  const initialState: NewsletterState = { pending: false, errors: {} };
  const [state, setState] = useState(initialState);
  const formAction = async (data: FormData) => {
    data.set('ownerId', session?.user?.id || '');
    const response = await createNewsletter(initialState, data);
    if (response?.errors || response?.generalError) {
      setState((prev) => ({
        ...prev,
        errors: response.errors,
        generalError: response.generalError,
      }));
    } else {
      toast.success('Newsletter created!');
    }
    return response;
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start lg:col-span-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/newsletters">Newsletters</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid auto-rows-max items-start lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Create New Newsletter</CardTitle>
            <CardDescription>
              Fill out the form to create a new newsletter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NewsletterForm
              formAction={formAction}
              errors={state.errors}
              generalError={state.generalError}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
