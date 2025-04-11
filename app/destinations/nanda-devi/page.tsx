import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight, AlertCircle } from "lucide-react"

export default function NandaDeviEastBaseCampPage() {
  // Destination specific data
  const destination = {
    title: "Nanda Devi East Base Camp Trek",
    description: "A spectacular trek to the base of India's second highest peak",
    longDescription:
      "The Nanda Devi East Base Camp Trek is an exhilarating journey to the foot of Nanda Devi East (7,434m), the second highest mountain entirely within India. With improved road connectivity to Milam village, this 6-day trek now offers easier access to the stunning Nanda Devi Sanctuary. The trail takes you through ancient trade routes, lush valleys, and high-altitude meadows with breathtaking views of Nanda Devi, Hardeol, and other Himalayan giants. This trek combines rich cultural experiences in remote Bhotiya villages with the raw beauty of the inner Himalayan range.",
    image: "/himalayas.jpg?height=600&width=1200&text=Nanda+Devi+East",
    gallery: [
      "/nanda/nanda1.jpeg?height=400&width=600&text=Milam+Village",
      "/nanda/nanda2.jpeg?height=400&width=600&text=Alpine+Meadows",
      "/nanda/nanda3.jpeg?height=400&width=600&text=Base+Camp+Views",
      "/nanda/nanda4.jpg?height=400&width=600&text=Nanda+Devi+East",
    ],
    category: "Expedition Style Trek",
    duration: "6 Days",
    difficulty: "Challenging",
    maxAltitude: "4,500m",
    bestSeason: "May to June & September to October",
    startingPoint: "Kathgodam",
    endingPoint: "Kathgodam",
    price: 15999,
    includes: [
      "Accommodation (guesthouses & camping)",
      "All meals during the trek",
      "Experienced mountain guide and support staff",
      "All necessary permits",
      "Transportation from Kathgodam to Munsiyari and back",
      "Camping equipment (high-quality tents, sleeping bags, mats)",
      "First aid and safety equipment including oxygen cylinder",
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
        "day": "Day 1",
        "title": "Kathgodam to Munsiyari",
        "description": "Early morning pick-up from Kathgodam. Scenic drive through Kumaon hills to Munsiyari (10-11 hours). Briefing about the trek. Overnight in hotel."
      },
      {
        "day": "Day 2",
        "title": "Munsiyari to Milam Village by Road",
        "description": "Drive to Milam village (5-6 hours) via scenic route. Explore this historic village and interact with locals. Acclimatization walk. Overnight in village homestay."
      },
      {
        "day": "Day 3",
        "title": "Milam to Base of Martoli",
        "description": "Trek along Gori Ganga river (5-6 hours). Gradual ascent through beautiful valleys. Camp near Martoli with stunning mountain views."
      },
      {
        "day": "Day 4",
        "title": "To Nanda Devi East Base Camp",
        "description": "Challenging trek to base camp (6-7 hours). Cross moraines and glacial streams. Spectacular views of Nanda Devi East. Camp at base camp (4,500m)."
      },
      {
        "day": "Day 5",
        "title": "Exploration and Return to Milam",
        "description": "Morning exploration of base camp area. Afternoon descent to Milam village (7-8 hours). Celebrate successful trek with local community."
      },
      {
        "day": "Day 6",
        "title": "Milam to Munsiyari to Kathgodam",
        "description": "Drive back to Munsiyari (5 hours). After lunch, continue to Kathgodam. Tour concludes at Kathgodam Railway Station by late evening."
      }
    ],
    highlights: [
      "Close-up views of Nanda Devi East (7,434m)",
      "Experience the improved road access to Milam village",
      "Walk through ancient trade routes to Tibet",
      "Camp with panoramic Himalayan views",
      "Interact with Bhotiya community in Milam",
      "Explore the stunning Nanda Devi Sanctuary",
    ],
    faqs: [
      {
        question: "How difficult is this trek?",
        answer:
          "This is a challenging trek due to high altitude (4,500m) and some technical sections near base camp. Good physical fitness and prior high-altitude trekking experience is recommended. The improved road to Milam has reduced the overall difficulty slightly."
      },
      {
        question: "What's special about the new road to Milam?",
        answer:
          "The newly improved road allows us to drive directly to Milam village (earlier this was a 2-day trek from Munsiyari). This reduces the overall trek duration while still providing the full Nanda Devi East Base Camp experience."
      },
      {
        question: "What about altitude sickness?",
        answer:
          "We follow a careful acclimatization schedule with proper rest days. Our guides are trained to recognize symptoms and carry necessary medications. The itinerary includes gradual ascent and descent to minimize risks."
      },
      {
        question: "What kind of views can we expect?",
        answer:
          "The trek offers spectacular views of Nanda Devi East (7,434m), Hardeol (7,151m), and other peaks of the Nanda Devi Sanctuary. The base camp provides 360-degree panoramic views of the Himalayan range."
      },
      {
        question: "How cold does it get at base camp?",
        answer:
          "Temperatures at base camp can drop below freezing at night, even in summer (May-June: -5°C to 10°C, Sept-Oct: -10°C to 5°C). We provide high-quality sleeping bags rated for these temperatures."
      }
    ],
    upcomingDepartures: [
      {
        date: "Aug 20, 2025",
        spotsLeft: 6,
        price: 15999,
      },
      {
        date: "Sep 10, 2025",
        spotsLeft: 8,
        price: 15999,
      },
      {
        date: "September 25, 2025",
        spotsLeft: 10,
        price: 15999,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
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
                  <CardTitle>Book Your Trek</CardTitle>
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
                        <Link href="/book/nanda-devi">
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
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Nanda%20Devi%20East%20Base%20Camp%20trek.%20Can%20you%20provide%20more%20information?"
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20the%20Nanda%20Devi%20East%20Base%20Camp%20trek"
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
                  src="/qr.png?height=300&width=300&text=Google+Pay+QR"
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
            <h2 className="text-3xl font-bold mb-4">More High Altitude Treks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore other spectacular treks in the Kumaon Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/ralam/ralammap.jpeg?height=400&width=600&text=Ralam+Dhura"
                  alt="Ralam Dhura Trek"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Ridge Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Ralam Dhura Trek </CardTitle>
                <CardDescription>
                  Beautiful trek to the "Moon's Peak" with panoramic Himalayan views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">7 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹18,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Nanda%20Khat%20Trek%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/panchachuli/panchachuli1.jpeg?height=400&width=600&text=Panchachuli+Base"
                  alt="Panchachuli Base Camp Trek"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Base Camp Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Panchachuli Base Camp</CardTitle>
                <CardDescription>
                  Trek to the base of the famous "Five Chimneys" peaks near Munsiyari
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">5 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹8,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Panchachuli%20Base%20Camp%20Trek%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/pindari/pindari3.jpeg?height=400&width=600&text=Kuari+Pass"
                  alt="Kuari Pass Trek"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Classic Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Kuari Pass Trek</CardTitle>
                <CardDescription>
                  Lord Curzon's Trail with spectacular views of Nanda Devi and Dronagiri
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">6 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹8,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Kuari%20Pass%20Trek%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your High Altitude Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your Nanda Devi East Base Camp trek today and stand before one of India's highest peaks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={`/book/nanda-devi${destination.upcomingDepartures[0].date.toLowerCase().replace(/\s+/g, "-")}`}
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Nanda%20Devi%20East%20Base%20Camp%20trek.%20Can%20you%20provide%20more%20information?"
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