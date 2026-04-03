import { SEOHead } from '../components/SEOHead'
const tiers = [
  { tier: 'Tier 1', name: 'Read-Only', description: 'Access to Memory Lake, document reads, status queries. Auto-approved by policy. No human required.', color: 'text-green-400' },
  { tier: 'Tier 2', name: 'System Writes', description: 'File writes, database mutations, internal state changes. Policy-approved. Logged and auditable.', color: 'text-yellow-400' },
  { tier: 'Tier 3', name: 'External Calls', description: 'API calls, network requests, third-party integrations. Human-in-the-loop required for first execution.', color: 'text-orange-400' },
  { tier: 'Tier 4', name: 'Break-Glass', description: 'Irreversible actions, credential access, system-level changes. Dual sign-off mandatory. Full audit trail.', color: 'text-red-400' },
]
export default function Governance() {
  return (
    <>
      <SEOHead title="Governance" description="Agent Lee safety model — tiered approvals, Shield Aegis, break-glass protocols, and prompt injection defense." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">Governance</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Safety by Design</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Governance is not a feature added to Agent Lee. It is the operating principle from which everything else is derived.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Tiered Approval Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map(t => (
              <div key={t.tier} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className={`font-black text-2xl mb-1 ${t.color}`}>{t.tier}</div>
                <div className="text-white font-semibold mb-2">{t.name}</div>
                <p className="text-gray-400 text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="text-cyan-400 font-bold text-xl mb-4">Shield Aegis</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Every agent action passes through Shield Aegis before execution. Aegis validates the action against the active policy matrix, checks the agent's current permission scope, and enforces the appropriate tier.</p>
            <p className="text-gray-400 text-sm leading-relaxed">Prompt injection attacks are intercepted at the input boundary. All external content is sandboxed, sanitized, and evaluated before being passed to any model context.</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="text-cyan-400 font-bold text-xl mb-4">Break-Glass Protocol</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Break-glass actions require dual sign-off: one authorized operator and one system-level confirmation from Lee Prime. The action is fully logged before execution begins and cannot be reversed without a corresponding rollback entry.</p>
            <p className="text-gray-400 text-sm leading-relaxed">Break-glass events trigger automatic notifications to all registered governance stakeholders and are surfaced in the compliance dashboard with full context.</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-cyan-950 to-blue-950 border border-cyan-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-6">Compliance Mapping</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['SOC 2 Type II', 'GDPR', 'HIPAA-Ready', 'ISO 27001', 'CCPA', 'NIST AI RMF'].map(standard => (
              <div key={standard} className="bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 text-center text-cyan-300 font-semibold text-sm">{standard}</div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">Agent Lee's audit trail, permission model, and data partitioning are designed to map directly to these compliance frameworks. Enterprise customers receive pre-built compliance reports.</p>
        </div>
      </div>
    </>
  )
}
