import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Monitor, Wrench, Briefcase, Globe2, MessageCircle, Download,
  ShieldCheck, Clock, MapPin, Mail, Phone, ArrowRight, Cpu,
  Laptop, Server, HardDrive, Printer, Network, Sparkles, CheckCircle2,
  Quote, Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({ component: Index });

// TODO: replace with real number
const WHATSAPP = "918089282351";
const PHONE_PRIMARY = "+91 80892 82351";
const PHONE_SECONDARY = "+91 89212 14047";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Nav() {
  const links = [
    ["Services", "#services"],
    ["Support", "#support"],
    ["Products", "#products"],
    ["Toolbox", "#toolbox"],
    ["Stories", "#testimonials"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass-dark rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-cyan-gradient grid place-items-center shadow-glow">
              <Sparkles className="size-4 text-midnight" />
            </div>
            <span className="font-display font-bold text-white tracking-tight">
              Devalokam<span className="text-cyan-glow">.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="hover:text-cyan-glow transition-colors">{l}</a>
            ))}
          </nav>
          <a
            href={waLink("Hi Devalokam, I need remote support.")}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-gradient px-4 py-2 text-sm font-semibold text-midnight hover:opacity-90 transition"
          >
            <MessageCircle className="size-4" /> Get Support
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero text-white">
      <img
        src={heroImg} alt="" width={1920} height={1280}
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-transparent to-midnight" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/80">
            <span className="size-2 rounded-full bg-cyan-glow pulse-dot" />
            <span>Nooranad, Alappuzha · Your Security Is Our Vision</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
            Devalokam Systems:<br />
            Your Partner in <span className="bg-cyan-gradient bg-clip-text text-transparent">Technology.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            Expert Computer Sales, Service, and Global Remote Support — engineered for
            home users, professionals and growing businesses.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink("Hi Devalokam, I'd like remote support.")}
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-gradient px-6 py-3.5 font-semibold text-midnight shadow-glow hover:scale-[1.02] transition"
            >
              <MessageCircle className="size-5" /> Get Remote Support
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#products"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition"
            >
              <Laptop className="size-5" /> Browse Sales
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["12+", "Years experience"],
              ["1.2k+", "Systems serviced"],
              ["24/7", "Remote reach"],
              ["7 PM–4 AM", "Late-night desk"],
            ].map(([k, v]) => (
              <div key={v} className="glass rounded-xl p-4">
                <div className="font-display text-2xl font-bold text-cyan-glow">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LiveSupport() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const h = now.getHours();
  const active = h >= 19 || h < 4;

  return (
    <section id="support" className="relative bg-midnight text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-cyan-glow/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="glass-dark rounded-3xl p-8 md:p-14 shadow-elegant">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-glow/15 border border-cyan-glow/30 px-3 py-1 text-xs font-semibold text-cyan-glow uppercase tracking-wider">
                <span className={`size-2 rounded-full ${active ? "bg-cyan-glow pulse-dot" : "bg-white/40"}`} />
                {active ? "Active now" : "Opens at 7:00 PM"}
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-balance">
                Late-Night <span className="bg-cyan-gradient bg-clip-text text-transparent">Expert Support</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-xl">
                When the world goes quiet, we go to work. Dedicated remote troubleshooting
                across hardware, networks, security and software — anywhere on the planet.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2"><Clock className="size-4 text-cyan-glow" /> 7:00 PM – 4:00 AM IST</span>
                <span className="flex items-center gap-2"><Globe2 className="size-4 text-cyan-glow" /> Worldwide</span>
                <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-cyan-glow" /> Encrypted sessions</span>
              </div>
            </div>
            <div className="shrink-0">
              <a
                href={waLink("Hi Devalokam, I need late-night support.")}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-gradient px-6 py-4 font-semibold text-midnight shadow-glow hover:scale-[1.02] transition"
              >
                <MessageCircle className="size-5" /> Start a Session
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { icon: Monitor, title: "Hardware Sales",
    desc: "Laptops, desktops and enterprise gear from trusted brands — with honest, expert advice.",
    items: ["Business laptops", "Custom desktops", "Servers & storage"] },
  { icon: Wrench, title: "Technical Service",
    desc: "Component-level diagnostics, repairs and proactive maintenance for any system.",
    items: ["Hardware repair", "OS & data recovery", "Preventive maintenance"] },
  { icon: Briefcase, title: "IT Consulting",
    desc: "Infrastructure planning and tech strategy to scale your business with confidence.",
    items: ["Network design", "Security audits", "Vendor strategy"] },
  { icon: Globe2, title: "Remote Work Solutions",
    desc: "Secure, fast troubleshooting and setup — wherever you and your team are based.",
    items: ["AnyDesk / TeamViewer", "VPN & access control", "Cloud workspace"] },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we do</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Four pillars of <span className="text-midnight">enterprise-grade</span> service.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From a single laptop fix to multi-site infrastructure — Devalokam Systems is the
            calm, capable team you call.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: i * 0.08 } } }}
              className="group relative rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-12 rounded-xl bg-midnight grid place-items-center shadow-glow group-hover:bg-cyan-gradient transition-colors">
                <s.icon className="size-6 text-white group-hover:text-midnight transition-colors" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="size-4 text-accent" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Us</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            From Nooranad, Alappuzha — securing the everyday for over a decade.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Devalokam Systems is a one-stop place for all technology solutions. We address
            the rapidly expanding need for next-generation tech that helps and protects
            people in their day-to-day life — from home setups to business infrastructure.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our clients' satisfaction is at the heart of our business, and our engineers
            blend years of hardware expertise with modern remote tooling — so whether you're
            across the street or across the ocean, help is one call away.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-foreground/80">
            <MapPin className="size-4 text-accent" /> Building No. 179, Near CS Stores, Mattappally, Nooranad, Kerala 690504
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="grid grid-cols-2 gap-4">
          {[
            { icon: Cpu, label: "Component-level repair" },
            { icon: Network, label: "Fortigate firewalls" },
            { icon: Server, label: "Office 365 & AD" },
            { icon: ShieldCheck, label: "Security-first setups" },
          ].map(c => (
            <div key={c.label} className="rounded-2xl bg-card p-6 shadow-card hover:shadow-elegant transition">
              <c.icon className="size-7 text-midnight" />
              <div className="mt-4 font-semibold text-sm">{c.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const products = [
  { icon: Laptop, name: "Business Laptops", note: "Dell, HP, Lenovo ThinkPad" },
  { icon: Monitor, name: "Custom Desktops", note: "Built to your workload" },
  { icon: Server, name: "Tower Servers", note: "SMB & branch offices" },
  { icon: HardDrive, name: "Storage & NAS", note: "Backups that work" },
  { icon: Network, name: "Networking Gear", note: "Fortigate · Ubiquiti · TP-Link" },
  { icon: Printer, name: "Printers & Peripherals", note: "Office-ready bundles" },
];

function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured Hardware</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Pick what fits. We'll quote it fast.</h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md">
            Pricing varies by configuration and current market — tap any card to chat on WhatsApp for a tailored quote.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.name}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: i * 0.05 } } }}
              className="group rounded-2xl border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="size-14 rounded-2xl bg-midnight grid place-items-center group-hover:bg-cyan-gradient transition">
                  <p.icon className="size-7 text-white group-hover:text-midnight transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">In stock</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              <a
                href={waLink(`Hi Devalokam, I'd like a quote for: ${p.name}`)}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-midnight text-primary-foreground py-3 font-semibold hover:bg-cyan-gradient hover:text-midnight transition"
              >
                <MessageCircle className="size-4" /> Inquire for Price
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolbox() {
  const tools = [
    { name: "AnyDesk", desc: "Lightweight, fast remote desktop access.",
      href: "https://anydesk.com/en/downloads" },
    { name: "TeamViewer", desc: "Secure cross-platform remote support.",
      href: "https://www.teamviewer.com/en/download/" },
  ];
  return (
    <section id="toolbox" className="py-24 md:py-32 bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-glow">Support Toolbox</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance max-w-2xl">
            Two clicks to get us on your screen.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Download a remote-access tool below and share the ID with your engineer. Sessions
            are encrypted and end-to-end — we only connect when you say go.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {tools.map(t => (
            <a key={t.name} href={t.href} target="_blank" rel="noreferrer"
              className="group glass-dark rounded-2xl p-8 flex items-center justify-between hover:bg-white/5 transition">
              <div>
                <div className="text-2xl font-display font-bold">{t.name}</div>
                <div className="mt-1 text-sm text-white/60">{t.desc}</div>
              </div>
              <div className="size-14 rounded-xl bg-cyan-gradient grid place-items-center text-midnight group-hover:scale-110 transition">
                <Download className="size-6" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    const text = `Consulting Inquiry%0A%0AName: ${name}%0ACompany: ${company}%0AEmail: ${email}%0A%0A${message}`;
    window.open(waLink(decodeURIComponent(text)), "_blank");
    toast.success("Opening WhatsApp to send your inquiry…");
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Consulting</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Plan your IT future with us.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your environment — team size, current pain points, and goals. We'll
            reply with a clear next step, usually within one business day.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="size-4 text-accent" /> {PHONE_PRIMARY} · {PHONE_SECONDARY}</li>
            <li className="flex items-center gap-3"><Mail className="size-4 text-accent" /> devalokamsystems@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin className="size-4 text-accent" /> Bldg No. 179, Mattappally, Nooranad, Kerala 690504</li>
            <li className="flex items-center gap-3"><Clock className="size-4 text-accent" /> Onsite: Mon–Sat 9 AM–7 PM · Sun 11 AM–7 PM</li>
          </ul>
        </motion.div>
        <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          onSubmit={onSubmit}
          className="rounded-2xl bg-card border p-8 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" maxLength={80} required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" maxLength={80} className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Work email</Label>
            <Input id="email" name="email" type="email" maxLength={120} required className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" rows={5} maxLength={1000} required className="mt-1.5" />
          </div>
          <Button type="submit" className="w-full bg-midnight hover:bg-midnight/90 text-primary-foreground py-6 text-base">
            Request Consultation <ArrowRight className="size-4 ml-2" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}


const testimonials = [
  {
    quote: "Devalokam set up our entire office network and Office 365 migration without a single hour of downtime. The late-night window was a lifesaver.",
    name: "Rahul Menon",
    role: "Operations Lead, Coastal Logistics",
  },
  {
    quote: "I called at 11 PM with a dead laptop the night before a deadline. They were on screen in minutes and had me back up before midnight.",
    name: "Anjali Pillai",
    role: "Architect, Kochi",
  },
  {
    quote: "Honest pricing, expert advice, and they actually pick up the phone. Our go-to IT partner across three branches.",
    name: "Suresh Kumar",
    role: "Director, Backwater Resorts",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Client Stories</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Trusted by businesses across <span className="text-midnight">Kerala and beyond.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real words from clients who count on us when systems can't fail.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure key={t.name}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <Quote className="size-8 text-accent/40" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-midnight text-white/70 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-cyan-gradient grid place-items-center">
            <Sparkles className="size-3.5 text-midnight" />
          </div>
          <span className="font-display font-bold text-white">Devalokam Systems</span>
        </div>
        <div>© {new Date().getFullYear()} Devalokam Systems · Nooranad, Alappuzha · Your Security Is Our Vision</div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={waLink("Hi Devalokam, I'd like to chat.")}
      target="_blank" rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-cyan-gradient text-midnight grid place-items-center shadow-glow hover:scale-110 transition"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 rounded-full bg-cyan-glow/40 animate-ping" />
    </a>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <LiveSupport />
      <Services />
      <About />
      <Products />
      <Toolbox />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingWA />
      <Toaster />
    </main>
  );
}
