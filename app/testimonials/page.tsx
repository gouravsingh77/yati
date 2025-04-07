import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/himalayas.jpg?height=800&width=1600"
          alt="Himalayan Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials & Reviews</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Real experiences from travelers who have journeyed with us
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the experiences of those who have explored the Himalayas with Yati Dham
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground italic">
                    "The Adi Kailash journey was truly life-changing. The guides were knowledgeable and the arrangements
                    were perfect. The spiritual energy at Om Parvat was unlike anything I've experienced before. Truly a
                    journey of a lifetime!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/client/rahul.jpg?height=100&width=100"
                      alt="Rahul Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-muted-foreground">Delhi | Adi Kailash & Om Parvat Yatra</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground italic">
                    "As a solo female traveler, I felt completely safe and well taken care of throughout my journey. The
                    zero waste policy is commendable and the views were breathtaking. The team went above and beyond to
                    ensure I had a memorable experience."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/client/priya.jpg?height=100&width=100"
                      alt="Priya Patel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Patel</h4>
                    <p className="text-sm text-muted-foreground">Mumbai | Khaliya Top Trek</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <Star className="h-5 w-5 fill-muted text-muted-foreground" />
                </div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground italic">
                    "The Milam Glacier trek was challenging but worth every step. The local guides shared fascinating
                    stories and the food was amazing! The views of Nanda Devi and surrounding peaks were simply
                    spectacular. Highly recommended for adventure seekers."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/client/amit.jpg?height=100&width=100" alt="Amit Verma" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Amit Verma</h4>
                    <p className="text-sm text-muted-foreground">Bangalore | Milam Glacier Trek</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground italic">
                    "Our family trip to Munsiyari and Khaliya Top was perfectly organized. The kids loved the adventure
                    and we appreciated the attention to safety. The accommodations were comfortable and the local food
                    was delicious. A perfect family getaway!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/client/suresh.jpg?height=100&width=100"
                      alt="Suresh Kumar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Suresh Kumar</h4>
                    <p className="text-sm text-muted-foreground">Pune | Family Himalayan Adventure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground italic">
                    "The Rudranath trek was a perfect blend of spirituality and adventure. The temple was serene and the
                    meadows were breathtaking. Our guide was knowledgeable about the local legends and made the journey
                    even more meaningful."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/client/meera.jpeg?height=100&width=100"
                      alt="Meera Joshi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Meera Joshi</h4>
                    <p className="text-sm text-muted-foreground">Dehradun | Rudranath Trek</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <Star className="h-5 w-5 fill-muted text-muted-foreground" />
                </div>
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground italic">
                    "The customized itinerary for our photography group was perfect. We got to spend extra time at the
                    best viewpoints and the guides knew exactly when to reach each spot for the best lighting. The
                    team's flexibility and knowledge made our trip successful."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/client/vikram.jpg?height=100&width=100"
                      alt="Vikram Singh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vikram Singh</h4>
                    <p className="text-sm text-muted-foreground">Chennai | Custom Photography Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials 
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our travelers share their experiences in their own words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video Testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Adi Kailash Experience</h3>
                <p className="text-sm text-muted-foreground">Rahul shares his spiritual journey to Adi Kailash</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video Testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Milam Glacier Adventure</h3>
                <p className="text-sm text-muted-foreground">Amit talks about his trekking experience</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video Testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Family Trek Experience</h3>
                <p className="text-sm text-muted-foreground">The Kumar family shares their adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Share Your Experience */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-muted-foreground mb-8">
              We'd love to hear about your journey with Yati Dham. Your feedback helps us improve and inspires others to
              embark on their own Himalayan adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://drive.google.com/drive/folders/1tOSBudCgm_ZB1Vt3-6zN0_aXRPUcYL3-?usp=sharing">Submit Your Testimonial</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://wa.me/919259071008?text=I'd%20like%20to%20share%20my%20experience%20with%20Yati%20Dham"
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
                  Share via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us on a journey that will connect you with nature, culture, and your inner self
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

