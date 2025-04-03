import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight } from "lucide-react"

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  // This is a placeholder. In a real application, you would fetch data based on the slug
  const destination = {
    title: "Adi Kailash & Om Parvat",
    description: "A sacred pilgrimage to the divine abode of Lord Shiva",
    longDescription:
      "Embark on a spiritual journey to the sacred Adi Kailash and witness the divine Om symbol naturally formed on Om Parvat. This pilgrimage offers breathtaking views of the Himalayas and a profound spiritual experience.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "Spiritual Journey",
    duration: "6 Days",
    difficulty: "Moderate",
    maxAltitude: "3,900m",
    bestSeason: "May to October",
    startingPoint: "Kathgodam",
    endingPoint: "Kathgodam",
    price: 25999,
    includes: [
      "Accommodation (hotels & camps)",
      "All meals during the trek",
      "Experienced local guides",
      "Permits and entry fees",
      "Transportation as per itinerary",
      "First aid and safety equipment",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Flights or trains to the starting point",
      "Porter charges (available at additional cost)",
      "Tips and gratuities",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dharchula",
        description:
          "Arrive in Dharchula and check into the hotel. Attend orientation and briefing session in the evening. Overnight stay in Dharchula.",
      },
      {
        day: "Day 2",
        title: "Dharchula to Tawaghat to Sirkha",
        description:
          "Drive from Dharchula to Tawaghat (22 km) and then trek to Sirkha village (8 km). Overnight stay in tents/homestay.",
      },
      {
        day: "Day 3",
        title: "Sirkha to Baling",
        description:
          "Trek from Sirkha to Baling village (12 km). Enjoy the beautiful views of the Himalayan peaks. Overnight stay in tents/homestay.",
      },
      {
        day: "Day 4",
        title: "Baling to Budhi",
        description:
          "Trek from Baling to Budhi village (10 km). Visit the ancient temple in Budhi. Overnight stay in tents/homestay.",
      },
      {
        day: "Day 5",
        title: "Budhi to Gunji",
        description:
          "Trek from Budhi to Gunji (14 km). Explore the beautiful Gunji village. Overnight stay in tents/homestay.",
      },
      {
        day: "Day 6",
        title: "Gunji to Nabidhang",
        description:
          "Trek from Gunji to Nabidhang (12 km). Get the first glimpse of Om Parvat. Overnight stay in tents.",
      },
      {
        day: "Day 7",
        title: "Nabidhang to Adi Kailash and back to Nabidhang",
        description: "Trek to Adi Kailash (8 km) and perform puja. Return to Nabidhang for overnight stay.",
      },
      {
        day: "Day 8",
        title: "Nabidhang to Gunji",
        description: "Trek back from Nabidhang to Gunji (12 km). Overnight stay in tents/homestay.",
      },
      {
        day: "Day 9",
        title: "Gunji to Dharchula",
        description: "Early morning drive from Gunji to Dharchula (65 km). Departure for onward journey.",
      },
    ],
    faqs: [
      {
        question: "How difficult is the Adi Kailash trek?",
        answer:
          "The Adi Kailash trek is rated as moderate in difficulty. It involves walking 8-14 km per day on mountain trails. While previous trekking experience is helpful, it's not mandatory. Good physical fitness is recommended.",
      },
      {
        question: "What is the best time to visit Adi Kailash?",
        answer:
          "The best time to visit Adi Kailash is from May to October. The weather is relatively stable during these months, and the trails are generally clear of snow.",
      },
      {
        question: "Do I need any special permits for this trek?",
        answer:
          "Yes, as Adi Kailash is in a restricted area near the Indo-Tibet border, you need an Inner Line Permit (ILP). We arrange this permit for all our trekkers as part of the package.",
      },
      {
        question: "What type of accommodation can I expect?",
        answer:
          "Accommodation varies from hotels in Dharchula to basic guesthouses, homestays, and camping in tents at higher altitudes. All accommodations are clean and comfortable, though basic in remote areas.",
      },
    ],
    upcomingDepartures: [
      {
        date: "June 15, 2024",
        spotsLeft: 6,
        price: 25999,
      },
      {
        date: "July 10, 2024",
        spotsLeft: 8,
        price: 28999,
      },
      {
        date: "August 5, 2024",
        spotsLeft: 10,
        price: 28999,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Badge className="mb-4 bg-primary/80 hover:bg-primary/90">{destination.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">{destination.description}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-8">{destination.longDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <Clock className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-sm text-muted-foreground">{destination.duration}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <Mountain className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Difficulty</h3>
                  <p className="text-sm text-muted-foreground">{destination.difficulty}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Max Altitude</h3>
                  <p className="text-sm text-muted-foreground">{destination.maxAltitude}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Best Season</h3>
                  <p className="text-sm text-muted-foreground">{destination.bestSeason}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <ArrowRight className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Starting Point</h3>
                  <p className="text-sm text-muted-foreground">{destination.startingPoint}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <ArrowRight className="h-6 w-6 text-primary mb-2 rotate-180" />
                  <h3 className="font-semibold">Ending Point</h3>
                  <p className="text-sm text-muted-foreground">{destination.endingPoint}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {destination.gallery.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${destination.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">Includes/Excludes</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary" className="pt-6">
                  <div className="space-y-6">
                    {destination.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 pb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {day.day}
                          </Badge>
                          <h3 className="font-semibold">{day.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="includes" className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {destination.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What's Not Included</h3>
                      <ul className="space-y-2">
                        {destination.excludes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="h-5 w-5 flex items-center justify-center text-red-500 mt-0.5">×</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="faqs" className="pt-6">
                  <div className="space-y-6">
                    {destination.faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4">
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book This Trek</CardTitle>
                  <CardDescription>Choose from upcoming departures</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold">₹{destination.price.toLocaleString()}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {destination.difficulty}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {destination.upcomingDepartures.map((departure, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-medium">{departure.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{departure.spotsLeft} spots left</p>
                        </div>
                        <Button asChild size="sm">
                          <Link href={`/book/${params.slug}-${departure.date.toLowerCase().replace(/\s+/g, "-")}`}>
                            Book Now
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href="/contact">Request Custom Date</Link>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Adi%20Kailash%20trek.%20Can%20you%20provide%20more%20information?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                      </svg>
                      Ask a Question on WhatsApp
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Destinations */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Similar Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore other spiritual journeys and adventure treks in the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Milam Glacier" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Milam Glacier Trek</CardTitle>
                <CardDescription>Trek through pristine valleys to one of the most beautiful glaciers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">8 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹28,999</p>
                  <Badge variant="outline">{destination.difficulty}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/milam-glacier">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Rudranath Trek" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Spiritual Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Rudranath Trek</CardTitle>
                <CardDescription>Journey to the mystical temple of Lord Shiva in the Garhwal Himalayas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">6 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹22,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/rudranath">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Khaliya Top" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Easy Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Khaliya Top Trek</CardTitle>
                <CardDescription>
                  Experience panoramic views of the Himalayan peaks from this beautiful meadow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">4 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹7,999</p>
                  <Badge variant="outline">Easy</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/khaliya-top">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">Book your trek today and embark on a journey of a lifetime</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={`/book/${params.slug}-${destination.upcomingDepartures[0].date.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Book Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="https://wa.me919259071008?text=I'm%20interested%20in%20the%20Adi%20Kailash%20trek.%20Can%20you%20provide%20more%20information?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                  </svg>
                  Contact via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

