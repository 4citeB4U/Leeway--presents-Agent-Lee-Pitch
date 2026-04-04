/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.PROBLEM.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Problem module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Problem.tsx
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

const problems = [
  {
    title: 'Fragmented Digital Work',
    chapter: 'Chapter I',
    body: 'Modern knowledge work is scattered across dozens of disconnected tools  project managers, communication platforms, code repositories, document editors, data stores. No single system has the authority or awareness to coordinate across all of them. The result is relentless context-switching, duplicated effort, and work that falls permanently through the cracks between tools that were never designed to speak to each other.',
  },
  {
    title: 'LLM Limitations at Scale',
    chapter: 'Chapter II',
    body: 'Large language models are extraordinary in isolation and brittle in production. They have finite context windows, no persistent memory across sessions, no mechanism for multi-step task handoff, and no built-in safety enforcement. When a task exceeds a single model invocation, it fails silently or demands constant human re-prompting. This is not a model problem. It is a system problem.',
  },
  {
    title: 'The Dropped-Task Epidemic',
    chapter: 'Chapter III',
    body: 'Current agentic frameworks route tasks through chains of model calls with no durable state and no governance. When an agent fails, hallucinates, or hits a resource limit, the task is abandoned. There is no checkpoint, no handoff, no audit trail. Operators have no way to know what ran, what stopped, or why. Every unfinished task is a company\'s unfinished revenue.',
  },
  {
    title: 'No Governance Layer',
    chapter: 'Chapter IV',
    body: 'Every major autonomous AI failure shares a single root cause: unconstrained execution. Without a permission model, approval gates, and injection defense, every deployed agent is a liability. Enterprises cannot adopt agentic systems they cannot audit. Individual operators cannot trust systems that cannot self-limit. The governance problem is not an edge case  it is the entire product surface.',
  },
  {
    title: 'Device-Unsafe Execution',
    chapter: 'Chapter V',
    body: 'Existing agentic systems treat the host device as an infinite resource. They spawn threads, hold memory, and consume CPU without regard for battery life, thermal load, or user experience. On mobile devices  the dominant computing platform on Earth  this is a hard blocker. Agents that cannot be device-safe cannot be trusted to run in the background where the real work happens.',
  },
]

const failureStats = [
  { label: 'of agentic workflows fail to complete without human intervention', value: '68%' },
  { label: 'average tools a knowledge worker context-switches between daily', value: '11' },
  { label: 'annual productivity loss from dropped-task recovery and re-prompting', value: '$1.8T' },
  { label: 'of enterprise AI pilots fail to reach production deployment', value: '82%' },
]

export default function Problem() {
  return (
    <>
      <SEOHead
        title="The Problem"
        description="LeeWay Innovations identified the five fatal flaws of the agentic AI era  and engineered Agent Lee to solve every one of them."
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-red-900 rounded-full px-5 py-2 text-red-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            The Problem Manuscript
          </div>
          <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-4">A LeeWay Industry Investigation</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Agents Without a System Are Just{' '}
            <span className="text-red-400">Expensive Noise</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Leonard J. Lee and the engineering division of LeeWay Industry  LeeWay Innovations  spent years
            documenting the five fatal failures of autonomous AI. What they found wasn't surprising.
            What was surprising was that no one had built a solution. So they did.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Failure Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {failureStats.map((s) => (
            <div key={s.value} className="bg-gray-900 border border-red-900/50 rounded-2xl p-6 text-center">
              <div className="text-5xl font-black text-red-400 mb-3">{s.value}</div>
              <div className="text-gray-400 text-xs leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The Five Chapters */}
        <div className="mb-8">
          <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase mb-2">The Five Fatal Flaws</p>
          <h2 className="text-2xl font-black text-white">Filed by LeeWay Innovations Research Division</h2>
        </div>
        <div className="space-y-6">
          {problems.map((p, i) => (
            <div key={p.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex gap-8 hover:border-red-900/50 transition-colors">
              <div className="shrink-0">
                <div className="text-red-900 font-black text-5xl opacity-40">{String(i + 1).padStart(2, '0')}</div>
                <div className="text-red-600 text-xs font-semibold tracking-widest mt-1">{p.chapter}</div>
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-4">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Now */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900 rounded-2xl p-12">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-3">The Inflection Point</p>
          <h2 className="text-3xl font-black text-white mb-10">Why LeeWay Innovations Moved Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-3">The Raw Intelligence Has Arrived</h3>
              <p className="text-gray-400 leading-relaxed">
                GPT-4-class and Claude-class models can reliably execute multi-step instructions, write code, analyze data, and reason about complex tasks.
                The underlying intelligence is no longer the bottleneck. The missing piece is the operating system above it.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-3">Governance Is the Entire Market Gap</h3>
              <p className="text-gray-400 leading-relaxed">
                Every agentic system faces the same void: no coordination layer, no persistent memory, no permission model, no audit trail.
                LeeWay Industry identified this not as a technical nuance but as the entire missing layer. Agent Lee is that layer.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-3">Enterprise Demand Is Stranded</h3>
              <p className="text-gray-400 leading-relaxed">
                Fortune 500 companies are piloting agentic workflows and finding them undeployable in production. The blockers are always identical:
                compliance, auditability, safety, predictability. These are solvable. LeeWay Innovations solved them.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-3">Mobile Is an Untouched Continent</h3>
              <p className="text-gray-400 leading-relaxed">
                Autonomous agents have been built entirely for cloud and desktop. The mobile-native agentic use case  background execution,
                context-aware task management, battery-safe workflows  is completely unaddressed. This is a blue-ocean market, and Agent Lee is already there.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm italic mb-6">"We didn't just find the problem. We built the answer."  LeeWay Innovations Engineering Division</p>
          <Link
            to="/solution"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg shadow-lg shadow-cyan-900/40"
          >
            Read the Solution 
          </Link>
        </div>
      </div>
    </>
  )
}