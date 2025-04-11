import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight, AlertCircle } from "lucide-react"

export default function CharDhamYatraPage() {
  // Destination specific data
  const destination = {
    title: "Char Dham Yatra 2025",
    description: "Embark on a spiritual journey to the four sacred abodes in the Himalayas",
    longDescription:
      "The Char Dham Yatra is one of the most sacred pilgrimage circuits in India, comprising four holy sites nestled in the Garhwal Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath. This spiritual journey takes devotees through breathtaking landscapes, sacred rivers, and ancient temples, offering both divine blessings and an opportunity to witness the majestic Himalayan beauty. The yatra typically begins from west to east, starting with Yamunotri and concluding at Badrinath.",
    image: "/himalayas.jpg?height=600&width=1200&text=Char+Dham+Yatra",
    gallery: [
      "/char/yamnotri.jpeg?height=400&width=600&text=Yamunotri",
      "/char/gangotri.jpeg?height=400&width=600&text=Gangotri",
      "/char/kedarnath.jpeg?height=400&width=600&text=Kedarnath",
      "/char/badrinath.jpeg?height=400&width=600&text=Badrinath",
    ],
    category: "Pilgrimage Tour",
    duration: "10 Days",
    difficulty: "Moderate",
    maxAltitude: "3,583m (Kedarnath)",
    bestSeason: "May to October (Temples open: April/May to October/November)",
    startingPoint: "Haridwar",
    endingPoint: "Haridwar",
    price: 31999,
    includes: [
      "Accommodation in standard hotels/guesthouses (twin sharing)",
      "All meals during the yatra (vegetarian)",
      "Transportation in comfortable vehicles (AC not available in hills)",
      "Experienced tour guide",
      "All temple entry fees and darshan arrangements",
      "Porter/mule charges for Kedarnath trek (up to 10kg per person)",
      "First aid and medical kit",
      "All applicable taxes",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Train/flight tickets to Haridwar and back",
      "Pony/palki/doli charges beyond included limit",
      "Any additional accommodation/food due to roadblocks or natural calamities",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        "day": "Day 1",
        "title": "Arrival in Haridwar",
        "description": "Arrive in Haridwar, the gateway to the Char Dham. Check-in to hotel. Evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar."
      },
      {
        "day": "Day 2",
        "title": "Haridwar to Barkot (Yamunotri Base)",
        "description": "Early morning departure for Barkot (220km, 7-8hrs). Enroute visit Mussoorie (optional). Check-in at Barkot. Overnight stay."
      },
      {
        "day": "Day 3",
        "title": "Barkot to Yamunotri and back",
        "description": "Morning drive to Jankichatti (42km), then trek 6km to Yamunotri (3,291m). Darshan of Yamunotri Temple, holy dip in Yamuna. Return to Barkot. Overnight stay."
      },
      {
        "day": "Day 4",
        "title": "Barkot to Uttarkashi (Gangotri Base)",
        "description": "Drive to Uttarkashi (160km, 6-7hrs). Visit Kashi Vishwanath Temple. Overnight stay in Uttarkashi."
      },
      {
        "day": "Day 5",
        "title": "Uttarkashi to Gangotri and back",
        "description": "Early morning drive to Gangotri (100km, 4hrs). Darshan at Gangotri Temple (3,048m), holy dip in Ganges. Return to Uttarkashi. Overnight stay."
      },
      {
        "day": "Day 6",
        "title": "Uttarkashi to Guptkashi/Sitapur",
        "description": "Long drive to Guptkashi (220km, 9-10hrs). Enroute visit Tehri Dam. Overnight stay in Guptkashi/Sitapur."
      },
      {
        "day": "Day 7",
        "title": "Guptkashi to Kedarnath",
        "description": "Morning drive to Gaurikund (30km), then trek 16km to Kedarnath (3,583m). Darshan at Kedarnath Temple. Overnight stay in Kedarnath."
      },
      {
        "day": "Day 8",
        "title": "Kedarnath to Guptkashi",
        "description": "Morning darshan (if time permits), then trek back to Gaurikund. Drive to Guptkashi. Overnight stay."
      },
      {
        "day": "Day 9",
        "title": "Guptkashi to Badrinath",
        "description": "Drive to Badrinath (180km, 7-8hrs). Enroute visit Joshimath. Evening darshan at Badrinath Temple (3,133m). Overnight stay."
      },
      {
        "day": "Day 10",
        "title": "Badrinath to Haridwar",
        "description": "Morning visit to Mana Village (last Indian village), then drive back to Haridwar (300km, 10-11hrs). Tour concludes with drop at Haridwar."
      }
    ],
    highlights: [
      "Darshan at all four sacred temples: Yamunotri, Gangotri, Kedarnath, and Badrinath",
      "Holy dip in sacred rivers Yamuna, Ganga, and at Tapt Kund (Badrinath)",
      "Visit to India's last village - Mana near Badrinath",
      "Spectacular views of Himalayan peaks throughout the journey",
      "Spiritual experience with traditional rituals and prayers",
      "Visit to important pilgrimage sites like Guptkashi and Joshimath",
    ],
    faqs: [
      {
        question: "What is the best time for Char Dham Yatra?",
        answer:
          "The best time is from May to October when all four temples are open. Avoid monsoon months (July-August) due to landslides. The temples typically open in April/May and close by October/November.",
      },
      {
        question: "Is this yatra suitable for elderly people?",
        answer:
          "While the yatra is open to all ages, the high altitude and travel conditions can be challenging. Elderly pilgrims should consult their doctor and consider helicopter services for Kedarnath.",
      },
      {
        question: "What kind of accommodation can we expect?",
        answer:
          "Accommodation is in standard hotels/guesthouses with basic amenities. Rooms are typically twin-sharing with attached bathrooms. Luxury options are limited in these remote areas.",
      },
      {
        question: "How difficult is the Kedarnath trek?",
        answer:
          "The 16km trek from Gaurikund to Kedarnath is moderately difficult. Ponies, palanquins, and helicopter services are available for those who cannot trek. We include porter charges for 10kg luggage.",
      },
      {
        question: "What should we pack for the yatra?",
        answer:
          "Warm clothing (temperatures can drop to 5°C), rain gear, comfortable walking shoes, medicines, dry snacks, water bottle, torch, and all necessary documents. A detailed packing list will be provided.",
      },
    ],
    upcomingDepartures: [
      {
        date: "May 15, 2025",
        spotsLeft: 8,
        price: 31999,
      },
      {
        date: "June 5, 2025",
        spotsLeft: 12,
        price: 31999,
      },
      {
        date: "September 10, 2025",
        spotsLeft: 15,
        price: 31999,
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
                      src={image || "/logo1.png"}
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
                  <CardTitle>Book This Yatra</CardTitle>
                  <CardDescription>Fixed Departures for 2025 Season</CardDescription>
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
                        <Link href="/book/char-dham">
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
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Char%20Dham%20Yatra%202025.%20Can%20you%20provide%20more%20information?"
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
                    <p className="text-sm">Enter the yatra name and your details in the payment note</p>
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20the%20Char%20Dham%20Yatra%202025"
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
      <h2 className="text-3xl font-bold mb-4">More Sacred Journeys</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Explore other divine pilgrimages in the Himalayas
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src="/char/badrinath.jpeg?height=400&width=600&text=Badrinath+Temple"
            alt="Badrinath Temple"
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 z-10">Pilgrimage</Badge>
        </div>
        <CardHeader>
          <CardTitle>Badrinath Dham</CardTitle>
          <CardDescription>
            Sacred abode of Lord Vishnu in the Garhwal Himalayas at 3,133m
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">3 Days</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">₹6,999</p>
            <Badge variant="outline">Easy</Badge>
          </div>
        </CardContent>
        <CardFooter>
        <Button asChild className="w-full">
            <Link  href="https://wa.me/919259071008?text=I'm%20interested%20in%20Badrinath%20Dham%20Yatra%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src="/char/kedarnath1.jpeg?height=400&width=600&text=Kedarnath+Temple"
            alt="Kedarnath Temple"
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 z-10">Pilgrimage</Badge>
        </div>
        <CardHeader>
          <CardTitle>Kedarnath Dham</CardTitle>
          <CardDescription>
            Jyotirlinga of Lord Shiva at 3,583m amidst majestic Himalayan peaks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">4 Days</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">₹7,999</p>
            <Badge variant="outline">Moderate</Badge>
          </div>
        </CardContent>
        <CardFooter>
        <Button asChild className="w-full">
            <Link  href="https://wa.me/919259071008?text=I'm%20interested%20in%20Kedarnath%20Yatra%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src="/char/vaishnodevi.jpeg?height=400&width=600&text=Vaishno+Devi"
            alt="Vaishno Devi Temple"
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 z-10">Pilgrimage</Badge>
        </div>
        <CardHeader>
          <CardTitle>Vaishno Devi Yatra</CardTitle>
          <CardDescription>
            Sacred shrine of Mata Vaishno Devi in the Trikuta Mountains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">4 Days</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">₹14,999</p>
            <Badge variant="outline">Moderate</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link  href="https://wa.me/919259071008?text=I'm%20interested%20in%20Vaishno%20Devi%20Yatra%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
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
              Book your Char Dham Yatra today and embark on a divine pilgrimage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={`/book/char-dham${destination.upcomingDepartures[0].date.toLowerCase().replace(/\s+/g, "-")}`}
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Char%20Dham%20Yatra%202025.%20Can%20you%20provide%20more%20information?"
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