import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Star, Heart, ArrowLeft, Calendar as CalendarIcon, Clock, Users, MapPin, Check } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [bookingType, setBookingType] = useState<string>("event");

  const celebrities = [
    {
      id: 1,
      name: "Leonardo DiCaprio",
      role: "Actor, Producer, Environmental Activist",
      price: 500000,
      category: "Donation",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=800&fit=crop",
      rating: 4.9,
      bio: "Academy Award-winning actor and environmental advocate with over 25 years in the entertainment industry. Known for iconic roles in Titanic, The Revenant, and Inception.",
      availability: "Limited",
      responseTime: "2-3 days"
    },
    {
      id: 2,
      name: "Taylor Swift",
      role: "Singer, Songwriter, Actress",
      price: 750000,
      category: "Fan Card",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
      rating: 5.0,
      bio: "Multi-Grammy Award winner and global pop icon. One of the best-selling music artists of all time with numerous chart-topping albums.",
      availability: "High Demand",
      responseTime: "3-5 days"
    },
  ];

  const celebrity = celebrities.find(c => c.id === parseInt(id || "1")) || celebrities[0];

  const bookingTypes = [
    { value: "event", label: "Event Appearance", icon: Users, description: "Personal appearance at your event" },
    { value: "donation", label: "Charity Donation", icon: Heart, description: "Support a charitable cause" },
    { value: "fancard", label: "Fan Card", icon: Star, description: "Personalized message or autograph" },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: `Your booking request for ${celebrity.name} has been submitted. We'll contact you within ${celebrity.responseTime}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Listings
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Celebrity Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-96">
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {celebrity.category}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">{celebrity.name}</CardTitle>
                    <CardDescription className="text-lg">{celebrity.role}</CardDescription>
                  </div>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold">{celebrity.rating}</span>
                    <span className="text-muted-foreground">(250+ reviews)</span>
                  </div>
                  <Badge variant="outline">{celebrity.availability}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{celebrity.bio}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="font-semibold">{celebrity.responseTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">Worldwide</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {[
                      "Meet & greet with professional photos",
                      "Personalized autograph session",
                      "Q&A opportunity",
                      "Social media shoutout (optional)",
                      "Certificate of authenticity"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Book {celebrity.name}</CardTitle>
                <CardDescription>
                  Starting from <span className="text-2xl font-bold text-primary">${celebrity.price.toLocaleString()}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Booking Type</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {bookingTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setBookingType(type.value)}
                          className={cn(
                            "p-3 rounded-lg border text-left transition-all",
                            bookingType === type.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <div className="flex items-start gap-2">
                            <type.icon className="h-5 w-5 mt-0.5 text-primary" />
                            <div>
                              <p className="font-medium">{type.label}</p>
                              <p className="text-xs text-muted-foreground">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Event Details</Label>
                    <Textarea
                      id="details"
                      placeholder="Tell us about your event, occasion, or special requests..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary-dark">
                    Submit Booking Request
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    No payment required now. You'll be contacted for confirmation.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingDetails;
