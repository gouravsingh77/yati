import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight, AlertCircle } from "lucide-react"

export default function ManaskhandTemplesPage() {
  // Destination specific data
  const destination = {
    title: "Temples of Manaskhand",
    description: "Explore the sacred circuit of ancient Himalayan temples in Kumaon region",
    longDescription:
      "The Manaskhand region of Kumaon Himalayas is home to some of India's most ancient and powerful temples. This spiritual journey takes you through mystical caves, sacred shrines, and energy centers including Patal Bhuvaneshwar, Jageshwar Dham, Kaichi Dham, Chitai Golu Devta, Bageshwar, and Haat Kalika. Each temple holds unique significance in Hindu mythology and offers devotees a profound spiritual experience amidst breathtaking Himalayan landscapes.",
    image: "/himalayas.jpg?height=600&width=1200&text=Temples+of+Manaskhand",
    gallery: [
      "/manaskhand/patal.jpeg?height=400&width=600&text=Patal+Bhuvaneshwar",
      "/manaskhand/jageshwar.jpeg?height=400&width=600&text=Jageshwar+Dham",
      "/manaskhand/kainchi.jpeg?height=400&width=600&text=Kaichi+Dham",
      "/manaskhand/golu1.jpeg?height=400&width=600&text=Kaichi+Dham",
      
    ],
    category: "Pilgrimage Tour",
    duration: "7 Days",
    difficulty: "Easy",
    maxAltitude: "2,200m",
    bestSeason: "Year-round (Best: March-June, September-November)",
    startingPoint: "Kathgodam",
    endingPoint: "Kathgodam",
    price: 14999,
    includes: [
      "Accommodation in standard hotels/guesthouses",
      "All vegetarian meals during the tour",
      "Transportation in comfortable vehicles",
      "Experienced spiritual guide",
      "All temple entry fees and darshan arrangements",
      "First aid and medical kit",
      "All applicable taxes",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Train/flight tickets to Kathgodam and back",
      "Pony/palki/doli charges (where applicable)",
      "Any additional accommodation/food due to roadblocks or natural calamities",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
      {
        "day": "Day 1",
        "title": "Kathgodam to Bageshwar",
        "description": "Arrive at Kathgodam and drive to Bageshwar (180km, 6-7hrs). Visit the sacred confluence of Saryu and Gomti rivers at Bagnath Temple. Overnight stay in Bageshwar."
      },
      {
        "day": "Day 2",
        "title": "Bageshwar to Patal Bhuvaneshwar",
        "description": "Morning drive to Patal Bhuvaneshwar (90km, 4hrs). Explore the mystical limestone cave temple with ancient carvings. Evening return to Bageshwar. Overnight stay."
      },
      {
        "day": "Day 3",
        "title": "Bageshwar to Jageshwar",
        "description": "Drive to Jageshwar Dham (80km, 3hrs) - the temple complex with 124 ancient shrines. Visit Dandeshwar and Jageshwar temples. Overnight stay in Jageshwar."
      },
      {
        "day": "Day 4",
        "title": "Jageshwar to Almora (Kaichi Dham & Golu Devta)",
        "description": "Visit Kaichi Dham enroute to Almora. Afternoon visit Chitai Golu Devta Temple known for wish fulfillment. Overnight stay in Almora."
      },
      {
        "day": "Day 5",
        "title": "Almora to Haat Kalika Temple",
        "description": "Morning drive to Haat Kalika Temple (30km), an ancient Shakti Peeth. Afternoon free for Almora sightseeing. Overnight stay in Almora."
      },
      {
        "day": "Day 6",
        "title": "Almora to Kasar Devi",
        "description": "Visit Kasar Devi temple, a powerful energy center. Explore nearby caves and enjoy panoramic Himalayan views. Overnight stay in Almora."
      },
      {
        "day": "Day 7",
        "title": "Almora to Kathgodam",
        "description": "Drive back to Kathgodam (90km, 3hrs) with stops at Nainital lakes. Tour concludes with drop at Kathgodam."
      }
    ],
    highlights: [
      "Darshan at Patal Bhuvaneshwar's mystical cave temple",
      "Visit to Jageshwar - one of the 12 Jyotirlingas",
      "Worship at Kaichi Dham and Golu Devta temples",
      "Experience cosmic energy at Kasar Devi",
      "Sacred rituals at Haat Kalika Temple",
      "Explore ancient architecture and carvings",
      "Stunning Himalayan views throughout the journey"
    ],
    faqs: [
      {
        question: "What is the best time for this pilgrimage?",
        answer: "The temples are accessible year-round, but the best weather is from March to June and September to November when temperatures are pleasant."
      },
      {
        question: "Is this tour suitable for elderly pilgrims?",
        answer: "Yes, this is an easy pilgrimage suitable for all age groups. Only Patal Bhuvaneshwar requires some stair climbing which can be avoided if needed."
      },
      {
        question: "What kind of accommodation can we expect?",
        answer: "You'll stay in clean, comfortable hotels/guesthouses with basic amenities. All rooms have attached bathrooms and hot water facilities."
      },
      {
        question: "Are there any physical challenges on this tour?",
        answer: "The tour involves minimal walking. Only Patal Bhuvaneshwar has about 100 steps to descend into the cave (optional). Most temples are easily accessible."
      },
      {
        question: "What should we pack for this pilgrimage?",
        answer: "Comfortable walking shoes, light woolens (even in summer), rain gear (in monsoon), personal medicines, and all necessary worship items."
      }
    ],
    upcomingDepartures: [
      {
        date: "May 15, 2025",
        spotsLeft: 8,
        price: 14999,
      },
      {
        date: "June 5, 2025",
        spotsLeft: 12,
        price: 14999,
      },
      {
        date: "September 10, 2025",
        spotsLeft: 15,
        price: 14999,
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
                  <CardTitle>Book This Pilgrimage</CardTitle>
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
                          <Link href={`/book/manaskhand${departure.date.toLowerCase().replace(/\s+/g, "-")}`}>
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
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Manaskhand%20Temples%20tour.%20Can%20you%20provide%20more%20information?"
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
                    <p className="text-sm">Enter the pilgrimage name and your details in the payment note</p>
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20the%20Manaskhand%20Temples%20tour"
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
        Explore mystical temples and energy centers in the Himalayas
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src="/manaskhand/patal.jpeg?height=400&width=600&text=Patal+Bhuvaneshwar"
            alt="Patal Bhuvaneshwar"
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 z-10">Mystical Cave</Badge>
        </div>
        <CardHeader>
          <CardTitle>Patal Bhuvaneshwar</CardTitle>
          <CardDescription>
            Ancient limestone cave temple with mythological significance in Kumaon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">2 Day</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">₹3,999</p>
            <Badge variant="outline">Easy</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Patal%20Bhuvaneshwar%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src="/manaskhand/kasar.jpeg?height=400&width=600&text=Kasar+Devi"
            alt="Kasar Devi Temple"
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 z-10">Energy Center</Badge>
        </div>
        <CardHeader>
          <CardTitle>Kasar Devi</CardTitle>
          <CardDescription>
            Powerful spiritual site known for its cosmic energy and hippie heritage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">1 Day</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">₹2,999</p>
            <Badge variant="outline">Easy</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Kasar%20Devi%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src="/manaskhand/jageshwar.jpeg?height=400&width=600&text=Jageshwar+Dham"
            alt="Jageshwar Dham"
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 z-10">Ancient Temple</Badge>
        </div>
        <CardHeader>
          <CardTitle>Jageshwar Dham</CardTitle>
          <CardDescription>
            Cluster of 124 ancient stone temples dedicated to Lord Shiva
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">2 Day</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">₹3,499</p>
            <Badge variant="outline">Easy</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Jageshwar%20Dham%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
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
              Book your Manaskhand Temples tour today and experience divine blessings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={`/book/manaskhand-temples-${destination.upcomingDepartures[0].date.toLowerCase().replace(/\s+/g, "-")}`}
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Manaskhand%20Temples%20tour.%20Can%20you%20provide%20more%20information?"
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