export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 border-t border-border bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <a 
            href="/privacy-policy" 
            className="hover:text-card-foreground transition-colors underline"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms-of-service" 
            className="hover:text-card-foreground transition-colors underline"
          >
            Terms of Service
          </a>
          <a 
            href="/disclaimer" 
            className="hover:text-card-foreground transition-colors underline"
          >
            Disclaimer
          </a>
        </div>
        <div className="text-center mt-4 text-xs text-muted-foreground">
          © 2024 Rewards Program. All rights reserved.
        </div>
      </div>
    </footer>
  );
};