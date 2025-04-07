import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export default function PilgrimagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/himalayas.jpg?height=1080&width=1920"
          alt="Sacred Pilgrimage Sites"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Badge className="mb-4 bg-primary/80 hover:bg-primary/90">Spiritual Journeys</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">Sacred Pilgrimages in the Himalayas</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
            Embark on a spiritual journey to the most sacred sites in the Himalayas with experienced guides
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Divine Connection</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our pilgrimage journeys are designed to provide a perfect blend of spiritual experiences, cultural
              immersion, and natural beauty. Each journey is carefully crafted to ensure you can focus on your spiritual
              connection while we take care of all logistics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sacred Sites</h3>
                <p className="text-muted-foreground">
                  Visit ancient temples and sacred locations with deep spiritual significance
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Spiritual Guides</h3>
                <p className="text-muted-foreground">
                  Learn from knowledgeable guides who understand the spiritual and cultural context
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mindful Pace</h3>
                <p className="text-muted-foreground">
                  Journey at a pace that allows for reflection, meditation, and spiritual connection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pilgrimages */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sacred Journeys</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated pilgrimage experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Adi Kailash Pilgrimage */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/adi/adi1.jpg?height=400&width=600" alt="Adi Kailash" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                <CardDescription>A sacred pilgrimage to the divine abode of Lord Shiva</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">6 Days | Next Departure: May 14, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Kathgodam → Dharchula → Adi Kailash → Om Parvat → Dharchula → Kathgodam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Small Group (Max 12 people)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">₹25,999</p>
                  </div>
                  <Button asChild>
                    <Link href="/destinations/adi-kailash">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Char Dham Pilgrimage */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/char/chardham.jpg?height=400&width=600" alt="Char Dham" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Spiritual</Badge>
              </div>
              <CardHeader>
                <CardTitle>Char Dham Yatra</CardTitle>
                <CardDescription>The sacred journey to four holy shrines in Uttarakhand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">10 Days | Next Departure: May 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Haridwar </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Small Group (Max 12 people)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">₹31,999</p>
                  </div>
                  <Button asChild>
                    <Link href="/destinations/char-dham">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Temples of Manaskhand */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/manaskhand/manaskhand.jpeg?height=400&width=600"
                  alt="Temples of Manaskhandr"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Spiritual</Badge>
              </div>
              <CardHeader>
                <CardTitle>Temples of Manaskhand</CardTitle>
                <CardDescription> A sacred pilgrimage through the mystical Kumaon Himalayas.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">7 Days | Next Departure: May 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Kathgodam → Almora  → Bageshwar → Almora → Kathgodam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Small Group (Max 15 people)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">₹14,999</p>
                  </div>
                  <Button asChild>
                    <Link href="/destinations/manaskhand">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                Request Custom Pilgrimage <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Book Your Pilgrimage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to secure your spot on our sacred journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Journey</h3>
              <p className="text-muted-foreground">Select a pilgrimage that resonates with your spiritual goals</p>
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

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pilgrim Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from those who have embarked on spiritual journeys with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/client/amit.jpg?height=100&width=100"
                      alt="Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Rajesh Sharma</h3>
                  <p className="text-sm text-muted-foreground">Delhi</p>
                </div>
                <p className="text-center italic">
                  "The Adi Kailash journey was truly transformative. The guides were not only knowledgeable about the
                  routes but also about the spiritual significance of each site. I returned with a renewed sense of
                  peace."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/client/priya.jpg?height=100&width=100"
                      alt="Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Sunita Patel</h3>
                  <p className="text-sm text-muted-foreground">Mumbai</p>
                </div>
                <p className="text-center italic">
                  "The Char Dham Yatra with Yati Dham exceeded all my expectations. The arrangements were perfect,
                  allowing me to focus entirely on my spiritual journey. The small group size made it feel intimate and
                  personal."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/client/rahul.jpg?height=100&width=100"
                      alt="Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Vikram Mehta</h3>
                  <p className="text-sm text-muted-foreground">Bangalore</p>
                </div>
                <p className="text-center italic">
                  "As someone who had never been on a pilgrimage before, I was nervous. But the team at Yati Dham made
                  it so easy and meaningful. The guides shared stories and context that brought the spiritual aspects to
                  life."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Spiritual Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards a transformative pilgrimage experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:+919259071008">Speak to a Pilgrimage Expert</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20a%20pilgrimage"
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

