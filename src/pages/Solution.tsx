import { SEOHead } from '../components/SEOHead'

const subsystems = [
  {
    name: 'Lee Prime',
    subtitle: 'Central Coordinator',
    description:
      'The orchestration authority of the system. Lee Prime receives goals, breaks them into executable plans, dispatches agents via TaskBroker, monitors progress through Memory Lake, and delivers verified results. It does not execute tasks directly — it governs their execution.',
    detail: 'Lee Prime maintains a live task graph — a directed acyclic representation of all active work items, their dependencies, assigned agents, and completion states. No agent acts without a Lee Prime dispatch.',
  },
  {
    name: 'Scheduler',
    subtitle: 'Wake / Sleep Lifecycle',
    description:
      'The Scheduler manages the full execution lifecycle of every agent — when it wakes, how long it runs, when it sleeps, and under what conditions it resumes. It is the process manager of the agentic OS, ensuring no agent runs outside its authorized window.',
    detail: 'The Scheduler integrates directly with Brain Sentinel. If device health degrades below thresholds, the Scheduler suspends non-critical agents, serializes their state to Memory Lake, and queues them for resumption when conditions recover.',
  },
  {
    name: 'TaskBroker — Baton System',
    subtitle: 'Explicit Routing + Handoffs',
    description:
      'TaskBroker implements the Baton System: a formal protocol for task handoff between agents. When an agent completes its segment of work, it does not simply return output — it passes a structured Baton containing context, partial results, state references, and the next agent\'s instructions.',
    detail: 'Every Baton is logged to Memory Lake at issuance and receipt. If an agent fails to acknowledge a Baton within the SLA window, TaskBroker escalates to Lee Prime and initiates a recovery procedure. No task goes unacknowledged.',
  },
  {
    name: 'Memory Lake',
    subtitle: 'Continuity, Policy, Truth',
    description:
      'Memory Lake is the persistent data layer of the system. It stores task state, agent checkpoints, policy documents, compliance records, and truth anchors — factual baselines that agents must not contradict without explicit override.',
    detail: 'Memory Lake is partitioned by access level: public (all agents), restricted (authorized agents only), and sovereign (Lee Prime only). Every write is timestamped, signed, and immutable. Every read is logged.',
  },
  {
    name: 'Shield Aegis',
    subtitle: 'Permissions, Safety, Injection Defense',
    description:
      'Shield Aegis is the security and safety subsystem. It enforces the permission model, validates every agent action against the policy matrix, and defends against prompt injection at the input boundary. No agent action is taken without passing through Aegis.',
    detail: 'Aegis implements a four-tier approval model: Tier 1 (read-only, auto-approved), Tier 2 (system writes, policy-approved), Tier 3 (external calls, human-in-the-loop), and Tier 4 (break-glass, dual-sign-off required). The tier is determined by the action classification engine.',
  },
  {
    name: 'Brain Sentinel',
    subtitle: 'Health Monitoring + Safe-Mode',
    description:
      'Brain Sentinel monitors the host device in real time: CPU load, available memory, battery level, thermal state, and network quality. It provides a continuous health score to Lee Prime and the Scheduler, enabling proactive degradation before problems occur.',
    detail: 'When health drops below configured thresholds, Sentinel triggers Safe Mode: non-critical agents are suspended, memory-intensive operations are deferred, and the system shifts to minimal-footprint mode. Recovery is automatic and state-preserving.',
  },
]

const comparison = [
  { feature: 'Persistent task state across sessions', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
  { feature: 'Formal agent handoff protocol (Baton)', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
  { feature: 'Tiered permission + approval model', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
  { feature: 'Prompt injection defense layer', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
  { feature: 'Device health monitoring (mobile-safe)', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
  { feature: 'Auditable ops log for every action', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
  { feature: 'Multi-agent coordination under one OS', agentLee: true, autoGPT: 'partial', langChain: 'partial', crewAI: 'partial' },
  { feature: 'Break-glass dual sign-off mechanism', agentLee: true, autoGPT: false, langChain: false, crewAI: false },
]

export default function Solution() {
  return (
    <>
      <SEOHead
        title="The Solution"
        description="Agent Lee: a governed multi-agent operating system. Governed autonomy, not uncontrolled automation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            The Solution
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
            Governed Autonomy, Not{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Uncontrolled Automation
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Agent Lee is a governed multi-agent operating system. It does not replace individual AI models
            — it provides the coordination layer, memory layer, safety layer, and lifecycle management
            that makes those models deployable at scale.
          </p>
        </div>

        {/* Subsystems */}
        <div className="space-y-6 mb-20">
          {subsystems.map((s, i) => (
            <div key={s.name} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="shrink-0 text-cyan-400 font-black text-4xl opacity-20">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-xl">{s.name}</h3>
                    <span className="text-xs border border-cyan-800 text-cyan-400 rounded-full px-3 py-0.5">
                      {s.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{s.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-cyan-800 pl-4">
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Law */}
        <div className="bg-gradient-to-br from-cyan-950 to-blue-950 border border-cyan-800 rounded-2xl p-10 text-center mb-20">
          <div className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">Core Law</div>
          <blockquote className="text-3xl sm:text-4xl font-black text-white">
            "Many agents exist. Few execute. One system runs."
          </blockquote>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            In a well-governed agentic system, most agents are dormant most of the time. Execution is a
            privilege, not a default. The system — not the agent — decides when, how, and for how long any
            agent operates.
          </p>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Agent Lee vs. The Alternatives</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 text-sm font-semibold">Capability</th>
                  <th className="py-3 px-4 text-cyan-400 text-sm font-bold">Agent Lee</th>
                  <th className="py-3 px-4 text-gray-400 text-sm font-semibold">AutoGPT</th>
                  <th className="py-3 px-4 text-gray-400 text-sm font-semibold">LangChain</th>
                  <th className="py-3 px-4 text-gray-400 text-sm font-semibold">CrewAI</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-800 hover:bg-gray-900">
                    <td className="py-3 px-4 text-gray-300 text-sm">{row.feature}</td>
                    {[row.agentLee, row.autoGPT, row.langChain, row.crewAI].map((val, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {val === true ? (
                          <span className="text-cyan-400 font-bold">Yes</span>
                        ) : val === 'partial' ? (
                          <span className="text-yellow-500 text-xs">Partial</span>
                        ) : (
                          <span className="text-gray-600 text-xs">No</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
