import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Mountain } from "lucide-react"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Mountain className="h-6 w-6" />
        <span className="font-bold inline-block">Yati Dham</span>
      </Link>
      <nav className={cn("hidden md:flex items-center gap-6", className)} {...props}>
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
          About Us
        </Link>
        <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
          Services
        </Link>
        <Link href="/destinations" className="text-sm font-medium transition-colors hover:text-primary">
          Destinations
        </Link>
        <Link href="/packages" className="text-sm font-medium transition-colors hover:text-primary">
          Packages
        </Link>
        <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
          Gallery
        </Link>
        <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
          Blog
        </Link>
      </nav>
    </div>
  )
}

