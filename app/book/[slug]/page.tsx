"use client"

import { useState, useEffect, use } from "react"
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
import { Check, AlertCircle, ArrowLeft, Calendar, Clock, Mountain, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingPage({ params }: { params: { slug: string } }) {
  // Properly unwrap the params promise
  const unwrappedParams = use(params)
  const slug = unwrappedParams.slug

  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [participants, setParticipants] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    idProof: "aadhar",
    idNumber: "",
    departureDate: "14 May",
    additionalServices: {
      porters: false,
      photography: false,
      equipment: false,
      puja: false,
      helicopter: false,
      vipDarshan: false,
    },
    specialRequirements: "",
    referralSource: "social",
  })

  const getTrekData = () => {
    const destinationName = slug.split("-")[0]

    switch (destinationName) {
      case "adikailash":
        return {
          title: "Adi Kailash & Om Parvat",
          description: "A sacred pilgrimage to the divine abode of Lord Shiva",
          image: "/adi/adikailash.jpg?height=400&width=600&text=Adi+Kailash",
          category: "Spiritual Journey",
          duration: "6 Days",
          difficulty: "Moderate",
          startDate: "May 14 2025",
          endDate: "May 19, 2025",
          price: 25999,
          spotsLeft: 6,
          totalSpots: 15,
          bookingDeadline: "May 5, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "3,900m",
        }
      case "milam":
        return {
          title: "Milam Glacier Trek",
          description: "Trek through pristine valleys to one of the most beautiful glaciers",
          image: "/milam/milam.jpeg?height=400&width=600&text=Milam+Glacier",
          category: "Adventure Trek",
          duration: "5 Days",
          difficulty: "Moderate",
          startDate: "Aug 5, 2025",
          endDate: "Aug 10, 2025",
          price: 13999,
          spotsLeft: 8,
          totalSpots: 15,
          bookingDeadline: "July 30, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "4,200m",
        }
      case "khaliya":
        return {
          title: "Khaliya Top Trek",
          description: "Experience panoramic views of the Himalayan peaks from this beautiful meadow",
          image: "/khaliya/khaliya.jpeg?height=400&width=600&text=Khaliya+Top",
          category: "Easy Trek",
          duration: "4 Days",
          difficulty: "Easy",
          startDate: "May 25, 2025",
          endDate: "May 29, 2025",
          price: 7999,
          spotsLeft: 10,
          totalSpots: 20,
          bookingDeadline: "May 15, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "3,500m",
        }
      case "pindari":
        return {
          title: "Pindari Glacier Trek",
          description: "Trek to the magnificent Pindari Glacier in the Kumaon Himalayas",
          image: "/pindari/pindari.jpeg?height=400&width=600&text=Pindari+Glacier",
          category: "Adventure Trek",
          duration: "7 Days",
          difficulty: "Moderate",
          startDate: "Aug 15, 2025",
          endDate: "Aug 21, 2025",
          price: 12999,
          spotsLeft: 12,
          totalSpots: 20,
          bookingDeadline: "July 30, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "3,660m",
        }
      case "nandadevi":
        return {
          title: "Nanda Devi East Base Camp",
          description: "Trek to the base camp of India's second-highest peak",
          image: "/nanda/nanda.jpeg?height=400&width=600&text=Nanda+Devi",
          category: "Adventure Trek",
          duration: "6 Days",
          difficulty: "Moderate",
          startDate: "Aug 20, 2025",
          endDate: "Aug 25, 2025",
          price: 15999,
          spotsLeft: 5,
          totalSpots: 12,
          bookingDeadline: "July 30, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "4,300m",
        }
      case "panchachuli":
        return {
          title: "Panchachuli Base Camp Trek",
          description: "Trek to the base of the magnificent five peaks of Panchachuli",
          image: "/himalayas.jpg?height=400&width=600&text=Panchachuli",
          category: "Adventure Trek",
          duration: "5 Days",
          difficulty: "Moderate",
          startDate: "15 May, 2025",
          endDate: "June 20, 2025",
          price: 9999,
          spotsLeft: 8,
          totalSpots: 15,
          bookingDeadline: "5 May, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "4,100m",
        }
      case "ralam":
        return {
          title: "Ralam Glacier Trek",
          description: "Explore the pristine Ralam valley and glacier in the eastern Kumaon",
          image: "/ralam/ralam.jpeg?height=400&width=600&text=Ralam+Glacier",
          category: "Adventure Trek",
          duration: "7 Days",
          difficulty: "Moderate to Challenging",
          startDate: "Aug 15, 2025",
          endDate: "Aug 21, 2025",
          price: 18999,
          spotsLeft: 10,
          totalSpots: 15,
          bookingDeadline: "July 30, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "3,900m",
        }
      case "ranthan":
        return {
          title: "Ranthan Khrak Trek",
          description: "Trek to the beautiful high-altitude meadow of Ranthan",
          image: "/ranthan/ranthan.jpeg?height=400&width=600&text=Ranthan+Khrak",
          category: "Adventure Trek",
          duration: "5 Days",
          difficulty: "Moderate",
          startDate: "Aug 7, 2025",
          endDate: "Aug 11, 2025",
          price: 8999,
          spotsLeft: 12,
          totalSpots: 20,
          bookingDeadline: "July 30, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "3,700m",
        }
      case "rudranath":
        return {
          title: "Rudranath Temple Trek",
          description: "Trek to the sacred Rudranath temple, part of the Panch Kedar",
          image: "/rudranath/rudranath.jpg?height=400&width=600&text=Rudranath",
          category: "Spiritual Trek",
          duration: "6 Days",
          difficulty: "Moderate",
          startDate: "May 15, 2024",
          endDate: "May 20, 2025",
          price: 11999,
          spotsLeft: 15,
          totalSpots: 25,
          bookingDeadline: "May 5, 2025",
          departureFrom: "Rishikesh, Uttarakhand",
          returnTo: "Rishikesh, Uttarakhand",
          maxAltitude: "3,600m",
        }
      case "chardham":
        return {
          title: "Char Dham Yatra",
          description: "Sacred pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath",
          image: "/char/chaedham.jpg?height=400&width=600&text=Char+Dham",
          category: "Spiritual Journey",
          duration: "10 Days",
          difficulty: "Moderate",
          startDate: "May 15, 2025",
          endDate: "May 24, 2025",
          price: 31999,
          spotsLeft: 20,
          totalSpots: 40,
          bookingDeadline: "April 5, 2025",
          departureFrom: "Haridwar, Uttarakhand",
          returnTo: "Haridwar, Uttarakhand",
          maxAltitude: "3,580m",
        }
      case "manaskhand":
        return {
          title: "Temples of Manaskhand",
          description: "Pilgrimage to the ancient temples of the Manaskhand region",
          image: "/manaskhand/manaskhand.jpeg?height=400&width=600&text=Manaskhand",
          category: "Spiritual Journey",
          duration: "7 Days",
          difficulty: "Easy to Moderate",
          startDate: "May 15, 2025",
          endDate: "May 21, 2025",
          price: 14999,
          spotsLeft: 15,
          totalSpots: 30,
          bookingDeadline: "May 5, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "2,500m",
        }
      default:
        return {
          title: "Adi Kailash & Om Parvat",
          description: "A sacred pilgrimage to the divine abode of Lord Shiva",
          image: "/adi/adikailash.jpeg?height=400&width=600",
          category: "Spiritual Journey",
          duration: "6 Days",
          difficulty: "Moderate",
          startDate: "May 14, 2025",
          endDate: "May 19, 2025",
          price: 25999,
          spotsLeft: 6,
          totalSpots: 15,
          bookingDeadline: "May 5, 2025",
          departureFrom: "Kathgodam, Uttarakhand",
          returnTo: "Kathgodam, Uttarakhand",
          maxAltitude: "3,900m",
        }
    }
  }

  const trek = getTrekData()

  useEffect(() => {
    setTotalPrice(trek.price * participants)
  }, [participants, trek.price])

  const handleNextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    window.scrollTo(0, 0)
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    window.scrollTo(0, 0)
    setStep(step - 1)
  }

  const handleParticipantsChange = (value: string) => {
    const count = Number.parseInt(value)
    setParticipants(count)
    setTotalPrice(trek.price * count)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    const submissionData = {
      ...formData,
      trekTitle: trek.title,
      participants,
      totalPrice,
      additionalServices: JSON.stringify(formData.additionalServices),
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/yatidham1008@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsProcessing(false)
        setIsSuccess(true)
      } else {
        console.error("Submission failed:", result)
        setIsProcessing(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsProcessing(false)
    }
  }

  return (
    <div className="container py-8 md:py-12 px-4">
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
                href={`https://wa.me/919259071008?text=I've%20made%20the%20payment%20for%20my%20${encodeURIComponent(trek.title)}%20booking.%20Here's%20my%20screenshot.`}
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
              <Link href={`/destinations${slug.split("-")[0]}`}>Return to Trek Details</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevStep}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>

          <div className="mb-8 max-w-3xl mx-auto">
            <div className="flex justify-between">
              <div className={`text-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                <div
                  className={`h-8 w-8 rounded-full ${step >= 1 ? "bg-primary text-white" : "bg-muted"} flex items-center justify-center mx-auto mb-2`}
                >
                  1
                </div>
                <span className="text-xs">Personal Info</span>
              </div>
              <div className="grow border-t border-muted my-4 mx-2"></div>
              <div className={`text-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                <div
                  className={`h-8 w-8 rounded-full ${step >= 2 ? "bg-primary text-white" : "bg-muted"} flex items-center justify-center mx-auto mb-2`}
                >
                  2
                </div>
                <span className="text-xs">Booking Details</span>
              </div>
              <div className="grow border-t border-muted my-4 mx-2"></div>
              <div className={`text-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                <div
                  className={`h-8 w-8 rounded-full ${step >= 3 ? "bg-primary text-white" : "bg-muted"} flex items-center justify-center mx-auto mb-2`}
                >
                  3
                </div>
                <span className="text-xs">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{trek.title}</h1>
                <p className="text-muted-foreground">{trek.description}</p>
              </div>

              {step === 1 && (
                <form onSubmit={handleNextStep} className="bg-card p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idProof">ID Proof (Required for Permits)</Label>
                      <Select value={formData.idProof} onValueChange={(value) => handleSelectChange("idProof", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ID type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aadhar">Aadhar Card</SelectItem>
                          <SelectItem value="passport">Passport</SelectItem>
                          <SelectItem value="voterID">Voter ID</SelectItem>
                          <SelectItem value="drivingLicense">Driving License</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">ID Number</Label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your ID number"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="mt-6 w-full md:w-auto">
                    Continue to Booking Details
                  </Button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNextStep} className="bg-card p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Departure Date</Label>
                      <Select
                        value={formData.departureDate}
                        onValueChange={(value) => handleSelectChange("departureDate", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select departure date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="May 14">
                            {trek.startDate} ({trek.spotsLeft} spots left)
                          </SelectItem>
                          <SelectItem value="May 15">May 15, 2025 (8 spots left)</SelectItem>
                          <SelectItem value="May 23">May 23, 2025 (10 spots left)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Participants</Label>
                      <Select defaultValue="1" onValueChange={handleParticipantsChange}>
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
                      <div className="space-y-2 p-4 bg-muted/50 rounded-md">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="porters"
                            checked={formData.additionalServices.porters}
                            onCheckedChange={(checked) => handleCheckboxChange("porters", checked as boolean)}
                          />
                          <label
                            htmlFor="porters"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Porter service (₹1,000 per day)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="photography"
                            checked={formData.additionalServices.photography}
                            onCheckedChange={(checked) => handleCheckboxChange("photography", checked as boolean)}
                          />
                          <label
                            htmlFor="photography"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Photography service (₹5,000 for the entire trek)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="equipment"
                            checked={formData.additionalServices.equipment}
                            onCheckedChange={(checked) => handleCheckboxChange("equipment", checked as boolean)}
                          />
                          <label
                            htmlFor="equipment"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Trekking equipment rental (₹3,000 for the entire trek)
                          </label>
                        </div>
                        {trek.category.includes("Spiritual") && (
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="puja"
                              checked={formData.additionalServices.puja}
                              onCheckedChange={(checked) => handleCheckboxChange("puja", checked as boolean)}
                            />
                            <label
                              htmlFor="puja"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Special puja arrangement (₹2,500)
                            </label>
                          </div>
                        )}
                        {trek.title === "Char Dham Yatra" && (
                          <>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="helicopter"
                                checked={formData.additionalServices.helicopter}
                                onCheckedChange={(checked) => handleCheckboxChange("helicopter", checked as boolean)}
                              />
                              <label
                                htmlFor="helicopter"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Helicopter service for Kedarnath (₹8,500 per person)
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="vipDarshan"
                                checked={formData.additionalServices.vipDarshan}
                                onCheckedChange={(checked) => handleCheckboxChange("vipDarshan", checked as boolean)}
                              />
                              <label
                                htmlFor="vipDarshan"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                VIP Darshan tickets (₹3,500 per person)
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements or Medical Conditions</Label>
                      <Textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleInputChange}
                        placeholder="Please mention any special requirements, dietary preferences, or medical conditions we should be aware of"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>How did you hear about us?</Label>
                      <Select
                        value={formData.referralSource}
                        onValueChange={(value) => handleSelectChange("referralSource", value)}
                      >
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
                  <Button type="submit" className="mt-6 w-full md:w-auto">
                    Continue to Payment
                  </Button>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Payment</h2>
                  <div className="space-y-6">
                    <Tabs defaultValue="googlepay" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="googlepay">Google Pay</TabsTrigger>
                        <TabsTrigger value="upi">Other UPI</TabsTrigger>
                      </TabsList>
                      <TabsContent value="googlepay" className="pt-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Google Pay Instructions</h3>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                            <li>Scan the Google Pay QR code with your phone</li>
                            <li>Enter the amount: ₹{totalPrice.toLocaleString()}</li>
                            <li>Add a note with your name and "{trek.title}"</li>
                            <li>Complete the payment</li>
                            <li>Take a screenshot of the payment confirmation</li>
                            <li>Click the "Complete Booking" button below</li>
                            <li>Share the screenshot with us on WhatsApp for verification</li>
                          </ol>
                        </div>

                        <div className="flex flex-col items-center my-6">
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
                      </TabsContent>
                      <TabsContent value="upi" className="pt-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-medium mb-2">UPI Payment Instructions</h3>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                            <li>Open any UPI app (PhonePe, Paytm, etc.)</li>
                            <li>
                              Send payment to UPI ID: <span className="font-medium">gouravtomkyal77@okaxis</span>
                            </li>
                            <li>Enter the amount: ₹{totalPrice.toLocaleString()}</li>
                            <li>Add a note with your name and "{trek.title}"</li>
                            <li>Complete the payment</li>
                            <li>Take a screenshot of the payment confirmation</li>
                            <li>Click the "Complete Booking" button below</li>
                            <li>Share the screenshot with us on WhatsApp for verification</li>
                          </ol>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="flex items-center p-4 bg-amber-50 text-amber-800 rounded-lg">
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <p className="text-sm">
                        Your booking will be confirmed only after we verify your payment screenshot on WhatsApp.
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="terms" required />
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

                    <Button type="submit" className="w-full" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : "Complete Booking"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="md:sticky md:top-24 h-fit">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-40 w-full rounded-md overflow-hidden">
                    <Image src={trek.image || "/himalayas.jpg"} alt={trek.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{trek.title}</h3>
                    <Badge className="mt-1">{trek.category}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{trek.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {trek.startDate} - {trek.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Mountain className="h-4 w-4 text-muted-foreground" />
                      <span>Max Altitude: {trek.maxAltitude}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Starting: {trek.departureFrom}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Base Price:</span>
                      <span>₹{trek.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Participants:</span>
                      <span>× {participants}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Total Amount:</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="w-full p-3 bg-primary/10 rounded-md mb-4">
                    <p className="text-xs text-center">Booking deadline: {trek.bookingDeadline}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link
                      href={`https://wa.me/919259071008?text=I'm%20interested%20in%20the%20${encodeURIComponent(trek.title)}%20trek.%20Can%20you%20provide%20more%20information?`}
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