import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { SEOHead } from '../components/SEOHead'

const matrix = [
  { dim: 'Who', answer: 'Creators, indie builders, agencies, SMB ops teams, enterprise engineering departments' },
  { dim: 'What', answer: 'Governed agentic OS that completes complex tasks end-to-end with full audit trails' },
  { dim: 'When', answer: 'Now — LLM capability is high, governance is the missing layer, enterprise demand is real' },
  { dim: 'Where', answer: 'Edge device first; mobile-native, cloud-hybrid; API-accessible for integrations' },
  { dim: 'Why', answer: 'Fragmented tools, dropped tasks, no auditable delivery, no safe autonomous execution' },
  { dim: 'How', answer: 'Content engine + creator communities + direct outreach + enterprise partnerships + API ecosystem' },
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
      <SEOHead title="Go-to-Market" description="Agent Lee go-to-market strategy — 5WH matrix, market opportunity, and phase roadmap." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">Go-to-Market</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Market Strategy</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">From creator beta to enterprise deployment — a phased GTM built on product credibility and community distribution.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">5WH Strategy Matrix</h2>
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
          <h2 className="text-2xl font-bold text-white mb-8">Market Opportunity ($B Addressable)</h2>
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

        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Rollout Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <div key={p.phase} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <div className="text-cyan-400 font-black text-4xl opacity-20 mb-2">{i + 1}</div>
                <div className="text-xs text-gray-500 mb-1">{p.phase} · {p.timeline}</div>
                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
