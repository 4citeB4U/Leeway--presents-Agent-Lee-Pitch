import { SEOHead } from '../components/SEOHead'
const laws = [
  { num: 'I', title: 'No Autonomous Action Without Authorization', body: 'Every agent action must be pre-authorized by a valid policy entry. Actions not covered by policy are denied by default. Silence is not consent.' },
  { num: 'II', title: 'Every Execution Must Be Auditable', body: 'All agent activity is logged with timestamp, agent identity, action type, inputs, outputs, and approval chain. Logs are immutable and cryptographically signed.' },
  { num: 'III', title: 'State Must Be Preserved on Interruption', body: 'If an agent is interrupted for any reason — device stress, timeout, user override — its state is serialized to Memory Lake before termination. No work is lost silently.' },
  { num: 'IV', title: 'Agents May Not Escalate Their Own Permissions', body: 'Permission escalation requires an explicit request to Lee Prime, which validates the request against the governance policy and routes to the appropriate approval tier.' },
  { num: 'V', title: 'The System Must Be Able to Stop Itself', body: 'Lee Prime holds a kill-switch authority over all active agents. Any agent that violates policy, consumes excessive resources, or fails to respond within its SLA window can be terminated immediately.' },
]
export default function Standards() {
  return (
    <>
      <SEOHead title="LeeWay Standards" description="LeeWay Standards: the autonomous code governance framework defining how Agent Lee agents must behave." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">LeeWay Standards</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Autonomous Code Governance Framework</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">LeeWay Standards define the behavioral contract for every agent in the system. They are not guidelines — they are enforced invariants.</p>
        </div>
        <div className="space-y-6 mb-16">
          {laws.map(l => (
            <div key={l.num} className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex gap-6">
              <div className="shrink-0 text-cyan-400 font-black text-4xl opacity-30 w-12 text-center">{l.num}</div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">{l.title}</h3>
                <p className="text-gray-400 leading-relaxed">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-6">Governance Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Agent Behavior Contract', desc: 'Per-agent declaration of permitted actions, resource limits, and escalation paths.' },
              { name: 'Policy Matrix', desc: 'Action-to-tier mapping that drives Shield Aegis approvals. Versioned and auditable.' },
              { name: 'Ops Log Schema', desc: 'Standard schema for all agent activity logs, compatible with SIEM ingestion.' },
              { name: 'Checkpoint Protocol', desc: 'Specification for state serialization on interruption, ensuring zero work loss.' },
              { name: 'Baton Specification', desc: 'Formal definition of the task handoff structure used by TaskBroker.' },
              { name: 'Compliance Report Template', desc: 'Pre-built report structure for SOC 2, GDPR, and ISO 27001 audit cycles.' },
            ].map(a => (
              <div key={a.name} className="border border-gray-700 rounded-lg p-4">
                <div className="text-cyan-400 font-semibold text-sm mb-2">{a.name}</div>
                <p className="text-gray-500 text-xs">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
