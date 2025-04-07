"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdiKailashBookingPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/book/adikailash-june152024")
  }, [router])

  return (
    <div className="container py-12 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Redirecting to Adi Kailash booking...</h2>
        <p className="text-muted-foreground">Please wait a moment</p>
      </div>
    </div>
  )
}

