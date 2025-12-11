import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Hamza Khan",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Before WeBroPk, our online presence was almost zero. They redesigned our entire website, fixed performance issues, and set up proper SEO. Within weeks, we started getting real customers. These guys know exactly what they’re doing.",
  },
  {
    name: "Usman Ali",
    role: "CEO, SoftCraft",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The WeBroPk team works like a powerhouse. Fast, reliable, and extremely professional. Their attention to detail made our brand transformation seamless. They didn’t just build a website — they built our brand identity.",
  },
  {
    name: "Ayesha Raza",
    role: "E-commerce Founder",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    quote:
      "I struggled with conversions for months. After WeBroPk rebuilt my store and optimized the product pages, my sales literally tripled. Their design sense and marketing strategy are on another level.",
  },

  {
    name: "Bilal Sheikh",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    quote:
      "WeBroPk delivers work that looks like it came from a Silicon Valley agency. The UI/UX, speed, and responsiveness they build into their websites is unmatched — especially at their pricing.",
  },
  {
    name: "Muneeb Arif",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    quote:
      "Our startup needed branding, a website, and a mobile app MVP — all under a tight deadline. WeBroPk handled everything smoothly and delivered before the deadline. It felt like having an entire in-house team.",
  },
  {
    name: "Sarah Qureshi",
    role: "Marketing Consultant",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    quote:
      "Their SEO and performance optimization instantly improved our rankings. Our website loads insanely fast now. If you care about results, WeBroPk is the right choice.",
  },
  {
    name: "Daniel Brooks",
    role: "Founder, PixelEdge Studio",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "Working with WeBroPk felt like collaborating with a world-class creative studio. Their UI, animations, and attention to brand consistency exceeded my expectations.",
  },
  {
    name: "Aleena Fatima",
    role: "Freelance Content Creator",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote:
      "I needed a personal brand website and WeBroPk nailed it. Smooth animations, beautiful layout, and extremely fast loading. My clients always compliment my site now.",
  },
  {
    name: "Kamran Baig",
    role: "Real Estate Agency Owner",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "Listings were unorganized before. WeBroPk built a clean property listing system with filters, lead capture, and CRM integration. Our leads increased significantly.",
  },
  {
    name: "Rohan Desai",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    quote:
      "WeBroPk has the rare combination of design + development + marketing. They understand businesses, not just coding. That’s what makes their work powerful.",
  },
  {
    name: "Nimra Tariq",
    role: "Founder, Blossom Beauty",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "They designed my entire brand kit — logo, website, packaging, and social templates. Everything turned out so aesthetic and professional. Completely worth it.",
  },
  {
    name: "Omar Siddiqui",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "I’ve worked with multiple teams, but WeBroPk stands out. Their frontend polish, smooth UX, and clean code structure make them feel like an enterprise-level agency.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Loved by Thousands</h2>
            <p className="mt-6">
              Real words from real people businesses, founders, creators, and
              entrepreneurs who trusted <strong>WeBroPk</strong> with their
              digital transformation.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
