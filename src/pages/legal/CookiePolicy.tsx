import { ScrollArea } from "@/components/ui/scroll-area";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>This Cookie Policy explains how SkilledConnects uses cookies and similar technologies to recognize you when you visit our platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. What Are Cookies</h2>
              <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">3.1 Essential Cookies</h3>
                <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Setting your privacy preferences</li>
                  <li>Logging in or filling in forms</li>
                  <li>Basic functionality and security features</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">3.2 Performance Cookies</h3>
                <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Which pages are the most and least popular</li>
                  <li>How visitors move around the site</li>
                  <li>If users encounter any errors</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">3.3 Functionality Cookies</h3>
                <p>These cookies enable enhanced functionality and personalization, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remembering your preferences</li>
                  <li>Customizing content based on your choices</li>
                  <li>Remembering your user settings</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">3.4 Targeting Cookies</h3>
                <p>These cookies may be set through our site by our advertising partners to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Build a profile of your interests</li>
                  <li>Show you relevant adverts on other sites</li>
                  <li>Track the effectiveness of marketing campaigns</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p>In addition to our own cookies, we may also use various third-party cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Report usage statistics</li>
                <li>Deliver advertisements</li>
                <li>Integrate with social media platforms</li>
                <li>Provide enhanced functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <div className="space-y-4">
                <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
                <h3 className="text-lg font-medium text-foreground">5.1 How to Delete Cookies</h3>
                <p>You can delete cookies already stored on your computer. For example:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In Chrome: Settings → Privacy and Security → Clear browsing data</li>
                  <li>In Firefox: Options → Privacy & Security → Clear Data</li>
                  <li>In Safari: Preferences → Privacy → Manage Website Data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we post changes to this policy, we will revise the updated date at the bottom of this page.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact us at:</p>
              <p className="mt-2">Email: privacy@skilledconnects.com</p>
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