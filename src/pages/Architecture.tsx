/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.PAGE.ARCHITECTURE.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Architecture module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\pages\Architecture.tsx
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
import { MermaidDiagram } from '../components/MermaidDiagram'
import { SEOHead } from '../components/SEOHead'

const systemOverview = `graph TD
    LP[Lee Prime - Coordinator] --> SCH[Scheduler - Wake/Sleep]
    LP --> TB[TaskBroker - Baton System]
    LP --> ML[Memory Lake - Continuity]
    LP --> SA[Shield Aegis - Safety]
    LP --> BS[Brain Sentinel - Health]
    SCH --> AG1[Agent Forge - Engineering]
    SCH --> AG2[Agent Nova - Research]
    SCH --> AG3[Agent Archive - Memory]
    TB --> AG1
    TB --> AG2
    TB --> AG3
    ML --> AG3
    SA --> AG1
    SA --> AG2
    BS --> SCH`

const wakeSleeFlow = `sequenceDiagram
    participant U as User
    participant LP as Lee Prime
    participant BS as Brain Sentinel
    participant SCH as Scheduler
    participant AG as Agent
    U->>LP: Submit Task
    LP->>BS: Check Device Health
    BS-->>LP: Health OK / Degraded
    LP->>SCH: Schedule Execution
    SCH->>AG: Wake Agent
    AG->>AG: Execute Task
    AG->>SCH: Task Complete
    SCH->>AG: Sleep Agent
    SCH->>LP: Report Done
    LP->>U: Deliver Result`

const batonHandoff = `sequenceDiagram
    participant TB as TaskBroker
    participant A1 as Agent Forge
    participant A2 as Agent Nova
    participant ML as Memory Lake
    TB->>A1: Issue Baton (Task Context)
    A1->>A1: Execute Subtask
    A1->>ML: Checkpoint State
    A1->>TB: Return Baton (Result + Handoff)
    TB->>ML: Log Handoff
    TB->>A2: Issue Baton (Next Context)
    A2->>A2: Execute Next Subtask
    A2->>TB: Return Baton (Complete)`

export default function Architecture() {
  return (
    <>
      <SEOHead title="Architecture" description="Agent Lee system architecture built by LeeWay Innovations — the engineering blueprint of the world's first governed agentic operating system." />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-cyan-800 rounded-full px-5 py-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            LeeWay Innovations · Engineering Blueprints
          </div>
          <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-4">The Blueprint</p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Architecture of a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Civilization</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            LeeWay Innovations built Agent Lee on a foundation of six governed subsystems. These are their technical blueprints —
            the precise engineering diagrams that prove this isn't a prototype. It's a production-grade operating system.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          <div>
            <div className="mb-8">
              <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-2">Blueprint I</p>
              <h2 className="text-3xl font-black text-white mb-3">System Overview</h2>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                Lee Prime sits at the apex of the architecture — the supreme governing authority over all subsystems and agent pools.
                No agent in this diagram acts without Lee Prime's sanctioned dispatch. Every subsystem has exactly one mandate.
                None overlap. The civilization is orderly by design.
              </p>
            </div>
            <MermaidDiagram chart={systemOverview} />
          </div>

          <div>
            <div className="mb-8">
              <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-2">Blueprint II</p>
              <h2 className="text-3xl font-black text-white mb-3">Wake / Sleep Lifecycle</h2>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                LeeWay Innovations engineered the wake/sleep lifecycle to solve the device-safety problem that every other
                agentic system ignores. No agent wakes without Scheduler authorization. Brain Sentinel checks device health
                before every dispatch. Agents sleep the moment their task is complete. Nothing idles. Nothing burns.
              </p>
            </div>
            <MermaidDiagram chart={wakeSleeFlow} />
          </div>

          <div>
            <div className="mb-8">
              <p className="text-cyan-500 text-xs font-semibold tracking-widest uppercase mb-2">Blueprint III</p>
              <h2 className="text-3xl font-black text-white mb-3">Baton Handoff Sequence</h2>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                The dropped-task problem ends here. TaskBroker manages every inter-agent handoff with the precision of a relay race.
                Every baton is logged to Memory Lake at issuance and at receipt — creating an unbroken audit chain.
                If a handoff fails, the system knows immediately. The baton is never lost.
              </p>
            </div>
            <MermaidDiagram chart={batonHandoff} />
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 italic text-sm mb-8">
            "Every diagram you see was built by LeeWay Innovations. Every system it depicts was built to last."<br />
            — LeeWay Innovations, Engineering Division
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/governance" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity">
              Explore Governance →
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
