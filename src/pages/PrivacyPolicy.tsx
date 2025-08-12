import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, participate in our rewards program, or contact us for support.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about our programs and offerings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Advertising Partners</h2>
            <p>We may work with advertising partners, including TikTok Ads, to deliver relevant advertisements. These partners may use cookies and similar technologies to collect information about your interactions with our services and other websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@company.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}