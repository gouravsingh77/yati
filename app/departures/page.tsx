import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, IndianRupee, MapPin, Mountain, Users } from "lucide-react"

export default function DeparturesPage() {
  // This is a placeholder. In a real application, you would fetch data from an API or database
  const departures = [
    {
      id: "adi-kailash-june-2024",
      title: "Adi Kailash & Om Parvat",
      date: "June 15, 2024",
      duration: "9 Days",
      difficulty: "Moderate",
      location: "Pithoragarh, Uttarakhand",
      price: "₹25,999",
      spotsTotal: 15,
      spotsLeft: 6,
      bookingDeadline: "May 14, 2025",
      category: "Spiritual Journey",
    },
    {
      id: "valley-of-flowers-july-2024",
      title: "Valley of Flowers Trek",
      date: "July 10, 2024",
      duration: "6 Days",
      difficulty: "Easy-Moderate",
      location: "Chamoli, Uttarakhand",
      price: "₹18,999",
      spotsTotal: 20,
      spotsLeft: 12,
      bookingDeadline: "June 10, 2024",
      category: "Nature Trek",
    },
    {
      id: "char-dham-august-2024",
      title: "Char Dham Yatra",
      date: "August 5, 2024",
      duration: "12 Days",
      difficulty: "Moderate",
      location: "Uttarakhand",
      price: "₹45,999",
      spotsTotal: 25,
      spotsLeft: 18,
      bookingDeadline: "July 5, 2024",
      category: "Pilgrimage",
    },
    {
      id: "kailash-mansarovar-september-2024",
      title: "Kailash Mansarovar Yatra",
      date: "September 1, 2024",
      duration: "15 Days",
      difficulty: "Difficult",
      location: "Tibet (via Uttarakhand)",
      price: "₹1,85,000",
      spotsTotal: 15,
      spotsLeft: 10,
      bookingDeadline: "July 15, 2024",
      category: "Pilgrimage",
    },
    {
      id: "panch-kedar-september-2024",
      title: "Panch Kedar Yatra",
      date: "September 15, 2024",
      duration: "12 Days",
      difficulty: "Moderate-Difficult",
      location: "Uttarakhand",
      price: "₹38,999",
      spotsTotal: 15,
      spotsLeft: 9,
      bookingDeadline: "August 15, 2024",
      category: "Spiritual Journey",
    },
    {
      id: "nanda-devi-october-2024",
      title: "Nanda Devi East Base Camp Trek",
      date: "October 5, 2024",
      duration: "8 Days",
      difficulty: "Difficult",
      location: "Pithoragarh, Uttarakhand",
      price: "₹18,999",
      spotsTotal: 12,
      spotsLeft: 8,
      bookingDeadline: "September 5, 2024",
      category: "Adventure Trek",
    },
  ]

  return (
    <div className="container py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upcoming Departures</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our scheduled group departures for spiritual journeys, pilgrimages, and adventure treks in the Himalayas.
          Book your spot today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departures.map((departure) => (
          <Card key={departure.id} className="overflow-hidden">
            <div className="bg-primary p-4 text-primary-foreground">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{departure.title}</h2>
                <Badge className="bg-primary-foreground text-primary">{departure.category}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Departure Date</p>
                    <p className="text-muted-foreground">{departure.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-muted-foreground">{departure.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Difficulty</p>
                    <p className="text-muted-foreground">{departure.difficulty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">{departure.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Price</p>
                    <p className="text-muted-foreground">{departure.price} per person</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Availability</p>
                    <p className="text-muted-foreground">
                      {departure.spotsLeft} spots left out of {departure.spotsTotal}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Booking Deadline:</span> {departure.bookingDeadline}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild>
                  <Link href={`/book/${departure.id}`}>Book Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`/destinations/${departure.id.split("-").slice(0, -2).join("-")}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

