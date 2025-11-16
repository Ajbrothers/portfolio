import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "a.j.brothers1428@gmail.com",
      link: "mailto:a.j.brothers1428@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 84316 69017",
      link: "tel:+918431669017"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/918431669017"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Ready to start your project? Let's discuss how we can help your business grow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" data-testid="label-name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" data-testid="label-email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="service" data-testid="label-service">Service Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="branding">Branding & Design</SelectItem>
                      <SelectItem value="social-media">Social Media Management</SelectItem>
                      <SelectItem value="hosting">Hosting Setup</SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="maintenance">Maintenance Package</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" data-testid="label-message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-submit-contact">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-contact-info-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-card-foreground mb-1" data-testid={`text-contact-info-title-${index}`}>
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-contact-info-${index}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-body text-muted-foreground" data-testid={`text-contact-info-value-${index}`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-primary text-primary-foreground border-primary-border">
              <h3 className="font-display font-semibold text-xl mb-2" data-testid="text-whatsapp-cta-title">
                Prefer WhatsApp?
              </h3>
              <p className="font-body text-sm mb-4 text-primary-foreground/90" data-testid="text-whatsapp-cta-description">
                Get instant responses to your queries on WhatsApp
              </p>
              <Button
                variant="outline"
                className="w-full bg-background/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover-elevate active-elevate-2"
                onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
                data-testid="button-whatsapp"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
