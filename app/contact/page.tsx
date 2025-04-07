import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/himalayas.jpg?height=800&width=1600"
          alt="Himalayan Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Get in touch with our team to plan your next Himalayan adventure
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our treks, spiritual journeys, or need a customized itinerary? Fill out the form
                below and our team will get back to you within 24 hours.
              </p>

              <form 
                className="space-y-6" 
                action="https://formsubmit.co/yatidham1008@gmail.com" 
                method="POST"
              >
                {/* FormSubmit.co configuration */}
                <input type="hidden" name="_subject" value="New Trek Inquiry from Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{display: 'none'}} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" name="email" placeholder="Your email address" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      I'm Interested In
                    </label>
                    <Select name="interest">
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spiritual">Spiritual Journeys</SelectItem>
                        <SelectItem value="adventure">Adventure Treks</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                        <SelectItem value="group">Group Booking</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your travel plans or questions" 
                    rows={5} 
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly through these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Our Address</h3>
                      <p className="text-muted-foreground">Nainital Road Haldwani, Uttarakhand, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-muted-foreground">
                        <Link href="tel:+919259071008" className="hover:text-primary">
                          +91-9259071008
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-muted-foreground">
                        <Link href="mailto:yatidham1008@gmail.com" className="hover:text-primary">
                          yatidham1008@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Inquiry</CardTitle>
                  <CardDescription>Need a quick response? Contact us on WhatsApp</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20a%20trek">
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
                      Chat on WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="relative h-[300px] w-full rounded-lg overflow-hidden border">
                <Image src="/map.png?height=600&width=800" alt="Map Location" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button asChild variant="secondary">
                    <Link href="https://www.google.com/maps/place/Haldwani,+Uttarakhand+263139/@29.2290761,79.5036521,30265m/data=!3m1!1e3!4m6!3m5!1s0x39a09addbd0c86d1:0x6793e360cb3d930f!8m2!3d29.2182644!4d79.5129767!16zL20vMDVwa3Y4?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" /> View on Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our treks and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I book a trek or spiritual journey?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can book through our website by selecting your desired trek and dates, or contact us directly via
                  phone or email for a customized itinerary.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is your cancellation policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer full refunds for cancellations made 30 days before departure, 50% refund for cancellations
                  15-29 days before, and no refund for less than 15 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How fit do I need to be for your treks?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fitness requirements vary by trek. We provide detailed information on each trek page and can help you
                  choose one that matches your fitness level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is included in your packages?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our packages typically include accommodation, meals, transportation, guide services, permits, and
                  basic first aid. Detailed inclusions are listed on each trek page.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is ready to help you create the perfect itinerary for your spiritual or adventure journey
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