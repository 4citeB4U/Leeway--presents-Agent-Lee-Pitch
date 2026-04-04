/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.INVESTORMEMO.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = InvestorMemo module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\InvestorMemo.tsx
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
  {
    chapter: 'Chapter I',
    title: 'Executive Summary',
    body: 'LeeWay Innovations, the engineering and creative division of LeeWay Industry, has built Agent Lee — the world\'s first governed multi-agent operating system. Agent Lee coordinates specialized AI agents under a single governance layer, guaranteeing task completion, enforcing permission boundaries, and preserving full operational continuity across sessions. We are raising a $1.5M seed round to fund engineering, go-to-market, and enterprise design partnerships. This is not another AI tool. This is the infrastructure the AI era is missing.',
  },
  {
    chapter: 'Chapter II',
    title: 'The Company Structure',
    body: 'LeeWay Industry is the mother company — a holding organization founded by Leonard J. Lee with one founding thesis: that the AI era requires governance infrastructure before autonomous systems can be trusted at scale. LeeWay Innovations is LeeWay Industry\'s creative and engineering division — the builders who translated that thesis into Agent Lee, the LEEWAYâ„¢ Code Governance Framework, and the six-subsystem architecture that defines the product today. The structure is deliberate: LeeWay Industry holds the vision; LeeWay Innovations builds the proof.',
  },
  {
    chapter: 'Chapter III',
    title: 'Market Analysis',
    body: 'The agentic AI market sits at the intersection of three high-growth categories: AI infrastructure ($18B), workflow automation ($14B), and compliance tooling ($23B). Total addressable market exceeds $55B by 2028. No current player provides a governed, production-ready agentic operating system. AutoGPT, LangChain, and CrewAI are developer toolkits without persistent state, governance, or safe handoffs. Microsoft and Google offer assistant-layer products, not coordination infrastructure. The market is being created in real time as enterprises discover they cannot deploy raw agentic systems in production.',
  },
  {
    chapter: 'Chapter IV',
    title: 'The Product',
    body: 'Agent Lee comprises six precisely engineered subsystems built by LeeWay Innovations: Lee Prime — the supreme orchestration authority; Scheduler — the wake/sleep lifecycle manager that makes device-safe execution possible; TaskBroker — the baton handoff protocol that eliminates dropped tasks; Memory Lake — the persistent state and continuity engine; Shield Aegis — the permission enforcer and injection defense layer; and Brain Sentinel — the real-time device health monitor. Each subsystem has exactly one mandate. None overlap. Together, they form the first complete agentic operating system the market has ever seen.',
  },
  {
    chapter: 'Chapter V',
    title: 'Business Model',
    body: 'SaaS subscription at four tiers: Free Trial (14-day, conversion funnel), Creator ($20/mo, volume and case studies), Business ($99/mo, primary revenue driver — team governance and compliance dashboard), Enterprise (custom, high-margin, high-retention). Secondary revenue: API access, compliance report exports, integration services, and the LEEWAYâ„¢ Standards licensing program. Target Year 1: 10,000 Creator accounts, 1,000 Business accounts, 50 Enterprise accounts.',
  },
  {
    chapter: 'Chapter VI',
    title: 'Go-to-Market Strategy',
    body: 'LeeWay Innovations enters at the creator layer — the 50M+ indie builders, content creators, and solopreneurs who need serious AI workflows without enterprise complexity. Trust is built through demonstrated product quality, not sales calls. Creator case studies become the evidence that opens SMB conversations. SMB traction becomes the proof that opens enterprise doors. This is a compounding GTM, not a spray-and-pray campaign. Each phase funds the next.',
  },
  {
    chapter: 'Chapter VII',
    title: 'Competitive Position',
    body: 'AutoGPT, LangChain, and CrewAI are developer tools, not operating systems. They lack persistent state, formal handoff protocols, tiered governance, and device-safe execution. Microsoft Copilot and Google Workspace AI are assistant-layer additions — they do not coordinate multi-agent workflows or provide compliance-grade audit trails. Agent Lee occupies an uncontested position: the governed agentic OS layer. LeeWay Industry designed Agent Lee to be the infrastructure that all other tools eventually run on top of.',
  },
  {
    chapter: 'Chapter VIII',
    title: 'Risk Factors & Mitigations',
    body: 'Technical risk: multi-agent coordination at scale requires rigorous engineering. Mitigated by phased rollout and a design partner program that shapes the product in production conditions. Market risk: enterprise sales cycles are long. Mitigated by creator-first GTM that builds documented credibility before we knock on enterprise doors. Competitive risk: large incumbents may build similar capability. Mitigated by governance depth, the LEEWAYâ„¢ Standards framework published by LeeWay Innovations, and first-mover community who will inform and defend the standard.',
  },
  {
    chapter: 'Chapter IX',
    title: 'The Raise',
    body: 'Raising $1.5M seed on a SAFE with $8M cap. Use of funds: engineering team (40%), infrastructure and security (25%), go-to-market and content (20%), legal and compliance (10%), operations (5%). Target milestones at 12 months: public launch, 1,000 paying users, 2 enterprise design partners signed, SOC 2 Type II audit initiated. This raise closes Agent Lee Phase 1. Phase 2 will require a Series A — positioned at $20M+ on the back of Phase 1 revenue and enterprise evidence.',
  },
]

export default function InvestorMemo() {
  return (
    <>
      <SEOHead title="Investor Memo" description="Agent Lee detailed investor memo — LeeWay Industry, LeeWay Innovations, market analysis, product, and the raise." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            Confidential Â· LeeWay Industry
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">The Investment Case</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Investor Memo<br />
            <span className="text-cyan-400">Agent Lee</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            A governed agentic operating system. Built by LeeWay Innovations. Held by LeeWay Industry.
            Founded by Leonard J. Lee. Raising now.
          </p>
          <p className="text-gray-600 text-sm italic">
            "We didn't build another AI wrapper. We built the civilization that governs AI."
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Raise', value: '$1.5M' },
            { label: 'Valuation Cap', value: '$8M' },
            { label: 'Market TAM', value: '$55B+' },
            { label: 'Instrument', value: 'SAFE' },
          ].map(item => (
            <div key={item.label} className="bg-gray-900 border border-cyan-900/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-black text-cyan-400 mb-1">{item.value}</div>
              <div className="text-gray-500 text-xs font-semibold tracking-widest uppercase">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Memo Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-900/50 transition-colors">
              <div className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-2">{s.chapter}</div>
              <h2 className="text-cyan-400 font-black text-2xl mb-4">{s.title}</h2>
              <p className="text-gray-300 leading-relaxed text-base">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-16 bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-800/50 rounded-2xl p-12 text-center">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4">The Call to Action</p>
          <h2 className="text-3xl font-black text-white mb-4 leading-tight">
            The raise is open.<br />
            <span className="text-cyan-400">The window will not be.</span>
          </h2>
          <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
            LeeWay Industry is building the governance infrastructure for the autonomous AI era.
            LeeWay Innovations has already built the product. This raise funds the market.
          </p>
          <p className="text-gray-600 text-sm italic mb-8">Contact: Leonard J. Lee Â· LeeWay Industry</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investor-one-pager" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
              View One-Pager
            </Link>
            <Link to="/pricing" className="border border-gray-700 text-gray-300 px-10 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}