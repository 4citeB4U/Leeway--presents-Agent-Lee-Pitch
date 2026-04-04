/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.FAQ.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = FAQ module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\FAQ.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'

const faqs = [
  {
    q: 'What is Agent Lee?',
    a: 'Agent Lee is the world\'s first governed agentic operating system. It is a multi-agent AI platform built by LeeWay Innovations that guarantees task completion, enforces safety policies, maintains persistent memory across sessions, and produces a full audit trail for every agent action. Where other frameworks produce impressive demos, Agent Lee produces reliable production systems.',
  },
  {
    q: 'Who is LeeWay Industry?',
    a: 'LeeWay Industry is the mother company — the holding organization founded by Leonard J. Lee around a single thesis: the autonomous AI era requires governed infrastructure, and that infrastructure does not yet exist. LeeWay Industry exists to build the companies that build what the AI civilization needs.',
  },
  {
    q: 'Who is LeeWay Innovations?',
    a: 'LeeWay Innovations is the engineering and creative arm of LeeWay Industry — the forge where ideas become systems. LeeWay Innovations designed and built Agent Lee, authored the LEEWAY™ Code Governance Standard, and is responsible for every technical artifact in the Agent Lee ecosystem.',
  },
  {
    q: 'Who is Leonard J. Lee?',
    a: 'Leonard J. Lee is the Founder of LeeWay Industry and the Chief Architect of Agent Lee. He designed the six-subsystem architecture, created the LEEWAY™ governance standard, and established the company thesis that autonomous AI without governance is a liability, not an asset.',
  },
  {
    q: 'How is Agent Lee different from AutoGPT, CrewAI, or LangChain?',
    a: 'AutoGPT, CrewAI, and LangChain are tools — powerful, flexible, and ungoverned. They produce remarkable outputs in controlled conditions and unpredictable outputs in production. Agent Lee is an operating system: it wraps LLM reasoning inside a governance layer that enforces authorization tiers, zero-drop task handoffs, persistent memory, prompt injection defense, and real-time health monitoring. It is the difference between a powerful engine and a road-legal vehicle.',
  },
  {
    q: 'What is Lee Prime?',
    a: 'Lee Prime is the supreme coordinator — the cognitive hub of Agent Lee. It receives every user goal, decomposes it into a task graph, assigns agents, monitors execution, resolves conflicts, and delivers final output. Every other subsystem answers to Lee Prime. Nothing runs without Lee Prime\'s orchestration.',
  },
  {
    q: 'What is Memory Lake?',
    a: 'Memory Lake is Agent Lee\'s persistent memory substrate. It stores three types of memory: episodic (past session context), semantic (structured knowledge), and procedural (task execution patterns). When an agent is interrupted, Memory Lake holds its state. When a new session begins, Memory Lake restores context. Memory Lake is why Agent Lee\'s agents finish what they start.',
  },
  {
    q: 'What is Shield Aegis?',
    a: 'Shield Aegis is Agent Lee\'s safety and authorization layer — the guardian of the system. It manages a four-tier permission model (Read-Only, Internal Write, External Call, Privileged Action), detects and blocks prompt injection attacks in real time, provides Break-Glass emergency escalation for unclassified threats, and signs every approved action with an immutable audit record.',
  },
  {
    q: 'What is the LEEWAY™ Standard?',
    a: 'LEEWAY™ is the Code Governance Framework authored by LeeWay Innovations. It is a structured metadata standard applied to every file in a governed codebase — defining region, tag, authorship, purpose, and compliance status. LEEWAY™ makes codebases auditable, traceable, and alignment-ready. It is both the standard Agent Lee is built under and a separately licensable compliance product.',
  },
  {
    q: 'What is Brain Sentinel?',
    a: 'Brain Sentinel is Agent Lee\'s device health monitor. It runs continuous checks on CPU load, memory pressure, thermal state, and battery health before activating any agent and throughout execution. If resource thresholds are exceeded, Brain Sentinel signals Lee Prime, which gracefully checkpoints the active agent and defers execution until conditions recover.',
  },
  {
    q: 'What is the TaskBroker?',
    a: 'TaskBroker manages inter-agent task handoffs using the Baton Protocol — a formal handoff structure that ensures zero-drop task transfer between agents. Every baton carries the originating task ID, current state snapshot, required context from Memory Lake, and the next agent\'s instructions. No task is considered transferred until the receiving agent confirms receipt.',
  },
  {
    q: 'What does "Software as a Civilization" mean?',
    a: '"Software as a Civilization" is the founding philosophy of Agent Lee. A civilization is not just a collection of capable actors — it is a governed system of actors operating under shared laws, with accountability, memory, and continuity. Agent Lee treats its agents the same way: not as isolated tools, but as governed participants in a coherent, accountable, self-governing system.',
  },
  {
    q: 'How do I get access to Agent Lee?',
    a: 'Agent Lee will be available through four tiers: a 14-day Free Trial, Creator ($20/mo), Business ($99/mo), and Enterprise (custom). The raise is open. If you are interested in early access or investment, reach out through LeeWay Industry\'s official channels.',
  },
  {
    q: 'How do I invest?',
    a: 'LeeWay Innovations is raising $1.5M seed on a SAFE with an $8M valuation cap and no discount. The window is open. Reach out through LeeWay Industry to receive terms and diligence materials.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-900/60 transition-colors">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
      >
        <span className="text-white font-semibold text-base">{q}</span>
        <span className={`text-cyan-400 text-2xl font-light shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-8 pb-6">
          <p className="text-gray-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <SEOHead title="FAQ" description="Frequently asked questions about Agent Lee, LeeWay Industry, LeeWay Innovations, and the LEEWAY™ Standard." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Questions & Answers
          </div>
          <div className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">A LeeWay Industry Publication</div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Everything You<br />
            Need to Know
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            About Agent Lee, LeeWay Industry, LeeWay Innovations, the LEEWAY™ Standard, and the raise.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-3">
          {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 italic text-sm mb-8">
            "Many agents exist. Few execute. One system runs."<br />
            — Leonard J. Lee, Founder, LeeWay Industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investor-memo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
              Read the Investor Memo
            </Link>
            <Link to="/solution" className="border border-gray-700 text-gray-300 px-10 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
              See the Solution
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}