/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.HOME.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Home module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Home.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'

const pillars = [
  {
    title: 'Governance',
    icon: '⚖️',
    description:
      'Every agent action is authorized, logged, and permanently auditable. Tiered approval gates mean no autonomous decision crosses a safety boundary without explicit human sign-off. In a world drowning in AI chaos, governance is the product.',
  },
  {
    title: 'Continuity',
    icon: '🧠',
    description:
      'Memory Lake preserves full context, checkpoints, and policy state across every session. Tasks do not drop. Work does not reset. Progress is permanent until delivered — because forgotten work is wasted capital.',
  },
  {
    title: 'Device-Safe',
    icon: '🛡️',
    description:
      'Brain Sentinel watches CPU load, battery, and thermal state in real time. When your device strains, agents sleep. When conditions recover, they awaken. Your hardware is never sacrificed for the mission.',
  },
]

const subsystems = [
  { name: 'Lee Prime', role: 'Central coordinator and supreme decision authority', icon: '👑' },
  { name: 'Scheduler', role: 'Wake/Sleep lifecycle orchestrator for all agents', icon: '⏱️' },
  { name: 'TaskBroker', role: 'Baton system — explicit routing and zero-drop handoffs', icon: '🔀' },
  { name: 'Memory Lake', role: 'Continuity, policy, ground truth, and checkpoints', icon: '💾' },
  { name: 'Shield Aegis', role: 'Permissions, injection defense, and safety enforcement', icon: '🔒' },
  { name: 'Brain Sentinel', role: 'Load, battery, and thermal monitoring in real time', icon: '📡' },
]

