import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight } from "lucide-react"

export default function PindariGlacierPage() {
  const destination = {
    title: "Pindari Glacier Trek",
    description: "A classic Himalayan trek to the majestic Pindari Glacier",
    longDescription:
      "The Pindari Glacier Trek is one of the most famous and scenic treks in the Kumaon region of Uttarakhand. Located at an altitude of 3,660m, the glacier is the source of the Pindar River and offers stunning views of the surrounding Himalayan peaks, including Nanda Devi, Nanda Kot, and Maiktoli. This moderate trek takes you through lush forests, quaint villages, and vast alpine meadows, making it an ideal choice for adventure seekers and nature lovers.",
    image: "/himalayas.jpg?height=600&width=1200&text=Pindari+Glacier",
    gallery: [
      "/pindari/pindari3.jpeg?height=400&width=600&text=Pindari+Glacier+1",
      "/pindari/pindari1.jpeg?height=400&width=600&text=Pindari+Glacier+2",
      "/pindari/pindari2.jpeg?height=400&width=600&text=Pindari+Glacier+3",
      "/pindari/pindari4.jpeg?height=400&width=600&text=Pindari+Glacier+4",
    ],
    category: "Trek",
    duration: "7 Days",
    difficulty: "Moderate",
    maxAltitude: "3,660m",
    bestSeason: "April to June & September to November",
    startingPoint: "Kathgodam",
    endingPoint: "Kathgodam",
    price: 12999,
    includes: [
      "Accommodation (hotels, homestays & camps)",
      "All meals during the trek",
      "Experienced local guides and porters",
      "Permits and entry fees",
      "Transportation as per itinerary",
      "First aid and safety equipment",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Flights or trains to the starting point",
      "Additional porter charges",
      "Tips and gratuities",
      "Personal trekking gear",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathgodam & Drive to Loharkhet",
        description:
          "Arrive at Kathgodam and drive to Loharkhet (1,760m, 8-9 hours). Check into a guesthouse and rest for the night.",
      },
      {
        day: "Day 2",
        title: "Loharkhet to Dhakuri",
        description:
          "Trek from Loharkhet to Dhakuri (2,680m, 8 km). Enjoy panoramic views of the Himalayan peaks. Overnight stay in tents at Dhakuri.",
      },
      {
        day: "Day 3",
        title: "Dhakuri to Dwali via Khati",
        description:
          "Trek from Dhakuri to Dwali (2,570m, 18 km) via Khati village. Follow the Pindar River through lush forests and remote hamlets. Overnight stay in tents at Dwali.",
      },
      {
        day: "Day 4",
        title: "Dwali to Pindari Glacier & Back to Dwali",
        description:
          "Trek to Pindari Glacier Zero Point (3,660m, 7 km) for breathtaking glacier views. Spend time exploring before trekking back to Dwali. Overnight stay at Dwali.",
      },
      {
        day: "Day 5",
        title: "Dwali to Khati",
        description:
          "Trek back from Dwali to Khati (11 km). Relax and explore the charming village surroundings. Overnight stay in homestay/tents.",
      },
      {
        day: "Day 6",
        title: "Khati to Loharkhet",
        description: "Trek from Khati to Loharkhet (13 km). Overnight stay at guesthouse in Loharkhet.",
      },
      {
        day: "Day 7",
        title: "Loharkhet to Kathgodam (Drive)",
        description:
          "Drive from Loharkhet to Kathgodam (8-9 hours). End of the trek, return journey begins.",
      },
    ],
    faqs: [
      {
        question: "How difficult is the Pindari Glacier Trek?",
        answer:
          "The trek is considered moderate, suitable for beginners and experienced trekkers. It involves walking 7-11 km per day on well-marked trails with gradual ascents.",
      },
      {
        question: "What is the best time to visit Pindari Glacier?",
        answer:
          "The best time to visit is from April to June and September to November. Avoid the monsoon months (July-August) due to heavy rains and landslides.",
      },
      {
        question: "Do I need a permit for this trek?",
        answer:
          "No special permits are required for Indian citizens, but foreigners need to register at the local forest office. Our team takes care of all required permissions.",
      },
      {
        question: "What kind of accommodation is available?",
        answer:
          "Accommodation includes guesthouses in villages, homestays, and camping in remote areas. Facilities are basic but comfortable.",
      },
    ],
    upcomingDepartures: [
      {
        date: "Aug 15, 2025",
        spotsLeft: 10,
        price: 12999,
      },
      {
        date: "Sep 5, 2025",
        spotsLeft: 8,
        price: 12999,
      },
      {
        date: "October 10, 2025",
        spotsLeft: 6,
        price: 12999,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={destination.image || "/himalayas.jpg"}
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
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
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
                          <Link href={`/book/nanda-devi-${departure.date.toLowerCase().replace(/\s+/g, "-")}`}>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore other expedition treks in the Himalayas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="/panchachuli/panchachuli.jpeg?height=400&width=600&text=Panchachuli"
                  alt="Panchachuli Base Camp"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Panchachuli Base Camp</CardTitle>
                <CardDescription>Trek to the base of the magnificent five peaks of Panchachuli</CardDescription>
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
                  <Link href="/destinations/panchachuli">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="/milam/milam.jpeg?height=400&width=600&text=Milam+Glacier"
                  alt="Milam Glacier"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Milam Glacier Trek</CardTitle>
                <CardDescription>Trek through pristine valleys to one of the most beautiful glaciers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">5 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹13,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/milam-glacier">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden h-full">
              <div className="relative h-48 w-full">
                <Image
                  src="/ralam/ralam.jpeg?height=400&width=600&text=Ralam+Dhura"
                  alt="Ralam Dhura Pass"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Expedition</Badge>
              </div>
              <CardHeader>
                <CardTitle>Ralam Dhura Pass Trek</CardTitle>
                <CardDescription>Cross the ancient trade route between India and Tibet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">7 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹18,999</p>
                  <Badge variant="outline">Difficult</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/destinations/ralam-dhura">View Details</Link>
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
                <Link href="/book/nanda-devi">Book Now</Link>
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

