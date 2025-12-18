import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Hamza Khan",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Before WeBroPk, our online presence was almost zero. They redesigned our entire website, fixed performance issues, and set up proper SEO. Within weeks, we started getting real customers.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "CEO, SoftCraft",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The WeBroPk team works like a powerhouse. Fast, reliable, and extremely professional. Their attention to detail made our brand transformation seamless.",
    rating: 5,
  },
  {
    name: "Ayesha Raza",
    role: "E-commerce Founder",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    quote:
      "I struggled with conversions for months. After WeBroPk rebuilt my store and optimized the product pages, my sales literally tripled. Their design sense and marketing strategy are on another level.",
    rating: 5,
  },
  {
    name: "Bilal Sheikh",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    quote:
      "WeBroPk delivers work that looks like it came from a Silicon Valley agency. The UI/UX, speed, and responsiveness they build into their websites is unmatched.",
    rating: 5,
  },
  {
    name: "Muneeb Arif",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    quote:
      "Our startup needed branding, a website, and a mobile app MVP — all under a tight deadline. WeBroPk handled everything smoothly and delivered before the deadline.",
    rating: 5,
  },
  {
    name: "Sarah Qureshi",
    role: "Marketing Consultant",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    quote:
      "Their SEO and performance optimization instantly improved our rankings. Our website loads insanely fast now. If you care about results, WeBroPk is the right choice.",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "Founder, PixelEdge Studio",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "Working with WeBroPk felt like collaborating with a world-class creative studio. Their UI, animations, and attention to brand consistency exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Aleena Fatima",
    role: "Freelance Content Creator",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote:
      "I needed a personal brand website and WeBroPk nailed it. Smooth animations, beautiful layout, and extremely fast loading. My clients always compliment my site now.",
    rating: 5,
  },
  {
    name: "Kamran Baig",
    role: "Real Estate Agency Owner",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "Listings were unorganized before. WeBroPk built a clean property listing system with filters, lead capture, and CRM integration. Our leads increased significantly.",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    quote:
      "WeBroPk has the rare combination of design + development + marketing. They understand businesses, not just coding. That's what makes their work powerful.",
    rating: 5,
  },
  {
    name: "Nimra Tariq",
    role: "Founder, Blossom Beauty",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "They designed my entire brand kit — logo, website, packaging, and social templates. Everything turned out so aesthetic and professional. Completely worth it.",
    rating: 5,
  },
  {
    name: "Omar Siddiqui",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "I've worked with multiple teams, but WeBroPk stands out. Their frontend polish, smooth UX, and clean code structure make them feel like an enterprise-level agency.",
    rating: 5,
  },
];

export default function WallOfLoveSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Loved by Thousands
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Real words from real people — businesses, founders, creators, and
            entrepreneurs who trusted{" "}
            <span className="font-semibold text-foreground">WeBroPk</span> with
            their digital transformation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative py-8">
          <InfiniteSlider speedOnHover={20} speed={40} gap={24}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group min-w-[350px] max-w-[400px] border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 md:min-w-[400px]"
              >
                <CardContent className="p-6">
                  {/* Star Rating */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6">
                    <p className="text-base leading-relaxed text-foreground/90">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50">
                      <AvatarImage
                        alt={testimonial.name}
                        src={testimonial.image}
                        loading="lazy"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </InfiniteSlider>

          {/* Progressive Blur Edges */}
          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-32"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-32"
            direction="right"
            blurIntensity={1}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Join <span className="font-semibold text-foreground">1,000+</span>{" "}
            satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}
