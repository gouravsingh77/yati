"use client" // Required for client-side components like Tabs

import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button" // Make sure you import Button

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/himalayas.jpg"
          alt="Himalayan Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">
            Explore the breathtaking beauty of the Himalayas through our collection of images
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="spiritual">Spiritual</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Contents */}
            {[
              { value: "all", images: ["/khaliya/khaliya.jpg", "/adi/adi2.jpg", "/rudranath/rudranath.jpg", "/nanda/nanda.jpeg",
                 "/pindari/pindari1.jpeg", "/panchachuli/panchachuli.jpeg", "/ranthan/ranthan.jpeg", "/milam/milam.jpeg"] },
              {
                value: "spiritual",
                images: ["/adi/adi1.jpg", "/char/badrinath.jpeg", "/char/Gangotri.jpeg", "/char/kedarnath1.jpeg"],
              },
              {
                value: "adventure",
                images: ["/ralam/ralam4.jpeg", "/nanda/nanda1.jpeg", "/milam/milam1.jpg", "/nanda/nanda3.jpeg"],
              },
              {
                value: "culture",
                images: ["/nanda/nanda2.jpeg", "/nanda/nanda4.jpg", "/panchachuli/panchachuli1.jpeg", "/panchachuli/panchachuli4.jpeg"],
              },
            ].map(({ value, images }) => (
              <TabsContent key={value} value={value}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((src, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={src}
                        alt={`${value} image ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Share Your Photos */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Photos</h2>
            <p className="text-muted-foreground mb-8">
              Have you traveled with us? We'd love to feature your photos in our gallery. Share your best shots with us
              and be part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://drive.google.com/drive/folders/1an2mnJDXvIyKgFqLt6QRIlWBSTMQn06A?usp=sharing">
                  Share Your Photos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://wa.me/919259071008?text=I'd%20like%20to%20share%20my%20photos%20from%20my%20journey%20with%20Yati%20Dham"
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
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Himalayas?</h2>
            <p className="text-xl mb-8 opacity-90">Create your own memories in these breathtaking landscapes</p>
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
