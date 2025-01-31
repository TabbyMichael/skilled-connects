import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>Welcome to SkilledConnects. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">2.1 Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Professional experience and skills</li>
                  <li>Educational background</li>
                  <li>Portfolio and work samples</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">2.2 Usage Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Time spent on platform</li>
                  <li>Pages visited</li>
                  <li>Actions taken on the platform</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To match freelancers with potential clients</li>
                <li>To process payments and transactions</li>
                <li>To improve our platform and user experience</li>
                <li>To communicate important updates and opportunities</li>
                <li>To prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Other platform users (as necessary for service delivery)</li>
                <li>Payment processors and financial institutions</li>
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p>We use cookies and similar tracking technologies to enhance your experience. For more information, please see our Cookie Policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us at:</p>
              <p className="mt-2">Email: privacy@skilledconnects.com</p>
              <p>Address: [Your Company Address]</p>
            </section>

            <div className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}