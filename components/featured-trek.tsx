import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Mountain, IndianRupee } from "lucide-react"

interface FeaturedTrekProps {
  title: string
  description: string
  image: string
  duration: string
  difficulty: string
  price: string
  startDate: string
  href: string
}

export default function FeaturedTrek({
  title,
  description,
  image,
  duration,
  difficulty,
  price,
  startDate,
  href,
}: FeaturedTrekProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            <span>From {price}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Next: {startDate}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href={href}>View Details</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={`${href}#book`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

