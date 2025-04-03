import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          At Yati Dham, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Register on our website</li>
          <li>Book a trek or tour</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us through our contact form</li>
          <li>Participate in promotions or surveys</li>
        </ul>

        <p>The personal information we collect may include:</p>
        <ul>
          <li>Name, email address, phone number, and billing address</li>
          <li>Payment information (processed securely through our payment processors)</li>
          <li>Travel preferences and requirements</li>
          <li>Health information relevant to your trek or tour</li>
          <li>Demographic information</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul>
          <li>Providing, personalizing, and improving our services</li>
          <li>Processing your bookings and payments</li>
          <li>Communicating with you about your bookings, inquiries, and our services</li>
          <li>Sending you marketing communications (if you've opted in)</li>
          <li>Analyzing usage patterns to improve our website and services</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and hold certain
          information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2>Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
          except as described below:
        </p>
        <ul>
          <li>
            Service providers who assist us in operating our website, conducting our business, or serving our users
          </li>
          <li>
            Partners involved in fulfilling your trek or tour (such as accommodations, transportation providers, and
            guides)
          </li>
          <li>Legal authorities when required by law or to protect our rights</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to maintain the safety of your personal
          information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we
          cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to withdraw consent</li>
          <li>The right to lodge a complaint with a supervisory authority</li>
        </ul>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          <strong>Email:</strong>{" "}
          <Link href="mailto:privacy@yatidham.com" className="text-primary hover:underline">
            privacy@yatidham.com
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

