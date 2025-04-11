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
  const [errors, setErrors] = useState({})
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    participants: "1",
    helicopter: false,
    vip: false,
    photography: false,
    specialRequirements: "",
    referral: "social",
    terms: false
  })

  const trek = {
    title: "Char Dham Yatra",
    description: "A sacred pilgrimage to the four divine abodes of Yamunotri, Gangotri, Kedarnath, and Badrinath",
    image: "/char/chardham.jpg?height=400&width=600&text=Char+Dham",
    category: "Spiritual Journey",
    duration: "10 Days",
    difficulty: "Moderate",
    startDate: "May 15, 2024",
    endDate: "May 24, 2024",
    price: 31999,
    spotsLeft: 8,
    totalSpots: 20,
    bookingDeadline: "April 30, 2024",
    departureFrom: "Haridwar, Uttarakhand",
    returnTo: "Haridwar, Uttarakhand",
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits"
    }
    if (!formData.address.trim()) newErrors.address = "Address is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.participants) newErrors.participants = "Please select number of participants"
    if (!formData.referral) newErrors.referral = "Please tell us how you heard about us"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    if (!formData.terms) newErrors.terms = "You must accept the terms and conditions"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = {...prev}
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const handleSelectChange = (id, value) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    // Clear error when user selects an option
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = {...prev}
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const handleNextStep = () => {
    let isValid = false
    
    if (step === 1) isValid = validateStep1()
    if (step === 2) isValid = validateStep2()
    
    if (isValid) {
      window.scrollTo(0, 0)
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    window.scrollTo(0, 0)
    setStep(step - 1)
  }

  const handlePayment = async () => {
    if (!validateStep3()) return
    
    setIsProcessing(true)
    
    try {
      // Calculate total amount
      let totalAmount = trek.price * parseInt(formData.participants)
      if (formData.helicopter) totalAmount += 8000 * parseInt(formData.participants)
      if (formData.vip) totalAmount += 5000 * parseInt(formData.participants)
      if (formData.photography) totalAmount += 7000

      // Prepare email content
      const emailContent = `
        New Booking for ${trek.title}!
        
        Personal Information:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address}
        
        Booking Details:
        Participants: ${formData.participants}
        Helicopter Service: ${formData.helicopter ? 'Yes' : 'No'}
        VIP Darshan: ${formData.vip ? 'Yes' : 'No'}
        Photography Service: ${formData.photography ? 'Yes' : 'No'}
        Special Requirements: ${formData.specialRequirements || 'None'}
        Referral Source: ${formData.referral}
        
        Payment Details:
        Base Price: ₹${trek.price.toLocaleString()} x ${formData.participants} = ₹${(trek.price * parseInt(formData.participants)).toLocaleString()}
        ${formData.helicopter ? `Helicopter: ₹8,000 x ${formData.participants} = ₹${(8000 * parseInt(formData.participants)).toLocaleString()}\n` : ''}
        ${formData.vip ? `VIP Darshan: ₹5,000 x ${formData.participants} = ₹${(5000 * parseInt(formData.participants)).toLocaleString()}\n` : ''}
        ${formData.photography ? `Photography: ₹7,000\n` : ''}
        Total Amount: ₹${totalAmount.toLocaleString()}
        
        Trek Details:
        Duration: ${trek.duration}
        Dates: ${trek.startDate} to ${trek.endDate}
        Departure: ${trek.departureFrom}
      `

      // Send email using FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/yatidham1008@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: emailContent,
          _subject: `New Booking: ${formData.firstName} ${formData.lastName} - ${trek.title}`,
          _template: "table"
        })
      })

      const result = await response.json()
      if (response.ok) {
        setIsProcessing(false)
        setIsSuccess(true)
      } else {
        throw new Error(result.message || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsProcessing(false)
      alert('There was an error submitting your booking. Please try again or contact us directly.')
    }
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
                href={`https://wa.me/919259071008?text=I've%20made%20the%20payment%20for%20my%20${encodeURIComponent(trek.title)}%20booking.%20Here's%20my%20screenshot.%0A%0AName:%20${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}%0AEmail:%20${encodeURIComponent(formData.email)}`}
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
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea 
                        id="address" 
                        placeholder="Enter your address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
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
                      <Label>Number of Participants *</Label>
                      <Select 
                        value={formData.participants} 
                        onValueChange={(value) => handleSelectChange('participants', value)}
                      >
                        <SelectTrigger className={errors.participants ? "border-red-500" : ""}>
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
                      {errors.participants && <p className="text-sm text-red-500">{errors.participants}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Do you need any additional services?</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="helicopter" 
                            checked={formData.helicopter}
                            onCheckedChange={(checked) => handleSelectChange('helicopter', checked)}
                          />
                          <label
                            htmlFor="helicopter"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Helicopter service for Kedarnath (₹8,000 per person)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="vip" 
                            checked={formData.vip}
                            onCheckedChange={(checked) => handleSelectChange('vip', checked)}
                          />
                          <label
                            htmlFor="vip"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            VIP darshan at all temples (₹5,000 per person)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="photography" 
                            checked={formData.photography}
                            onCheckedChange={(checked) => handleSelectChange('photography', checked)}
                          />
                          <label
                            htmlFor="photography"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Photography service (₹7,000 for the entire journey)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements or Medical Conditions</Label>
                      <Textarea
                        id="specialRequirements"
                        placeholder="Please mention any special requirements or medical conditions we should be aware of"
                        value={formData.specialRequirements}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>How did you hear about us? *</Label>
                      <Select 
                        value={formData.referral}
                        onValueChange={(value) => handleSelectChange('referral', value)}
                      >
                        <SelectTrigger className={errors.referral ? "border-red-500" : ""}>
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
                      {errors.referral && <p className="text-sm text-red-500">{errors.referral}</p>}
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

                    <div className="flex items-start space-x-2 mb-4">
                      <Checkbox 
                        id="terms" 
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleSelectChange('terms', checked)}
                        className="mt-1"
                      />
                      <div>
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <Link href="/terms-of-service" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link> *
                        </label>
                        {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}
                      </div>
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
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Char%20Dham%20Yatra.%20Can%20you%20provide%20more%20information?"
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