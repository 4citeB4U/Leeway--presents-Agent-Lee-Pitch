import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'

const pillars = [
  {
    title: 'Governance',
    description:
      'Every agent action is authorized, logged, and auditable. Tiered approval gates ensure no autonomous decision crosses a safety boundary without explicit sign-off.',
  },
  {
    title: 'Continuity',
    description:
      'Memory Lake preserves full context, checkpoints, and policy state across sessions. Tasks do not drop. Work does not reset. Progress is permanent until delivered.',
  },
  {
    title: 'Device-Safe',
    description:
      'Brain Sentinel monitors CPU load, battery, and thermal state in real time. If the device is under stress, agents sleep. Work resumes automatically when conditions recover.',
  },
]

const subsystems = [
  { name: 'Lee Prime', role: 'Central coordinator and decision authority' },
  { name: 'Scheduler', role: 'Wake/Sleep lifecycle for all agents' },
  { name: 'TaskBroker', role: 'Baton system — explicit routing and handoffs' },
  { name: 'Memory Lake', role: 'Continuity, policy, truth, and checkpoints' },
  { name: 'Shield Aegis', role: 'Permissions, safety, and injection defense' },
  { name: 'Brain Sentinel', role: 'Load, battery, and thermal monitoring' },
]

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home"
        description="Agent Lee by LeeWay Industries — a governed agentic operating system. Software as a Civilization."
      />

      {/* Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-gray-950 opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-8">
            LeeWay Industries presents
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
            Software as a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Civilization
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Agent Lee is a governed multi-agent operating system that completes complex work
            end-to-end — safely, measurably, and without dropping the baton.
          </p>
          <p className="text-gray-500 text-sm italic mb-12">
            "Many agents exist. Few execute. One system runs."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/investor-one-pager"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Investor One-Pager
            </Link>
            <Link
              to="/architecture"
              className="border border-cyan-500 text-cyan-400 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-950 transition-colors"
            >
              Explore Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Three Foundational Pillars</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Agent Lee is not a chatbot wrapper. It is an operating system for autonomous work, built on
          three non-negotiable foundations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-cyan-800 transition-colors"
            >
              <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subsystems Grid */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Six Core Subsystems</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Each subsystem fulfills a distinct operational mandate. Together they form a complete, governed agentic OS.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((s) => (
              <div
                key={s.name}
                className="bg-gray-950 border border-gray-800 rounded-lg p-6 hover:border-cyan-800 transition-colors"
              >
                <div className="text-cyan-400 font-bold text-lg mb-2">{s.name}</div>
                <div className="text-gray-400 text-sm">{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-cyan-400 mb-2">$55B+</div>
            <div className="text-gray-400 text-sm">Addressable market across agentic AI, ops automation, and compliance tooling</div>
          </div>
          <div>
            <div className="text-5xl font-black text-cyan-400 mb-2">6</div>
            <div className="text-gray-400 text-sm">Specialized subsystems working in concert under a single governed operating system</div>
          </div>
          <div>
            <div className="text-5xl font-black text-cyan-400 mb-2">0</div>
            <div className="text-gray-400 text-sm">Dropped tasks. Every handoff is logged, every checkpoint is stored, every result is delivered</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-gray-900 to-gray-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Understand the System?</h2>
          <p className="text-gray-400 mb-8">
            Explore the full investor materials, technical architecture, and go-to-market strategy below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/problem" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
              See the Problem
            </Link>
            <Link to="/solution" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
              See the Solution
            </Link>
            <Link to="/investor-memo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Investor Memo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
