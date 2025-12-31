import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Visa Process", href: "/visa" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Support", href: "/support" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="gap-2">
            <Globe className="h-4 w-4" />
            <span>EN</span>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">
              <User className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-foreground hover:bg-accent md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 border-b border-border bg-background p-4 transition-all duration-300 md:hidden",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex gap-2">
            <Button variant="outline" className="flex-1" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
