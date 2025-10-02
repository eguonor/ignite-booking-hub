import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, Shield, Heart, Users, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Star,
      title: "Top Celebrities",
      description: "Access to A-list celebrities and entertainment stars"
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Simple and secure booking process in minutes"
    },
    {
      icon: Shield,
      title: "Verified & Safe",
      description: "100% verified celebrities with secure transactions"
    },
    {
      icon: Heart,
      title: "Memorable Experiences",
      description: "Create unforgettable moments with your favorite stars"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Meet Your Favorite
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Celebrities
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book meet & greets, get VIP access, and create unforgettable memories with the stars you love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-lg px-8 py-6">
                Book Now
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Purpose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Connecting Fans with Their Idols
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Remedy Celebify is the world's premier platform for celebrity bookings and exclusive fan experiences. 
              We bridge the gap between celebrities and their supporters, making dream encounters accessible, 
              authentic, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">1000+</h3>
                <p className="text-muted-foreground">Verified Celebrities</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">50,000+</h3>
                <p className="text-muted-foreground">Happy Fans</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-3">100%</h3>
                <p className="text-muted-foreground">Verified & Secure</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple, secure, and straightforward booking process in just 3 steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-background p-8 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Browse & Select</h3>
                <p className="text-muted-foreground">
                  Explore our roster of A-list celebrities and choose your favorite star for your event or experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-background p-8 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Submit Request</h3>
                <p className="text-muted-foreground">
                  Fill out your booking details, preferred dates, and event information. No payment required upfront.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-background p-8 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 bg-success/80 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Confirmed</h3>
                <p className="text-muted-foreground">
                  Our team reviews and confirms your booking. You'll receive all details and payment instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Remedy Celebify?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The most trusted platform for celebrity bookings and exclusive experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from fans who made their dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                event: "Corporate Event",
                text: "Booking through Remedy Celebify was seamless! The celebrity showed up on time and made our event unforgettable.",
                rating: 5
              },
              {
                name: "Michael Chen",
                event: "Birthday Surprise",
                text: "Best birthday gift ever! The personalized message from my favorite actor was worth every penny.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                event: "Charity Gala",
                text: "Professional, reliable, and exceeded expectations. Our charity event raised double thanks to their star power!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Meet Your Celebrity?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of fans who have already created amazing memories
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-lg px-8 py-6">
              Start Booking Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
