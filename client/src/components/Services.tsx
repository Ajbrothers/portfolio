import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Megaphone, Server, Search, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Professional websites built to convert visitors into customers",
      features: [
        "WordPress Sites",
        "E-commerce (WooCommerce)",
        "Business Portfolio Sites",
        "Landing Pages"
      ],
      badge: "Popular"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Create a memorable brand identity that stands out",
      features: [
        "Logo Design",
        "Social Media Posters",
        "UI/UX Wireframes",
        "Brand Guidelines"
      ],
      badge: null
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Engage your audience and grow your online community",
      features: [
        "Content Strategy",
        "Post Scheduling",
        "Community Management",
        "Analytics & Reporting"
      ],
      badge: null
    },
    {
      icon: Server,
      title: "Hosting Setup",
      description: "Fast, secure, and reliable hosting for your website",
      features: [
        "Domain Registration",
        "SSL Certificates",
        "Email Setup",
        "Server Configuration"
      ],
      badge: "Add-on"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your visibility and rank higher in search results",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Performance Optimization"
      ],
      badge: "Add-on"
    },
    {
      icon: Wrench,
      title: "Maintenance Packages",
      description: "Keep your website running smoothly with ongoing support",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Backup Management",
        "Technical Support"
      ],
      badge: "Add-on"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-service-${index}`}>
              <div className="flex items-start justify-between mb-4">
                <service.icon className="h-10 w-10 text-primary flex-shrink-0" />
                {service.badge && (
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-service-${index}`}>
                    {service.badge}
                  </Badge>
                )}
              </div>
              <h3 className="font-display font-semibold text-xl text-card-foreground mb-3" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground mb-4" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="font-body text-sm text-muted-foreground flex items-center gap-2"
                    data-testid={`text-service-feature-${index}-${featureIndex}`}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
