# AJ Brothers Portfolio Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Awwwards-winning digital agencies and Dribbble featured portfolios, emphasizing clean presentation, modern grid layouts, and professional service showcasing with strong visual hierarchy.

## Color System

### Primary Palette
- **Primary Blue**: 217 91% 60% (#2563EB) - Main CTAs, links, accents
- **Charcoal Black**: 220 13% 18% (#1F2937) - Headers, primary text
- **Bright Blue**: 217 91% 68% (#3B82F6) - Hover states, highlights

### Supporting Colors
- **Dark Grey**: 218 11% 32% (#374151) - Body text, descriptions
- **Clean White**: 0 0% 100% (#FFFFFF) - Background, cards
- **Light Grey**: 220 14% 98% (#F9FAFB) - Section backgrounds, subtle dividers

## Typography
- **Primary Font**: Inter - Clean, professional, excellent readability
- **Display Font**: Poppins - Hero headings, section titles
- **Accent Font**: DM Sans - Service cards, portfolio descriptions
- **Hierarchy**: Display (48-64px) → H1 (36-42px) → H2 (28-32px) → H3 (20-24px) → Body (16-18px)

## Layout System
**Spacing Primitives**: Consistent use of Tailwind units: 2, 4, 8, 12, 16, 20, 24 for margins/padding. Section padding: py-16 (mobile) to py-24 (desktop).

## Component Library

### Hero Section
Full-width with background image or gradient overlay, centered content with AJ Brothers logo, compelling headline about digital solutions, mission statement, dual CTAs ("View Our Work" + "Get Started"), subtle trust indicator ("Trusted by 50+ Small Businesses").

### About Section
Two-column layout (desktop) with founder photo/team image on left, company story on right. Include mission (helping small businesses thrive online), vision statement, founder highlight for Ajay Jangir, and core values cards.

### Services Showcase
Grid layout (1 column mobile, 2 tablet, 3 desktop) featuring:
- **Web Development Card**: WordPress, E-commerce/WooCommerce, Landing Pages with icons and brief descriptions
- **Branding Card**: Logo Design, Social Media Posters, UI/UX Wireframes
- **Add-on Services**: Hosting, SEO, Maintenance packages
Each card: Icon, title, 2-3 bullet points, pricing hint, hover effect with subtle lift and shadow

### Portfolio Gallery
Masonry-style grid showcasing past work with category filters (All, Websites, Logos, Posters). Each project card displays thumbnail, project title, service category tag, hover overlay revealing "View Details" option. Include the provided promotional poster as featured work.

### Contact Section
Two-column split: Left side with contact form (Name, Email, Service Interest dropdown, Message), Right side featuring email (a.j.brothers1428@gmail.com), phone number with click-to-call, prominent WhatsApp integration button with green accent (#25D366), office hours/response time indicator.

### Footer
Comprehensive footer with quick links, service categories, social media icons, newsletter signup, copyright, and trust badges if applicable.

## Images

### Hero Section
**Large Hero Image**: Yes - Professional workspace or creative design mockups montage, 1920x1080px minimum, with dark overlay (opacity 40-50%) for text readability. Alternative: Abstract geometric pattern with brand colors.

### About Section
Team photo or founder headshot, professional quality, 800x600px, positioned left column with rounded corners.

### Portfolio Items
Minimum 6-9 project thumbnails (websites, logos, posters), 600x400px each, high-quality mockups. Use provided poster as one showcase item.

### Service Cards
Icon-based illustrations or simple SVG icons for each service category, consistent style across all cards.

## Interactions & Animations
Minimal, purposeful animations: Smooth scroll behavior, card hover lifts (2-4px translate), fade-in on scroll for portfolio items, button hover color transitions (200ms ease). No distracting parallax or complex scroll-driven effects.

## Responsive Behavior
Mobile-first approach: Stack all multi-column layouts to single column below 768px, hamburger menu for navigation, touch-friendly button sizes (min 44px), optimized image loading for mobile bandwidth.

## Accessibility
WCAG 2.1 AA compliance: Color contrast ratios minimum 4.5:1 for text, focus indicators on all interactive elements, semantic HTML structure, alt text for all images, keyboard navigation support.