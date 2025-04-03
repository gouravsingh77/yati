import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm" className="hidden md:flex gap-2">
              <Link href="tel:+919259071008">
                <Phone className="h-4 w-4" />
                <span>+91-9259071008</span>
              </Link>
            </Button>
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 py-6">
                  <Link href="/" className="text-lg font-semibold">
                    Yati Dham
                  </Link>
                  <div className="grid gap-3">
                    <Link href="/" className="text-sm font-medium">
                      Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium">
                      About Us
                    </Link>
                    <Link href="/services" className="text-sm font-medium">
                      Our Services
                    </Link>
                    <Link href="/destinations" className="text-sm font-medium">
                      Destinations
                    </Link>
                    <Link href="/packages" className="text-sm font-medium">
                      Packages
                    </Link>
                    <Link href="/testimonials" className="text-sm font-medium">
                      Testimonials
                    </Link>
                    <Link href="/gallery" className="text-sm font-medium">
                      Gallery
                    </Link>
                    <Link href="/blog" className="text-sm font-medium">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-sm font-medium">
                      Contact Us
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    <Button asChild size="sm">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="tel:+919259071008">Call Us</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}

