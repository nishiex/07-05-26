"use client"

import React, { useRef } from "react"
import { Check } from "lucide-react"
import { TimelineAnimation } from "@/components/ui/timeline-animation"
import MotionDrawer from "@/components/ui/motion-drawer"

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export function Hero() {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={timelineRef}
      id="s-hero"
      data-sec="hero"
      className="relative min-h-screen bg-foreground text-background overflow-hidden flex flex-col"
    >
      {/* ── Ambient orb mesh (replaces ShaderGradient) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-orb absolute"
          style={{
            width: 700,
            height: 700,
            top: "-200px",
            left: "-120px",
            background: "radial-gradient(closest-side, rgba(26,188,217,0.28), rgba(26,188,217,0) 70%)",
          }}
        />
        <div
          className="hero-orb absolute"
          style={{
            width: 600,
            height: 600,
            bottom: "-120px",
            right: "-80px",
            background: "radial-gradient(closest-side, rgba(23,151,172,0.2), rgba(23,151,172,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />
      </div>

      {/* ── Mobile header (MotionDrawer) ── */}
      <div className="relative z-10 flex md:hidden items-center justify-between px-6 pt-5">
        <MotionDrawer
          direction="left"
          width={280}
          backgroundColor="#1a1a1a"
          clsBtnClassName="bg-foreground/80 border-r border-white/10 text-white"
          contentClassName="bg-foreground border-r border-white/10 text-background"
          btnClassName="bg-white/10 text-background relative w-fit p-2 left-0 top-0 rounded-lg"
        >
          <nav className="space-y-4 pt-4">
            <p className="text-[11px] font-mono tracking-widest text-background/40 uppercase mb-6">Menu</p>
            {["Product", "Pricing", "Docs", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-background/80 hover:text-background font-mono text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </MotionDrawer>

        <TimelineAnimation
          once
          as="a"
          animationNum={1}
          timelineRef={timelineRef}
          href="#"
          className="inline-flex items-center gap-2 bg-accent text-white text-sm font-mono px-5 py-2.5 rounded-full shadow-[0_4px_20px_-4px_rgba(26,188,217,0.5)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          Start Free Trial
        </TimelineAnimation>
      </div>

      {/* ── Desktop header ── */}
      <header className="relative z-10 hidden md:flex items-center justify-between px-10 py-5">
        <TimelineAnimation
          once
          animationNum={1}
          timelineRef={timelineRef}
          className="flex items-center gap-2"
        >
          <span className="font-serif text-xl font-medium text-background tracking-tight">twiching</span>
          <span className="text-accent text-xl leading-none">.</span>
        </TimelineAnimation>

        <TimelineAnimation
          once
          as="nav"
          animationNum={2}
          timelineRef={timelineRef}
          className="hidden md:flex items-center gap-10 text-sm font-mono text-background/60"
        >
          {["Product", "Pricing", "Docs", "Blog"].map((item) => (
            <a key={item} href="#" className="hover:text-background transition-colors">
              {item}
            </a>
          ))}
        </TimelineAnimation>

        <TimelineAnimation
          once
          as="a"
          animationNum={3}
          timelineRef={timelineRef}
          href="#"
          className="inline-flex items-center gap-2 bg-accent text-white text-sm font-mono px-6 py-2.5 rounded-full shadow-[0_4px_20px_-4px_rgba(26,188,217,0.5)] hover:bg-[color:var(--accent-dark)] transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          Start Free Trial
        </TimelineAnimation>
      </header>

      {/* ── Main hero content ── */}
      <div className="relative z-10 grow flex flex-col justify-center px-6 md:px-10 lg:px-20 pt-10 pb-16">

        {/* Eyebrow */}
        <TimelineAnimation
          once
          animationNum={3}
          timelineRef={timelineRef}
          className="inline-flex items-center gap-2 w-fit bg-white/8 backdrop-blur border border-accent/25 text-accent text-xs font-mono px-4 py-1.5 rounded-full mb-10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
          </span>
          AI-NATIVE COMMUNICATION PLATFORM
        </TimelineAnimation>

        {/* Headline */}
        <TimelineAnimation
          once
          as="h1"
          animationNum={4}
          timelineRef={timelineRef}
          className="font-serif font-normal leading-[0.95] tracking-tighter mb-10 text-background"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" } as React.CSSProperties}
        >
          The customer
          <br />
          conversation stack{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            that&nbsp;runs&nbsp;itself.
          </span>
        </TimelineAnimation>

        {/* CTAs + sub-copy row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14">
          <div className="flex flex-wrap gap-3">
            <TimelineAnimation
              once
              as="a"
              animationNum={5}
              timelineRef={timelineRef}
              href="#"
              className="inline-flex items-center gap-2 bg-white text-foreground text-[15px] font-medium font-mono px-8 py-4 rounded-full shadow-[0_0_28px_rgba(26,188,217,0.35)] hover:bg-white/90 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              Start Free Trial
            </TimelineAnimation>

            <TimelineAnimation
              once
              as="a"
              animationNum={6}
              timelineRef={timelineRef}
              href="#"
              className="inline-flex items-center gap-2 border border-background/20 bg-background/5 backdrop-blur-md text-background text-[15px] font-medium font-mono px-8 py-4 rounded-full hover:bg-background/10 transition-colors"
            >
              Book a Demo
            </TimelineAnimation>
          </div>

          <TimelineAnimation
            once
            as="p"
            animationNum={7}
            timelineRef={timelineRef}
            className="max-w-sm text-background/55 text-lg font-light leading-relaxed"
          >
            Cloud calling, AI reception, omnichannel inboxes, CRM sync, and live analytics — one modern workspace.
          </TimelineAnimation>
        </div>

        {/* Trust row */}
        <TimelineAnimation
          once
          animationNum={8}
          timelineRef={timelineRef}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[13px] font-mono text-background/40"
        >
          {["99.99% uptime", "AI-first routing", "CRM synced", "Setup in minutes"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
              {item}
            </span>
          ))}
        </TimelineAnimation>
      </div>

      {/* ── Bottom stats grid ── */}
      <div className="relative z-10 p-6 md:p-10 flex justify-end">
        <TimelineAnimation
          once
          animationNum={9}
          timelineRef={timelineRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/8 backdrop-blur-lg rounded-xl overflow-hidden ring-1 ring-background/10"
        >
          {[
            { label: "Cloud Calling", sub: "Carrier-grade PSTN" },
            { label: "AI Reception", sub: "24/7 intelligent routing" },
            { label: "Omnichannel", sub: "Voice · SMS · Chat" },
            { label: "Live Analytics", sub: "Real-time dashboards" },
          ].map((s, i) => (
            <TimelineAnimation
              key={s.label}
              once
              animationNum={10 + i}
              timelineRef={timelineRef}
              className="px-6 py-5 bg-background/5"
            >
              <p className="text-sm font-medium font-mono text-background/80 mb-0.5">{s.label}</p>
              <p className="text-[12px] font-mono text-background/35">{s.sub}</p>
            </TimelineAnimation>
          ))}
        </TimelineAnimation>
      </div>
    </section>
  )
}

/* ─── Live showcase (framer-motion) ────────────────────────────────────────── */

type Activity = {
  id: number
  kind: "call" | "sms" | "ai" | "number"
  Icon: typeof PhoneIncoming
  title: string
  detail: string
  chip: string
  tint: "blue" | "green" | "violet" | "amber"
}

const ACTIVITY_FEED: Activity[] = [
  {
    id: 1,
    kind: "call",
    Icon: PhoneIncoming,
    title: "Inbound · +1 415 555 0138",
    detail: "Routed to Sales · Atlanta · answered in 0.9s",
    chip: "LIVE",
    tint: "green",
  },
  {
    id: 2,
    kind: "sms",
    Icon: MessageSquare,
    title: "SMS delivered · +1 212 555 0194",
    detail: "OTP code · Verizon · 340ms",
    chip: "SENT",
    tint: "blue",
  },
  {
    id: 3,
    kind: "ai",
    Icon: Bot,
    title: "AI receptionist · +44 20 7946 0512",
    detail: "After-hours · booked demo for Thursday 10am",
    chip: "HANDLED",
    tint: "violet",
  },
  {
    id: 4,
    kind: "number",
    Icon: Hash,
    title: "Local number ported · +1 303 555 0112",
    detail: "Denver · CenturyLink · registered STIR/SHAKEN",
    chip: "READY",
    tint: "amber",
  },
  {
    id: 5,
    kind: "call",
    Icon: PhoneIncoming,
    title: "Inbound · +1 646 555 0102",
    detail: "Routed to Support · Brooklyn · answered in 1.2s",
    chip: "LIVE",
    tint: "green",
  },
  {
    id: 6,
    kind: "sms",
    Icon: MessageSquare,
    title: "Campaign blast · 12,480 recipients",
    detail: "Marketing · 10DLC · 98.4% delivery",
    chip: "SENT",
    tint: "blue",
  },
]

const TINT: Record<Activity["tint"], { bg: string; ring: string; text: string; dot: string }> = {
  blue: { bg: "bg-[#e0f7fa]", ring: "ring-[#95d9e8]/50", text: "text-accent", dot: "bg-accent" },
  green: { bg: "bg-emerald-50", ring: "ring-emerald-100", text: "text-emerald-600", dot: "bg-emerald-500" },
  violet: { bg: "bg-violet-50", ring: "ring-violet-100", text: "text-violet-600", dot: "bg-violet-500" },
  amber: { bg: "bg-amber-50", ring: "ring-amber-100", text: "text-amber-600", dot: "bg-amber-500" },
}

function LiveShowcase() {
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse parallax tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  // Rolling feed: show 3 at once, advance every 2.4s
  const [cursor, setCursor] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCursor((c) => (c + 1) % ACTIVITY_FEED.length), 2400)
    return () => clearInterval(id)
  }, [])
  const visible = [
    ACTIVITY_FEED[cursor % ACTIVITY_FEED.length],
    ACTIVITY_FEED[(cursor + 1) % ACTIVITY_FEED.length],
    ACTIVITY_FEED[(cursor + 2) % ACTIVITY_FEED.length],
  ]

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
      style={{
        perspective: 1200,
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full"
    >
      {/* Soft floor shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(26,188,217,0.22), rgba(26,188,217,0) 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Orbiting decorative ring (top-left corner) */}
      <OrbitRing />

      {/* Main dashboard card */}
      <div
        className="relative overflow-hidden rounded-[28px] bg-white/80 backdrop-blur-xl ring-1 ring-gray-200/70 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.25),0_8px_24px_-12px_rgba(26,188,217,0.2)]"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Gradient mesh inside */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 200px at 15% 0%, rgba(26,188,217,0.14), transparent 60%), radial-gradient(500px 180px at 95% 100%, rgba(23,151,172,0.12), transparent 60%)",
          }}
        />

        {/* Card header */}
        <div className="relative flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-300/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <span className="ml-3 text-[11px] font-mono text-gray-500 tracking-wider">
              app.twiching.ai / live
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PulseDot />
            <span className="text-[11px] font-mono font-medium tracking-[1.5px] uppercase text-emerald-600">
              Live activity
            </span>
          </div>
        </div>

        <div className="relative px-4 md:px-6 py-4 min-h-[260px]">
          <div className="space-y-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item, i) => (
                <motion.div
                  key={`${item.id}-${cursor}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1 - i * 0.12, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
                >
                  <ActivityRow item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer stats */}
        <div className="relative grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 bg-gray-50/50">
          <FooterStat label="Today" value="14,823" sub="calls routed" />
          <FooterStat label="Answer rate" value="91.4%" sub="last 24h" />
          <FooterStat label="Latency p95" value="14ms" sub="global" />
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Sub-components ───────────────────────────────────────────────────────── */

function ActivityRow({ item }: { item: Activity }) {
  const t = TINT[item.tint]
  const { Icon } = item
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100 px-4 py-3 hover:ring-gray-200 transition">
      <span className={`grid place-items-center h-10 w-10 rounded-xl ${t.bg} ring-1 ${t.ring} ${t.text}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="flex-1 min-w-0 text-left">
        <p className="text-sm font-medium text-gray-900 font-mono truncate">{item.title}</p>
        <p className="text-[12px] text-gray-500 truncate">{item.detail}</p>
      </div>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono font-medium tracking-[1.5px] uppercase ${t.bg} ${t.text} ring-1 ${t.ring}`}
      >
        <motion.span
          className={`inline-block h-1.5 w-1.5 rounded-full ${t.dot}`}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        {item.chip}
      </span>
    </div>
  )
}

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  )
}


function OrbitRing() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 -right-10 h-40 w-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#95d9e8]/70/80" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(26,188,217,0.18)]" />
        <span className="absolute bottom-[12%] right-[6%] h-2 w-2 rounded-full bg-violet-500" />
        <span className="absolute left-[10%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </motion.div>
      <motion.div
        className="absolute inset-6 rounded-full border border-[#95d9e8]/50"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 h-2 w-2 rounded-full bg-accent/70" />
      </motion.div>
    </motion.div>
  )
}


function FooterStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="px-5 py-4 text-left">
      <p className="text-[10px] font-mono font-medium tracking-[1.5px] uppercase text-gray-400">
        {label}
      </p>
      <p className="font-serif text-2xl font-medium text-gray-900 mt-0.5 leading-none">
        {value}
      </p>
      <p className="text-[11px] text-gray-500 font-mono mt-1">{sub}</p>
    </div>
  )
}
