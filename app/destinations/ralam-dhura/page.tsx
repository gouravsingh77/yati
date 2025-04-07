import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight, AlertCircle } from "lucide-react"

export default function RalamGlacierPage() {
  // Destination specific data
  const destination = {
    title: "Ralam Glacier Trek",
    description: "A spectacular Himalayan trek to one of the largest glaciers in Kumaon",
    longDescription:
      "The Ralam Glacier Trek is an adventurous journey to one of the most impressive glaciers in the Kumaon Himalayas. Starting from Munsiyari, this trek takes you through dense forests of rhododendron and oak, remote Bhotiya villages, and high-altitude meadows with breathtaking views of Panchachuli peaks. The glacier itself is a massive river of ice, originating from the eastern slopes of the mighty Ralam Peak (6,315m). This trek offers a perfect blend of natural beauty, cultural experiences, and challenging adventure in the pristine Himalayan wilderness.",
    image: "/himalayas.jpg?height=600&width=1200&text=Ralam+Glacier",
    gallery: [
      "/ralam/ralam2.jpeg?height=400&width=600&text=Panchachuli+Views",
      "/ralam/ralam3.jpeg?height=400&width=600&text=Alpine+Meadows",
      "/ralam/ralam4.jpeg?height=400&width=600&text=Glacier+Approach",
      "/ralam/ralam1.jpeg?height=400&width=600&text=Ralam+Glacier",
    ],
    category: "Glacier Trek",
    duration: "8 Days",
    difficulty: "Challenging",
    maxAltitude: "3,800m",
    bestSeason: "May to June & September to October",
    startingPoint: "Kathgodam",
    endingPoint: "kathgodam",
    price: 18999,
    includes: [
      "Accommodation (guesthouses & camping)",
      "All meals during the trek",
      "Experienced trek guide and support staff",
      "Permits and entry fees",
      "Transportation from Kathgodam to Munsiyari and back",
      "Camping equipment (tents, sleeping bags, mats)",
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
        "day": "Day 1",
        "title": "Kathgodam to Munsiyari",
        "description": "Pick-up from Kathgodam Railway Station at 7 AM. Scenic drive through Kumaon hills to Munsiyari (10-11 hours). Overnight stay in Munsiyari with orientation about the trek."
      },
      {
        "day": "Day 2",
        "title": "Munsiyari to Lilam",
        "description": "Drive to Selapani (1 hour) then start trekking to Lilam (5-6 hours). Descend through dense forests to Gori Ganga valley. Camp near Lilam village (2,200m)."
      },
      {
        "day": "Day 3",
        "title": "Lilam to Rilkot",
        "description": "Trek along Gori Ganga river through beautiful forests (5-6 hours). Cross several streams and waterfalls. Camp at Rilkot (2,800m) with views of Panchachuli peaks."
      },
      {
        "day": "Day 4",
        "title": "Rilkot to Ralam Khark",
        "description": "Gradual ascent through alpine meadows (4-5 hours). Reach Ralam Khark (3,300m), a beautiful grazing ground with panoramic mountain views. Acclimatization stay."
      },
      {
        "day": "Day 5",
        "title": "Ralam Khark to Ralam Glacier Base Camp",
        "description": "Challenging trek to glacier base camp (5-6 hours). Cross moraines and rocky terrain. Witness the spectacular Ralam Glacier and surrounding peaks. Camp near the glacier (3,800m)."
      },
      {
        "day": "Day 6",
        "title": "Exploration Day",
        "description": "Day to explore the glacier area and nearby viewpoints. Optional hike to get closer views of the glacier. Return to base camp for overnight stay."
      },
      {
        "day": "Day 7",
        "title": "Base Camp to Rilkot",
        "description": "Descend back to Rilkot (6-7 hours). Enjoy the changing landscapes and vegetation. Celebrate last night in the mountains."
      },
      {
        "day": "Day 8",
        "title": "Rilkot to Munsiyari to Kathgodam",
        "description": "Trek back to Selapani (4-5 hours) then drive to Munsiyari. After lunch, begin return journey to Kathgodam. Tour concludes at Kathgodam Railway Station by late evening."
      }
    ],
    highlights: [
      "Witness the massive Ralam Glacier up close",
      "Spectacular views of Panchachuli peaks",
      "Trek through diverse landscapes - forests, meadows, moraines",
      "Experience remote Bhotiya culture in mountain villages",
      "Camp in pristine Himalayan wilderness",
      "See unique Himalayan flora and fauna",
    ],
    faqs: [
      {
        question: "How difficult is the Ralam Glacier trek?",
        answer:
          "The trek is rated as challenging due to the altitude, long trekking days (5-7 hours), and some technical sections near the glacier. Good physical fitness and prior trekking experience at high altitude is recommended.",
      },
      {
        question: "What is the best time to do this trek?",
        answer:
          "The ideal seasons are May-June (spring) and September-October (autumn). These periods offer stable weather and clear views. Winters are extremely cold with heavy snow, while monsoon (July-August) brings landslides and leeches.",
      },
      {
        question: "What special equipment is needed?",
        answer:
          "Trekking poles are highly recommended for the glacier approach. Good quality trekking shoes with ankle support, warm layers (temperatures can drop below freezing), and waterproof gear are essential. We provide tents and sleeping bags.",
      },
      {
        question: "Is altitude sickness a concern on this trek?",
        answer:
          "Yes, as you reach 3,800m at the glacier. We follow a careful acclimatization schedule with rest days. It's important to stay hydrated and inform your guide immediately if you experience symptoms.",
      },
      {
        question: "How close can we get to the glacier?",
        answer:
          "We approach the glacier terminus safely but maintain a reasonable distance as glacier surfaces can be unstable. The views from our base camp location are spectacular and safe.",
      },
    ],
    upcomingDepartures: [
      {
        date: "Aug 15, 2025",
        spotsLeft: 6,
        price: 18999,
      },
      {
        date: "sep 5, 2025",
        spotsLeft: 8,
        price: 18999,
      },
      {
        date: "September 20, 2025",
        spotsLeft: 10,
        price: 18999,
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
                      src={image || "/himalayas.jpg"}
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
                          <Link href={`/book/ralam-glacier${departure.date.toLowerCase().replace(/\s+/g, "-")}`}>
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
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Ralam%20Glacier%20trek.%20Can%20you%20provide%20more%20information?"
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20the%20Ralam%20Glacier%20trek"
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
            <h2 className="text-3xl font-bold mb-4">More Glacier Treks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore other spectacular glacier treks in the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/pindari/pindari.jpeg?height=400&width=600&text=Pindari+Glacier"
                  alt="Pindari Glacier Trek"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Glacier Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pindari Glacier</CardTitle>
                <CardDescription>
                  Trek to one of the most accessible glaciers in the Kumaon Himalayas
                </CardDescription>
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
                  <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Pindari%20Glacier%20Trek%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/milam/milam.jpeg?height=400&width=600&text=Milam+Glacier"
                  alt="Milam Glacier Trek"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Glacier Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Milam Glacier</CardTitle>
                <CardDescription>
                  Challenging trek to one of the largest glaciers in the Kumaon region
                </CardDescription>
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
                  <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Milam%20Glacier%20Trek%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/treks/kafni.jpeg?height=400&width=600&text=Kafni+Glacier"
                  alt="Kafni Glacier Trek"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Glacier Trek</Badge>
              </div>
              <CardHeader>
                <CardTitle>Kafni Glacier</CardTitle>
                <CardDescription>
                  Beautiful trek to a glacier with stunning views of Nanda Kot peak
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">7 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₹16,999</p>
                  <Badge variant="outline">Moderate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20Kafni%20Glacier%20Trek%20and%20would%20like%20to%20know%20more%20details">Know More</Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your Glacier Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your Ralam Glacier trek today and witness the majestic Himalayan ice rivers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link
                  href={`/book/ralam-glacier${destination.upcomingDepartures[0].date.toLowerCase().replace(/\s+/g, "-")}`}
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
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Ralam%20Glacier%20trek.%20Can%20you%20provide%20more%20information?"
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