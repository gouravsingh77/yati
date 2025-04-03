import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          Welcome to Yati Dham. By accessing or using our website and services, you agree to be bound by these Terms of
          Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, booking a trek or tour, or using any of our services, you agree to be bound
          by these Terms of Service. If you do not agree to all the terms and conditions, you must not use our services.
        </p>

        <h2>2. Booking and Payment</h2>
        <p>
          When you book a trek or tour with us, you agree to provide accurate and complete information. A booking is
          confirmed only after we receive the required deposit or full payment, as specified for each trek or tour.
        </p>
        <p>Payment terms:</p>
        <ul>
          <li>A non-refundable deposit (typically 30% of the total cost) is required to secure your booking</li>
          <li>Full payment is due 45 days before the departure date</li>
          <li>For bookings made within 45 days of departure, full payment is required at the time of booking</li>
          <li>All payments are processed securely through our payment processors</li>
        </ul>

        <h2>3. Cancellation and Refund Policy</h2>
        <p>If you need to cancel your booking, the following cancellation fees apply:</p>
        <ul>
          <li>More than 45 days before departure: Loss of deposit</li>
          <li>30-45 days before departure: 50% of the total cost</li>
          <li>15-29 days before departure: 75% of the total cost</li>
          <li>Less than 15 days before departure or no-show: 100% of the total cost</li>
        </ul>
        <p>
          All cancellation requests must be submitted in writing to{" "}
          <Link href="mailto:bookings@yatidham.com" className="text-primary hover:underline">
            bookings@yatidham.com
          </Link>
          .
        </p>

        <h2>4. Changes to Bookings</h2>
        <p>
          If you need to change your booking (such as dates or trek/tour), we will try to accommodate your request,
          subject to availability and the following conditions:
        </p>
        <ul>
          <li>Changes requested more than 45 days before departure: Administrative fee of ₹2,000 per person</li>
          <li>
            Changes requested within 45 days of departure: Treated as a cancellation and rebooking, subject to our
            cancellation policy
          </li>
        </ul>

        <h2>5. Our Right to Make Changes</h2>
        <p>
          We reserve the right to make changes to any trek or tour if necessary due to unforeseen circumstances, safety
          concerns, or factors beyond our control. If we make a significant change, we will inform you as soon as
          possible and offer you the option to:
        </p>
        <ul>
          <li>Accept the change</li>
          <li>Book an alternative trek or tour (subject to availability and price adjustment)</li>
          <li>Cancel your booking and receive a full refund</li>
        </ul>

        <h2>6. Health and Fitness</h2>
        <p>
          You are responsible for ensuring that you are physically fit and healthy enough to participate in the trek or
          tour you book. You must disclose any pre-existing medical conditions or health concerns at the time of
          booking. We reserve the right to refuse participation if we believe your health or fitness level may put you
          or others at risk.
        </p>

        <h2>7. Travel Insurance</h2>
        <p>
          We strongly recommend that all participants obtain comprehensive travel insurance that covers trekking
          activities, emergency evacuation, and trip cancellation. Travel insurance is not included in our trek or tour
          prices.
        </p>

        <h2>8. Liability and Responsibility</h2>
        <p>
          While we take all reasonable steps to ensure your safety and enjoyment, adventure travel involves inherent
          risks. By booking with us, you acknowledge and accept these risks. We are not liable for any injury, illness,
          death, loss, damage, expense, or other claim arising from:
        </p>
        <ul>
          <li>Acts of God or force majeure</li>
          <li>Civil unrest, strikes, or government actions</li>
          <li>Actions or omissions of third parties beyond our control</li>
          <li>Your own actions or omissions</li>
          <li>Pre-existing medical conditions</li>
        </ul>

        <h2>9. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, images, and software, is our property or the
          property of our licensors and is protected by copyright and other intellectual property laws.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of India. Any disputes arising from these terms will be
          subject to the exclusive jurisdiction of the courts in Uttarakhand, India.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at:</p>
        <p>
          <strong>Email:</strong>{" "}
          <Link href="mailto:legal@yatidham.com" className="text-primary hover:underline">
            legal@yatidham.com
          </Link>
          <br />
          <strong>Phone:</strong>{" "}
          <Link href="tel:+919876543210" className="text-primary hover:underline">
            +91 98765 43210
          </Link>
        </p>

        <p className="text-sm text-muted-foreground mt-8">Last Updated: March 28, 2024</p>
      </div>
    </div>
  )
}

