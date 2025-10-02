import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Calendar, 
  Bell, 
  User, 
  Shield, 
  LogOut,
  CalendarClock,
  Clock,
  CheckCircle2,
  Search
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { label: "Upcoming Bookings", value: 0, icon: CalendarClock, color: "text-primary" },
    { label: "Pending Bookings", value: 3, icon: Clock, color: "text-warning" },
    { label: "Completed Bookings", value: 1, icon: CheckCircle2, color: "text-success" }
  ];

  const recentBookings = [
    {
      id: 1,
      celebrity: "Leonardo DiCaprio",
      category: "Donation",
      amount: "$15.00",
      status: "Pending",
      date: "Supporting: sharecare.wut",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      celebrity: "Tom Holand",
      category: "Fan Card",
      amount: "$249.00",
      status: "Approved",
      date: "Gold VIP Membership",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      celebrity: "JARED LETO",
      category: "Donation",
      amount: "$1.00",
      status: "Pending",
      date: "Supporting: whoareyou.education",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "bookings", label: "My Bookings", icon: Calendar },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "My Profile", icon: User },
    { id: "security", label: "Security", icon: Shield }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
      case "Completed":
        return "bg-success text-success-foreground";
      case "Pending":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="p-0">
              {/* User Profile */}
              <div className="bg-gradient-primary p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary-foreground/20">
                  <AvatarFallback className="bg-primary-foreground text-primary text-2xl">RA</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-primary-foreground">real analysis</h3>
                <p className="text-sm text-primary-foreground/80">real12@gmail.com</p>
              </div>

              {/* Navigation */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {sidebarItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          activeTab === item.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                  <li className="pt-4 border-t">
                    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors">
                      <LogOut className="h-5 w-5" />
                      <span className="font-medium">Log Out</span>
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Account Info */}
              <div className="p-4 border-t space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground">Account Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-medium">Aug 27, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Bookings</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Upcoming Events</span>
                    <span className="font-medium">0</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-full bg-secondary ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <Link to="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                      View all
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Bookings</CardTitle>
                  <Link to="#" className="text-sm text-primary hover:underline">
                    View all
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <img 
                      src={booking.image} 
                      alt={booking.celebrity}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{booking.celebrity}</h4>
                        <Badge variant="outline" className="text-xs">{booking.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{booking.date}</p>
                      <p className="text-sm font-medium mt-1">Donation Amount: {booking.amount}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                      <p className="text-lg font-bold text-muted-foreground mt-2">{booking.amount}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Find Guest Booking */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Search className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle>Find Guest Booking</CardTitle>
                    <CardDescription>Locate your previous bookings instantly</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Booking Reference *</label>
                  <Input placeholder="CBK-ABC12345" className="bg-background" />
                  <p className="text-xs text-muted-foreground">
                    Format: CBK-XXXXXXX (found in your booking confirmation)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-background" />
                  <p className="text-xs text-muted-foreground">
                    The email address used during booking
                  </p>
                </div>

                <Button className="w-full bg-gradient-accent hover:bg-accent-hover">
                  <Search className="h-4 w-4 mr-2" />
                  Find My Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
