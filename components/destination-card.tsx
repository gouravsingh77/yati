import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain } from "lucide-react"

interface DestinationCardProps {
  title: string
  description: string
  image: string
  category: string
  duration: string
  difficulty: string
  href: string
}

export default function DestinationCard({
  title,
  description,
  image,
  category,
  duration,
  difficulty,
  href,
}: DestinationCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
      <Link href={href} className="block h-full">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <Badge className="absolute top-3 left-3 z-10">{category}</Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mountain className="h-4 w-4 text-muted-foreground" />
              <span>{difficulty}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

