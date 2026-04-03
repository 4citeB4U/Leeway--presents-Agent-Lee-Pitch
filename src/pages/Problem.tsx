import { SEOHead } from '../components/SEOHead'

const problems = [
  {
    title: 'Fragmented Digital Work',
    body: 'Modern knowledge work is spread across dozens of tools: project management, communication, code repositories, document editors, data stores. No single system has the authority or awareness to coordinate across all of them. The result is constant context-switching, duplicated effort, and work that falls through the cracks between tools.',
  },
  {
    title: 'LLM Limitations at Scale',
    body: 'Large language models are powerful in isolation but brittle in production. They have finite context windows, no persistent memory across sessions, no mechanism for multi-step task handoff, and no built-in safety enforcement. When a task exceeds a single model invocation, it fails silently or requires constant human re-prompting.',
  },
  {
    title: 'The Dropped-Task Problem',
    body: "Current agentic frameworks — AutoGPT, LangChain, CrewAI — route tasks through chains of model calls with no durable state and no governance. When an agent fails, hallucinates, or hits a resource limit, the task is simply abandoned. There is no checkpoint, no handoff, no audit trail. Operators have no way to know what ran, what stopped, or why.",
  },
  {
    title: 'No Governance Layer',
    body: 'Every major autonomous AI failure shares a common root cause: unconstrained execution. Without a permission model, approval gates, and injection defense, every deployed agent is a liability. Enterprises cannot adopt agentic systems they cannot audit. Individual operators cannot trust systems that cannot self-limit.',
  },
  {
    title: 'Device-Unsafe Execution',
    body: "Existing agentic systems treat the host device as an infinite resource. They spawn threads, hold memory, and consume CPU without regard for battery life, thermal load, or user experience. On mobile devices — the dominant computing platform — this is a hard blocker. Agents that cannot be device-safe cannot be trusted to run in the background.",
  },
]

const failureStats = [
  { label: 'of agentic workflows fail to complete without human intervention', value: '68%' },
  { label: 'average number of tools a knowledge worker context-switches between daily', value: '11' },
  { label: 'productivity loss attributable to dropped-task recovery and re-prompting', value: '$1.8T' },
  { label: 'of enterprise AI pilots fail to reach production deployment', value: '82%' },
]

export default function Problem() {
  return (
    <>
      <SEOHead
        title="The Problem"
        description="Fragmented digital work, LLM limitations, and the absence of a governance layer are the unsolved problems Agent Lee addresses."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-red-800 rounded-full px-4 py-1 text-red-400 text-xs font-semibold tracking-widest uppercase mb-6">
            The Problem
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
            Agents Without a System Are Just{' '}
            <span className="text-red-400">Noise</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            The AI agent ecosystem has produced impressive capabilities with no operational coherence.
            Tasks start and do not finish. Models run and do not know when to stop. Systems execute
            and cannot be audited.
          </p>
        </div>

        {/* Failure Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {failureStats.map((s) => (
            <div key={s.value} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-red-400 mb-2">{s.value}</div>
              <div className="text-gray-400 text-xs leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Details */}
        <div className="space-y-6">
          {problems.map((p, i) => (
            <div key={p.title} className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex gap-6">
              <div className="text-red-400 font-black text-3xl opacity-30 shrink-0">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Market Timing */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-6">Why Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">LLM Capability Has Arrived</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The underlying model capability that makes agentic systems possible has reached sufficient
                quality. GPT-4-class and Claude-class models can reliably execute multi-step instructions,
                write code, analyze data, and reason about complex tasks. The raw intelligence is no longer
                the bottleneck.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Governance Is the Missing Layer</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every agentic system built on top of these models faces the same gap: no coordination layer,
                no persistent memory, no permission model, no audit trail. The problem is not the models.
                The problem is the operating system. Agent Lee is the operating system.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Enterprise Demand Is Real</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fortune 500 companies are actively piloting agentic workflows and finding them undeployable
                in production. The blockers are always the same: compliance, auditability, safety, and
                predictability. These are organizational problems dressed as technical ones. Agent Lee
                solves them at the infrastructure layer.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Mobile-Native Is Untapped</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Autonomous agents have been built entirely for cloud and desktop. The mobile-native agentic
                use case — background execution on personal devices, context-aware task management,
                battery-safe workflows — is completely unaddressed. This is a blue-ocean market segment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
