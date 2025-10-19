import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ecommerceImage from "@assets/generated_images/E-commerce_website_portfolio_mockup_550e2c08.png";
import logoImage from "@assets/generated_images/Logo_design_portfolio_showcase_753268ee.png";
import businessImage from "@assets/generated_images/Business_website_portfolio_mockup_c630d36b.png";
import wordpressImage from "@assets/generated_images/WordPress_website_portfolio_mockup_5d54a56a.png";
import posterImage from "@assets/Purple Illustrated Creative Freelance Jobs Poster_1760859147256.png";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "websites",
      image: ecommerceImage,
      tags: ["WooCommerce", "E-commerce"]
    },
    {
      id: 2,
      title: "Brand Identity Collection",
      category: "logos",
      image: logoImage,
      tags: ["Logo Design", "Branding"]
    },
    {
      id: 3,
      title: "Business Portfolio Site",
      category: "websites",
      image: businessImage,
      tags: ["WordPress", "Portfolio"]
    },
    {
      id: 4,
      title: "WordPress Blog",
      category: "websites",
      image: wordpressImage,
      tags: ["WordPress", "Blog"]
    },
    {
      id: 5,
      title: "Service Promotional Poster",
      category: "posters",
      image: posterImage,
      tags: ["Design", "Marketing"]
    }
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "websites", label: "Websites" },
    { id: "logos", label: "Logos" },
    { id: "posters", label: "Posters" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-portfolio-title">
            Our Portfolio
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-portfolio-subtitle">
            Showcasing our best work in web development, branding, and design
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                data-testid={`button-filter-${filter.id}`}
              >
                <Badge
                  variant={activeFilter === filter.id ? "default" : "secondary"}
                  className="cursor-pointer px-4 py-2 hover-elevate active-elevate-2"
                >
                  {filter.label}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover-elevate cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-project-tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
