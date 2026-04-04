/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.INVESTORONEPAGER.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = InvestorOnePager module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\InvestorOnePager.tsx
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

const sections = [
  { title: 'The Opportunity', body: 'The agentic AI market is projected to exceed $55B by 2028. LLM capability has arrived. Governance infrastructure has not. Every enterprise deploying AI agents faces the same wall: no audit trail, no permission model, no reliable task completion, no safety layer. Agent Lee by LeeWay Innovations is the governed operating system that makes agentic AI deployable in production.' },
  { title: 'The Problem', body: 'Current agentic frameworks produce impressive demos and unreliable production systems. Tasks drop silently. Agents hallucinate without detection. There is no formal handoff mechanism, no persistent memory, no safety layer that satisfies compliance. 68% of agentic workflows fail without human intervention. $1.8T in annual productivity is destroyed by dropped-task recovery.' },
  { title: 'The Solution', body: 'Agent Lee is a governed multi-agent operating system engineered by LeeWay Innovations. Six integrated subsystems — Lee Prime (supreme coordinator), Scheduler (lifecycle), TaskBroker (zero-drop baton handoffs), Memory Lake (continuity), Shield Aegis (safety & injection defense), and Brain Sentinel (device health) — work in governed concert to guarantee task completion, auditability, and safe execution.' },
  { title: 'The Company', body: 'LeeWay Industry is the mother company — a holding organization founded by Leonard J. Lee around the thesis that the autonomous AI era requires governed infrastructure. LeeWay Innovations is the engineering and creative division of LeeWay Industry, tasked with building that infrastructure. Agent Lee is LeeWay Innovations\' flagship product and proof of concept.' },
  { title: 'Business Model', body: 'Freemium SaaS with four tiers: Free Trial (14-day, conversion funnel), Creator ($20/mo, volume and case studies), Business ($99/mo, primary revenue — team governance and compliance dashboard), Enterprise (custom, compliance-ready). Secondary revenue from API access, compliance reports, and LEEWAY™ Standards licensing.' },
  { title: 'Market & Traction', body: 'Target segments: 50M+ creators and indie builders (TAM $2.4B), 10M+ SMB ops teams (TAM $8.1B), 500K+ enterprise engineering departments (TAM $45.2B). Pre-launch phase. Architecture validated. Founding team assembled. Design partner conversations in progress.' },
  { title: 'The Founder', body: 'Leonard J. Lee — Founder, CEO, and Chief Architect. Creator of the LEEWAY™ Code Governance Framework and the six-subsystem Agent Lee architecture. Leonard founded LeeWay Industry to build the companies that build the infrastructure the AI era requires. Agent Lee is the first product of that mission.' },
  { title: 'Why Now', body: 'GPT-4-class models have reached sufficient production quality. Enterprise demand for agentic systems is real, documented, and stranded — blocked by the absence of a governance layer. That layer is exactly what Agent Lee provides. The window to define the standard for governed agentic AI is open now and will not remain open indefinitely.' },
  { title: 'Investment Terms', body: 'Raising $1.5M seed on a SAFE with $8M valuation cap. No discount. Use of funds: engineering team (40%), infrastructure and security (25%), go-to-market and content (20%), legal and compliance (10%), operations (5%). Milestone: public launch, 1,000 paying users, first enterprise design partner.' },
  { title: 'Contact', body: 'Leonard J. Lee · Founder, LeeWay Industry · LeeWay Innovations · For terms and materials, reach out through the official LeeWay Industry channels.' },
]

export default function InvestorOnePager() {
  return (
    <>
      <SEOHead title="Investor One-Pager" description="Agent Lee investor one-pager — LeeWay Industry, LeeWay Innovations, market, solution, and the raise." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Confidential · Investor One-Pager
          </div>
          <div className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">LeeWay Industry presents</div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-2 leading-none">Agent Lee</h1>
          <p className="text-cyan-400 text-2xl font-black mb-2">The Governed Agentic Operating System</p>
          <p className="text-gray-500 text-sm mb-6">Built by LeeWay Innovations · Held by LeeWay Industry · Founded by Leonard J. Lee</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="bg-gray-900 border border-cyan-900/50 rounded-xl px-6 py-3">
              <span className="text-cyan-400 font-black text-xl">$1.5M</span>
              <span className="text-gray-500 ml-2">Seed Raise</span>
            </div>
            <div className="bg-gray-900 border border-cyan-900/50 rounded-xl px-6 py-3">
              <span className="text-cyan-400 font-black text-xl">$8M</span>
              <span className="text-gray-500 ml-2">Valuation Cap</span>
            </div>
            <div className="bg-gray-900 border border-cyan-900/50 rounded-xl px-6 py-3">
              <span className="text-cyan-400 font-black text-xl">$55B+</span>
              <span className="text-gray-500 ml-2">Market TAM</span>
            </div>
            <div className="bg-gray-900 border border-cyan-900/50 rounded-xl px-6 py-3">
              <span className="text-cyan-400 font-black text-xl">SAFE</span>
              <span className="text-gray-500 ml-2">Instrument</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={s.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-900/50 transition-colors">
              <div className="flex items-start gap-6">
                <div className="text-cyan-900 font-black text-4xl opacity-50 shrink-0 w-12">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h2 className="text-cyan-400 font-black text-lg mb-3">{s.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic text-sm mb-8">
            "The civilization of autonomous work begins with governance. Agent Lee is that governance."<br />
            — Leonard J. Lee, Founder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investor-memo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
              Read Full Investor Memo
            </Link>
            <Link to="/architecture" className="border border-gray-700 text-gray-300 px-10 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
              Explore Architecture
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}