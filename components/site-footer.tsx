import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="font-bold text-xl">Yati Dham</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Specializing in spiritual journeys, adventure treks, and Himalayan explorations with a focus on
              sustainable tourism.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61574082925095" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/yatidham/" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-primary">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-muted-foreground hover:text-primary">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/adi-kailash" className="text-muted-foreground hover:text-primary">
                  Adi Kailash & Om Parvat
                </Link>
              </li>
              <li>
                <Link href="/destinations/milam-glacier" className="text-muted-foreground hover:text-primary">
                  Milam Glacier Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/rudranath" className="text-muted-foreground hover:text-primary">
                  Rudranath Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/khaliya-top" className="text-muted-foreground hover:text-primary">
                  Khaliya Top Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/pindari-glacier" className="text-muted-foreground hover:text-primary">
                  Pindari Glacier Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/nanda-devi" className="text-muted-foreground hover:text-primary">
                  Nanda Devi Base Camp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Nainital Road Haldwani, Uttarakhand, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <Link href="tel:+919259071008" className="text-muted-foreground hover:text-primary">
                  +91 9259071008
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <Link href="mailto:yatidham1008@gmail.com" className="text-muted-foreground hover:text-primary">
                  yatidham1008@gmail.com
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="max-w-[220px]" />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Yati Dham. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

