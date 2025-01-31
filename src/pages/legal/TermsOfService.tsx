import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using SkilledConnects, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. User Accounts</h2>
              <div className="space-y-4">
                <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for safeguarding your account password</li>
                  <li>You agree to not share your account credentials</li>
                  <li>You must notify us immediately of any unauthorized access</li>
                  <li>We reserve the right to terminate accounts at our discretion</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Platform Rules and Guidelines</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">3.1 General Conduct</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Act professionally and ethically</li>
                  <li>Provide accurate information</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality when required</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">3.2 Prohibited Activities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fraudulent or deceptive practices</li>
                  <li>Harassment or abuse</li>
                  <li>Spam or unauthorized advertising</li>
                  <li>Violation of intellectual property rights</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Payments and Fees</h2>
              <div className="space-y-4">
                <p>Users agree to pay all applicable fees and taxes associated with using the platform. We reserve the right to modify our fees at any time with notice.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment processing fees</li>
                  <li>Platform service fees</li>
                  <li>Subscription fees (if applicable)</li>
                  <li>Refund policies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p>The platform, content, and trademarks are owned by SkilledConnects. Users retain ownership of their content but grant us a license to use it for platform purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Dispute Resolution</h2>
              <p>Any disputes arising from the use of our platform shall be resolved through arbitration in accordance with applicable laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>SkilledConnects shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Indemnification</h2>
              <p>You agree to indemnify and hold harmless SkilledConnects from any claims arising from your use of the platform or violation of these terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
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