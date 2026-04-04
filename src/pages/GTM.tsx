/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.GTM.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = GTM module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\GTM.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'

const matrix = [
  { dim: 'Who', answer: 'Creators, indie builders, agencies, SMB ops teams, and enterprise engineering departments who need work done — not just started.' },
  { dim: 'What', answer: 'A governed agentic OS that completes complex tasks end-to-end with full audit trails, zero dropped batons, and compliance-grade accountability.' },
  { dim: 'When', answer: 'Now. LLM capability is at production quality. Governance is the missing layer. Enterprise demand is real and stranded. The window is open.' },
  { dim: 'Where', answer: 'Edge device first. Mobile-native. Cloud-hybrid. API-accessible. LeeWay Innovations built Agent Lee to run everywhere work happens.' },
  { dim: 'Why', answer: 'Fragmented tools, dropped tasks, no auditable delivery, no safe autonomous execution. The problem is documented. The customers are waiting.' },
  { dim: 'How', answer: 'Creator content engine + community trust → SMB expansion → Enterprise direct sales. Each phase funds the next. The model compounds.' },
]

const marketData = [
  { name: 'Creators', value: 2.4 },
  { name: 'SMB', value: 8.1 },
  { name: 'Enterprise', value: 45.2 },
]

const phases = [
  { phase: 'Phase 1', title: 'Creator Beta', timeline: 'Q1-Q2', desc: 'Launch to indie builders and content creators. Establish product-market fit. Build case studies. Free + Creator tier.' },
  { phase: 'Phase 2', title: 'SMB Expansion', timeline: 'Q3-Q4', desc: 'Target small/medium businesses with ops automation needs. Business tier launch. Channel partner program.' },
  { phase: 'Phase 3', title: 'Enterprise', timeline: 'Year 2', desc: 'Direct enterprise sales with compliance-ready packaging. Custom SLA. Dedicated support and compliance mapping.' },
]

export default function GTM() {
  return (
    <>
      <SEOHead title="Go-to-Market" description="LeeWay Innovations go-to-market strategy for Agent Lee — from creator beta to enterprise deployment." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            LeeWay Industry · Market Conquest Plan
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">The Campaign</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            The Market Doesn't Know It Needs This Yet.<br />
            <span className="text-cyan-400">We're About to Show It.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            LeeWay Industry's go-to-market philosophy: trust compounds. Build among creators first.
            Let the work speak. Rise through credibility. Arrive in enterprise with proof already in hand.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">The Strategic Blueprint</p>
          <h2 className="text-3xl font-black text-white mb-3">5WH Strategy Matrix</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">LeeWay Innovations answers every investor question before it's asked.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-6 text-cyan-400 font-bold w-24">Dimension</th>
                  <th className="text-left py-3 px-6 text-gray-300 font-semibold">Strategic Answer</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map(row => (
                  <tr key={row.dim} className="border-b border-gray-800 hover:bg-gray-900">
                    <td className="py-4 px-6 text-cyan-400 font-black text-xl">{row.dim}</td>
                    <td className="py-4 px-6 text-gray-300">{row.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">The Prize</p>
          <h2 className="text-3xl font-black text-white mb-3">Market Opportunity ($B Addressable)</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">$55.7B total addressable market across three segments. LeeWay Innovations enters at the creator level and compounds upward.</p>
          <div className="bg-gray-900 rounded-xl p-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" tickFormatter={(v: number) => `$${v}B`} />
                <Tooltip formatter={(v: number) => [`$${v}B`, 'Addressable Market']} contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="#06B6D4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">The Three Acts</p>
          <h2 className="text-3xl font-black text-white mb-3">Rollout Phases</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">Three acts. Each one builds on the last. Each one funds the next. This is not a pivot plan — it's a compounding campaign.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <div key={p.phase} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-800/50 transition-colors">
                <div className="text-cyan-400 font-black text-5xl opacity-20 mb-4">{i + 1}</div>
                <div className="text-xs text-gray-500 mb-1 font-semibold tracking-widest uppercase">{p.phase} · {p.timeline}</div>
                <h3 className="text-white font-black text-xl mb-4">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 italic text-sm mb-8">
            "We don't need to find the market. The market is already searching for us."<br />
            — LeeWay Industry, Strategy Division
          </p>
          <Link to="/pricing" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
            View Pricing →
          </Link>
        </div>
      </div>
    </>
  )
}
