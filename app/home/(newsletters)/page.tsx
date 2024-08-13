'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
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
import { Separator } from '@/components/ui/separator';
import {
  CopyIcon,
  ExpandIcon,
  FilePenIcon,
  SendIcon,
  TrashIcon,
} from '@/lib/icons';
import { useEffect, useState } from 'react';
import { getNewsletters } from '@/app/lib/actions';
import { Newsletter } from '@prisma/client';

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
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
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
                      Weekly
                    </TableCell>
                    <TableCell
                      key="recipients"
                      className="hidden md:table-cell"
                    >
                      10,000
                    </TableCell>
                    <TableCell key="actions" className="text-right">
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <FilePenIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
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
            <Link href="/home/create">
              <Button>Create New Newsletter</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Weekly Digest
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <CopyIcon className="h-3 w-3" />
                  <span className="sr-only">Copy Newsletter ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Tech, Business, Design</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <SendIcon className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Send Newsletter
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <ExpandIcon className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Newsletter Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sources</span>
                  <span>Tech, Business, Design</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Frequency</span>
                  <span>Weekly</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Recipients</span>
                  <span>10,000</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <div className="font-semibold">Upcoming Schedule</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Next Issue</span>
                  <span>July 29, 2024</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-" />
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
