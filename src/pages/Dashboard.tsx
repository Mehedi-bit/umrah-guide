import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Menu,
  ChevronDown,
  Plane,
  Building2,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Bookings", href: "/dashboard/bookings", icon: CalendarDays },
  { name: "Visa Status", href: "/dashboard/visa", icon: FileText },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const upcomingTrip = {
    packageName: "Premium Umrah Package",
    departureDate: "January 15, 2025",
    daysUntil: 14,
    status: "confirmed",
  };

  const visaStatus = {
    step: 3,
    totalSteps: 4,
    currentStep: "Processing",
    progress: 75,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-card transition-all duration-300",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
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
            {sidebarOpen && (
              <span className="font-serif text-lg font-bold text-foreground">
                Umrah<span className="text-primary">Guide</span>
              </span>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <link.icon className="h-5 w-5 shrink-0" />
                {sidebarOpen && <span>{link.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              AS
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">Ahmed Salem</div>
                <div className="text-xs text-muted-foreground">ahmed@email.com</div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur">
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Ahmed</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Days Until Umrah</p>
                    <p className="font-serif text-3xl font-bold text-foreground">
                      {upcomingTrip.daysUntil}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Visa Status</p>
                    <p className="font-serif text-xl font-bold text-foreground">
                      {visaStatus.currentStep}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <Progress value={visaStatus.progress} className="mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Documents</p>
                    <p className="font-serif text-xl font-bold text-foreground">4/5 Uploaded</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Status</p>
                    <p className="font-serif text-xl font-bold text-foreground">Paid</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Upcoming Trip */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Upcoming Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl bg-gradient-to-br from-card to-muted p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {upcomingTrip.packageName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Departing: {upcomingTrip.departureDate}
                      </p>
                    </div>
                    <Badge variant="gold">Confirmed</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Plane className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        Saudi Airlines - Business Class
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        Swissotel Makkah (5 nights) + Oberoi Madinah (4 nights)
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-6 w-full" asChild>
                    <Link to="/dashboard/bookings">View Full Itinerary</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visa Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Visa Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Document Upload", status: "completed" },
                    { step: 2, title: "Verification", status: "completed" },
                    { step: 3, title: "Processing", status: "current" },
                    { step: 4, title: "Approved", status: "pending" },
                  ].map((item, index) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-full",
                            item.status === "completed"
                              ? "bg-primary text-primary-foreground"
                              : item.status === "current"
                              ? "border-2 border-primary bg-background"
                              : "border-2 border-border bg-background"
                          )}
                        >
                          {item.status === "completed" ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <span className="text-sm font-semibold">{item.step}</span>
                          )}
                        </div>
                        {index < 3 && (
                          <div
                            className={cn(
                              "w-0.5 flex-1",
                              item.status === "completed" ? "bg-primary" : "bg-border"
                            )}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4
                          className={cn(
                            "font-semibold",
                            item.status === "completed" || item.status === "current"
                              ? "text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.title}
                        </h4>
                        {item.status === "current" && (
                          <p className="mt-1 text-sm text-primary">
                            Currently being processed...
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
