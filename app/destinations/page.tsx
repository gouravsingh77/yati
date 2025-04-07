import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, MapPin } from "lucide-react"

export default function DestinationsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Destinations</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Discover our curated selection of spiritual journeys and adventure treks in the Himalayas
          </p>
        </div>
      </section>

      {/* Destinations Tabs */}
      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="spiritual">Spiritual Journeys</TabsTrigger>
                <TabsTrigger value="adventure">Adventure Treks</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Adi Kailash */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/adi/adi1.jpg?height=400&width=600"
                      alt="Adi Kailash"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                    <CardDescription>A sacred pilgrimage to the divine abode of Lord Shiva</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Experience the divine energy at Adi Kailash and witness the natural Om symbol on Om Parvat. This
                      journey offers breathtaking views and spiritual enlightenment.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/adi-kailash">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Milam Glacier */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/milam/milamglacier.jpg?height=400&width=600"
                      alt="Milam Glacier"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Milam Glacier Trek</CardTitle>
                    <CardDescription>
                      Trek through pristine valleys to one of the most beautiful glaciers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Journey through the ancient Indo-Tibetan trade route to reach the magnificent Milam Glacier,
                      offering stunning views of Nanda Devi and surrounding peaks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/milam-glacier">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                 {/* Char Dham */}
                 <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/char/chardham.jpg?height=400&width=600"
                      alt="Kailash Darshan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Char Dham Yatra 2025</CardTitle>
                    <CardDescription>View the sacred Yatra in Himalayas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">10 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    The Char Dham Yatra is one of the most sacred pilgrimage circuits in India, comprising four holy sites nestled in the Garhwal Himalayas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/char-dham">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                 {/* Temples of Manaskhand */}
                 <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/manaskhand/manaskhand.jpeg?height=400&width=600"
                      alt="manaskhand"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Temples of Manaskhand</CardTitle>
                    <CardDescription>View the sacred Yatra in Himalayas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">7 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    Manaskhand region of Kumaon Himalayas is home to some of India's most ancient and powerful temples.
                     This spiritual journey takes you through mystical caves, sacred shrines, and energy centers
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/manaskhand">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Rudranath Trek */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/rudranath/rudranath.jpg?height=400&width=600"
                      alt="Rudranath Trek"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Rudranath Trek</CardTitle>
                    <CardDescription>
                      Journey to the mystical temple of Lord Shiva in the Garhwal Himalayas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Trek to Rudranath, one of the Panch Kedar temples, where Lord Shiva's face is worshipped.
                      Experience spiritual bliss amidst beautiful meadows and forests.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/rudranath">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Khaliya Top */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/khaliya/khaliya.jpg?height=400&width=600"
                      alt="Khaliya Top"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Khaliya Top Trek</CardTitle>
                    <CardDescription>
                      Experience panoramic views of the Himalayan peaks from this beautiful meadow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">4 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Easy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Year-round</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      A perfect trek for beginners, Khaliya Top offers stunning views of Nanda Devi, Nanda Kot, and
                      Panchachuli peaks from its beautiful meadows.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/khaliya-top">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Panchachuli Base Camp  */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/Panchachuli/Panchachuli1.jpeg?height=400&width=600"
                      alt="Panchachuli"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Panchachuli Base Camp Trek</CardTitle>
                    <CardDescription>
                    Witness the majestic five-peaked Panchachuli massif from its pristine base camp, nestled in the heart of Kumaon's Darma Valley.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Easy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Year-round</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    This unforgettable trek takes you through lush alpine meadows, charming Bhotia villages, and rhododendron forests,
                     offering breathtaking views of Himalayans
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/panchachuli">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Ralam Glacier */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/Ralam/Ralam.jpeg?height=400&width=600"
                      alt="Khaliya Top"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Ralam Glacier Trek</CardTitle>
                    <CardDescription>
                    Experience the breathtaking beauty of one of Kumaon's most spectacular glaciers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">7 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Easy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Year-round</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    The Ralam Glacier trek takes you through pristine alpine meadows, dense rhododendron forests, and traditional Himalayan villages.
                     Marvel at panoramic views of Himalayan giants like Nanda Devi, Nanda Kot, and Hardeol.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/ralam-dhura">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Ranthan khrak  */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/Ranthan/Ranthan.jpeg?height=400&width=600"
                      alt="Ranthan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Ranthan Khrak Trek</CardTitle>
                    <CardDescription>
                    Discover the serene beauty of Ranthan Khark, a picturesque alpine meadow nestled in the Kumaon Himalayas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Easy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Year-round</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    This gentle trek offers stunning 360-degree views of snow-capped peaks including 
                    Nanda Devi, Trishul, and Nanda Kot. Perfect for beginners and nature lovers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/ranthan-khrak">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Pindari Glacier */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/pindari/pindari.jpeg?height=400&width=600"
                      alt="Pindari Glacier"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Pindari Glacier Trek</CardTitle>
                    <CardDescription>
                      Trek to one of the most accessible glaciers in the Kumaon Himalayas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">7 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Trek through beautiful forests, meadows, and valleys to reach the Pindari Glacier, offering
                      spectacular views of Nanda Devi and Nanda Kot.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/pindari-glacier">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Nanda Devi Base Camp */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/nanda/nanda.jpeg?height=400&width=600"
                      alt="Nanda Devi Base Camp"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Nanda Devi East Base Camp</CardTitle>
                    <CardDescription>Trek to the base of India's second-highest peak</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Difficult</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      An expedition to the base of the majestic Nanda Devi East peak, offering challenging terrain and
                      breathtaking views of the Himalayan range.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/nanda-devi">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="spiritual">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Adi Kailash */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/adi/adikailash.jpg?height=400&width=600"
                      alt="Adi Kailash"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Adi Kailash & Om Parvat</CardTitle>
                    <CardDescription>A sacred pilgrimage to the divine abode of Lord Shiva</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Experience the divine energy at Adi Kailash and witness the natural Om symbol on Om Parvat. This
                      journey offers breathtaking views and spiritual enlightenment.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/adi-kailash">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Char Dham */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/char/chardham.jpg?height=400&width=600"
                      alt="Kailash Darshan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Char Dham Yatra 2025</CardTitle>
                    <CardDescription>View the sacred Yatra in Himalayas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">10 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    The Char Dham Yatra is one of the most sacred pilgrimage circuits in India, comprising four holy sites nestled in the Garhwal Himalayas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/char-dham">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Temples of Manaskhand */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/manaskhand/manaskhand.jpeg?height=400&width=600"
                      alt="manaskhand"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Temples of Manaskhand</CardTitle>
                    <CardDescription>Walk the ancient pilgrim paths of Manaskhand, discovering exquisitely carved stone temples nestled in orchid-filled valleys.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">7 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                    This cultural trip reveals hidden gems like Jageshwar's 124 shrines, Golu Devta,
                      Kasar Devi, Haat Kalika and the hilltop sanctuary of Binsar Mahadev.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/manaskhand">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Rudranath Trek */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/rudranath/rudranath.jpg?height=400&width=600"
                      alt="Rudranath Trek"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Rudranath Trek</CardTitle>
                    <CardDescription>
                      Journey to the mystical temple of Lord Shiva in the Garhwal Himalayas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Trek to Rudranath, one of the Panch Kedar temples, where Lord Shiva's face is worshipped.
                      Experience spiritual bliss amidst beautiful meadows and forests.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/rudranath">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Kailash Darshan */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/adi/kailash.jpeg?height=400&width=600"
                      alt="Kailash Darshan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Spiritual Journey</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Kailash Darshan from Lipulekh</CardTitle>
                    <CardDescription>View the sacred Mount Kailash from the Indian border</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Journey to Lipulekh Pass on the Indo-Tibet border for a darshan of the sacred Mount Kailash, the
                      abode of Lord Shiva.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/adi-kailash">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="adventure">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Milam Glacier */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/milam/milamglacier.jpg?height=400&width=600"
                      alt="Milam Glacier"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Milam Glacier Trek</CardTitle>
                    <CardDescription>
                      Trek through pristine valleys to one of the most beautiful glaciers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">5 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Journey through the ancient Indo-Tibetan trade route to reach the magnificent Milam Glacier,
                      offering stunning views of Nanda Devi and surrounding peaks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/milam-glacier">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Khaliya Top */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/khaliya/khaliya.jpg?height=400&width=600"
                      alt="Khaliya Top"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Khaliya Top Trek</CardTitle>
                    <CardDescription>
                      Experience panoramic views of the Himalayan peaks from this beautiful meadow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">4 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Easy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Year-round</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      A perfect trek for beginners, Khaliya Top offers stunning views of Nanda Devi, Nanda Kot, and
                      Panchachuli peaks from its beautiful meadows.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/khaliya-top">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Pindari Glacier */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/pindari/pindari.jpeg?height=400&width=600"
                      alt="Pindari Glacier"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Pindari Glacier Trek</CardTitle>
                    <CardDescription>
                      Trek to one of the most accessible glaciers in the Kumaon Himalayas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">7 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Moderate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Trek through beautiful forests, meadows, and valleys to reach the Pindari Glacier, offering
                      spectacular views of Nanda Devi and Nanda Kot.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/pindari-glacier">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Nanda Devi Base Camp */}
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/nanda/nanda.jpeg?height=400&width=600"
                      alt="Nanda Devi Base Camp"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Nanda Devi East Base Camp</CardTitle>
                    <CardDescription>Trek to the base of India's second-highest peak</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">6 Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Difficult</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Jun-Sep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Uttarakhand</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      An expedition to the base of the majestic Nanda Devi East peak, offering challenging terrain and
                      breathtaking views of the Himalayan range.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/destinations/nanda-devi">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Embark on Your Himalayan Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you plan the perfect adventure or spiritual experience in the Himalayas
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
                <Link href="/packages">View All Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

