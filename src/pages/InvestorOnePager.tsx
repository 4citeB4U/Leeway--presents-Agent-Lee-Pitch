import { SEOHead } from '../components/SEOHead'
export default function InvestorOnePager() {
  return (
    <>
      <SEOHead title="Investor One-Pager" description="Agent Lee investor one-pager — market, solution, business model, and team overview." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">Investor One-Pager</div>
          <h1 className="text-4xl font-black text-white mb-2">Agent Lee</h1>
          <p className="text-cyan-400 text-lg font-semibold mb-1">LeeWay Industries</p>
          <p className="text-gray-500 text-sm">Founded by Leonard J Lee | LeeWay Innovations</p>
        </div>
        <div className="space-y-8">
          {[
            { title: 'The Opportunity', body: 'The agentic AI market is projected to exceed $55B by 2028. LLM capability has arrived, but the governance infrastructure has not. Every enterprise deploying AI agents faces the same blockers: no audit trail, no permission model, no reliable task completion. Agent Lee is the governed operating system that makes agentic AI deployable in production.' },
            { title: 'The Problem', body: 'Current agentic frameworks — AutoGPT, LangChain, CrewAI — produce impressive demos and unreliable production systems. Tasks drop silently. Agents hallucinate without detection. There is no formal handoff mechanism, no persistent memory across sessions, and no safety layer that satisfies compliance requirements. 68% of agentic workflows fail without human intervention.' },
            { title: 'The Solution', body: 'Agent Lee is a governed multi-agent operating system. Six integrated subsystems — Lee Prime (coordinator), Scheduler (lifecycle), TaskBroker (baton handoffs), Memory Lake (continuity), Shield Aegis (safety), and Brain Sentinel (device health) — work together to guarantee task completion, auditability, and safe execution.' },
            { title: 'Business Model', body: 'Freemium SaaS with four tiers: Free Trial (14-day, limited), Creator ($20/mo), Business ($99/mo, team + governance dashboard), Enterprise (custom, compliance-ready). Secondary revenue from API access, compliance report exports, and enterprise integration services.' },
            { title: 'Market & Traction', body: 'Target segments: 50M+ creators and indie builders (TAM $2.4B), 10M+ SMB ops teams (TAM $8.1B), 500K+ enterprise engineering departments (TAM $45.2B). Currently in pre-launch build phase with founding team assembled and architecture validated.' },
            { title: 'The Team', body: 'Leonard J Lee — Founder, CEO, Architect. Creator of the LeeWay Standards governance framework and the Agent Lee architecture. LeeWay Industries is the product company; LeeWay Innovations is the creative and R&D branch.' },
            { title: 'Why Now', body: 'GPT-4-class models have reached sufficient capability. Enterprise demand for agentic systems is real and documented. The governance layer — the missing piece — is exactly what Agent Lee provides. The window to define the standard for governed agentic AI is open now.' },
            { title: 'Use of Funds', body: 'Seed round: engineering team (40%), infrastructure and security (25%), go-to-market and content (20%), legal and compliance (10%), operations (5%). Milestone: public launch, 1,000 paying users, first enterprise design partner.' },
            { title: 'Contact', body: 'Leonard J Lee | LeeWay Industries | agent-lee@leeway.industries' },
          ].map(s => (
            <div key={s.title} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h2 className="text-cyan-400 font-bold text-lg mb-3">{s.title}</h2>
              <p className="text-gray-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
