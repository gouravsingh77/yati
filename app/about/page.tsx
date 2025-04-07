import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Users, Mountain, Shield, Award, Heart, MapPin } from "lucide-react"

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Yati Dham</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            A trusted travel company promoting sustainable tourism in the Himalayas
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                Yati Dham is a trusted travel company based in the heart of Uttarakhand, specializing in spiritual
                journeys, adventure treks, and Himalayan explorations. Our core mission is to promote sustainable and
                zero-waste tourism while generating self-employment opportunities for the local communities.
              </p>
              <p className="text-muted-foreground mb-4">
                We curate authentic travel experiences that connect travelers with the untouched beauty, vibrant
                culture, and rich spiritual heritage of the Himalayas. Our team consists of experienced local guides who
                have deep knowledge of the terrain, culture, and spiritual significance of the regions we explore.
              </p>
              <p className="text-muted-foreground">
                At Yati Dham, we believe in responsible tourism that respects nature, preserves local traditions, and
                contributes positively to the communities we visit.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/logo1.png?height=800&width=1200" alt="Yati Dham Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guided by our values, we strive to create meaningful experiences while preserving the environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mountain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To provide a seamless and soul-enriching travel experience while ensuring sustainable tourism practices
                that protect the environment and empower local communities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Promote zero-waste tourism in the Himalayas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Create self-employment opportunities for locals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Preserve the cultural heritage of Uttarakhand</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                To be the most trusted and eco-conscious travel company, offering authentic experiences and preserving
                the sacred lands of the Himalayas for future generations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Set the standard for responsible tourism in India</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Make spiritual journeys accessible to all seekers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Create a network of eco-conscious travelers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets Yati Dham apart from other travel companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Our guides are locals with deep knowledge of the terrain, culture, and spiritual significance of the
                regions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Waste Policy</h3>
              <p className="text-muted-foreground">
                We are committed to leaving no trace and minimizing our environmental impact on all our journeys.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
              <p className="text-muted-foreground">
                We keep our groups small to ensure personalized attention and minimize environmental impact.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                No hidden costs with clear breakdown of all expenses. We believe in fair and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Yati Dham who make your journeys memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <Image src="/team/gourav.jpg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Gourav Singh</h3>
                <p className="text-primary mb-3">Co-Founder & Operations</p>
                <p className="text-muted-foreground mb-4">
                  Born and raised in the mountains, Gourav has over a years of experience leading treks and spiritual
                  journeys.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <Image src="/team/pawan.png?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Pawan Mehra</h3>
                <p className="text-primary mb-3"> Strategy Head & Expedition Planner </p>
                <p className="text-muted-foreground mb-4">
                With a vision to blend adventure and spirituality, Pawan strategizes and plans Yati Dham’s growth, making every journey impactful and unforgettable.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <Image src="/team/varsha.png?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Varsha Negi</h3>
                <p className="text-primary mb-3">Marketing Head</p>
                <p className="text-muted-foreground mb-4">
                The mastermind behind our branding and outreach, Varsha ensures Yati Dham reaches travel enthusiasts looking for soulful and thrilling experiences.
                </p>
              </div>
            </div>


            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <Image src="/team/rohit.png?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Rohit</h3>
                <p className="text-primary mb-3"> Logistics & Ground Support</p>
                <p className="text-muted-foreground mb-4">
                From accommodation to transport, Rohit makes sure everything runs smoothly so travelers can focus on their journey.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <Image src="/client/1.jpg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Kuldeep Karki</h3>
                <p className="text-primary mb-3"> Trek & Expedition Leader</p>
                <p className="text-muted-foreground mb-4">
                An expert in high-altitude treks, Kuldeep leads groups with confidence, ensuring safety, adventure, and an immersive experience in the Himalayas.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="relative h-64 w-full">
                <Image src="/client/2.jpg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Rahul </h3>
                <p className="text-primary mb-3">Trek Leader & Guide </p>
                <p className="text-muted-foreground mb-4">
                A seasoned trekker with vast knowledge of the terrain, Rahul brings passion and expertise to every journey. His guidance ensures safety, adventure, and an unforgettable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Himalayas with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us on a journey that will connect you with nature, culture, and your inner self
            </p>
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
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

