import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Booking = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const celebrities = [
    {
      id: 1,
      name: "Leonardo DiCaprio",
      role: "Actor, Producer, Environmental Activist",
      price: "$500,000",
      category: "Donation",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
      rating: 4.9
    },
    {
      id: 2,
      name: "Taylor Swift",
      role: "Singer, Songwriter, Actress",
      price: "$750,000",
      category: "Fan Card",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5.0
    },
    {
      id: 3,
      name: "Dwayne Johnson",
      role: "Actor, Producer, Former WWE Wrestler",
      price: "$450,900",
      category: "Event Booking",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 4.8
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Actress, Activist",
      price: "$350,000",
      category: "Donation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 4.9
    },
    {
      id: 5,
      name: "Chris Hemsworth",
      role: "Actor, Producer",
      price: "$425,000",
      category: "Event Booking",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 4.7
    },
    {
      id: 6,
      name: "Beyoncé",
      role: "Singer, Actress, Producer",
      price: "$850,000",
      category: "Fan Card",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      rating: 5.0
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Donation":
        return "bg-success text-success-foreground";
      case "Fan Card":
        return "bg-primary text-primary-foreground";
      case "Event Booking":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Book Your Celebrity
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Browse our exclusive roster of A-list celebrities and book your dream experience
            </p>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search celebrities by name, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {celebrities.map((celebrity) => (
            <Card key={celebrity.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={celebrity.image} 
                  alt={celebrity.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <Badge className={`absolute top-4 right-4 ${getCategoryColor(celebrity.category)}`}>
                  {celebrity.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{celebrity.name}</CardTitle>
                <CardDescription className="line-clamp-1">{celebrity.role}</CardDescription>
                
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{celebrity.rating}</span>
                  <span className="text-sm text-muted-foreground">(120+ reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{celebrity.price}</span>
                  <span className="text-sm text-muted-foreground">per booking</span>
                </div>
              </CardContent>
              
              <CardFooter className="gap-2">
                <Button className="flex-1 bg-gradient-primary hover:bg-primary-dark">
                  Book Now
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Celebrities
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
