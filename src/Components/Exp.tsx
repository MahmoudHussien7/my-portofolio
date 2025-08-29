import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { CalendarDays, MapPin, Building2, Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Front end developer",
    company: "DiDi Global",
    location: "Beijing, China",
    period: "May 2025 - Present",
    type: "Full-time, Contract",
    achievements: [
      "Developed responsive user interfaces using modern framework Next.js and TypeScript, ensuring seamless experiences across devices while aligning with evolving global mobility requirements.",
      "Integrated localization modules using React Intl and i18next, delivering multi-language support for 13 countries and reducing deployment errors.",
      "Following modern development workflows using Git, CI/CD pipelines, and component-based architecture.",
      "Applying best practices for SEO, analytics, and structured data to improve discoverability and site performance.",
      "Revamped web application by modularizing components and adopting lazy loading strategies, substantially improving code maintainability and reducing initial bundle sizes to enhance overall user experience.",
      "Assessed TailwindCSS V4 integration within application codebase by reviewing components and layouts, applying fixes to ensure alignment with updated framework conventions.",
      "Configured and managed website tracking by implementing triggers and tags with Google Tag Manager (GTM), enhancing analytics integrations for web application.",
    ],
  },
  {
    title: "Web developer",
    company: "OVZA LTD",
    location: "Remote",
    period: "September 2024 - February 2025",
    type: "Full-time",
    achievements: [
      "Developed and maintained responsive, high-performance websites using HTML, CSS, JavaScript, and modern frameworks.",
      "Implemented front-end solutions that enhanced user experience while ensuring cross-browser compatibility and mobile responsiveness.",
      "Collaborated with design teams to translate UI/UX wireframes into functional web interfaces.",
      "Optimized website performance through code refinement, image optimization, and implementation of best practices.",
      "Integrated APIs and third-party services to enhance website functionality and user engagement.",
      "Conducted thorough testing and debugging to ensure optimal site performance across different devices and browsers.",
      "Implemented SEO best practices in website architecture and markup.",
      "Maintained website security through regular updates and implementation of security protocols.",
      "Collaborated with back-end developers to integrate front-end elements with server-side logic.",
      "Utilized version control systems (Git) for efficient code management and collaboration.",
      "Analyzed and debugged issues in web applications by conducting thorough code reviews and testing, ensuring 30% reduction in error rates over a 6-month period using advanced debugging tools.",
    ],
  },
];

export function Experience() {
  return (
    <section className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto text-center  rounded-lg">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-foreground tracking-tight">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          My journey in web development, building modern applications and
          delivering exceptional user experiences
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg hidden md:block"></div>

              <Card className="md:ml-16 border-2 border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-accent" />
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {job.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-secondary" />
                        <p className="text-xl font-semibold text-secondary">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Badge
                        variant="secondary"
                        className="w-fit bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                        {job.type}
                      </Badge>
                      <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-accent" />
                          <span className="font-medium">{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span className="font-medium">{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-4 group/item">
                          <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <p className="text-card-foreground leading-relaxed text-pretty group-hover/item:text-foreground transition-colors">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
