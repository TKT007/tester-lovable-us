import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Disclaimer</h1>
        
        <div className="prose prose-slate max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations, warranties, conditions and terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Rewards Disclaimer</h2>
            <p>Participation in our rewards program does not guarantee any specific outcomes or rewards. Availability of rewards is subject to terms and conditions and may be limited by geographic location, time, or other factors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">No Professional Advice</h2>
            <p>The content on this website is for informational purposes only and should not be considered professional, legal, or financial advice. Always consult with qualified professionals for specific guidance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Advertising Disclaimer</h2>
            <p>This website may contain advertising content. We strive to ensure all advertising is truthful and compliant with applicable advertising standards and platform policies, including those of social media platforms like TikTok.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Geographic Limitations</h2>
            <p>Our services and rewards are currently limited to residents of the United States and Canada. Participation from other locations is not permitted and may result in disqualification.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to Disclaimer</h2>
            <p>We reserve the right to update this disclaimer at any time without prior notice. Please review this page periodically for changes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p>If you have any questions about this disclaimer, please contact us at info@company.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}