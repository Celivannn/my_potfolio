import { Button } from "@/components/ui/button";
import { Section } from "@/components/cv/Section";
import { ProjectCard } from "@/components/cv/ProjectCard";
import { SkillCategory } from "@/components/cv/SkillCategory";
import { 
  Mail, 
  Github, 
  ArrowDown, 
  MapPin, 
  GraduationCap, 
  Users, 
  Lightbulb, 
  Clock, 
  MessageCircle, 
  Phone, 
  Facebook, 
  Code,
  Cpu,
  Database,
  Wrench,
  Globe,
  Sparkles,
  Target,
  CheckCircle,
  ChevronRight,
  Calendar,
  Home,
  ExternalLink
} from "lucide-react";

const PROJECTS = [
  {
    title: "Travel Planner System",
    description: "A web application for planning and organizing travel itineraries, helping users create, manage, and share their travel plans efficiently.",
    icon: "Globe",
    githubUrl: "https://github.com/Celivannn/WanderWise-Travel-Planner-G4",
    technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"]
  },
  {
    title: "Warehouse Management System",
    description: "Inventory tracking and management solution designed to streamline warehouse operations, stock monitoring, and order fulfillment processes.",
    icon: "Database",
    githubUrl: "https://github.com/Celivannn/Warehouse-Management-Frontend",
    technologies: ["PHP", "MySQL", "REST API", "jQuery"]
  },
  {
    title: "Centralized Barangay Management System",
    description: "A unified platform for local government units to manage resident records, services, and community programs in one accessible system.",
    icon: "Users",
    githubUrl: "https://github.com/Celivannn/barangay-connect",
    technologies: ["Laravel", "CockroachDB", "GIS Integration", "Chart.js"]
  },
  {
    title: "Voting System",
    description: "Secure and user-friendly electronic voting platform for organizations, featuring real-time results and voter verification.",
    icon: "CheckCircle",
    githubUrl: "https://github.com/Celivannn/ibotoko_backend",
    technologies: ["React", "Node.js", "Encryption", "WebSockets"]
  },
];

const TECHNICAL_SKILLS = [
  { 
    category: "Programming Languages", 
    skills: ["PHP", "Python (basic)", "JavaScript"],
    icon: Code,
    color: "text-blue-500"
  },
  { 
    category: "Frameworks & Libraries", 
    skills: ["Laravel", "React.js (basic)", "Tailwind CSS"],
    icon: Cpu,
    color: "text-purple-500"
  },
  { 
    category: "Databases", 
    skills: ["MySQL", "CockroachDB", "Database Design"],
    icon: Database,
    color: "text-green-500"
  },
  { 
    category: "Tools & Platforms", 
    skills: ["Git", "GitHub", "Postman", "VS Code"],
    icon: Wrench,
    color: "text-orange-500"
  },
  { 
    category: "Web Technologies", 
    skills: ["HTML5", "CSS3", "REST APIs", "Responsive Design"],
    icon: Globe,
    color: "text-cyan-500"
  },
  { 
    category: "Development Practices", 
    skills: ["MVC Architecture", "Version Control", "Debugging", "Clean Code"],
    icon: Sparkles,
    color: "text-yellow-500"
  },
];

const SOFT_SKILLS = [
  { icon: Users, label: "Teamwork & Collaboration", description: "Collaborative approach to problem-solving" },
  { icon: Lightbulb, label: "Problem-solving", description: "Analytical thinking and creative solutions" },
  { icon: Clock, label: "Time Management", description: "Efficient task prioritization and deadlines" },
  { icon: MessageCircle, label: "Communication Skills", description: "Clear technical and interpersonal communication" },
  { icon: Target, label: "Adaptability", description: "Quick learner in dynamic environments" },
  { icon: CheckCircle, label: "Attention to Detail", description: "Meticulous approach to development" },
];

// Icon mapping for projects
const iconMap = {
  Globe,
  Database,
  Users,
  CheckCircle,
};

// ============= COMPONENT =============

