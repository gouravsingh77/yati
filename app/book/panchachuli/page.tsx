"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Check, AlertCircle, ArrowLeft } from "lucide-react"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const trek = {
    title: "Panchachuli Base Camp",
    description: "Trek to the base of the magnificent five peaks of Panchachuli",
    image: "/panchachuli/panchachuli.jpeg?height=400&width=600&text=Panchachuli",
    category: "Adventure Trek",
    duration: "8 Days",
    difficulty: "Moderate",
    startDate: "May 20, 2024",
    endDate: "May 27, 2024",
    price: 26999,
    spotsLeft: 8,
    totalSpots: 15,
    bookingDeadline: "May 5, 2024",
    departureFrom: "Kathgodam, Uttarakhand",
    returnTo: "Kathgodam, Uttarakhand",
  }

  const handleNextStep = () => {
    window.scrollTo(0, 0)
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    window.scrollTo(0, 0)
    setStep(step - 1)
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <div className="container py-12 px-4">
      {isSuccess ? (
        <div className="max-w-md mx-auto text-center">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Booking Initiated!</h1>
          <p className="text-muted-foreground mb-6">
            Please complete your booking by sharing the payment screenshot on WhatsApp. We'll send you the confirmation
            details once verified.
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link
                href="https://wa.me/919259071008?text=I've%20made%20the%20payment%20for%20my%20Panchachuli%20Base%20Camp%20booking.%20Here's%20my%20screenshot."
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
                Share Payment Screenshot on WhatsApp
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (step > 1 ? handlePrevStep() : null)}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{trek.title}</h1>
                <p className="text-muted-foreground">{trek.description}</p>
              </div>

              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" placeholder="Enter your address" />
                    </div>
                  </div>
                  <Button className="mt-6" onClick={handleNextStep}>
                    Continue to Booking Details
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Number of Participants</Label>
                      <Select defaultValue="1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of participants" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Do you need any additional services?</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="porters" />
                          <label
                            htmlFor="porters"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Porter service (₹1,200 per day)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="photography" />
                          <label
                            htmlFor="photography"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Photography service (₹5,000 for the entire trek)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="equipment" />
                          <label
                            htmlFor="equipment"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Trekking equipment rental (₹3,500 for the entire trek)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements or Medical Conditions</Label>
                      <Textarea
                        id="specialRequirements"
                        placeholder="Please mention any special requirements or medical conditions we should be aware of"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>How did you hear about us?</Label>
                      <Select defaultValue="social">
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="friend">Friend or Family</SelectItem>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="blog">Blog or Article</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="mt-6" onClick={handleNextStep}>
                    Continue to Payment
                  </Button>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment</h2>
                  <div className="space-y-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Payment Instructions</h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Scan the Google Pay QR code with your phone</li>
                        <li>Enter the amount: ₹{trek.price}</li>
                        <li>Add a note with your name and trek name</li>
                        <li>Complete the payment</li>
                        <li>Take a screenshot of the payment confirmation</li>
                        <li>Click the "Complete Booking" button below</li>
                        <li>Share the screenshot with us on WhatsApp for verification</li>
                      </ol>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <Image
                          src="/qr.png?height=300&width=300&text=Google+Pay+QR"
                          alt="Google Pay QR Code"
                          width={250}
                          height={250}
                          className="mx-auto"
                        />
                      </div>
                      <p className="text-center text-sm text-muted-foreground mb-4">
                        Scan this QR code with Google Pay to make your payment
                      </p>
                    </div>

                    <div className="flex items-center p-4 bg-amber-50 text-amber-800 rounded-lg">
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <p className="text-sm">
                        Your booking will be confirmed only after we verify your payment screenshot on WhatsApp.
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <Link href="/terms-of-service" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button className="w-full" onClick={handlePayment} disabled={isProcessing}>
                      {isProcessing ? "Processing..." : "Complete Booking"}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-40 w-full rounded-md overflow-hidden">
                    <Image src={trek.image || "/placeholder.svg"} alt={trek.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{trek.title}</h3>
                    <Badge className="mt-1">{trek.category}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{trek.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Departure Date:</span>
                      <span>{trek.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Return Date:</span>
                      <span>{trek.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span>{trek.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Spots Left:</span>
                      <span>
                        {trek.spotsLeft} of {trek.totalSpots}
                      </span>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Price per person:</span>
                      <span>₹{trek.price.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="w-full p-3 bg-primary/10 rounded-md mb-4">
                    <p className="text-xs text-center">Booking deadline: {trek.bookingDeadline}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Panchachuli%20Base%20Camp%20trek.%20Can%20you%20provide%20more%20information?"
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
                      Ask a Question on WhatsApp
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

