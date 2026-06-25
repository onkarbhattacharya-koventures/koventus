import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import heroImg from "@/assets/hero-turbine.jpg";
import fieldImg from "@/assets/turbine-field.jpg";
import hybridImg from "@/assets/hybrid-system.jpg";
import diagramOnGrid from "@/assets/diagram-ongrid.png";
import diagramOffGrid from "@/assets/diagram-offgrid.png";
import diagramHybridGrid from "@/assets/diagram-hybrid-grid.png";
import {
  Wind, Leaf, Zap, ShieldCheck, Thermometer, Volume2, Gauge, Settings,
  Building2, Home, Tractor, GraduationCap, HeartPulse, Radio, BatteryCharging,
  Sun, Plug, CircleCheck, Mail, Phone, MapPin, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Brochure,
});

const advantages = [
  { icon: Wind, title: "Omnidirectional", text: "Operates independently of wind direction — no yaw mechanism required." },
  { icon: Gauge, title: "Low Cut-in Speed", text: "Starts generating from approximately 1–2 m/s wind speed." },
  { icon: Volume2, title: "Silent Operation", text: "Low-vibration design ideal for urban and residential sites." },
  { icon: ShieldCheck, title: "Storm Resistant", text: "Survival wind speeds up to 40–50 m/s with reinforced construction." },
  { icon: Thermometer, title: "Extreme Climate", text: "Operating range from –40°C to +70°C across all UK conditions." },
  { icon: Settings, title: "Service-Free", text: "Simple mechanical design with no friction devices or overhauls." },
  { icon: Plug, title: "Grid Flexible", text: "On-grid, off-grid and hybrid configurations — SEG-ready." },
  { icon: Leaf, title: "Zero Emissions", text: "Aluminium-alloy blades, fully recyclable lifecycle." },
];

