import { SEOHead } from '../components/SEOHead'
const tiers = [
  { name: 'Free Trial', price: '$0', period: '14 days', highlight: false, features: ['Limited workflows (5/month)', 'Core agent suite', 'Watermarked reports', 'Community support', 'No credit card required'] },
  { name: 'Creator', price: '$20', period: '/month', highlight: false, features: ['Unlimited workflows', 'Full agent suite', 'Unlimited reports', 'Priority email support', 'Memory Lake persistence', 'Audit trail access'] },
  { name: 'Business', price: '$99', period: '/month', highlight: true, features: ['Everything in Creator', 'Team collaboration (10 seats)', 'Governance dashboard', 'Custom policy matrix', 'Priority support + SLA', 'Compliance report templates', 'API access'] },
  { name: 'Enterprise', price: 'Custom', period: '', highlight: false, features: ['Everything in Business', 'Unlimited seats', 'Dedicated support engineer', 'Custom SLA', 'Compliance mapping (SOC2/GDPR)', 'On-premise deployment option', 'Custom integrations'] },
]
export default function Pricing() {
  return (
    <>
      <SEOHead title="Pricing" description="Agent Lee pricing — Free Trial, Creator $20/mo, Business $99/mo, Enterprise custom." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">Pricing</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Simple, Scalable Pricing</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Start free. Scale with confidence. Enterprise-grade governance at every tier.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-2xl p-8 flex flex-col ${t.highlight ? 'bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500' : 'bg-gray-900 border border-gray-800'}`}>
              {t.highlight && <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase mb-4">Most Popular</div>}
              <div className="text-white font-bold text-xl mb-2">{t.name}</div>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{t.price}</span>
                <span className="text-gray-400 text-sm">{t.period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-cyan-400 mt-0.5 shrink-0">+</span>{f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-lg font-semibold text-sm transition-opacity ${t.highlight ? 'bg-white text-gray-950' : 'border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'}`}>
                {t.name === 'Enterprise' ? 'Contact Sales' : t.name === 'Free Trial' ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
