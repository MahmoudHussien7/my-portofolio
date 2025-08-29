import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { CalendarDays, MapPin, Building2, Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Front end developer",
    company: "DiDi Global",
    location: "Beijing, China",
    period: "May 2025 - Present",
    type: "Full-time",
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
    type: "Contract",
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
        <h2
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--foreground)" }}>
          Professional Experience
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-blue-500"></div>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--foreground)", opacity: 0.8 }}>
          My journey in web development, building modern applications and
          delivering exceptional user experiences
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block bg-blue-400 opacity-60"></div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute left-6 w-4 h-4 rounded-full border-4 shadow-lg hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 border-white"></div>

              <Card
                className="md:ml-16 border-2 hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] hover:border-blue-400"
                style={{
                  borderColor: "var(--foreground)",
                  backgroundColor: "var(--background)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}>
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-blue-500" />
                        <CardTitle className="text-2xl font-bold text-blue-600 transition-colors">
                          {job.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-blue-400" />
                        <p
                          className="text-xl font-semibold"
                          style={{ color: "var(--foreground)", opacity: 0.9 }}>
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Badge
                        variant="secondary"
                        className="w-fit border transition-all duration-200 hover:scale-105 bg-blue-500 text-white border-blue-500 hover:bg-blue-600">
                        {job.type}
                      </Badge>
                      <div
                        className="flex flex-col sm:flex-row gap-3 text-sm"
                        style={{ color: "var(--foreground)", opacity: 0.8 }}>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-blue-400" />
                          <span className="font-medium">{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-400" />
                          <span className="font-medium">{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-4 group/item">
                          <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200 bg-blue-500" />
                          <p
                            className="leading-relaxed text-pretty group-hover/item:opacity-95 transition-opacity"
                            style={{
                              color: "var(--foreground)",
                              opacity: 0.85,
                            }}>
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
