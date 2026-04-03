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
      <SEOHead title="Architecture" description="Agent Lee system architecture — subsystem diagrams, wake/sleep flow, and baton handoff sequence." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">Architecture</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">System Architecture</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Technical diagrams of the Agent Lee governed operating system.</p>
        </div>
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">System Overview</h2>
            <p className="text-gray-400 mb-6 text-sm">Lee Prime orchestrates all subsystems and agent pools. Every agent operates within the bounds set by Scheduler, TaskBroker, Memory Lake, Shield Aegis, and Brain Sentinel.</p>
            <MermaidDiagram chart={systemOverview} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Wake / Sleep Lifecycle</h2>
            <p className="text-gray-400 mb-6 text-sm">No agent wakes without Scheduler authorization. Device health is checked before every dispatch. Agents sleep immediately after task completion.</p>
            <MermaidDiagram chart={wakeSleeFlow} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Baton Handoff Sequence</h2>
            <p className="text-gray-400 mb-6 text-sm">TaskBroker manages all inter-agent handoffs. Every baton is logged to Memory Lake at issuance and receipt, creating a complete audit trail.</p>
            <MermaidDiagram chart={batonHandoff} />
          </div>
        </div>
      </div>
    </>
  )
}
