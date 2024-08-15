import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CopyIcon, MenuIcon, SendIcon } from '@/lib/icons';
import { getNewsletterById } from '@/app/lib/actions';
import { Newsletter } from '@prisma/client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const newsletter: Newsletter | null = await getNewsletterById(id);

  if (!newsletter) {
    notFound();
  }

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
              <BreadcrumbPage>{newsletter.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid auto-rows-max items-start lg:col-span-3">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                {newsletter.name}
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <CopyIcon className="h-3 w-3" />
                  <span className="sr-only">Copy Newsletter ID</span>
                </Button>
              </CardTitle>
              <CardDescription>{newsletter.frequency}</CardDescription>
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
                    <MenuIcon className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white">
                  <Link href={`/newsletters/edit/${id}`}>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href={`/newsletters/${id}/delete`}>Delete</Link>
                  </DropdownMenuItem>
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
                  <span>{newsletter.frequency}</span>
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
