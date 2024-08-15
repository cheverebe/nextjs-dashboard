'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { EyeIcon, FilePenIcon, TrashIcon } from '@/lib/icons';
import { useEffect, useState } from 'react';
import { getNewsletters } from '@/app/lib/actions';
import { Newsletter } from '@prisma/client';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

export default function Page() {
  const [newsletters, setNewsletters] = useState<Newsletter[] | undefined>(
    undefined,
  );

  async function fetchNewsletters() {
    const newsletters = await getNewsletters();
    setNewsletters(newsletters);
  }

  useEffect(() => {
    fetchNewsletters();
  }, []);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start lg:col-span-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Newsletters</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid auto-rows-max items-start lg:col-span-3">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Newsletters</CardTitle>
            <CardDescription>Manage your newsletters.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Sources
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Frequency
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Recipients
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newsletters?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No newsletters found.
                    </TableCell>
                  </TableRow>
                )}
                {newsletters === undefined && (
                  <TableRow>
                    <TableCell className="h-24 text-center">
                      <Skeleton className="h-5 w-3/5 rounded-lg bg-primary" />
                    </TableCell>
                    <TableCell key="sources" className="hidden sm:table-cell">
                      <Skeleton className="h-5 w-3/5 rounded-lg bg-primary" />
                    </TableCell>
                    <TableCell key="frequency" className="hidden sm:table-cell">
                      <Skeleton className="h-5 w-3/5 rounded-lg bg-primary" />
                    </TableCell>
                    <TableCell
                      key="recipients"
                      className="hidden md:table-cell"
                    >
                      <Skeleton className="h-5 w-3/5 rounded-lg bg-primary" />
                    </TableCell>
                    <TableCell key="actions" className="text-right">
                      <Skeleton className="h-5 w-3/5 rounded-lg bg-primary" />
                    </TableCell>
                  </TableRow>
                )}
                {newsletters?.map((newsletter) => (
                  <TableRow key={newsletter.id}>
                    <TableCell key="name">
                      <div className="font-medium">{newsletter.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Tech, Business, Design
                      </div>
                    </TableCell>
                    <TableCell key="sources" className="hidden sm:table-cell">
                      Tech, Business, Design
                    </TableCell>
                    <TableCell key="frequency" className="hidden sm:table-cell">
                      {newsletter.frequency}
                    </TableCell>
                    <TableCell
                      key="recipients"
                      className="hidden md:table-cell"
                    >
                      10,000
                    </TableCell>
                    <TableCell key="actions" className="text-right">
                      <Link
                        href={`/newsletters/${newsletter.id}`}
                        className="mr-2"
                      >
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                        >
                          <EyeIcon className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                      </Link>
                      <Link
                        href={`/newsletters/edit/${newsletter.id}`}
                        className="mr-2"
                      >
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                        >
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </Link>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Link href="/newsletters/create">
              <Button>Create New Newsletter</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
