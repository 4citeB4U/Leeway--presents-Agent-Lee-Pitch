/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.GOVERNANCE.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Governance module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Governance.tsx
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

const tiers = [
  { tier: 'Tier 1', name: 'Read-Only', description: 'Memory Lake reads, document access, status queries. Auto-approved by policy. No human required. The civilization allows observation freely.', color: 'text-green-400', border: 'border-green-900/50' },
  { tier: 'Tier 2', name: 'System Writes', description: 'File writes, database mutations, internal state changes. Policy-approved and logged. The civilization writes carefully and remembers everything.', color: 'text-yellow-400', border: 'border-yellow-900/50' },
  { tier: 'Tier 3', name: 'External Calls', description: 'API calls, network requests, third-party integrations. Human-in-the-loop required for first execution. The civilization does not venture beyond its walls without authorization.', color: 'text-orange-400', border: 'border-orange-900/50' },
  { tier: 'Tier 4', name: 'Break-Glass', description: 'Irreversible actions, credential access, system-level changes. Dual sign-off mandatory. Full audit trail. The civilization treats irreversibility as sacred.', color: 'text-red-400', border: 'border-red-900/50' },
]

export default function Governance() {
  return (
    <>
      <SEOHead title="Governance" description="Agent Lee safety model by LeeWay Innovations — tiered approvals, Shield Aegis, break-glass protocols, and prompt injection defense." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            LeeWay Innovations · Safety Architecture
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">The Law</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Governance Is Not a Feature.<br />
            <span className="text-cyan-400">It Is the Civilization.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            LeeWay Industry was built on a single founding belief: that autonomous systems without governance are not products —
            they are liabilities waiting to become headlines. LeeWay Innovations built that belief into every layer of Agent Lee.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Philosophy block */}
        <div className="bg-gray-900 border border-cyan-900/50 rounded-2xl p-12 mb-16 text-center">
          <blockquote className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
            "Every civilization has laws.<br />
            <span className="text-cyan-400">Agent Lee's laws are written in code."</span>
          </blockquote>
          <p className="text-gray-500 text-sm">— Leonard J. Lee, Founder, LeeWay Industry</p>
        </div>

        {/* Tiered Approvals */}
        <div className="mb-16">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">The Four Tiers</p>
          <h2 className="text-3xl font-black text-white mb-3">Tiered Approval Model</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Every agent action in Agent Lee falls into one of four authorization tiers.
            The tier determines the level of scrutiny, logging, and human involvement required before execution.
            No shortcuts. No exceptions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map(t => (
              <div key={t.tier} className={`bg-gray-900 border ${t.border} rounded-2xl p-8`}>
                <div className={`font-black text-4xl mb-2 ${t.color}`}>{t.tier}</div>
                <div className="text-white font-black text-xl mb-4">{t.name}</div>
                <p className="text-gray-400 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shield Aegis & Break-Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">
            <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-3">The Enforcer</p>
            <h3 className="text-cyan-400 font-black text-2xl mb-4">Shield Aegis</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Every agent action passes through Shield Aegis before execution. Aegis validates the action against the active policy matrix,
              checks the agent's current permission scope, and enforces the appropriate tier with sub-millisecond evaluation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Prompt injection attacks — attempts to hijack agent behavior through malicious input — are intercepted at the
              input boundary. All external content is sandboxed, sanitized, and evaluated before touching any model context.
              LeeWay Innovations built Shield Aegis to treat every external input as hostile until proven safe.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">
            <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-3">The Sacred Protocol</p>
            <h3 className="text-red-400 font-black text-2xl mb-4">Break-Glass Protocol</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Break-glass actions require dual sign-off: one authorized operator and one system-level confirmation from Lee Prime.
              The action is fully logged before execution begins and cannot be reversed without a corresponding rollback entry
              in Memory Lake's immutable audit chain.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Break-glass events trigger automatic notifications to all registered governance stakeholders and surface
              in the compliance dashboard with full context. The civilization never acts irreversibly in the dark.
            </p>
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-800/50 rounded-2xl p-12 mb-16">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-3">Enterprise Ready</p>
          <h2 className="text-2xl font-black text-white mb-4">Compliance Framework Alignment</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            LeeWay Innovations designed Agent Lee's audit trail, permission model, and data partitioning to map directly
            to the frameworks that enterprise compliance teams require. No bolt-on compliance. Built-in from day one.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['SOC 2 Type II', 'GDPR', 'HIPAA-Ready', 'ISO 27001', 'CCPA', 'NIST AI RMF'].map(standard => (
              <div key={standard} className="bg-gray-900/70 border border-cyan-900/50 rounded-xl px-5 py-4 text-center text-cyan-300 font-bold text-sm">
                {standard}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 italic text-sm mb-8">
            "The question isn't whether your AI agents are capable. It's whether they're governable."<br />
            — LeeWay Industry, Governance Division
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/standards" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
              View LEEWAY™ Standards →
            </Link>
            <Link to="/investor-memo" className="border border-gray-700 text-gray-300 px-10 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
              Read the Investor Memo
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}