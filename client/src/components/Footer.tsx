import { SiFacebook, SiInstagram, SiThreads, SiX } from "react-icons/si";
import logo from "@assets/AJ Brothers Logo_1760859147255.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Web Development", href: "#services" },
      { label: "Branding & Design", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "SEO Services", href: "#services" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: SiFacebook, href: "https://www.facebook.com/profile.php?id=61579283870777", label: "Facebook" },
    { icon: SiInstagram, href: "https://www.instagram.com/a_j__brothers/", label: "Instagram" },
    { icon: SiThreads, href: "https://www.threads.com/@a_j__brothers", label: "Threads" },
    { icon: SiX, href: "https://x.com/A_j_brothers", label: "X" }
  ];

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AJ Brothers" className="h-10 w-auto" data-testid="img-footer-logo" />
              <span className="font-display font-bold text-lg" data-testid="text-footer-brand">
                AJ Brothers
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/80 mb-4" data-testid="text-footer-tagline">
              Bringing your digital ideas to life with professional web development and creative services.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${index}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4" data-testid="text-footer-services-title">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-primary transition-colors"
                    data-testid={`link-footer-service-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4" data-testid="text-footer-company-title">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-primary transition-colors"
                    data-testid={`link-footer-company-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4" data-testid="text-footer-contact-title">
              Contact
            </h3>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              <li data-testid="text-footer-email">
                <a href="mailto:a.j.brothers1428@gmail.com" className="hover:text-primary transition-colors">
                  a.j.brothers1428@gmail.com
                </a>
              </li>
              <li data-testid="text-footer-phone">
                Available 24/7
              </li>
              <li data-testid="text-footer-response">
                Response within 24 hours
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/60" data-testid="text-copyright">
            © {currentYear} AJ Brothers. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
