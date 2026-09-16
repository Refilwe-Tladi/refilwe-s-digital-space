import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import resumeAsset from "@/assets/refilwe-resume.pdf.asset.json";
import fnbCertificateAsset from "@/assets/fnb-app-academy-certificate.pdf.asset.json";

const navigation = [
  ["Home", "home"],
  ["About Me", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const technicalSkills = [
  "Full-Stack Development",
  "HTML",
  "CSS",
  "JavaScript",
  "Web Development",
  "AI Development",
  "Computer Literacy",
  "Digital Literacy",
  "Technical Troubleshooting",
  "Call Centre Operations",
  "Cash Handling & POS Systems",
  "Web Content Management",
  "Problem-Solving",
];

const softSkills = [
  "Communication",
  "Customer Service",
  "Critical Thinking",
  "Attention to Detail",
  "Time Management",
  "Teamwork",
  "Adaptability",
  "Organisation",
  "Conflict Resolution",
  "Creativity",
  "Willingness to Learn",
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website created to showcase my skills, qualifications, projects and professional background to recruiters.",
    technologies: "HTML, CSS, JavaScript, AI-assisted development tools",
    features: "Responsive design, navigation, skills section, project showcase, contact section",
    placeholder: false,
  },
  {
    number: "02",
    title: "AI-Assisted Web Development Project",
    description:
      "An editable placeholder for a website or application I create using AI-assisted development tools during my AI Development Skills programme.",
    technologies: "To be updated",
    features: "To be updated",
    placeholder: true,
  },
  {
    number: "03",
    title: "Future Technology Project",
    description:
      "An editable placeholder for another website, application, or digital project I create as I continue developing my technical skills.",
    technologies: "To be updated",
    features: "To be updated",
    placeholder: true,
  },
];

const careerInterests = [
  "Junior Full-Stack Developer",
  "AI / AI Development",
  "Web Development",
  "Technical Support",
  "Customer Support",
  "Content Moderation",
  "Digital and Technology Roles",
  "Entry-Level Technology Opportunities",
];

const strengths = [
  ["01", "Ready to learn", "I approach new tools, feedback and responsibilities with curiosity and a genuine commitment to growth."],
  ["02", "People focused", "Strong communication and a customer-focused mindset help me understand needs and provide thoughtful support."],
  ["03", "Adaptable thinker", "I bring problem-solving, creativity and attention to detail to changing situations and new challenges."],
  ["04", "A reliable contributor", "I value organisation, professional growth and contributing both independently and as part of a team."],
];

const education = [
  {
    period: "2010–2016",
    title: "Grade 12",
    institution: "Mondeor High School",
    detail: "Completed secondary education.",
  },
  {
    period: "2025",
    title: "Certificate in Full Stack Development",
    institution: "FNB App Academy · Issued by IT Varsity",
    detail: "Awarded 16 July 2025 · 32 credits",
  },
  {
    period: "In progress",
    title: "AI Development Skills Programme",
    institution: "Google and SETA accredited",
    detail: "Currently developing practical AI development skills.",
  },
];

const experience = [
  {
    period: "Sep 2023–2025",
    role: "Inbound & Outbound Call Centre Agent",
    company: "iBhongo Card Collections (Pty) Ltd",
    description: "Recovered outstanding accounts, attended to client queries and worked towards collection targets.",
  },
  {
    period: "May 2022–Sep 2023",
    role: "Web Content Manager",
    company: "Ceratile",
    description: "Managed website content, updated product listings, pricing and promotions, and ensured product accuracy.",
  },
  {
    period: "Nov 2019–Dec 2021",
    role: "Receptionist",
    company: "DNA Brand Architects",
    description: "Welcomed and assisted clients and visitors, managed calls and emails, scheduled appointments, maintained records, completed administration and data capturing, handled correspondence and deliveries, and provided professional customer service.",
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(10, "Please enter a message of at least 10 characters.").max(1000, "Please keep your message under 1,000 characters."),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">{title}</h2>
      {intro ? <p className="mt-5 leading-7 text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

function CvButton({ compact = false }: { compact?: boolean }) {
  return (
    <Button
        asChild
        variant={compact ? "outline" : "default"}
        size={compact ? "default" : "lg"}
        className={compact ? "border-primary/30 bg-background" : "shadow-lg shadow-primary/15"}
      >
        <a href={resumeAsset.url} download="Refilwe-Thando-Tladi-Resume.pdf">
          <Download aria-hidden="true" />
          {compact ? "Download CV" : "Download My CV"}
        </a>
      </Button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Refilwe Tladi, back to home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">RT</span>
          <span className="hidden truncate text-sm font-bold text-foreground sm:block">Refilwe Tladi</span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-xs font-semibold text-muted-foreground transition-colors hover:text-primary">{label}</a>
          ))}
          <CvButton compact />
        </nav>
        <Button type="button" variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-5 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary">{label}</a>
            ))}
            <div className="mt-3"><CvButton compact /></div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden border-b border-border bg-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:min-h-[46rem] lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-14">
        <div className="relative z-10 max-w-3xl animate-rise">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-xs font-bold uppercase text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Personal portfolio · South Africa
          </p>
          <p className="mb-4 text-lg font-semibold text-primary">Hi, I’m Refilwe Thando Tladi</p>
          <h1 className="font-display text-5xl leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
            Building My Future Through <em className="font-display text-primary">Technology, Creativity</em> &amp; Continuous Learning
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            I’m a motivated and adaptable professional with a growing background in technology, full-stack development and AI development. I’m passionate about learning new skills, solving problems and creating meaningful digital experiences. I’m currently developing my technical abilities while building a career where technology, communication and creativity come together.
          </p>
          <p className="mt-5 max-w-2xl border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-foreground">
            Open to opportunities in technology, digital support, customer-focused roles and entry-level development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">Explore My Portfolio <ArrowRight aria-hidden="true" /></a></Button>
            <CvButton />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-rise-delayed" aria-label="Abstract profile placeholder for Refilwe Tladi">
          <div className="profile-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/15 bg-profile shadow-2xl shadow-primary/15">
            <div className="absolute inset-7 rounded-[1.5rem] border border-primary-foreground/25" aria-hidden="true" />
            <div className="absolute left-10 top-10 h-3 w-3 rounded-full bg-primary-foreground/70" aria-hidden="true" />
            <div className="absolute right-10 top-10 font-mono text-[10px] uppercase text-primary-foreground/70">Profile / 01</div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <span className="block font-display text-[8rem] leading-none text-primary-foreground sm:text-[10rem]">RT</span>
                <span className="mt-5 inline-block border-y border-primary-foreground/35 py-2 text-xs font-bold uppercase text-primary-foreground">Technology · Growth · Creativity</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-[1fr_auto] items-end gap-4 border-t border-primary-foreground/30 pt-5 text-primary-foreground">
              <p className="text-sm font-semibold">Real photo can be added here later</p>
              <Code2 className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 shadow-lg sm:-left-8">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-primary"><ArrowDown className="h-4 w-4" /></span>
            <span className="text-xs font-bold uppercase text-foreground">Actively learning<br />and building</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionHeading eyebrow="About me" title="A thoughtful professional in progress." />
        <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="font-display text-2xl leading-9 text-foreground md:text-3xl">I’m building a career at the intersection of technology, communication and creativity—one practical skill at a time.</p>
          <p>I’m passionate about technology, AI development, full-stack development and continuous learning. I enjoy solving problems, exploring creative ideas, helping people and providing good service. Personal and professional growth matter to me, and I’m motivated by opportunities that challenge me to learn and contribute.</p>
          <p>I have completed a <strong className="text-foreground">Full-Stack Development Certificate through FNB App Academy</strong>. I am currently developing my skills through an <strong className="text-foreground">AI Development Skills programme accredited with Google and SETA</strong>.</p>
          <p>I don’t claim to know everything. I bring curiosity, adaptability and the willingness to keep improving—qualities I believe are essential for building a meaningful career in technology.</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-surface px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Capabilities" title="Skills I’m growing and applying." intro="A practical foundation across technology and people-focused work, presented without artificial proficiency scores." />
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="mb-7 flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary"><Code2 /></span><h3 className="font-display text-2xl">Technical skills</h3></div>
            <div className="flex flex-wrap gap-2.5">{technicalSkills.map((skill) => <span key={skill} className="rounded-full border border-primary/15 bg-secondary px-3.5 py-2 text-sm font-semibold text-secondary-foreground">{skill}</span>)}</div>
          </article>
          <article className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="mb-7 flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground"><HeartHandshake /></span><h3 className="font-display text-2xl">Soft skills</h3></div>
            <div className="flex flex-wrap gap-2.5">{softSkills.map((skill) => <span key={skill} className="rounded-full border border-accent-foreground/15 bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground">{skill}</span>)}</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="Learning made visible." intro="This portfolio begins with one active project and two transparent placeholders ready to become real case studies as my journey develops." />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group flex min-h-[31rem] flex-col rounded-xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/35 md:p-7">
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="font-display text-4xl text-primary/35">{project.number}</span>
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase ${project.placeholder ? "bg-muted text-muted-foreground" : "bg-secondary text-primary"}`}>{project.placeholder ? "Editable placeholder" : "Current project"}</span>
              </div>
              <h3 className="font-display text-2xl leading-tight text-card-foreground">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <dl className="mt-6 space-y-4 border-t border-border pt-5 text-sm">
                <div><dt className="font-bold text-foreground">Technologies used</dt><dd className="mt-1 text-muted-foreground">{project.technologies}</dd></div>
                <div><dt className="font-bold text-foreground">Features</dt><dd className="mt-1 text-muted-foreground">{project.features}</dd></div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                <Button type="button" variant="outline" disabled title="Add a live project link to enable this button"><ExternalLink /> View Project</Button>
                <Button type="button" variant="ghost" disabled title="Add a GitHub link to enable this button"><Github /> View Code</Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Link ready to be added.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <>
      <section id="education" className="scroll-mt-24 bg-contrast px-5 py-20 text-contrast-foreground md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Education" title="A foundation for what comes next." />
           <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-5 top-6 hidden h-px w-[calc(100%-2.5rem)] bg-primary/35 md:block" aria-hidden="true" />
             {education.map((item) => (
               <article key={item.title} className="relative rounded-xl border border-contrast-border bg-contrast-card p-6 md:p-8">
                <span className="mb-7 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground ring-8 ring-contrast"><GraduationCap className="h-5 w-5" /></span>
                 <p className="text-xs font-bold uppercase text-primary-light">{item.period}</p>
                 <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                 <p className="mt-2 text-sm font-semibold text-contrast-foreground">{item.institution}</p>
                 <p className="mt-6 border-t border-contrast-border pt-4 text-xs leading-5 text-contrast-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="scroll-mt-24 bg-surface px-5 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Certifications" title="Milestones in continuous learning." />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Full-Stack Development Certificate", "FNB App Academy", "Completed"],
              ["AI Development Skills Programme", "Google and SETA accredited", "In progress"],
            ].map(([title, source, status]) => (
              <article key={title} className="grid min-h-60 grid-cols-[auto_1fr] gap-5 rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-secondary text-primary"><Check /></div>
                 <div><p className="text-xs font-bold uppercase text-primary">{status}</p><h3 className="mt-3 font-display text-2xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{source}</p>{title === "Full-Stack Development Certificate" ? <><p className="mt-4 text-xs leading-5 text-muted-foreground">Awarded 16 July 2025 · 32 credits · Certificate AOTYAA072025</p><Button asChild variant="outline" className="mt-6"><a href={fnbCertificateAsset.url} target="_blank" rel="noreferrer"><ExternalLink /> View certificate</a></Button></> : <p className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">Programme currently in progress.</p>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Professional experience, in full context." intro="Experience across customer service, call centre operations, web content management and administration." />
        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="flex min-h-80 flex-col rounded-xl border border-border bg-card p-6 md:p-7">
              <div className="mb-6 flex items-start justify-between gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><BriefcaseBusiness /></span><p className="text-right text-xs font-bold uppercase text-primary">{item.period}</p></div>
              <h3 className="font-display text-2xl leading-tight">{item.role}</h3>
              <p className="mt-2 text-sm font-bold text-foreground">{item.company}</p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7"><p className="text-sm text-muted-foreground">References are available upon request.</p><CvButton /></div>
      </div>
    </section>
  );
}

function CareerAndValue() {
  return (
    <section className="bg-surface px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Career interests" title="What I’m Looking For" />
            <p className="mb-7 leading-7 text-muted-foreground">I’m interested in opportunities where I can apply my existing skills, continue learning and grow professionally. I’m open to developing into new technology-focused roles rather than limiting myself to one path.</p>
            <div className="flex flex-wrap gap-2.5">{careerInterests.map((role) => <span key={role} className="rounded-full border border-primary/20 bg-background px-4 py-2 text-sm font-semibold text-foreground">{role}</span>)}</div>
          </div>
          <div>
            <SectionHeading eyebrow="My contribution" title="Why work with me" />
            <div className="divide-y divide-border border-y border-border">{strengths.map(([number, title, text]) => <article key={number} className="grid grid-cols-[auto_1fr] gap-4 py-5"><span className="font-display text-xl text-primary">{number}</span><div><h3 className="font-bold text-foreground">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as ContactFields;
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const nextErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFields;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      });
      setErrors(nextErrors);
      setNotice("");
      return;
    }
    setErrors({});
    setNotice("Opening your email app…");
    const subject = encodeURIComponent(`Portfolio enquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\nFrom: ${result.data.name}\nEmail: ${result.data.email}`);
    window.location.href = `mailto:Refilwethando2@gmail.com?subject=${subject}&body=${body}`;
  }

  const contacts = [
    [Mail, "Email", "Refilwethando2@gmail.com", "mailto:Refilwethando2@gmail.com"],
    [Phone, "Phone", "083 273 0753", "tel:+27832730753"],
    [MapPin, "Location", "Protea North, Soweto, South Africa", null],
  ] as const;

  return (
    <section id="contact" className="scroll-mt-24 bg-contrast px-5 py-20 text-contrast-foreground md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let’s start a conversation." intro="Recruiting for a role where curiosity, communication and growth matter? I’d be glad to hear about it." />
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
             <div className="space-y-3">{contacts.map(([Icon, label, value, href]) => <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-lg border border-contrast-border bg-contrast-card p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary-light"><Icon className="h-4 w-4" /></span><div className="min-w-0"><p className="text-xs font-bold uppercase text-contrast-muted">{label}</p>{href ? <a href={href} className="mt-1 block break-words text-sm font-semibold hover:text-primary-light">{value}</a> : <p className="mt-1 text-sm font-semibold">{value}</p>}</div></div>)}</div>
            <div className="mt-6"><CvButton /></div>
          </div>
          <form onSubmit={submit} noValidate className="rounded-xl border border-contrast-border bg-contrast-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">Name<Input name="name" autoComplete="name" maxLength={100} placeholder="Your name" aria-invalid={Boolean(errors.name)} className="mt-2 h-11 border-contrast-border bg-contrast text-contrast-foreground placeholder:text-contrast-muted" />{errors.name ? <span className="mt-1 block text-xs text-primary-light">{errors.name}</span> : null}</label>
              <label className="text-sm font-semibold">Email<Input name="email" type="email" autoComplete="email" maxLength={255} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} className="mt-2 h-11 border-contrast-border bg-contrast text-contrast-foreground placeholder:text-contrast-muted" />{errors.email ? <span className="mt-1 block text-xs text-primary-light">{errors.email}</span> : null}</label>
              <label className="text-sm font-semibold sm:col-span-2">Message<Textarea name="message" maxLength={1000} rows={6} placeholder="Tell me about the opportunity…" aria-invalid={Boolean(errors.message)} className="mt-2 border-contrast-border bg-contrast text-contrast-foreground placeholder:text-contrast-muted" />{errors.message ? <span className="mt-1 block text-xs text-primary-light">{errors.message}</span> : null}</label>
            </div>
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
               <p role="status" className="min-w-0 text-xs leading-5 text-contrast-muted">{notice || "Your details are checked in your browser, then your email app will open."}</p>
              <Button type="submit">Send Message <ArrowRight /></Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-5">
        <div className="min-w-0"><p className="font-display text-xl text-foreground">Refilwe Thando Tladi</p><p className="mt-1 text-xs text-muted-foreground">Technology · Creativity · Continuous learning</p></div>
        <a href="#home" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-secondary" aria-label="Back to top"><ArrowDown className="h-4 w-4 rotate-180" /></a>
      </div>
    </footer>
  );
}

export function PortfolioPage() {
  return <><Header /><main><Hero /><About /><Skills /><Projects /><Credentials /><Experience /><CareerAndValue /><Contact /></main><Footer /></>;
}