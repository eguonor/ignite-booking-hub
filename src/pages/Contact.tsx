import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions about bookings, partnerships, or just want to say hello? We're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <a href="mailto:support@remedycelebs.store" className="text-primary hover:underline">
                  support@remedycelebs.store
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <a href="tel:+15550000000" className="text-primary hover:underline">
                  +1 (555) 000-0000
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-success/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground">30 Commercial Road<br/>Fratton, Australia</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-warning/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM<br/>Sat - Sun: Closed</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </div>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary-dark">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How long does it take to get a response?",
                    answer: "We typically respond to all inquiries within 24 hours during business days."
                  },
                  {
                    question: "What information do I need for a booking?",
                    answer: "You'll need event details, preferred dates, location, and the celebrity you're interested in booking."
                  },
                  {
                    question: "Are the celebrity prices negotiable?",
                    answer: "Prices vary based on the celebrity, event type, and duration. Contact us for custom quotes."
                  },
                  {
                    question: "Do you offer refunds?",
                    answer: "Refund policies vary by booking type and timing. Please review our terms or contact us for specific cases."
                  },
                  {
                    question: "Can I book for international events?",
                    answer: "Yes! We facilitate celebrity bookings worldwide. Additional travel and accommodation fees may apply."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-gradient-hero border-none">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-primary-foreground mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Our support team is always ready to help you with any inquiries.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