const timeline = [
  { year: 'The Vision', label: 'LeeWay Industry founded by Leonard J. Lee — a holding company built to architect the infrastructure of autonomous intelligence.' },
  { year: 'The Lab', label: 'LeeWay Innovations established as the creative engineering arm — tasked with one mission: build the agent system the world doesn\'t yet know it needs.' },
  { year: 'The Build', label: 'Agent Lee v1 developed in-house. Six subsystems. One governing authority. Zero dropped tasks. A civilization inside a thread.' },
  { year: 'The Raise', label: 'Series A open. The world is ready. So are we.' },
]

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home"
        description="Agent Lee by LeeWay Innovations, a LeeWay Industry company — the world's first governed agentic operating system. Software as a Civilization."
      />

      {/* Hero */}
      <section className="relative bg-gray-950 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-gray-950 opacity-90" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center w-full">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            LeeWay Industry · LeeWay Innovations
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">Chapter One</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
            Software as a{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent block sm:inline">
              Civilization
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            They built autonomous agents. Then they stopped. They forgot the hardest part was never the intelligence — 
            it was the <em>structure</em>. LeeWay Innovations did not forget.
          </p>
          <p className="text-gray-400 text-base italic mb-4 max-w-2xl mx-auto">
            "Many agents exist. Few execute. One system runs."
          </p>
          <p className="text-gray-600 text-sm mb-12">— The founding law of Agent Lee, authored by Leonard J. Lee</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/investor-one-pager"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg shadow-lg shadow-cyan-900/40"
            >
              View Investor One-Pager
            </Link>
            <Link
              to="/investor-memo"
              className="bg-gray-900 border border-cyan-700 text-cyan-400 font-semibold px-10 py-4 rounded-lg hover:bg-cyan-950 transition-colors text-lg"
            >
              Read the Full Memo
            </Link>
            <Link
              to="/architecture"
              className="border border-gray-700 text-gray-400 font-semibold px-10 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors text-lg"
            >
              Explore Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-gray-950 py-24 border-t border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4 text-center">The Origin</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-8">
            A Company Built to Build the Future
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6 text-center">
            <p>
              <strong className="text-white">LeeWay Industry</strong> is the mother company — a strategic holding organization founded by{' '}
              <strong className="text-cyan-400">Leonard J. Lee</strong> with a singular thesis: that the next era of human productivity would be governed, not chaotic.
              That autonomous systems would need structure before they could earn trust. That civilization — even digital civilization — requires law.
            </p>
            <p>
              From within LeeWay Industry emerged its creative engineering division:{' '}
              <strong className="text-cyan-400">LeeWay Innovations</strong>. Not a subsidiary. A forge. The place where the thesis became technology.
              Where the philosophy of governed intelligence was translated into six interlocking subsystems, a memory architecture, and a safety framework
              that the industry has never seen assembled in one place.
            </p>
            <p className="text-white text-xl font-semibold">
              The result is <span className="text-cyan-400">Agent Lee</span> — the world's first governed agentic operating system.
            </p>
          </div>
        </div>
      </section>

      {/* Company Lineage */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-cyan-900 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -translate-y-8 translate-x-8" />
              <div className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-3">Mother Company</div>
              <h3 className="text-3xl font-black text-white mb-4">LeeWay Industry</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The holding entity. The governance layer above the layers. LeeWay Industry was incorporated with one guiding principle:
                that technology companies without a civilizational vision are merely utilities waiting to be commoditized.
                LeeWay Industry builds companies that build infrastructure. Infrastructure that lasts.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500"><span className="text-cyan-400">→</span> Founder: Leonard J. Lee</div>
                <div className="flex items-center gap-2 text-sm text-gray-500"><span className="text-cyan-400">→</span> Role: Strategic holding, vision, and governance</div>
                <div className="flex items-center gap-2 text-sm text-gray-500"><span className="text-cyan-400">→</span> Portfolio: LeeWay Innovations and future ventures</div>
              </div>
            </div>
            <div className="bg-gray-900 border border-blue-900 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-8 translate-x-8" />
              <div className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">Creative Engineering Arm</div>
              <h3 className="text-3xl font-black text-white mb-4">LeeWay Innovations</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The builders. The engineers. The dreamers who write policy into code and turn governance into a feature.
                LeeWay Innovations is the division that took Leonard's vision from whiteboard to working system —
                producing Agent Lee as its flagship product and proof of what governed intelligence can do when it's taken seriously.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500"><span className="text-blue-400">→</span> Role: R&D, product engineering, and innovation</div>
                <div className="flex items-center gap-2 text-sm text-gray-500"><span className="text-blue-400">→</span> Flagship: Agent Lee — Governed Agentic OS</div>
                <div className="flex items-center gap-2 text-sm text-gray-500"><span className="text-blue-400">→</span> Standard: LEEWAY™ Code Governance Framework</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4 text-center">The Chronicle</p>
        <h2 className="text-3xl font-black text-white text-center mb-12">How We Got Here</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-600 opacity-30" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div key={i} className="pl-16 relative">
                <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-2 border-gray-950 shadow-lg shadow-cyan-500/40" />
                <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">{t.year}</div>
                <p className="text-gray-300 text-base leading-relaxed">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4 text-center">The Foundation</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">Three Laws of Agent Lee</h2>
          <p className="text-gray-400 text-center mb-14 max-w-3xl mx-auto text-lg">
            Agent Lee is not a chatbot wrapper. It is not a plugin. It is an operating system for autonomous work,
            engineered by LeeWay Innovations on three non-negotiable foundations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-10 hover:border-cyan-700 transition-all hover:shadow-xl hover:shadow-cyan-900/20"
              >
                <div className="text-4xl mb-6">{p.icon}</div>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mb-6" />
                <h3 className="text-2xl font-black text-white mb-4">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsystems */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4 text-center">The Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">Six Core Subsystems</h2>
          <p className="text-gray-400 text-center mb-14 max-w-3xl mx-auto text-lg">
            LeeWay Innovations engineered six interlocking subsystems — each with a precise mandate, each reporting to a single governing authority.
            Together, they form the first true agentic operating system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((s) => (
              <div
                key={s.name}
                className="bg-gray-900 border border-gray-800 rounded-xl p-7 hover:border-cyan-800 transition-all hover:bg-gray-900/80"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-cyan-400 font-black text-xl mb-2">{s.name}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{s.role}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/architecture" className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
              Full Architecture Deep Dive →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-950 via-gray-900 to-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white text-center mb-16 tracking-tight">The Numbers That Tell the Story</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-6xl font-black text-cyan-400">$55B+</div>
              <div className="text-gray-400 text-sm">Total addressable market across agentic AI, ops automation, and enterprise compliance</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black text-cyan-400">6</div>
              <div className="text-gray-400 text-sm">Specialized subsystems working in governed concert under one operating system</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black text-cyan-400">0</div>
              <div className="text-gray-400 text-sm">Dropped tasks. Every handoff logged. Every checkpoint stored. Every result delivered.</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black text-cyan-400">1</div>
              <div className="text-gray-400 text-sm">Governing authority above all agents — Lee Prime — so no system acts without sanctioned purpose</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Narrative CTA */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4">The Invitation</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            You Are Reading Chapter One.<br />
            <span className="text-cyan-400">The Rest Is Being Written Now.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            LeeWay Industry built LeeWay Innovations to solve the problem the rest of the AI industry refuses to confront:
            that autonomous agents without governance are not a product — they are a liability.
            Agent Lee is the answer. The raise is open. The moment is now.
          </p>
          <p className="text-gray-600 text-sm italic mb-12">
            "We didn't build an agent. We built the civilization that governs agents."<br />— Leonard J. Lee, Founder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/problem" className="border border-gray-700 text-gray-300 px-8 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
              Read the Problem
            </Link>
            <Link to="/solution" className="border border-gray-700 text-gray-300 px-8 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
              Discover the Solution
            </Link>
            <Link to="/investor-memo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-900/40">
              Read the Investor Memo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
