/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.DEMOSCRIPTS.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = DemoScripts module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\DemoScripts.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { SEOHead } from '../components/SEOHead'
const scripts = [
  {title:'Demo 1: The Research Pipeline',steps:['User submits: "Research the competitive landscape for governed agentic AI and produce a 2,000-word briefing."','Lee Prime receives goal, creates task graph: research → synthesis → formatting → delivery.','Scheduler wakes Agent Nova (Research). Brain Sentinel confirms device health OK.','Agent Nova queries sources, extracts data, checkpoints to Memory Lake every 5 minutes.','TaskBroker issues Baton to Agent Archive (Memory) with Nova\'s raw findings.','Agent Archive stores, deduplicates, and structures the research corpus.','TaskBroker issues Baton to Agent Forge (Engineering/Writing) with synthesis instructions.','Agent Forge produces final briefing. Shield Aegis validates no external calls required.','Lee Prime delivers formatted report with full ops log attached. Total time: 8 minutes.']},
  {title:'Demo 2: The Code Generation Workflow',steps:['User submits: "Build a REST API for user authentication with tests and documentation."','Lee Prime decomposes: schema design → implementation → test suite → docs → review.','Agent Forge wakes. Designs schema, writes implementation. All file writes are Tier 2 approved.','Checkpoint saved to Memory Lake after each module. Device thermal check passes.','Agent Forge passes Baton to test-specialized sub-agent. Tests written and run.','Failures logged to Memory Lake. Agent Forge wakes again to fix. Loop until green.','Documentation agent wakes, reads Memory Lake for context, produces README.','Shield Aegis final review: no unauthorized external calls, all files within scope.','Lee Prime delivers complete codebase with audit trail of every decision made.']},
  {title:'Demo 3: Enterprise Ops Governance Demo',steps:['Operator submits: "Process Q3 vendor invoices and flag anomalies for approval."','Lee Prime classifies: Tier 3 task (external data access). Routes approval request to operator.','Operator approves. Shield Aegis records authorization with timestamp and operator ID.','Agent Forge reads invoice data. Every read logged to ops trail.','Anomaly detection runs. Three invoices flagged. Break-glass? No — standard escalation.','Lee Prime generates anomaly report. Routes to operator dashboard.','Operator reviews, approves two, rejects one. All decisions logged with reasons.','Memory Lake stores full audit trail. Compliance report auto-generated.','Governance dashboard updated. All actions traceable end-to-end with zero ambiguity.']}
]
export default function DemoScripts() {
  return (
    <>
      <SEOHead title="Demo Scripts" description="Agent Lee hero demo scripts — three live demonstrations of the governed execution civilization." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Live Demonstrations
          </div>
          <div className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">LeeWay Innovations — Agent Lee</div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-none">
            The Civilization<br />
            <span className="text-cyan-400">In Action</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Three production-grade demonstrations of Agent Lee's governed execution lifecycle — built by LeeWay Innovations, held by LeeWay Industry. Each demo is a proof-of-civilization event: a real goal, a real task graph, real governance.
          </p>
        </div>
      </section>

      {/* Demo cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {scripts.map((s, i) => (
            <div key={s.title} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-900/50 transition-colors">
              <div className="bg-gradient-to-r from-gray-900 to-gray-950 border-b border-gray-800 px-10 py-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-cyan-900 font-black text-5xl opacity-40 leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-1">
                      {i === 0 ? 'Knowledge & Research' : i === 1 ? 'Engineering & Creation' : 'Enterprise Operations'}
                    </div>
                    <h2 className="text-white font-black text-2xl">{s.title}</h2>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2 ml-16">
                  {i === 0 && 'Lee Prime receives a research goal and orchestrates five agents across twelve governed steps to deliver a complete briefing — on time, on record.'}
                  {i === 1 && 'From blank canvas to tested, documented REST API. Every decision governed. Every file write authorized. Every failure logged and recovered.'}
                  {i === 2 && 'Enterprise-grade invoice processing with anomaly detection, operator approval routing, and a full compliance report — zero ambiguity, end-to-end.'}
                </p>
              </div>
              <div className="px-10 py-8">
                <div className="space-y-4">
                  {s.steps.map((step, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <span className="shrink-0 w-7 h-7 rounded-full border border-cyan-800 text-cyan-400 text-xs flex items-center justify-center font-black">
                        {j + 1}
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-600 font-semibold tracking-widest uppercase">
                  Governed by Shield Aegis · Logged by Memory Lake · Orchestrated by Lee Prime
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 italic text-sm mb-8">
            "This is not a demo of an AI. This is a demonstration of a civilization."<br />
            — Leonard J. Lee, Founder, LeeWay Industry
          </p>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8">
            Every step in every demo above is traceable, auditable, and governed. LeeWay Innovations built this so that no human ever has to wonder what the AI did, why it did it, or whether it did it right.
          </p>
        </div>
      </div>
    </>
  )
}