const sectors = [
  { icon: Home, label: "Residential & Rural" },
  { icon: Tractor, label: "Agricultural Estates" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Local Authorities" },
  { icon: HeartPulse, label: "NHS Estates" },
  { icon: Building2, label: "Commercial & Industrial" },
  { icon: BatteryCharging, label: "Off-Grid / Hybrid" },
  { icon: Radio, label: "Remote Infrastructure" },
];

const smallSpecs = {
  headers: ["Model", "100W", "300W", "500W", "600W", "800W", "1000W"],
  rows: [
    ["Rated Power", "100W", "300W", "500W", "600W", "800W", "1000W"],
    ["Max Power", "120W", "500W", "750W", "620W", "900W", "1050W"],
    ["Rated Voltage", "12/24V", "12/24V", "12/24/48V", "24/48V", "24/48V", "24/48/96/240V"],
    ["Start-up Wind", "2 m/s", "2 m/s", "2 m/s", "2 m/s", "2 m/s", "2.5 m/s"],
    ["Rated Wind", "12 m/s", "12 m/s", "12 m/s", "12 m/s", "12 m/s", "12 m/s"],
    ["Survival Wind", "40 m/s", "40 m/s", "40 m/s", "40 m/s", "40 m/s", "40 m/s"],
    ["Tower Height", "6m", "6m", "6m", "6m", "6m", "6m"],
    ["Wheel Diameter", "0.7m", "1.0m", "1.3m", "1.0m", "1.5m", "1.8m"],
    ["Blade Height", "0.8m", "1.0m", "1.3m", "1.6m", "1.5m", "1.8m"],
    ["Net Weight", "13.5 kg", "20 kg", "35 kg", "45 kg", "60 kg", "85 kg"],
  ],
};

const mediumSpecs = {
  headers: ["Model", "2KW", "3KW", "5KW", "10KW", "20KW", "30KW", "50KW"],
  rows: [
    ["Rated Power", "2000W", "3000W", "5000W", "10000W", "20000W", "30000W", "50000W"],
    ["Max Power", "2350W", "3400W", "6000W", "11000W", "25000W", "37500W", "55000W"],
    ["Rated Voltage", "24–300V", "48–410V", "48–550V", "120–600V", "150–650V", "240–650V", "240–650V"],
    ["Start-up Wind", "2 m/s", "2 m/s", "2 m/s", "2 m/s", "2 m/s", "2.5 m/s", "2.5 m/s"],
    ["Rated Wind", "12 m/s", "12 m/s", "12 m/s", "11 m/s", "11 m/s", "11 m/s", "11 m/s"],
    ["Survival Wind", "40 m/s", "45 m/s", "45 m/s", "45 m/s", "45 m/s", "50 m/s", "50 m/s"],
    ["Tower Height", "6m", "9m", "9/12m", "12/15m", "15/18m", "18m", "24m"],
    ["Wheel Diameter", "2.6m", "3.2m", "3.5m", "4.0m", "6.5m", "6.0m", "6.8m"],
    ["Blade Height", "2.6m", "3.2m", "3.65m", "4.0m", "6.5m", "10.0m", "15.0m"],
  ],
};

const systems = [
  {
    tag: "01 — On-Grid",
    title: "On-Grid System",
    badge: "SEG-Compatible",
    body: "Direct grid-tie configuration with two-directional smart metering. Surplus energy is exported under the Smart Export Guarantee — the lowest-cost route to renewable generation.",
    components: ["KOVentus turbine", "Grid-tie inverter", "Two-directional smart meter", "AC/DC protection", "Optional solar PV"],
    perks: ["Lowest system cost", "No batteries required", "SEG export payments eligible"],
    diagram: diagramOnGrid,
  },
  {
    tag: "02 — Off-Grid",
    title: "Off-Grid System",
    badge: "Energy Independence",
    body: "Complete autonomy from the national grid. Battery storage captures every kilowatt-hour generated — ideal for rural, recreational and remote infrastructure.",
    components: ["KOVentus turbine", "Charge controller", "Battery bank", "Optional inverter / PV / generator"],
    perks: ["Full energy independence", "Reliable in remote sites", "Year-round generation"],
    diagram: diagramOffGrid,
  },
  {
    tag: "03 — Hybrid",
    title: "On/Off-Grid Hybrid",
    badge: "Maximum Resilience",
    body: "The best of both worlds. Hybrid inverter intelligently routes power between batteries, grid and load — supports peak-shaving and load-shifting for public-sector buildings.",
    components: ["KOVentus turbine", "Hybrid inverter", "Battery storage", "Grid connection", "Optional solar PV"],
    perks: ["Grid-failure resilience", "Peak-shaving capability", "Optimal for public sector"],
    diagram: diagramHybridGrid,
  },
];

const masts = [
  { title: "Pre-Stressed Concrete Mast", text: "Manufactured from high-strength concrete poured into rotating conical moulds. Long service life, corrosion-resistant, and the most cost-effective option at height.", uses: "Farms · Exposed rural sites" },
  { title: "Steel Mast with Cable Stays", text: "Combined thin-wall tubes with cable stays anchored to concrete blocks. Lightweight and transportable — disassembles into short sections for easy installation.", uses: "Farms · Remote sites · Semi-permanent" },
  { title: "Flat-Roof Lattice Mast", text: "Lattice structure with wide leg span and vibration-damping connectors. Designed to sit no higher than three metres above the roofline.", uses: "Schools · NHS estates · Council buildings" },
];

const productivity = [
  { city: "London", wind: "5.3", kwh: "2,777", co2: "2,249" },
  { city: "Liverpool", wind: "7.6", kwh: "11,683", co2: "9,463" },
  { city: "Glasgow", wind: "6.7", kwh: "7,115", co2: "5,763" },
  { city: "Edinburgh", wind: "6.5", kwh: "6,500", co2: "5,260" },
  { city: "Manchester", wind: "5.8", kwh: "3,500", co2: "2,830" },
  { city: "Birmingham", wind: "5.2", kwh: "2,600", co2: "2,100" },
  { city: "Dublin, IE", wind: "7.2", kwh: "9,800", co2: "7,940" },
  { city: "Copenhagen, DK", wind: "7.8", kwh: "12,500", co2: "10,125" },
];

function Brochure() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-[image:var(--gradient-accent)] grid place-items-center">
              <Wind className="size-4 text-primary" />
            </div>
            <span className="font-display text-xl tracking-tight">KOV<span className="text-accent">entus</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#range" className="hover:text-foreground transition">Range</a>
            <a href="#systems" className="hover:text-foreground transition">Systems</a>
            <a href="#masts" className="hover:text-foreground transition">Masts</a>
            <a href="#productivity" className="hover:text-foreground transition">Productivity</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white/90 text-xs font-medium tracking-wide">
              <Leaf className="size-3.5 text-accent" /> ENGINEERED FOR UK NET ZERO
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl text-white leading-[1.02] tracking-tight">
              Premium wind energy,<br />
              <span className="italic font-normal text-accent">vertically reimagined.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              KOVentus is the flagship vertical-axis wind turbine range from KOVentures Ltd — quietly delivering reliable, low-maintenance clean power to homes, estates, schools, and infrastructure across the United Kingdom.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#range" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-elegant)]">
                Explore the range <ArrowRight className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/15 transition">
                Speak to our team
              </a>
            </div>
          </div>

          {/* stat strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur border border-white/10">
            {[
              ["100W – 50kW", "Power range"],
              ["1 m/s", "Cut-in speed"],
              ["–40° to +70°C", "Operating range"],
              ["13 yrs", "Engineering heritage"],
            ].map(([v, l]) => (
              <div key={l} className="bg-primary/40 px-6 py-6">
                <div className="font-display text-2xl md:text-3xl text-white">{v}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Introduction</span>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">A UK partner for the clean-energy transition.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              KOVentures Ltd is a UK-based provider of advanced renewable energy systems, specialising in high-performance vertical axis wind turbines (VAWTs) engineered for the United Kingdom&apos;s diverse and often turbulent wind environment.
            </p>
            <p>
              The KOVentus range is built on European engineering principles, incorporating high-quality materials, robust mechanical design and performance characteristics validated across global wind conditions — particularly suited to the UK&apos;s inland and semi-urban wind profiles.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sectors.map(({ icon: Icon, label }) => (
              <div key={label} className="group rounded-xl border border-border bg-card p-5 hover:border-accent transition">
                <Icon className="size-5 text-accent" />
                <div className="mt-3 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Why KOVentus</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Engineered to outlast the British weather.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card p-6 border border-border hover:shadow-[var(--shadow-soft)] transition">
                <div className="size-11 rounded-lg bg-[image:var(--gradient-accent)] grid place-items-center mb-4">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RANGE */}
      <section id="range" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">The Range</span>
              <h2 className="mt-4 text-4xl md:text-5xl">From rooftop to estate.</h2>
              <p className="mt-4 text-muted-foreground text-lg">Two product families spanning 100W to 50kW — every configuration uses the same H-type vertical-axis architecture with a permanent magnet generator.</p>
            </div>
            <img src={fieldImg} alt="KOVentus vertical axis wind turbine in a UK field" loading="lazy" width={1024} height={1024} className="rounded-2xl w-full md:w-80 h-56 object-cover" />
          </div>

          {/* Small */}
          <div className="mt-16">
            <div className="flex items-baseline justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl">Small Wind Turbines</h3>
                <p className="text-sm text-muted-foreground mt-1">H-Type · 100W – 1000W · Permanent Magnet Generator</p>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Series · SW-100 / 1000</span>
            </div>
            <SpecTable spec={smallSpecs} />
          </div>

          {/* Medium */}
          <div className="mt-20">
            <div className="flex items-baseline justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl">Medium Wind Turbines</h3>
                <p className="text-sm text-muted-foreground mt-1">H-Type · 2kW – 50kW · PMG + Electromagnetic Control</p>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Series · SW-2K / 50K</span>
            </div>
            <SpecTable spec={mediumSpecs} />
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              ["Blade Material", "Aluminium alloy"],
              ["Generator", "Three-phase PMG synchronous"],
              ["Working Temperature", "–40°C to +80°C"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
                <div className="mt-2 font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">System Configurations</span>
              <h2 className="mt-4 text-4xl md:text-5xl">Designed for every grid scenario in the UK.</h2>
            </div>
            <img src={hybridImg} alt="Hybrid wind and solar installation at a UK home" loading="lazy" width={1024} height={1024} className="lg:col-span-5 rounded-2xl w-full h-56 object-cover" />
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {systems.map((s) => (
              <article key={s.title} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:bg-white/10 transition flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-accent">{s.tag}</span>
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">{s.badge}</span>
                </div>
                <div className="mt-5 rounded-xl bg-white p-3 flex items-center justify-center h-44">
                  <img src={s.diagram} alt={`${s.title} schematic diagram`} loading="lazy" className="max-h-full w-auto object-contain" />
                </div>
                <h3 className="mt-5 text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.body}</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-widest text-white/50 mb-3">Components</div>
                  <ul className="space-y-1.5 text-sm text-white/80">
                    {s.components.map((c) => <li key={c}>· {c}</li>)}
                  </ul>
                </div>
                <div className="mt-6 space-y-2">
                  {s.perks.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-white/90">
                      <CircleCheck className="size-4 text-accent mt-0.5 shrink-0" /> {p}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MASTS */}
      <section id="masts" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Mast Options</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Three mounting systems for every site.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {masts.map((m, i) => (
              <div key={m.title} className="rounded-2xl border border-border bg-card p-8 flex flex-col">
                <div className="font-display text-6xl text-accent/30">0{i + 1}</div>
                <h3 className="mt-2 text-xl">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{m.text}</p>
                <div className="mt-5 pt-5 border-t border-border text-xs uppercase tracking-widest text-muted-foreground">{m.uses}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTIVITY */}
      <section id="productivity" className="py-24 lg:py-32 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">Productivity Analysis</span>
              <h2 className="mt-4 text-4xl md:text-5xl">Real-world generation by location.</h2>
              <p className="mt-4 text-muted-foreground">Typical annual energy yield and CO₂ savings for a 5kW KOVentus turbine at 15m hub height.</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground px-3 py-2 rounded-full border border-border bg-card">
              <Sun className="size-3.5 text-accent" /> Weibull k = 2.6 · Roughness Class 1
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left font-medium px-6 py-4">Location</th>
                  <th className="text-right font-medium px-6 py-4">Avg Wind (m/s)</th>
                  <th className="text-right font-medium px-6 py-4">Annual Energy (kWh)</th>
                  <th className="text-right font-medium px-6 py-4">CO₂ Saved (kg)</th>
                </tr>
              </thead>
              <tbody>
                {productivity.map((r, i) => (
                  <tr key={r.city} className={i % 2 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-4 font-medium">{r.city}</td>
                    <td className="px-6 py-4 text-right tabular-nums">{r.wind}</td>
                    <td className="px-6 py-4 text-right tabular-nums font-display text-base">{r.kwh}</td>
                    <td className="px-6 py-4 text-right tabular-nums text-accent-foreground">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/20 text-primary text-xs font-medium">
                        <Leaf className="size-3" /> {r.co2}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-[image:var(--gradient-hero)] p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 size-72 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">Begin Your Project</span>
                <h2 className="mt-4 text-4xl md:text-5xl">Let&apos;s power your Net Zero target.</h2>
                <p className="mt-5 text-white/80 text-lg max-w-md">
                  Speak with our engineering team for a site assessment, productivity forecast, and full system specification — tailored to your location and use case.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "contact@koventures.co.uk" },
                  { icon: Phone, label: "Telephone", value: "+44 07380123266" },
                  { icon: MapPin, label: "Headquarters", value: "United Kingdom" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                    <div className="size-11 rounded-xl bg-accent grid place-items-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/50">{label}</div>
                      <div className="text-white font-medium">{value}</div>
                    </div>
                  </div>
                ))}
                <a href="mailto:contact@koventures.co.uk" className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
                  Request a quote <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="relative mt-10 pt-10 border-t border-white/15">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Wind className="size-4 text-accent" />
            <span>© {new Date().getFullYear()} KOVentures Ltd — KOVentus™ Vertical Axis Wind Turbines</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="size-3.5 text-accent" />
            <span>Engineered for a Net Zero United Kingdom</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SpecTable({ spec }: { spec: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full text-sm min-w-[640px]">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            {spec.headers.map((h, i) => (
              <th key={h} className={`px-4 py-4 font-medium ${i === 0 ? "text-left" : "text-center"}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {spec.rows.map((row, ri) => (
            <tr key={row[0]} className={`border-t border-border ${ri % 2 ? "bg-muted/30" : ""}`}>
              {row.map((c, ci) => (
                <td key={ci} className={`px-4 py-3 ${ci === 0 ? "font-medium text-foreground" : "text-center text-muted-foreground tabular-nums"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d][\d\s()-]{5,}$/, "Phone may contain digits, spaces, +, -, ()"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters")
    .max(1500, "Message must be under 1500 characters"),
});

type EnquiryFields = z.infer<typeof enquirySchema>;
type EnquiryErrors = Partial<Record<keyof EnquiryFields, string>>;

function EnquiryForm() {
  const [values, setValues] = useState<EnquiryFields>({
    name: "", email: "", phone: "", company: "", message: "",
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof EnquiryFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const next: EnquiryErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof EnquiryFields;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    const v = result.data;
    const subject = `KOVentus enquiry from ${v.name}`;
    const body =
      `Name: ${v.name}\n` +
      `Email: ${v.email}\n` +
      `Phone: ${v.phone}\n` +
      `Company: ${v.company || "—"}\n\n` +
      `Message:\n${v.message}\n`;
    const href = `mailto:contact@koventures.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    toast.success("Opening your email client to send the enquiry…");
    setTimeout(() => setSubmitting(false), 800);
  };

  const fieldBase =
    "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/40 outline-none transition focus:bg-white/10";
  const ok = "border-white/15 focus:border-accent";
  const bad = "border-red-400/70 focus:border-red-400";

  return (
    <form onSubmit={onSubmit} noValidate className="grid lg:grid-cols-2 gap-5">
      <div className="lg:col-span-2">
        <h3 className="text-2xl text-white">Send an enquiry</h3>
        <p className="text-white/70 text-sm mt-1">We&apos;ll route your message to contact@koventures.co.uk.</p>
      </div>

      <Field label="Full name" error={errors.name} required>
        <input
          type="text"
          value={values.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          className={`${fieldBase} ${errors.name ? bad : ok}`}
          placeholder="Jane Smith"
          maxLength={100}
        />
      </Field>

      <Field label="Email" error={errors.email} required>
        <input
          type="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          className={`${fieldBase} ${errors.email ? bad : ok}`}
          placeholder="jane@company.co.uk"
          maxLength={255}
        />
      </Field>

      <Field label="Phone" error={errors.phone} required>
        <input
          type="tel"
          value={values.phone}
          onChange={update("phone")}
          aria-invalid={!!errors.phone}
          className={`${fieldBase} ${errors.phone ? bad : ok}`}
          placeholder="+44 7380 123 266"
          maxLength={20}
        />
      </Field>

      <Field label="Company (optional)" error={errors.company}>
        <input
          type="text"
          value={values.company}
          onChange={update("company")}
          className={`${fieldBase} ${errors.company ? bad : ok}`}
          placeholder="KOVentures Ltd"
          maxLength={120}
        />
      </Field>

      <div className="lg:col-span-2">
        <Field label="Message" error={errors.message} required>
          <textarea
            value={values.message}
            onChange={update("message")}
            aria-invalid={!!errors.message}
            rows={5}
            className={`${fieldBase} ${errors.message ? bad : ok} resize-y min-h-[140px]`}
            placeholder="Tell us about your site, expected load, and timeline…"
            maxLength={1500}
          />
        </Field>
      </div>

      <div className="lg:col-span-2 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-white/50">By submitting you agree to be contacted about your enquiry.</p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send enquiry"} <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label, error, required, children,
}: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-white/60">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}

