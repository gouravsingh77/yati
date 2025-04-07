import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Leaf, Shield } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import DestinationCard from "@/components/destination-card"
import FeaturedTrek from "@/components/featured-trek"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/himalayas.jpg?height=1080&width=1920"
          alt="Himalayan Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Badge className="mb-4 bg-primary/80 hover:bg-primary/90">Trusted Local Experts</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">
            Experience Spiritual Bliss & Himalayan Adventure with Yati Dham!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
            Discover the untouched beauty of the Himalayas with our sustainable and authentic travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/treks">Explore Treks</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/pilgrimages">Book Your Pilgrimage</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/contact">Get Customized Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most sought-after spiritual journeys and adventure treks in the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard
              title="Adi Kailash & Om Parvat"
              description="A sacred pilgrimage to the divine abode of Lord Shiva"
              image="/adi/adikailash.jpg?height=400&width=600"
              category="Spiritual Journey"
              duration="6 Days"
              difficulty="Moderate"
              href="/destinations/adi-kailash"
              
            />
            <DestinationCard
              title="Milam Glacier Trek"
              description="Trek through pristine valleys to one of the most beautiful glaciers"
              image="/milam/milamglacier.jpg?height=400&width=600"
              category="Adventure Trek"
              duration="5 Days"
              difficulty="Moderate"
              href="/destinations/milam-glacier"
            />
            <DestinationCard
              title="Khaliya Top Trek"
              description="A perfect trek for beginners, Khaliya Top offers stunning views of Nanda Devi, Nanda Kot, and Panchachuli peaks from its beautiful meadows."
              image="/khaliya/khaliya.jpg?height=400&width=600"
              category="Adventure Trek"
              duration="4 Days"
              difficulty="Easy"
              href="/destinations/khaliya-top"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Yati Dham?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing authentic experiences while preserving the sacred lands of the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">Expert guides with deep knowledge of local culture and terrain</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Waste Tourism</h3>
              <p className="text-muted-foreground">Committed to sustainable practices that protect the environment</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
              <p className="text-muted-foreground">
                Personalized attention with small group sizes for better experiences
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden costs with clear breakdown of all expenses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trek */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <FeaturedTrek
            title="Adi Kailash & Om Parvat Yatra"
            description="Embark on a spiritual journey to the sacred Adi Kailash and witness the divine Om symbol naturally formed on Om Parvat. This pilgrimage offers breathtaking views of the Himalayas and a profound spiritual experience."
            image="/adi/adi1.jpg?height=600&width=1200"
            duration="6 Days"
            difficulty="Moderate"
            price="₹25,999"
            startDate="May 14, 2025"
            href="/destinations/adi-kailash"
            
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from those who have journeyed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Rahul Sharma"
              location="Delhi"
              quote="The Adi Kailash journey was life-changing. The guides were knowledgeable and the arrangements were perfect. Truly a spiritual experience!"
              image="/client/rahul.jpg?height=100&width=100"
              rating={5}
            />
            <TestimonialCard
              name="Priya Patel"
              location="Mumbai"
              quote="As a solo female traveler, I felt completely safe and well taken care of. The zero waste policy is commendable and the views were breathtaking."
              image="/client/priya.jpg?height=100&width=100"
              rating={5}
            />
            <TestimonialCard
              name="Amit Verma"
              location="Bangalore"
              quote="The Milam Glacier trek was challenging but worth every step. The local guides shared fascinating stories and the food was amazing!"
              image="/client/amit.jpg?height=100&width=100"
              rating={4}
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Departures */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Fixed Departures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Secure your spot on our scheduled group departures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">May 14, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Adi Kailash & Om Parvat</h3>
                <p className="text-muted-foreground mb-4">6 Days | ₹25,999 per person</p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    6 Spots Left
                  </Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/book/adi-kailash">Book Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Aug 1, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Milam Glacier Trek</h3>
                <p className="text-muted-foreground mb-4">5 Days | ₹13,999 per person</p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    8 Spots Left
                  </Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/book/milam-glacier">Book Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">May 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rudranath Trek</h3>
                <p className="text-muted-foreground mb-4">6 Days | ₹11,999 per person</p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    4 Spots Left
                  </Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/book/rudranath">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
{/* Upcoming Departures 
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/departures">View All Departures</Link>
            </Button>
          </div>*/}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us create a personalized journey that matches your preferences and spiritual aspirations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get a Custom Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

