/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.STANDARDS.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Standards module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Standards.tsx
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
      <SEOHead title="LEEWAY™ Standards" description="The LEEWAY™ Code Governance Standard — authored by LeeWay Innovations, published by LeeWay Industry. The law by which Agent Lee agents operate." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Governance Standard
          </div>
          <div className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Authored by LeeWay Innovations Â· Published by LeeWay Industry</div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-none">LEEWAY™</h1>
          <p className="text-cyan-400 text-2xl font-black mb-6">The Code Governance Standard</p>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A civilization requires laws. LeeWay Innovations wrote them. The LEEWAY™ Standard is the behavioral and architectural contract that governs every file, every agent, and every action inside Agent Lee — and every system that adopts it.
          </p>
        </div>
      </section>

      {/* Origin narrative */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-cyan-800 pl-10 mb-16">
            <p className="text-gray-300 text-xl leading-relaxed mb-4">
              When Leonard J. Lee founded LeeWay Industry, he asked a single question: <em>"If we are going to deploy AI agents into production systems that make real decisions, what law must those agents obey?"</em>
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              No existing framework answered that question. AutoGPT had no audit trail. LangChain had no permission model. CrewAI had no state preservation. The industry had tools. It had no governance.
            </p>
            <p className="text-gray-400 leading-relaxed">
              LeeWay Innovations wrote the governance. The result is the LEEWAY™ Code Governance Standard — a structured metadata and behavioral protocol applied to every artifact in the Agent Lee ecosystem. LEEWAY™ is simultaneously the law Agent Lee operates under, and a standalone product that any organization can adopt to bring governed AI to their own codebase.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">The Five Immutable Laws</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">These are not guidelines. They are enforced invariants. Every agent built under LEEWAY™ is bound by all five, without exception.</p>
            </div>
            <div className="space-y-6 mb-16">
              {laws.map(l => (
                <div key={l.num} className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex gap-6 hover:border-cyan-900/50 transition-colors">
                  <div className="shrink-0 text-cyan-900 font-black text-4xl opacity-50 w-12 text-center">{l.num}</div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">{l.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{l.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 mb-16">
              <h2 className="text-2xl font-bold text-white mb-2">Governance Artifacts</h2>
              <p className="text-gray-500 text-sm mb-8">Every system governed by LEEWAY™ ships with these artifacts as first-class deliverables — not afterthoughts.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Agent Behavior Contract', desc: 'Per-agent declaration of permitted actions, resource limits, and escalation paths.' },
                  { name: 'Policy Matrix', desc: 'Action-to-tier mapping that drives Shield Aegis approvals. Versioned and auditable.' },
                  { name: 'Ops Log Schema', desc: 'Standard schema for all agent activity logs, compatible with SIEM ingestion.' },
                  { name: 'Checkpoint Protocol', desc: 'Specification for state serialization on interruption, ensuring zero work loss.' },
                  { name: 'Baton Specification', desc: 'Formal definition of the task handoff structure used by TaskBroker.' },
                  { name: 'Compliance Report Template', desc: 'Pre-built report structure for SOC 2, GDPR, and ISO 27001 audit cycles.' },
                ].map(a => (
                  <div key={a.name} className="border border-gray-700 rounded-lg p-5 hover:border-cyan-800/60 transition-colors">
                    <div className="text-cyan-400 font-semibold text-sm mb-2">{a.name}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-900/30 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">The Standard Is the Product</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-2">
                LEEWAY™ is not just the framework Agent Lee is built under. It is a licensable governance standard for any organization that wants to bring traceable, auditable governance to their own AI codebase.
              </p>
              <p className="text-gray-500 text-sm mb-8">Enterprise licensing available. Contact LeeWay Industry for terms.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/governance" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
                  Explore Governance Architecture
                </Link>
                <Link to="/investor-memo" className="border border-gray-700 text-gray-300 px-10 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors font-semibold">
                  Read the Investor Memo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
