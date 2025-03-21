import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Code, Home, Menu, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchDialog } from "@/components/search-dialog"
import { NotificationDropdown } from "@/components/notification-dropdown"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GDG Dashboard",
  description: "Google Developer Groups Community Dashboard",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <MobileNav />
                <div className="ml-auto flex items-center space-x-4">
                  <SearchDialog />
                  <NotificationDropdown />
                  <ThemeToggle />
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-google-blue text-white hover:bg-google-blue/90 border-none"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-google-green text-white hover:bg-google-green/90">
                    <Link href="/join">Join GDG</Link>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1 gdg-pattern">{children}</main>
            <footer className="border-t py-6 md:py-0 bg-gradient-to-r from-google-blue/5 to-google-green/5 dark:from-google-blue/10 dark:to-google-green/10">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} Google Developer Groups. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <div className="relative h-10 w-10 overflow-hidden">
          <Image src="/images/gdg-logo.png" alt="GDG Logo" fill className="object-contain" priority />
        </div>
        <span className="hidden font-bold sm:inline-block">GDG Dashboard</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/" className="transition-colors hover:text-primary">
          Home
        </Link>
        <Link href="/events" className="transition-colors hover:text-primary">
          Events
        </Link>
        <Link href="/speakers" className="transition-colors hover:text-primary">
          Speakers
        </Link>
        <Link href="/projects" className="transition-colors hover:text-primary">
          Projects
        </Link>
        <Link href="/resources" className="transition-colors hover:text-primary">
          Resources
        </Link>
        <Link href="/contact" className="transition-colors hover:text-primary">
          Contact
        </Link>
      </nav>
    </div>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image src="/images/gdg-logo.png" alt="GDG Logo" fill className="object-contain" />
          </div>
          <span className="font-bold">GDG Dashboard</span>
        </Link>
        <nav className="mt-8 flex flex-col space-y-3">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link href="/events" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Calendar className="h-5 w-5" />
            Events
          </Link>
          <Link href="/speakers" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Users className="h-5 w-5" />
            Speakers
          </Link>
          <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Code className="h-5 w-5" />
            Projects
          </Link>
          <Link href="/resources" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
            </svg>
            Resources
          </Link>
          <Link href="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
            </svg>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

import "./globals.css"

import "./globals.css"



import './globals.css'