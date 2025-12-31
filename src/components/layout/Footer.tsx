import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 8 12 11.5 4.5 8 12 4.5zM4 9.5l7 3.5v7L4 16.5v-7zm9 10.5v-7l7-3.5v7L13 20z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Umrah<span className="text-primary">Guide</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for a peaceful and spiritually fulfilling Umrah journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Packages", "Visa Process", "Hotels", "Transport", "FAQ"].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Support</h4>
            <nav className="flex flex-col gap-2">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@umrahguide.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Makkah Al-Mukarramah, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 UmrahGuide. All rights reserved. May your journey be blessed.
          </p>
        </div>
      </div>
    </footer>
  );
}
