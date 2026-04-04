/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.PRICING.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Pricing module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Pricing.tsx
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
  {
    name: 'Free Trial',
    price: '$0',
    period: '14 days',
    highlight: false,
    badge: null,
    story: 'The door is open. Come see the civilization.',
    features: ['5 governed workflows/month', 'Core agent suite (3 agents)', 'Watermarked audit reports', 'Community support', 'No credit card required'],
  },
  {
    name: 'Creator',
    price: '$20',
    period: '/month',
    highlight: false,
    badge: 'Individual',
    story: 'For the builder who refuses to let work drop.',
    features: ['Unlimited governed workflows', 'Full 6-agent suite', 'Unlimited audit reports', 'Memory Lake persistence', 'Priority email support', 'Full audit trail access'],
  },
  {
    name: 'Business',
    price: '$99',
    period: '/month',
    highlight: true,
    badge: 'Most Popular',
    story: 'For teams that need to prove their work is trustworthy.',
    features: ['Everything in Creator', 'Team collaboration (10 seats)', 'Governance dashboard', 'Custom policy matrix', 'Priority support + SLA', 'Compliance report templates', 'Full API access'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    badge: 'Mission-Critical',
    story: 'For organizations where governance is not optional.',
    features: ['Everything in Business', 'Unlimited seats', 'Dedicated support engineer', 'Custom SLA', 'SOC 2 / GDPR compliance mapping', 'On-premise deployment option', 'Custom integrations + white-label'],
  },
]

export default function Pricing() {
  return (
    <>
      <SEOHead title="Pricing" description="Agent Lee pricing by LeeWay Innovations — Free Trial, Creator $20/mo, Business $99/mo, Enterprise custom." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            LeeWay Innovations · Access Tiers
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">The Investment in Governance</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Simple Pricing.<br />
            <span className="text-cyan-400">Serious Governance.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            LeeWay Innovations built Agent Lee to be accessible to creators and trustworthy enough for enterprises.
            The price scales with your ambition. The governance doesn't.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-2xl p-8 flex flex-col ${t.highlight ? 'bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500 shadow-xl shadow-cyan-900/30' : 'bg-gray-900 border border-gray-800'}`}>
              {t.badge && (
                <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${t.highlight ? 'text-cyan-300' : 'text-gray-500'}`}>
                  {t.badge}
                </div>
              )}
              <div className="text-white font-black text-2xl mb-1">{t.name}</div>
              <p className={`text-sm italic mb-4 ${t.highlight ? 'text-cyan-300' : 'text-gray-500'}`}>{t.story}</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">{t.price}</span>
                <span className={`text-sm ml-1 ${t.highlight ? 'text-cyan-300' : 'text-gray-400'}`}>{t.period}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${t.highlight ? 'text-cyan-100' : 'text-gray-300'}`}>
                    <span className="text-cyan-400 mt-0.5 shrink-0 font-bold">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${t.highlight ? 'bg-white text-gray-950 hover:bg-cyan-50' : 'border border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'}`}>
                {t.name === 'Enterprise' ? 'Contact Sales' : t.name === 'Free Trial' ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Value Statement */}
        <div className="bg-gray-900 border border-cyan-900/50 rounded-2xl p-12 mb-16 text-center">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4">The LeeWay Innovations Promise</p>
          <blockquote className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
            "You don't pay for the agent.<br />
            <span className="text-cyan-400">You pay for the guarantee that it finishes."</span>
          </blockquote>
          <p className="text-gray-500 text-sm">— LeeWay Industry Pricing Philosophy</p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 text-center">Pricing Questions, Answered</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I switch tiers?', a: 'Yes. Upgrade or downgrade at any time. Your Memory Lake data is preserved across tier transitions — nothing is lost.' },
              { q: 'What counts as a "workflow"?', a: 'A governed workflow is any task dispatched through Lee Prime that involves one or more agent handoffs. Single agent actions do not count.' },
              { q: 'Is enterprise self-hosted?', a: 'Enterprise customers can choose between cloud-hosted (LeeWay Innovations infrastructure), self-hosted, or hybrid. All options include the full governance stack.' },
              { q: 'Who built this?', a: 'Agent Lee is built by LeeWay Innovations, the engineering and creative division of LeeWay Industry — founded by Leonard J. Lee.' },
            ].map(item => (
              <div key={item.q} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/investor-memo" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
            Read the Investor Memo →
          </Link>
        </div>
      </div>
    </>
  )
}