/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.SOLUTION.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Solution module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Solution.tsx
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

const subsystems = [
  {
    name: 'Lee Prime',
    subtitle: 'Supreme Governing Authority',
    icon: '',
    description: 'The orchestration intelligence of the entire system. Lee Prime receives goals, constructs executable plans, dispatches agents via TaskBroker, monitors every thread through Memory Lake, and delivers verified results. It does not execute tasks directly  it governs their execution with the authority of a sovereign.',
    detail: 'Lee Prime maintains a live task graph  a directed acyclic representation of all active work, their dependencies, assigned agents, and completion states. No agent in the system acts without a Lee Prime dispatch.',
  },
  {
    name: 'Scheduler',
    subtitle: 'Wake/Sleep Lifecycle Orchestrator',
    icon: '',
    description: 'The timekeeper of the civilization. Scheduler manages the sleep and wake cycles of every agent in the system, enforcing priority queues and ensuring resource-efficient execution. Agents do not run when they should rest. They do not rest when work demands action.',
    detail: 'Scheduler integrates with Brain Sentinel to yield execution under device stress and resumes intelligently when conditions recover  making Agent Lee the first agentic system safe for persistent background operation.',
  },
  {
    name: 'TaskBroker',
    subtitle: 'The Baton System',
    icon: '',
    description: 'The relay race has a baton. In Agent Lee, that baton is TaskBroker. Every handoff between agents is explicit, logged, and confirmed. Tasks do not float between agents via hope and inference  they are routed through a structured registry with delivery receipts.',
    detail: 'TaskBroker maintains full lineage for every task: which agent created it, which received it, what state it was in at each handoff, and what the terminal outcome was. Zero dropped batons. Zero lost work.',
  },
  {
    name: 'Memory Lake',
    subtitle: 'Ground Truth & Continuity Engine',
    icon: '',
    description: 'The living memory of the civilization. Memory Lake stores context, checkpoints, policy state, and agent history across every session and every handoff. When you resume a task three days later, Memory Lake knows exactly where you left off  because it never forgot.',
    detail: 'Memory Lake enforces temporal consistency  no agent can act on stale data. The lake is append-only for audit purposes and query-indexed for retrieval speed. It is the permanent record of everything Agent Lee has ever done.',
  },
  {
    name: 'Shield Aegis',
    subtitle: 'Permissions, Safety & Injection Defense',
    icon: '',
    description: 'The sentinel at the gate. Shield Aegis enforces the permission model that makes Agent Lee trustworthy. Every agent action is checked against a policy registry before execution. Prompt injection attempts are detected and blocked. Approval gates stop autonomous decisions at the threshold of consequence.',
    detail: 'Shield Aegis operates in real time with sub-millisecond policy evaluation. It supports tiered human approval gates, role-based permission scopes, and immutable audit logs for every enforcement decision made.',
  },
  {
    name: 'Brain Sentinel',
    subtitle: 'Device Health & Thermal Monitor',
    icon: '',
    description: 'The guardian of the machine that runs the civilization. Brain Sentinel monitors CPU load, battery level, thermal state, and memory pressure in real time. When the host device is under stress, agents are paused. When conditions recover, they resume  automatically, intelligently, and safely.',
    detail: 'Brain Sentinel is what makes Agent Lee the only agentic system that can responsibly run on a smartphone. Every other system ignores the device. Agent Lee respects it.',
  },
]

export default function Solution() {
  return (
    <>
      <SEOHead
        title="The Solution"
        description="Agent Lee by LeeWay Innovations  six governed subsystems forming the world's first agentic operating system. Built by LeeWay Industry."
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            LeeWay Innovations  Engineering Response
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">The Answer</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Agent Lee:<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The First Governed Agentic OS
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            LeeWay Innovations didn't build another chatbot wrapper. They built the operating system the AI era was missing 
            a civilization of six interlocking subsystems, governed by law, powered by memory, and safe enough to trust with your work.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* The Core Philosophy */}
        <div className="bg-gray-900 border border-cyan-900/50 rounded-2xl p-12 mb-16 text-center">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4">The Founding Principle</p>
          <blockquote className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            "An agent without governance is not a product.<br />
            <span className="text-cyan-400">It is a liability."</span>
          </blockquote>
          <p className="text-gray-400 max-w-2xl mx-auto">
             Leonard J. Lee, Founder, LeeWay Industry
          </p>
          <p className="text-gray-600 text-sm mt-4">
            This principle is the architectural foundation of every design decision in Agent Lee.
            Built by LeeWay Innovations. Held to by every line of code.
          </p>
        </div>

        {/* Six Subsystems */}
        <div className="mb-8">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">The Six Laws</p>
          <h2 className="text-3xl font-black text-white">Six Subsystems. One Civilization.</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Each subsystem was engineered by LeeWay Innovations with a single, unambiguous mandate.
            None overlap. None conflict. Together, they form the complete operating system.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {subsystems.map((s) => (
            <div key={s.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-800/50 transition-all">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-64 shrink-0">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="text-cyan-400 font-black text-2xl mb-1">{s.name}</div>
                  <div className="text-gray-500 text-sm font-semibold">{s.subtitle}</div>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-gray-300 leading-relaxed text-base">{s.description}</p>
                  <div className="bg-gray-950 rounded-xl p-5 border border-gray-800">
                    <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Engineering Detail</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-12 mb-16">
          <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-4">The Market Position</p>
          <h2 className="text-3xl font-black text-white mb-10">Agent Lee vs. Everything Else</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 pr-8 text-gray-500 font-semibold">Capability</th>
                  <th className="text-center py-4 px-4 text-gray-500 font-semibold">AutoGPT</th>
                  <th className="text-center py-4 px-4 text-gray-500 font-semibold">CrewAI</th>
                  <th className="text-center py-4 px-4 text-gray-500 font-semibold">LangChain</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-bold">Agent Lee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900">
                {[
                  ['Persistent Memory', '~', '✗', '✗', '✓'],
                  ['Governance / Approval Gates', '✗', '✗', '✗', '✓'],
                  ['Prompt Injection Defense', '✗', '✗', '✗', '✓'],
                  ['Device-Safe Execution', '✗', '✗', '✗', '✓'],
                  ['Zero-Drop Task Handoff', '✗', '✗', '✗', '✓'],
                  ['Full Audit Trail', '✗', '✗', '~', '✓'],
                  ['Multi-Agent Orchestration', '~', '✓', '✓', '✓'],
                ].map(([cap, ...vals]) => (
                  <tr key={cap} className="hover:bg-gray-900/30">
                    <td className="py-4 pr-8 text-gray-300 font-medium">{cap}</td>
                    {vals.map((v, idx) => (
                      <td key={idx} className={`py-4 px-4 text-center text-xl font-bold ${
                        idx === 3 ? 'text-cyan-400' : v === '✓' ? 'text-green-500' : v === '~' ? 'text-yellow-500' : 'text-red-500/60'
                      }`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 italic text-sm mb-8">
            "We built Agent Lee to be the last agentic framework any team ever needs."<br />
             LeeWay Innovations, Engineering Division
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/architecture" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-900/40">
              Explore the Architecture
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