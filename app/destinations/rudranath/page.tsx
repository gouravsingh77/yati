import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight, AlertCircle } from "lucide-react"

export default function RudranathPage() {
  // Destination specific data
  const destination = {
    title: "Rudranath Trek",
    description: "Journey to the mystical temple of Lord Shiva in the Garhwal Himalayas",
    longDescription:
      "Trek to Rudranath, one of the Panch Kedar temples, where Lord Shiva's face is worshipped. Experience spiritual bliss amidst beautiful meadows and forests. This moderate trek takes you through dense forests, beautiful meadows, and remote villages to reach the sacred Rudranath temple, which is believed to be the place where Lord Shiva's face appeared.",
    image: "/himalayas.jpg?height=600&width=1200&text=Rudranath+Trek",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Rudranath+Temple",
      "/placeholder.svg?height=400&width=600&text=Panar+Bugyal",
      "/placeholder.svg?height=400&width=600&text=Garhwal+Himalayas",
      "/placeholder.svg?height=400&width=600&text=Trek+Route",
    ],
    category: "Spiritual Trek",
    duration: "6 Days",
    difficulty: "Moderate",
    maxAltitude: "3,600m",
    bestSeason: "May to October",
    startingPoint: "Sagar (near Gopeshwar)",
    endingPoint: "Sagar",
    price: 22999,
    includes: [
      "Accommodation (guesthouses & camps)",
      "All meals during the trek",
      "Experienced local guides",
      "Permits and entry fees",
      "Transportation as per itinerary",
      "First aid and safety equipment",
      "Trekking equipment (tents, sleeping bags, etc.)",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Flights or trains to the starting point",
      "Porter charges (available at additional cost)",
      "Tips and gratuities",
      "Personal trekking gear (boots, clothing, etc.)",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Gopeshwar/Sagar",
        description:
          "Arrive in Gopeshwar or Sagar village. Check into the guesthouse and attend orientation session. Overnight stay in guesthouse.",
      },
      {
        day: "Day 2",
        title: "Sagar to Lyuti Bugyal",
        description:
          "Trek from Sagar to Lyuti Bugyal (8 km, 5-6 hours). The trail passes through dense forests and beautiful meadows. Overnight stay in tents.",
      },
      {
        day: "Day 3",
        title: "Lyuti Bugyal to Panar Bugyal",
        description:
          "Trek from Lyuti Bugyal to Panar Bugyal (6 km, 4-5 hours). Enjoy the beautiful views of the surrounding peaks. Overnight stay in tents.",
      },
      {
        day: "Day 4",
        title: "Panar Bugyal to Rudranath Temple and back to Panar",
        description:
          "Trek from Panar Bugyal to Rudranath Temple (4 km, 3-4 hours). Visit the sacred temple and perform puja. Return to Panar Bugyal for overnight stay in tents.",
      },
      {
        day: "Day 5",
        title: "Panar Bugyal to Sagar",
        description: "Trek back from Panar Bugyal to Sagar (14 km, 7-8 hours). Overnight stay in guesthouse.",
      },
      {
        day: "Day 6",
        title: "Departure from Sagar",
        description: "After breakfast, depart from Sagar for your onward journey.",
      },
    ],
    highlights: [
      "Visit to the sacred Rudranath Temple, one of the Panch Kedar",
      "Trek through beautiful alpine meadows (bugyals)",
      "Stunning views of the Himalayan peaks",
      "Rich biodiversity with various Himalayan flora and fauna",
      "Experience the local culture and traditions",
      "Peaceful and less crowded trekking route",
    ],
    faqs: [
      {
        question: "How difficult is the Rudranath trek?",
        answer:
          "The Rudranath trek is rated as moderate in difficulty. It involves walking 6-14 km per day on mountain trails with moderate ascents and descents. Basic fitness is required, but previous trekking experience is not mandatory.",
      },
      {
        question: "What is the best time to do the Rudranath trek?",
        answer:
          "The best time to do the Rudranath trek is from May to October. The weather is relatively stable during these months, and the trails are generally clear of snow. The post-monsoon period (September-October) offers clear views of the Himalayan peaks.",
      },
      {
        question: "What is the religious significance of Rudranath?",
        answer:
          "Rudranath is one of the Panch Kedar temples, dedicated to Lord Shiva. According to legend, it is the place where Lord Shiva's face appeared. The temple is an important pilgrimage site for devotees of Lord Shiva.",
      },
      {
        question: "What type of accommodation can I expect?",
        answer:
          "Accommodation varies from guesthouses in Sagar to camping in tents at higher altitudes. All camping equipment is provided, and our team ensures comfortable and clean camping sites.",
      },
      {
        question: "Is there mobile network connectivity on the trek?",
        answer:
          "Mobile network connectivity is limited on the trek. You may get network at Sagar, but as you move higher, the connectivity becomes sparse or non-existent. It's advisable to inform your family about limited connectivity before starting the trek.",
      },
    ],
    upcomingDepartures: [
      {
        date: "July 20, 2024",
        spotsLeft: 4,
        price: 22999,
      },
      {
        date: "August 15, 2024",
        spotsLeft: 8,
        price: 22999,
      },
      {
        date: "September 10, 2024",
        spotsLeft: 10,
        price: 22999,
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

              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
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
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
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
                          <Link href={`/book/rudranath-${departure.date.toLowerCase().replace(/\s+/g, "-")}`}>
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
                      href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Rudranath%20trek.%20Can%20you%20provide%20more%20information?"
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

      {/* Google Pay QR Code Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Simple and Secure Booking</h2>
              <p className="text-muted-foreground mb-4">
                We've made our booking process simple and secure. Pay directly using Google Pay by scanning the QR code,
                then share the screenshot with us on WhatsApp for instant confirmation.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <p className="text-sm">Scan the QR code with your Google Pay app</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <p className="text-sm">Enter the trek name and your details in the payment note</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <p className="text-sm">Take a screenshot of the payment confirmation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <div>
                    <p className="text-sm">Share the screenshot with us on WhatsApp</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-amber-50 text-amber-800 rounded-lg mb-6">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">
                  Your booking will be confirmed only after we verify your payment screenshot on WhatsApp.
                </p>
              </div>
              <Button asChild>
                <Link
                  href="https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20the%20Rudranath%20trek"
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
                  Contact Us on WhatsApp
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Google+Pay+QR"
                  alt="Google Pay QR Code"
                  width={250}
                  height={250}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Scan this QR code with Google Pay to make your payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Destinations */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Similar Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore other spiritual journeys in the Himalayas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Adi+Kailash"
                  alt="Adi Kailash"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
              </div>
              <CardHeader>
                <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                <CardDescription>A sacred pilgrimage to the divine abode of Lord Shiva</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">9 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹32,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/adi-kailash">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Kedarnath"
                  alt="Kedarnath"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Pilgrimage</Badge>
              </div>
              <CardHeader>
                <CardTitle>Kedarnath Yatra</CardTitle>
                <CardDescription>Trek to one of the holiest shrines of Lord Shiva</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">5 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹21,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/kedarnath">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Kailash+Mansarovar"
                  alt="Kailash Mansarovar"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Premium</Badge>
              </div>
              <CardHeader>
                <CardTitle>Kailash Mansarovar Yatra</CardTitle>
                <CardDescription>The ultimate pilgrimage to Mount Kailash and Lake Mansarovar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">15 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹1,25,000</p>
                  <Badge variant="outline">Challenging</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/kailash-mansarovar">View Details</Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your Spiritual Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your Rudranath trek today and embark on a journey of a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={`/book/rudranath-${destination.upcomingDepartures[0].date.toLowerCase().replace(/\s+/g, "-")}`}
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
                  href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Rudranath%20trek.%20Can%20you%20provide%20more%20information?"
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

