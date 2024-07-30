
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { CopyIcon, ExpandIcon, FilePenIcon, InfoIcon, MenuIcon, NewspaperIcon, PlayIcon, SearchIcon, SendIcon, SettingsIcon, TrashIcon } from "@/lib/icons"
import { signOut } from "@/auth"

export default function Page() {
  return (
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <NewspaperIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Newsletters</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <PlayIcon className="h-5 w-5" />
                  Create Newsletter
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  Settings
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <InfoIcon className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search newsletters..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end"  className="bg-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <form
                  action={async () => {
                    'use server';
                    await signOut();
                  }}
                >
                  <button type="submit">Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
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
                      <TableHead className="hidden sm:table-cell">Sources</TableHead>
                      <TableHead className="hidden sm:table-cell">Frequency</TableHead>
                      <TableHead className="hidden md:table-cell">Recipients</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Weekly Digest</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">Tech, Business, Design</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Tech, Business, Design</TableCell>
                      <TableCell className="hidden sm:table-cell">Weekly</TableCell>
                      <TableCell className="hidden md:table-cell">10,000</TableCell>
                      <TableCell className="text-right">
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
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Monthly Roundup</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">Marketing, Sales, Growth</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Marketing, Sales, Growth</TableCell>
                      <TableCell className="hidden sm:table-cell">Monthly</TableCell>
                      <TableCell className="hidden md:table-cell">20,000</TableCell>
                      <TableCell className="text-right">
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
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Product Updates</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Product, Engineering, Design
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Product, Engineering, Design</TableCell>
                      <TableCell className="hidden sm:table-cell">Bi-weekly</TableCell>
                      <TableCell className="hidden md:table-cell">5,000</TableCell>
                      <TableCell className="text-right">
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
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Startup Trends</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          Startups, Entrepreneurship, Innovation
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Startups, Entrepreneurship, Innovation</TableCell>
                      <TableCell className="hidden sm:table-cell">Monthly</TableCell>
                      <TableCell className="hidden md:table-cell">15,000</TableCell>
                      <TableCell className="text-right">
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
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button>Create New Newsletter</Button>
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
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Send Newsletter</span>
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
      </div>
  )
}