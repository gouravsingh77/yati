"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight } from "lucide-react"

export default function PanchachuliPage() {
  const destination = {
    title: "Panchachuli Base Camp Express",
    description: "Short trek to the base of the magnificent five peaks of Panchachuli",
    longDescription:
      "This 5-day express version of the Panchachuli Base Camp trek takes you to stunning viewpoints to admire the Panchachuli massif - a group of five snow-capped peaks resembling the five cooking hearths of the Pandavas. While shorter than the classic trek, it still offers breathtaking views of the Himalayas and a taste of the beautiful Darma Valley region.",
    image: "/himalayas.jpg?height=600&width=1200&text=Panchachuli+Express",
    gallery: [
      "/panchachuli/panchachuli.jpeg?height=400&width=600&text=Panchachuli+Viewpoint+1",
      "/panchachuli/panchachuli1.jpeg?height=400&width=600&text=Panchachuli+Viewpoint+2",
      "/panchachuli/panchachuli2.jpeg?height=400&width=600&text=Dugtu+Village",
      "/panchachuli/panchachuli3.jpg?height=400&width=600&text=Darma+Valley",
    ],
    category: "Adventure Trek",
    duration: "5 Days",
    difficulty: "Moderate",
    maxAltitude: "3,800m",
    bestSeason: "May to June & September to October",
    startingPoint: "Kathgodam",
    endingPoint: "Kathgodam",
    price: 9999,
    includes: [
      "Accommodation (hotels & guest houses)",
      "All meals during the trek",
      "Experienced local guides",
      "Permits and entry fees",
      "Transportation including 4x4 vehicles",
      "First aid and safety equipment",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Flights or trains to Kathgodam",
      "Porter charges (available at additional cost)",
      "Tips and gratuities",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Dharchula",
        description:
          "Drive from Kathgodam to Dharchula (260 km, 10-11 hours) through beautiful Kumaon landscapes. Overnight stay in a comfortable guest house at Dharchula.",
      },
      {
        day: "Day 2",
        title: "Dharchula to Dugtu by 4x4",
        description:
          "Scenic drive from Dharchula to Dugtu village in a 4x4 vehicle (45 km, 3-4 hours). The rugged mountain road offers spectacular views. Acclimatization walk in the evening. Overnight stay in a traditional guest house.",
      },
      {
        day: "Day 3",
        title: "Trek to Zero Point",
        description:
          "Trek from Dugtu to Zero Point (8 km, 5-6 hours). The trail offers panoramic views of the Panchachuli peaks and surrounding Himalayan ranges. Overnight camping at Zero Point with bonfire (weather permitting).",
      },
      {
        day: "Day 4",
        title: "Return to Dharchula",
        description:
          "Trek back to Dugtu (8 km, 4-5 hours) and drive back to Dharchula. Celebrate your successful trek with the team. Overnight stay in guest house.",
      },
      {
        day: "Day 5",
        title: "Dharchula to Kathgodam",
        description:
          "Drive back to Kathgodam (260 km, 10-11 hours) with unforgettable memories of the Himalayas. Trip concludes on arrival in Kathgodam.",
      },
    ],
    faqs: [
      {
        question: "How is this different from the regular Panchachuli Base Camp trek?",
        answer:
          "This is a shorter 5-day version focusing on reaching the best viewpoints rather than the actual base camp. It's ideal for those with limited time who still want to experience the beauty of the Panchachuli region.",
      },
      {
        question: "What is the difficulty level of this trek?",
        answer:
          "The trek is rated as moderate. While shorter than the full base camp trek, it still involves 5-6 hours of trekking on Day 3 with some steep sections. Good physical fitness is recommended.",
      },
      {
        question: "What type of accommodation can I expect?",
        answer:
          "Accommodation includes comfortable guest houses in Dharchula and Dugtu, and camping at Zero Point. All accommodations are clean and comfortable, though basic in remote areas.",
      },
      {
        question: "Do I need special permits for this trek?",
        answer:
          "Yes, as this area is near the Indo-Tibet border, you need an Inner Line Permit (ILP). We arrange this permit for all our trekkers as part of the package.",
      },
    ],
    upcomingDepartures: [
      {
        date: "Aug 15, 2025",
        spotsLeft: 6,
        price: 9999,
      },
      {
        date: "Sep 5, 2025",
        spotsLeft: 8,
        price: 9999,
      },
      {
        date: "October 10, 2025",
        spotsLeft: 10,
        price: 9999,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{destination.title}</h1>
          <p className="text-base md:text-xl max-w-2xl text-gray-200">{destination.description}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-8">{destination.longDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
                          <Link href={`/book/panchachuli-express-${departure.date.toLowerCase().replace(/\s+/g, "-")}`}>
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
                      href={`https://wa.me/919259071008?text=I'm%20interested%20in%20the%20${encodeURIComponent(destination.title)}%20trek.%20Can%20you%20provide%20more%20information?`}
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
      <section className="py-12 md:py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Similar Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore other adventure treks in the Himalayas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="/pindari/pindari.jpeg?height=400&width=600&text=Pindari+Glacier"
                  alt="Pindari Glacier"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pindari Glacier Trek</CardTitle>
                <CardDescription>Trek to one of the most accessible glaciers in the Kumaon Himalayas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">7 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹12,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/pindari-glacier">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="/ralam/ralam2.jpeg?height=400&width=600&text=Ralam+Dhura"
                  alt="Ralam Dhura"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Ralam Dhura Trek</CardTitle>
                <CardDescription>Short trek to stunning viewpoints in the Kumaon Himalayas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">7 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹18,999</p>
                  <Badge variant="outline">Challenging</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/ralam-dhura">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="/treks/trek.jpeg?height=400&width=600&text=Kuari+Pass"
                  alt="Kuari Pass"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Classic Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Kuari Pass Trek</CardTitle>
                <CardDescription>Classic trek offering spectacular views of Nanda Devi and other peaks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">6 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹9,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/kuari-pass">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">Book your trek today and embark on a journey of a lifetime</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book/panchachuli-express">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href={`https://wa.me/919259071008?text=I'm%20interested%20in%20the%20${encodeURIComponent(destination.title)}%20trek.%20Can%20you%20provide%20more%20information?`}
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