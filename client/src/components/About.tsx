import { Card } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";
import founderImage from "@assets/generated_images/Founder_Ajay_Jangir_portrait_e9a32cfa.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering small businesses to thrive online with affordable, high-quality digital solutions that drive real results."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted digital partner for small businesses, making professional web presence accessible to everyone."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A passionate team of designers and developers with 5+ years of industry expertise, led by founder Ajay Jangir."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-about-title">
            About AJ Brothers
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Your trusted partner in digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={founderImage}
              alt="Ajay Jangir - Founder"
              className="rounded-md w-full h-auto"
              data-testid="img-founder"
            />
          </div>
          <div>
            <h3 className="font-display font-semibold text-2xl text-foreground mb-4" data-testid="text-company-story-title">
              Building Digital Success Stories
            </h3>
            <p className="font-body text-muted-foreground mb-4" data-testid="text-company-story-1">
              Founded by Ajay Jangir and a dedicated team of digital experts, AJ Brothers has been helping 
              small businesses establish and grow their online presence since our inception.
            </p>
            <p className="font-body text-muted-foreground mb-4" data-testid="text-company-story-2">
              We understand the challenges small businesses face in the digital world. That's why we've 
              created affordable, comprehensive packages that include everything from web development to 
              branding and social media management.
            </p>
            <p className="font-body text-muted-foreground" data-testid="text-company-story-3">
              With over 5 years of industry expertise and a commitment to fast delivery and exceptional 
              support, we've become the go-to digital partner for businesses looking to make their mark online.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-value-${index}`}>
              <value.icon className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-display font-semibold text-xl text-card-foreground mb-3" data-testid={`text-value-title-${index}`}>
                {value.title}
              </h4>
              <p className="font-body text-muted-foreground" data-testid={`text-value-description-${index}`}>
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
