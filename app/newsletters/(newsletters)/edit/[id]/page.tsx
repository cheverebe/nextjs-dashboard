'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { updateNewsletter, getNewsletterById } from '@/app/lib/actions';
import { NewsletterState } from '@/app/lib/utils';
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
import { Newsletter } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function Page({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const id = params.id;
  const [newsletter, setNewsletter] = useState<Newsletter | undefined>(
    undefined,
  );

  async function getNewsletter() {
    const newsletter = await getNewsletterById(id);
    if (!newsletter) {
      notFound();
    }
    newsletter && setNewsletter(newsletter);
  }

  useEffect(() => {
    getNewsletter();
  }, [id]);

  const initialState: NewsletterState = { pending: false, errors: {} };
  const [state, setState] = useState(initialState);

  const formAction = async (data: FormData) => {
    data.set('ownerId', session?.user?.id || '');
    const response = await updateNewsletter(initialState, id, data);
    if (response?.errors || response?.generalError) {
      setState((prev) => ({
        ...prev,
        errors: response.errors,
        generalError: response.generalError,
      }));
    } else {
      toast.success('Newsletter updated!');
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
              <BreadcrumbPage>
                {newsletter ? (
                  `Edit ${newsletter?.name}`
                ) : (
                  <Skeleton className="h-4 w-16 bg-primary" />
                )}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid auto-rows-max items-start lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>
              {newsletter ? (
                `Edit ${newsletter?.name}`
              ) : (
                <Skeleton className="h-6 w-32 bg-primary" />
              )}
            </CardTitle>
            <CardDescription>
              Fill out the form to update the newsletter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NewsletterForm
              formAction={formAction}
              errors={state.errors}
              generalError={state.generalError}
              initialData={newsletter}
              loading={!newsletter}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
