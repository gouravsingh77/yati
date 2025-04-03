import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, Users, IndianRupee, Check } from "lucide-react"

export default function PackagesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Packages & Itineraries</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Explore our carefully crafted packages for spiritual journeys and adventure treks
          </p>
        </div>
      </section>

      {/* Fixed Departures Calendar */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Fixed Departures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our scheduled group departures for a shared experience with like-minded travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/adikailash.jpg?height=400&width=600" alt="Adi Kailash" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">May 14, 2025</span>
                </div>
                <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                <CardDescription>9 Days | ₹25,999 per person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">6 Spots Left</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Moderate</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Confirmed Departure</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild className="w-full">
                  <Link href="/book/adi-kailash-june-2024">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="shrink-0">
                  <Link
                    href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Adi%20Kailash%20trek%20on%20June%2015,%202024"
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
                      className="h-4 w-4"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/milam/milamglacier.jpg?height=400&width=600" alt="Milam Glacier" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Aug 1, 2025</span>
                </div>
                <CardTitle>Milam Glacier Trek</CardTitle>
                <CardDescription>5 Days | ₹13,999 per person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">8 Spots Left</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Moderate</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Confirmed Departure</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild className="w-full">
                  <Link href="/book/milam-glacier-july-2024">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="shrink-0">
                  <Link
                    href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Milam%20Glacier%20trek%20on%20July%205,%202024"
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
                      className="h-4 w-4"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/rudranath.jpg?height=400&width=600" alt="Rudranath Trek" fill className="object-cover" />
                <Badge className="absolute top-3 left-3 z-10">Spiritual Trek</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">July 20, 2024</span>
                </div>
                <CardTitle>Rudranath Trek</CardTitle>
                <CardDescription>5 Days | ₹11,999 per person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">4 Spots Left</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Moderate</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Confirmed Departure</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild className="w-full">
                  <Link href="/book/rudranath-july-2024">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="shrink-0">
                  <Link
                    href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Rudranath%20trek%20on%20July%2020,%202024"
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
                      className="h-4 w-4"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/departures">View All Departures</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Package Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of packages designed for different preferences and experiences
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All Packages</TabsTrigger>
                <TabsTrigger value="spiritual">Spiritual</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Adi Kailash Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                    <CardDescription>A sacred pilgrimage to the divine abode of Lord Shiva</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹25,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (hotels & camps)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced local guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Permits and entry fees</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/adi-kailash">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Adi%20Kailash%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Milam Glacier Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Milam Glacier Trek</CardTitle>
                    <CardDescription>
                      Trek through pristine valleys to one of the most beautiful glaciers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹13,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (tents, Homestays & guesthouses)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced trekking guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Trekking equipment</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/milam-glacier">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919876543210?text=I'm%20interested%20in%20the%20Milam%20Glacier%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Family Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Family  Adventure</CardTitle>
                    <CardDescription>A perfect blend of adventure and comfort for families</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹24,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">7 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Comfortable hotel accommodations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals and snacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Family-friendly activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Private transportation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/contact">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Family%20Himalayan%20Adventure%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="spiritual">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Adi Kailash Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                    <CardDescription>A sacred pilgrimage to the divine abode of Lord Shiva</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹25,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (hotels & Homestays )</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced local guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Permits and entry fees</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/adi-kailash">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Adi%20Kailash%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Rudranath Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Rudranath Trek</CardTitle>
                    <CardDescription>
                      Journey to the mystical temple of Lord Shiva in the Garhwal Himalayas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹11,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (guesthouses & camps)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced local guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Permits and entry fees</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/rudranath">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Rudranath%20Trek%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="adventure">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Milam Glacier Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Milam Glacier Trek</CardTitle>
                    <CardDescription>
                      Trek through pristine valleys to one of the most beautiful glaciers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹13,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (tents & guesthouses)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced trekking guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Trekking equipment</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/milam-glacier">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Milam%20Glacier%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Khaliya Top Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Khaliya Top Trek</CardTitle>
                    <CardDescription>
                      Experience panoramic views of the Himalayan peaks from this beautiful meadow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹7,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">4 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (guesthouses)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced trekking guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Transportation from Munsiyari</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/khaliya-top">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Khaliya%20Top%20Trek%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Nanda Devi Package */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Nanda Devi East Base Camp</CardTitle>
                    <CardDescription>Trek to the base of India's second-highest peak</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-xl font-bold">₹14,999</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Accommodation (tents & guesthouses)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">All meals during the trek</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Experienced mountaineering guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Permits and special permissions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button asChild className="w-full">
                      <Link href="/destinations/nanda">View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="shrink-0">
                      <Link
                        href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Nanda%20Devi%20Base%20Camp%20package"
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
                          className="h-4 w-4"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Custom Packages</h2>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? We specialize in creating tailor-made experiences that match your
                preferences, schedule, and interests.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team will work with you to design a personalized itinerary that includes your preferred
                destinations, accommodations, activities, and more.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Flexible Dates</h3>
                    <p className="text-sm text-muted-foreground">Choose your own travel dates that work best for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Personalized Itinerary</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize your journey based on your interests and preferences
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Private Groups</h3>
                    <p className="text-sm text-muted-foreground">
                      Travel with just your family or friends for a more intimate experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Request Custom Package</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link
                    href="https://wa.me/919259071008?text=I'm%20interested%20in%20a%20custom%20package"
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
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/logo1.png?height=800&width=1200"
                alt="Custom Himalayan Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">Secure your spot today and embark on a journey of a lifetime</p>
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
                <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
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

