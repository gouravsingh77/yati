import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Articles</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Informative travel guides, pilgrimage stories, and Himalayan insights
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/adi/adi1.jpg?height=800&width=1200&text=Featured+Article"
                alt="Featured Article"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">Featured</Badge>
              <h2 className="text-3xl font-bold mb-4">The Sacred Journey to Adi Kailash: A Complete Guide</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>June 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>By Rajesh Joshi</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Adi Kailash, also known as Chhota Kailash, is a sacred peak located in the Pithoragarh district of
                Uttarakhand. This comprehensive guide covers everything you need to know about planning your pilgrimage
                to this divine destination, including the best time to visit, necessary permits, and spiritual
                significance.
              </p>
              <Button asChild>
                <Link href="/blog/sacred-journey-to-adi-kailash">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our latest travel guides, tips, and stories from the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/client/priya.jpg?height=400&width=600&text=Article+1"
                  alt="Article 1"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Travel Guide</Badge>
              </div>
              <CardHeader>
                <CardTitle>Essential Packing List for Himalayan Treks</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>May 25, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>By Meera Rawat</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  Preparing for a Himalayan trek requires careful planning and the right gear. This comprehensive
                  packing list covers everything from clothing and footwear to medical supplies and electronics,
                  ensuring you're well-prepared for your adventure.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/essential-packing-list">Read More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/client/amit.jpg?height=400&width=600&text=Article+2"
                  alt="Article 2"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Cultural Insights</Badge>
              </div>
              <CardHeader>
                <CardTitle>The Rich Cultural Heritage of Kumaon</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>May 18, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>By Deepak Negi</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  The Kumaon region of Uttarakhand is known for its rich cultural heritage, unique traditions, and
                  vibrant festivals. This article explores the cultural tapestry of Kumaon, from its folk music and
                  dance to its traditional cuisine and religious practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/cultural-heritage-kumaon">Read More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/client/rahul.jpg?height=400&width=600&text=Article+3"
                  alt="Article 3"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
              </div>
              <CardHeader>
                <CardTitle>The Mystical Panch Kedar: A Spiritual Circuit</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>May 10, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>By Rajesh Joshi</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  The Panch Kedar refers to five Hindu temples dedicated to Lord Shiva in the Garhwal region of
                  Uttarakhand. This article delves into the spiritual significance of these temples, the legends
                  associated with them, and how to plan a pilgrimage to these sacred sites.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/mystical-panch-kedar">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/blog/all">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover articles on various aspects of Himalayan travel and culture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="/about" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/team/pawan.png?height=300&width=400&text=Travel+Guides"
                  alt="Travel Guides"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Travel Guides</h3>
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/client/rahul.jpg?height=300&width=400&text=Spiritual+Journeys"
                  alt="Spiritual Journeys"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Spiritual Journeys</h3>
                </div>
              </div>
            </Link>

            <Link href="/blog/category/adventure-stories" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/client/amit.jpg?height=300&width=400&text=Adventure+Stories"
                  alt="Adventure Stories"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Adventure Stories</h3>
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/nanda/nanda.jpeg?height=300&width=400&text=Cultural+Insights"
                  alt="Cultural Insights"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Cultural Insights</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with our latest articles, travel tips, and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Himalayas?</h2>
            <p className="text-xl mb-8 opacity-90">Turn the stories you've read into your own adventure</p>
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

