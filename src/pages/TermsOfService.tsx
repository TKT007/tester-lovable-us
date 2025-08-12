import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
            <p>Our services are available only to residents of the United States and Canada who are 18 years of age or older. By using our services, you represent that you meet these eligibility requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Rewards Program</h2>
            <p>Participation in our rewards program is subject to these terms and our program rules. Rewards are limited and subject to availability. We reserve the right to modify or terminate the program at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Prohibited Uses</h2>
            <p>You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. You may not use automated systems to access our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Advertising Compliance</h2>
            <p>Our advertising practices comply with applicable regulations and platform policies, including TikTok Ads policies. We ensure transparency in our promotional content and maintain accurate representations of our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at legal@company.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}