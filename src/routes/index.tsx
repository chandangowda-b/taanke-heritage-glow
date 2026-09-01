import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Instagram, Mail, MapPin, Menu, Phone, Send, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/house-of-taanke-logo-cropped.png.asset.json";
import heroImage from "@/assets/taanke-hero.jpg.asset.json";
import banarasiImage from "@/assets/taanke-banarasi.jpg.asset.json";
import bridalImage from "@/assets/taanke-bridal.jpg.asset.json";
import weavingImage from "@/assets/taanke-weaving.jpg.asset.json";
import festiveImage from "@/assets/taanke-festive.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "House of Taanke — Timeless Elegance Woven Into Every Thread" },
      { name: "description", content: "Discover House of Taanke, a premium Indian saree house celebrating handcrafted textiles, royal heritage, and modern elegance." },
      { property: "og:title", content: "House of Taanke — Timeless Elegance Woven Into Every Thread" },
      { property: "og:description", content: "A modern Indian saree house rooted in heritage, craftsmanship, and the poetry of the loom." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    { quote: "There is a quiet magic in every Taanke saree. Mine feels like a piece of my family history, made just for me.", name: "Ananya Mehta", detail: "Private client · New Delhi" },
    { quote: "From the first conversation to the final drape, the experience was deeply personal. The craftsmanship is extraordinary.", name: "Rhea Kapoor", detail: "Private client · Mumbai" },
    { quote: "A modern heirloom. The silk, the fall, the story — House of Taanke makes tradition feel entirely my own.", name: "Sana Mirza", detail: "Private client · Bengaluru" },
  ];
  const currentTestimonial = testimonials[testimonial] ?? {
    quote: "There is a quiet magic in every Taanke saree. Mine feels like a piece of my family history, made just for me.",
    name: "Ananya Mehta",
    detail: "Private client · New Delhi",
  };

  const collections = [
    { title: "Silk Sarees", number: "01", image: heroImage.url, description: "Liquid silk, luminous and timeless." },
    { title: "Banarasi Collection", number: "02", image: banarasiImage.url, description: "Zari stories from the ancient loom." },
    { title: "Bridal Sarees", number: "03", image: bridalImage.url, description: "For the beginning of forever." },
    { title: "Festive Wear", number: "04", image: festiveImage.url, description: "Colour, light, and celebration." },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="absolute left-0 right-0 top-0 z-30 border-b border-primary-foreground/20 text-primary-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          <button onClick={() => scrollTo("top")} aria-label="House of Taanke home" className="group flex items-center gap-3">
            <img src={logo.url} alt="House of Taanke" width={78} height={102} className="h-14 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105" />
            <span className="hidden border-l border-primary-foreground/30 pl-3 font-sans text-[9px] uppercase tracking-[0.3em] sm:block">House of<br />Taanke</span>
          </button>
          <nav className="hidden items-center gap-9 font-sans text-[10px] uppercase tracking-[0.2em] md:flex" aria-label="Primary navigation">
            <button onClick={() => scrollTo("story")} className="transition-colors hover:text-accent">The House</button>
            <button onClick={() => scrollTo("collections")} className="transition-colors hover:text-accent">Collections</button>
            <button onClick={() => scrollTo("journal")} className="transition-colors hover:text-accent">Journal</button>
            <button onClick={() => scrollTo("contact")} className="transition-colors hover:text-accent">Contact</button>
          </nav>
          <button onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="md:hidden">
            {menuOpen ? <X size={21} strokeWidth={1.2} /> : <Menu size={21} strokeWidth={1.2} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-primary-foreground/20 bg-primary px-6 py-5 font-sans text-[10px] uppercase tracking-[0.2em] md:hidden"><div className="flex flex-col gap-5"><button onClick={() => scrollTo("story")} className="text-left">The House</button><button onClick={() => scrollTo("collections")} className="text-left">Collections</button><button onClick={() => scrollTo("journal")} className="text-left">Journal</button><button onClick={() => scrollTo("contact")} className="text-left">Contact</button></div></nav>}
      </header>

      <main id="top">
        <section className="relative flex min-h-[720px] items-end overflow-hidden bg-primary pb-16 pt-36 text-primary-foreground lg:min-h-screen lg:pb-24">
          <img src={heroImage.url} alt="Woman in an ivory and chocolate silk saree in a palace corridor" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-center opacity-80" />
          <div className="absolute inset-0 bg-primary/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />
          <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl fade-up">
              <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.42em] text-accent">A house of heirlooms · Est. 2024</p>
              <h1 className="max-w-2xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[104px]">Timeless Elegance <em className="font-serif font-normal">Woven</em> Into Every Thread</h1>
              <p className="mt-7 max-w-md font-serif text-xl leading-relaxed text-primary-foreground/80">Celebrating the beauty of handcrafted sarees and Indian tradition.</p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <button onClick={() => scrollTo("collections")} className="group inline-flex items-center gap-5 border border-accent bg-accent px-6 py-3 font-sans text-[10px] uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/80">Explore Collections <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" /></button>
                <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-3 border-b border-primary-foreground/60 pb-2 font-sans text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent">Contact Us <ArrowRight size={14} strokeWidth={1.5} /></button>
              </div>
            </div>
            <div className="absolute bottom-2 right-6 hidden items-center gap-3 font-sans text-[9px] uppercase tracking-[0.3em] text-primary-foreground/70 lg:flex"><span className="h-px w-12 bg-primary-foreground/50" /> Scroll to discover</div>
          </div>
        </section>

        <section id="story" className="relative bg-background py-24 lg:py-36">
          <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28 lg:px-12">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="arch-frame textile-pattern absolute -bottom-5 -left-5 h-full w-full opacity-70" />
              <div className="arch-frame relative overflow-hidden bg-secondary p-3"><img src={weavingImage.url} alt="Artisan hands weaving a silk saree on a traditional loom" width={1200} height={912} loading="lazy" className="aspect-[4/5] w-full object-cover" /></div>
              <p className="absolute -right-9 bottom-6 hidden rotate-90 font-sans text-[9px] uppercase tracking-[0.3em] text-primary lg:block">The art of the loom</p>
            </div>
            <div className="max-w-xl">
              <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.38em] text-primary">01 · The House</p>
              <h2 className="font-display text-5xl leading-[0.95] text-primary sm:text-6xl">Where heritage<br /><em className="font-serif font-normal text-accent">finds its form.</em></h2>
              <div className="mt-8 space-y-5 font-serif text-xl leading-relaxed text-muted-foreground"><p>House of Taanke is a love letter to the Indian loom — to the patient hands, the quiet rituals, and the extraordinary stories woven into every six yards.</p><p>Our sarees are created for the woman who understands that true luxury is felt in the details: a border that catches the light, a motif with a memory, a drape that becomes entirely her own.</p></div>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-7 font-sans text-[9px] uppercase tracking-[0.2em] text-primary"><div><span className="mb-2 block text-accent">Our belief</span>Made slowly.<br />Worn forever.</div><div><span className="mb-2 block text-accent">Our promise</span>Crafted with<br />intention.</div></div>
            </div>
          </div>
        </section>

        <section id="collections" className="bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-4 font-sans text-[10px] uppercase tracking-[0.38em] text-accent">02 · The Collections</p><h2 className="font-display text-5xl leading-none sm:text-6xl">A study in <em className="font-serif font-normal text-accent">texture.</em></h2></div><p className="max-w-xs font-serif text-lg leading-relaxed text-primary-foreground/70">A considered edit of India’s most enduring textile traditions.</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{collections.map((collection) => <article key={collection.title} className="group"><div className="relative aspect-[4/5] overflow-hidden border border-primary-foreground/20 p-2 transition-colors duration-500 group-hover:border-accent"><div className="relative h-full overflow-hidden"><img src={collection.image} alt={collection.title} width={1000} height={1250} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-primary/15 transition-colors group-hover:bg-transparent" /><span className="absolute left-5 top-5 font-sans text-[9px] tracking-[0.25em] text-primary-foreground/80">{collection.number}</span></div></div><div className="flex items-start justify-between gap-3 pt-5"><div><h3 className="font-display text-2xl">{collection.title}</h3><p className="mt-1 font-serif text-base text-primary-foreground/60">{collection.description}</p></div><ArrowRight size={17} strokeWidth={1} className="mt-2 shrink-0 text-accent transition-transform group-hover:translate-x-1" /></div></article>)}</div>
            <div className="mt-14 border-t border-primary-foreground/20 pt-5"><button className="group flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.3em] text-accent">View the full edit <span className="h-px w-10 bg-accent transition-all group-hover:w-16" /></button></div>
          </div>
        </section>

        <section id="journal" className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12"><div className="mb-14 flex items-end justify-between"><div><p className="mb-4 font-sans text-[10px] uppercase tracking-[0.38em] text-primary">03 · From the journal</p><h2 className="font-display text-5xl leading-none text-primary sm:text-6xl">The <em className="font-serif font-normal text-accent">Taanke</em> edit</h2></div><span className="hidden font-serif text-lg italic text-muted-foreground sm:block">Notes on the making</span></div><div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2"><article className="group lg:col-span-7 lg:row-span-2"><div className="relative h-full min-h-[440px] overflow-hidden"><img src={bridalImage.url} alt="Bride in a deep wine and antique gold saree" width={1000} height={1250} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" /><div className="absolute bottom-0 p-7 text-primary-foreground"><p className="font-sans text-[9px] uppercase tracking-[0.28em] text-accent">The making of · 01</p><h3 className="mt-3 max-w-md font-display text-4xl leading-none">The quiet grandeur of a bridal drape</h3><button className="mt-5 flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em]">Read story <ArrowRight size={14} strokeWidth={1.5} /></button></div></div></article><article className="group bg-background p-3 lg:col-span-5"><div className="relative h-full min-h-[250px] overflow-hidden"><img src={festiveImage.url} alt="Folded festive silk sarees with gold borders" width={1000} height={1250} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="p-4 pb-2"><p className="font-sans text-[9px] uppercase tracking-[0.28em] text-primary">The colour story · 02</p><h3 className="mt-2 font-display text-2xl text-primary">Of marigold, silk & celebration</h3></div></article><article className="flex items-center justify-between bg-primary p-8 text-primary-foreground lg:col-span-5"><div><p className="font-sans text-[9px] uppercase tracking-[0.28em] text-accent">The atelier · 03</p><h3 className="mt-3 max-w-xs font-display text-3xl leading-none">Meet the hands behind the magic.</h3></div><button aria-label="Read atelier story" className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground"><ArrowRight size={18} strokeWidth={1.2} /></button></article></div></div>
        </section>

        <section className="bg-background py-24 lg:py-32"><div className="mx-auto max-w-[1000px] px-6 text-center"><div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent text-accent"><span className="font-serif text-3xl">✦</span></div><p className="mb-7 font-sans text-[10px] uppercase tracking-[0.38em] text-primary">04 · The Taanke promise</p><h2 className="font-display text-4xl leading-tight text-primary sm:text-6xl">Luxury is not what you see.<br /><em className="font-serif font-normal text-accent">It is what you feel.</em></h2><div className="mt-14 grid gap-8 border-t border-border pt-9 sm:grid-cols-4">{[{ title: "Authentic Craftsmanship", icon: "01" }, { title: "Premium Fabrics", icon: "02" }, { title: "Traditional Heritage", icon: "03" }, { title: "Personalized Service", icon: "04" }].map((item) => <div key={item.title} className="text-center"><span className="font-serif text-2xl text-accent">{item.icon}</span><h3 className="mt-3 font-display text-xl text-primary">{item.title}</h3></div>)}</div></div></section>

        <section className="bg-secondary py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 lg:px-12"><div className="mb-12 flex items-end justify-between"><div><p className="mb-4 font-sans text-[10px] uppercase tracking-[0.38em] text-primary">05 · In the light</p><h2 className="font-display text-5xl text-primary sm:text-6xl">Details worth <em className="font-serif font-normal text-accent">keeping.</em></h2></div><p className="hidden max-w-xs font-serif text-lg text-muted-foreground sm:block">A glimpse into the hands, places and moments behind each drape.</p></div><div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]"><div className="group overflow-hidden lg:row-span-2"><img src={heroImage.url} alt="Ivory silk saree in a palace corridor" width={1600} height={1104} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="group overflow-hidden lg:col-span-2"><img src={weavingImage.url} alt="Close-up of traditional saree weaving" width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="group overflow-hidden lg:row-span-2"><img src={bridalImage.url} alt="Bridal saree detail in a palace arch" width={1000} height={1250} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="group overflow-hidden lg:col-span-2"><img src={festiveImage.url} alt="Stacked festive sarees and traditional jewelry" width={1000} height={1250} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" /></div></div></div></section>

        <section className="border-y border-border bg-secondary py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 lg:px-12"><div className="mb-12 flex items-end justify-between"><div><p className="mb-4 font-sans text-[10px] uppercase tracking-[0.38em] text-primary">06 · Words from our circle</p><h2 className="font-display text-5xl text-primary sm:text-6xl">Worn with <em className="font-serif font-normal text-accent">love.</em></h2></div><div className="flex gap-2"><button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><ChevronLeft size={17} strokeWidth={1.2} /></button><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><ChevronRight size={17} strokeWidth={1.2} /></button></div></div><div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end"><span className="font-display text-8xl leading-none text-accent/50">“</span><div><blockquote className="max-w-3xl font-serif text-3xl leading-tight text-primary sm:text-5xl">{currentTestimonial.quote}</blockquote><div className="mt-8 flex items-center gap-4"><span className="h-px w-10 bg-accent" /><div><p className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary">{currentTestimonial.name}</p><p className="mt-1 font-serif text-base text-muted-foreground">{currentTestimonial.detail}</p></div></div></div></div></div></section>

        <section id="contact" className="bg-primary py-24 text-primary-foreground lg:py-32"><div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28 lg:px-12"><div><p className="mb-4 font-sans text-[10px] uppercase tracking-[0.38em] text-accent">07 · Begin a conversation</p><h2 className="font-display text-5xl leading-none sm:text-7xl">Your next<br /><em className="font-serif font-normal text-accent">heirloom awaits.</em></h2><p className="mt-7 max-w-sm font-serif text-xl leading-relaxed text-primary-foreground/70">Whether you are searching for a bridal trousseau or a saree for a story yet to be told, our private clients’ team is here to help.</p><div className="mt-12 space-y-5 font-sans text-[10px] uppercase tracking-[0.18em]"><a href="tel:+919876543210" className="flex items-center gap-4 transition-colors hover:text-accent"><Phone size={16} strokeWidth={1.2} className="text-accent" /> +91 98765 43210</a><a href="mailto:hello@houseoftaanke.com" className="flex items-center gap-4 transition-colors hover:text-accent"><Mail size={16} strokeWidth={1.2} className="text-accent" /> hello@houseoftaanke.com</a><a href="https://instagram.com" className="flex items-center gap-4 transition-colors hover:text-accent"><Instagram size={16} strokeWidth={1.2} className="text-accent" /> @houseoftaanke</a><span className="flex items-center gap-4"><MapPin size={16} strokeWidth={1.2} className="text-accent" /> By appointment · New Delhi</span></div></div><div className="border-t border-primary-foreground/20 pt-8 lg:border-t-0 lg:pt-0"><div className="mb-8 flex items-center justify-between border-b border-primary-foreground/20 pb-5"><span className="font-display text-2xl">Private appointments</span><span className="font-serif text-lg italic text-accent">Let’s talk</span></div>{submitted ? <div className="flex min-h-[330px] items-center justify-center border border-accent/50 text-center"><div><span className="font-serif text-4xl text-accent">✦</span><h3 className="mt-4 font-display text-3xl">Thank you for reaching out.</h3><p className="mt-2 font-serif text-lg text-primary-foreground/70">Our concierge will be in touch shortly.</p></div></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-7"><div className="grid gap-7 sm:grid-cols-2"><label className="font-sans text-[9px] uppercase tracking-[0.2em] text-primary-foreground/70">Your name<input required name="name" className="mt-3 block w-full border-0 border-b border-primary-foreground/30 bg-transparent px-0 py-3 font-serif text-xl text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent" placeholder="Name" /></label><label className="font-sans text-[9px] uppercase tracking-[0.2em] text-primary-foreground/70">Email address<input required type="email" name="email" className="mt-3 block w-full border-0 border-b border-primary-foreground/30 bg-transparent px-0 py-3 font-serif text-xl text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent" placeholder="Email" /></label></div><label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-primary-foreground/70">How may we help?<textarea required name="message" rows={3} className="mt-3 block w-full resize-none border-0 border-b border-primary-foreground/30 bg-transparent px-0 py-3 font-serif text-xl text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-accent" placeholder="Tell us a little about what you are looking for..." /></label><button type="submit" className="group inline-flex items-center gap-4 border border-accent bg-accent px-6 py-3 font-sans text-[10px] uppercase tracking-[0.22em] text-accent-foreground transition-colors hover:bg-accent/80">Send enquiry <Send size={15} strokeWidth={1.3} className="transition-transform group-hover:translate-x-1" /></button></form>}</div></div></section>
      </main>

      <footer className="bg-background py-12"><div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-12"><div className="flex items-end gap-5"><img src={logo.url} alt="House of Taanke" width={78} height={102} className="h-20 w-auto object-contain" /><div><p className="font-display text-3xl text-primary">House of Taanke</p><p className="mt-2 font-sans text-[9px] uppercase tracking-[0.28em] text-muted-foreground">A modern heirloom house</p></div></div><div className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-[9px] uppercase tracking-[0.2em] text-primary"><button onClick={() => scrollTo("story")} className="transition-colors hover:text-accent">The House</button><button onClick={() => scrollTo("collections")} className="transition-colors hover:text-accent">Collections</button><button onClick={() => scrollTo("contact")} className="transition-colors hover:text-accent">Contact</button><a href="https://wa.me/919876543210" className="transition-colors hover:text-accent">WhatsApp</a></div><div className="font-sans text-[9px] uppercase tracking-[0.18em] text-muted-foreground">© 2024 House of Taanke</div></div></footer>
    </div>
  );
}
