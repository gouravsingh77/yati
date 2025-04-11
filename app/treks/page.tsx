import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Mountain, Clock, ArrowRight } from "lucide-react"

export default function TreksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/himalayas.jpg?height=1080&width=1920"
          alt="Himalayan Treks"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Badge className="mb-4 bg-primary/80 hover:bg-primary/90">Adventure Awaits</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">Explore the Majestic Himalayan Treks</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
            Discover breathtaking trails, pristine landscapes, and unforgettable adventures
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Himalayan Wilderness</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our treks are designed for adventurers seeking to explore the untouched beauty of the Himalayas. From
              moderate walks to challenging expeditions, we offer experiences for all levels of trekkers with a focus on
              sustainability and authentic local experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse Terrains</h3>
                <p className="text-muted-foreground">
                  Trek through varied landscapes from lush valleys to snow-capped peaks
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                <p className="text-muted-foreground">
                  Trek with experienced local guides who know the mountains intimately
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All Durations</h3>
                <p className="text-muted-foreground">Choose from short weekend treks to extended expeditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Featured Treks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular trekking adventures in the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Milam Glacier Trek */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/milam/milamglacier.jpg?height=400&width=600" alt="Milam Glacier" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Moderate</Badge>
              </div>
              <CardHeader>
                <CardTitle>Milam Glacier Trek</CardTitle>
                <CardDescription>Trek through pristine valleys to one of the most beautiful glaciers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">5 Days | Next Departure: Aug 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm"> Kathgodam → Munsiyari → Milam Glacier → Munsiyari → Kathgodam </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Max Altitude: 3,870m | Difficulty: Moderate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">₹13,999</p>
                  </div>
                  <Button asChild>
                    <Link href="/destinations/milam-glacier">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Khaliya Top Trek */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/khaliya/khaliya.jpg?height=400&width=600" alt="Khaliya Top" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Easy</Badge>
              </div>
              <CardHeader>
                <CardTitle>Khaliya Top Trek</CardTitle>
                <CardDescription>
                  Experience panoramic views of the Himalayan peaks from this beautiful meadow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">4 Days | Fixed Departure: Every Saturday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm"> Kathgodam → Munsiyari → Khaliya Top → Munsiyari → Kathgodam </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Max Altitude: 3,500m | Difficulty: Easy to Moderate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">₹7,999</p>
                  </div>
                  <Button asChild>
                    <Link href="/destinations/khaliya-top">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nanda Devi Base Camp */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
              <Image src="/nanda/nanda.jpeg?height=400&width=600" alt="Nanda Devi" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Expedition</Badge>
              </div>
              <CardHeader>
                <CardTitle>Nanda Devi East Base Camp</CardTitle>
                <CardDescription>Trek to the base of India's second-highest peak</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">6 Days | Next Departure: August 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Kathgodam →  Munsiyari → Nanda Devi Base Camp → Munsiyari → Kathgodam </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Max Altitude: 4,300m | Difficulty: Challenging</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">₹15,999</p>
                  </div>
                  <Button asChild>
                    <Link href="/destinations/nanda-devi">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                Request Custom Trek <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trek Categories */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trek by Difficulty Level</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect trek that matches your experience and fitness level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Easy Treks</CardTitle>
                <CardDescription>Perfect for beginners and families</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Khaliya Top Trek (4 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Pindari Glacier Trek (7 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Tungnath (Chandrashila) Trek (5 days)</span>
                  </li>
                </ul>
              </CardContent>
             {/* <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/treks/easy">View All Easy Treks</Link>
                </Button>
              </CardFooter>*/}
            </Card>

            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Moderate Treks</CardTitle>
                <CardDescription>For those with some trekking experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Rudranath Trek (5 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Adi Kailash Trek (6 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Roopkund Trek (7 days)</span>
                  </li>
                </ul>
              </CardContent>
             {/* <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/treks/moderate">View All Moderate Treks</Link>
                </Button>
              </CardFooter>*/}
            </Card>

            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Challenging Treks</CardTitle>
                <CardDescription>For experienced trekkers seeking adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Milam Glacier Trek (7 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Nanda Devi Base Camp (6 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Auden's Col Trek (14 days)</span>
                  </li>
                </ul>
              </CardContent>
             {/* <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/treks/challenging">View All Challenging Treks</Link>
                </Button>
              </CardFooter>*/}
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Book Your Trek</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to secure your spot on our Himalayan adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Trek</h3>
              <p className="text-muted-foreground">Select a trek that matches your experience and interests</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
              <p className="text-muted-foreground">Pay via Google Pay using the QR code on the booking page</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Screenshot</h3>
              <p className="text-muted-foreground">Send the payment screenshot to us via WhatsApp for verification</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Confirmation</h3>
              <p className="text-muted-foreground">Get your booking confirmation and detailed itinerary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Pay QR Code Section */}
      <section className="py-16">
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
              <Button asChild>
                <Link
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20a%20trek"
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
                  src="/qr.png?height=300&width=300"
                  alt="Paytm  QR Code"
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">Book your trek today and embark on a journey of a lifetime</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20a%20trek"
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
                  Book via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