const Index = () => {
  // Calculate age based on birthday
  const calculateAge = () => {
    const birthDate = new Date(2004, 10, 23); // November 23, 2004 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge();

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        <div className="section-container relative flex min-h-[90vh] items-center py-20">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left side - Text content with enhanced elements */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Welcome to my portfolio
                </div>
                <h1 className="text-display mb-2 bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
                  Kirk Ivan Sinadjan
                </h1>
                <div className="flex items-center gap-3 text-xl">
                  <span className="flex items-center gap-2 font-medium">
                    <GraduationCap className="h-5 w-5" />
                    {age}-year-old IT Student
                  </span>
                  <span className="text-accent">•</span>
                  <span className="flex items-center gap-2 font-medium">
                    <Code className="h-5 w-5" />
                    Web Developer
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-primary-foreground/90 md:text-2xl">
                  Building <span className="font-semibold text-accent">practical systems</span> and solving 
                  <span className="font-semibold text-accent"> real-world problems</span> through clean, efficient code.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-primary-foreground/80">
                      From <strong className="text-primary-foreground">Imbatug, Baungon, Bukidnon</strong> to Cagayan de Oro for studies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-primary-foreground/80">
                      Born on <strong className="text-primary-foreground">November 23, 2004</strong> • Passionate about creating user-focused applications
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-primary-foreground/80">
                      Focused on <strong className="text-primary-foreground">clean architecture</strong> and <strong className="text-primary-foreground">maintainable code</strong> practices
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>

            {/* Right side - Enhanced Profile picture */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Main image container */}
                <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-4 border-primary-foreground/20 shadow-2xl lg:h-96 lg:w-96">
                  <img
                    src="/ivan.jpg"
                    alt="Kirk Ivan Sinadjan - Web Developer & IT Student"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/20 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent/10 blur-2xl"></div>
                
                {/* Status badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-lg">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary-foreground/50" />
        </div>
      </header>

      {/* Enhanced About Section with Birthday and Address */}
      <Section id="about" title="About Me">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <strong className="text-foreground">Kirk Ivan Sinadjan</strong>, a {age}-year-old web developer from 
                <strong className="text-foreground"> Imbatug, Baungon, Bukidnon</strong>, currently pursuing a 
                <strong className="text-foreground"> BS in Information Technology</strong> at the University of 
                Science and Technology of Southern Philippines – Cagayan de Oro Campus.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Born on <strong className="text-foreground">November 23, 2004</strong>, my journey in web development 
                is driven by curiosity and a desire to create meaningful impact. I believe that great software not only 
                functions flawlessly but also delivers exceptional user experiences.
              </p>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-accent/5 to-transparent p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Target className="h-5 w-5 text-accent" />
                Development Philosophy
              </h3>
              <p className="text-muted-foreground">
                I approach every project with three core principles: <strong className="text-foreground">clarity in code</strong>, 
                <strong className="text-foreground"> empathy for users</strong>, and <strong className="text-foreground">excellence in execution</strong>. 
                The best solutions emerge when technology meets real human needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Birthday</p>
                <p className="text-sm text-muted-foreground">November 23, 2004 ({age} years old)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Home className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Hometown</p>
                <p className="text-sm text-muted-foreground">P3, Imbatug, Baungon, Bukidnon</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Current Location</p>
                <p className="text-sm text-muted-foreground">Cagayan de Oro (for studies)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Education</p>
                <p className="text-sm text-muted-foreground">3rd Year BS IT • USTP Cagayan de Oro</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Availability</p>
                <p className="text-sm text-muted-foreground">Open for Internships & Projects</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Technical Skills Section with Icons */}
      <Section id="skills" title="Technical Skills" variant="muted">
        <p className="mb-8 max-w-2xl text-center text-muted-foreground">
          A comprehensive toolkit for building modern web applications. Continuously expanding my expertise.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_SKILLS.map(({ category, skills, icon: Icon, color }) => (
            <div 
              key={category} 
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color} bg-opacity-10`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Background pattern */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/5 blur-xl transition-transform duration-300 group-hover:scale-150"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Enhanced Projects Section with GitHub Links */}
      <Section id="projects" title="Projects">
        <div className="mb-8 max-w-2xl">
          <p className="text-muted-foreground">
            A collection of systems I've built during my studies, each addressing specific real-world challenges 
            with practical, user-centered solutions. These projects demonstrate my ability to translate concepts 
            into functional applications. Click on any project to view the source code on GitHub.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            return (
              <a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {IconComponent && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <IconComponent className="h-6 w-6" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          {project.title}
                          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Technologies Used */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <span>View on GitHub</span>
                    </div>
                    <Github className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>
                {/* Background pattern */}
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/5 blur-xl transition-transform duration-300 group-hover:scale-150"></div>
              </a>
            );
          })}
        </div>
      </Section>

      {/* Enhanced Soft Skills Section */}
      <Section id="soft-skills" title="Soft Skills" variant="muted">
        <div className="mb-8 max-w-2xl text-center text-muted-foreground">
          Technical skills get the job started, but soft skills ensure it's done well. These qualities 
          help me collaborate effectively and deliver exceptional results.
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOFT_SKILLS.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="max-w-xl">
          <div className="mb-8 space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm actively seeking internship opportunities, project collaborations, and connections 
              within the tech community. Let's discuss how we can work together to build something amazing.
            </p>
            <div className="rounded-lg bg-gradient-to-r from-accent/5 to-transparent p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Currently available:</strong> Internship positions (remote or in Cagayan de Oro), 
                part-time projects, and collaborative learning opportunities.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:sinadjanivan@gmail.com"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email (Primary)</p>
                <p className="font-medium text-foreground">sinadjanivan@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+63909978790​71"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone / WhatsApp</p>
                <p className="font-medium text-foreground">0909 978 79071</p>
              </div>
            </a>
            <a
              href="https://github.com/Celivannn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">GitHub Portfolio</p>
                <p className="font-medium text-foreground">github.com/Celivannn</p>
                <p className="text-xs text-muted-foreground">View my code and project repositories</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/celibaaannnnnn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Facebook Profile</p>
                <p className="font-medium text-foreground">Kirk Ivan Sinadjan</p>
                <p className="text-xs text-muted-foreground">Connect with me on Facebook</p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="section-container text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>Born: November 23, 2004</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Home className="h-3 w-3" />
              <span>From: Imbatug, Baungon, Bukidnon</span>
            </div>
          </div>
          <p>© {new Date().getFullYear()} Kirk Ivan Sinadjan. Built with React & Tailwind CSS.</p>
          <p className="mt-2 text-xs">Designed for clarity, built for impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;