import { useState } from 'react'
import { SEOHead } from '../components/SEOHead'
const faqs = [
  ['What is Agent Lee?','Agent Lee is a governed multi-agent operating system — a coordination layer that manages multiple AI agents, enforces permissions, preserves task state, and guarantees auditable delivery.'],
  ['Why not just use a single frontier model?','Single models have finite context windows, no persistent memory, no inter-agent handoff, and no safety enforcement layer. Agent Lee solves all four limitations simultaneously.'],
  ['What is the moat?','The LeeWay Standards governance framework, the Baton System protocol, Memory Lake continuity architecture, and first-mover positioning as the governed agentic OS standard.'],
  ['Can it bypass safety?','No. Shield Aegis enforces all safety boundaries at the action level, not the prompt level. No agent can self-escalate permissions. Break-glass requires dual sign-off.'],
  ['How do you prevent prompt injection?','Shield Aegis sandboxes all external content before it reaches any model context. Input validation runs at the system boundary, not inside the model call.'],
  ['What happens if an agent fails mid-task?','Memory Lake checkpoints preserve state continuously. If an agent fails, Lee Prime restarts it from the last checkpoint — no work is lost, no task is silently abandoned.'],
  ['How is this different from AutoGPT or LangChain?','Those are developer tools without persistent state, governance layers, or formal handoff protocols. Agent Lee is an operating system — it manages agents the way an OS manages processes.'],
  ['What is the revenue model?','SaaS subscription: Creator $20/mo, Business $99/mo, Enterprise custom. Secondary revenue from API access and compliance services.'],
  ['What is the target market?','Creators and indie builders, SMB ops teams, and enterprise engineering departments — any team that needs autonomous multi-step work completed reliably.'],
  ['How large is the market?','$55B+ TAM across agentic AI infrastructure, workflow automation, and compliance tooling, projected to 2028.'],
  ['What is the pricing strategy?','Freemium to establish adoption, Creator tier for individual value, Business tier as primary revenue driver, Enterprise for high-margin accounts.'],
  ['Who is the founding team?','Leonard J Lee — Founder, CEO, Architect. Creator of LeeWay Standards and the Agent Lee architecture. LeeWay Industries is the product company.'],
  ['What is the current stage?','Pre-launch, architecture validated, building engineering team and design partnerships.'],
  ['What traction do you have?','Architecture complete, LeeWay Standards framework authored, go-to-market strategy defined, investor materials prepared.'],
  ['What are the key risks?','Engineering complexity of multi-agent coordination, enterprise sales cycle length, and potential incumbent competition. All mitigated by phased GTM and governance depth.'],
  ['How do you handle data privacy?','Memory Lake is partitioned by access level. All data is encrypted at rest and in transit. No user data is used for model training. GDPR-compliant by design.'],
  ['What is the competitive landscape?','AutoGPT, LangChain, CrewAI (developer tools, no governance), Microsoft Copilot, Google Workspace AI (assistant layer, not OS layer). Agent Lee is uncontested as governed agentic OS.'],
  ['Why will you win?','First-mover in governed agentic OS. LeeWay Standards becomes the industry reference. Community distribution through creator segment. Compliance depth locks in enterprise accounts.'],
  ['How does the Baton System work?','TaskBroker issues structured Batons — context packets containing task instructions, prior results, and state references — to agents. Handoffs are logged at issuance and receipt.'],
  ['What is Memory Lake?','The persistent data layer storing task state, checkpoints, policy documents, and truth anchors. All writes are immutable and signed. Access is partitioned by clearance level.'],
  ['What is Shield Aegis?','The security subsystem enforcing permissions, validating actions against the policy matrix, defending against prompt injection, and routing approval requests by tier.'],
  ['What is Brain Sentinel?','The device health monitor tracking CPU, memory, battery, and thermal state. Triggers Safe Mode to suspend non-critical agents when device health degrades.'],
  ['What is the Scheduler?','The lifecycle manager for all agents — controls wake, run duration, and sleep. Integrates with Brain Sentinel to prevent device-unsafe execution.'],
  ['What is Lee Prime?','The central coordinator. Receives goals, creates task graphs, dispatches agents, monitors progress, and delivers results. The executive authority of the system.'],
  ['How does it handle device constraints?','Brain Sentinel provides continuous health telemetry. The Scheduler uses this to defer non-critical work when battery, thermal, or CPU thresholds are exceeded. State is preserved.'],
  ['What is the deployment model?','On-device (mobile-native), cloud-hosted, or hybrid. The Scheduler and Brain Sentinel adapt execution strategy to available resources automatically.'],
  ['How do enterprises adopt this?','Via direct sales with compliance-ready packaging. Pre-built SOC 2, GDPR, and ISO 27001 compliance reports. Dedicated support engineer. Custom SLA.'],
  ['What does governed autonomy mean?','Agents operate autonomously within explicitly defined boundaries. They cannot exceed their authorized scope, escalate their own permissions, or take irreversible actions without human approval.'],
  ['What is the LeeWay Standards framework?','A formal behavioral contract for agentic systems: five core laws covering authorization, auditability, state preservation, permission limits, and system kill-switch authority.'],
  ['What are you asking investors for?','$1.5M seed on a SAFE with $8M cap. Milestone targets: public launch, 1,000 paying users, 2 enterprise design partners, SOC 2 audit initiated.'],
]
export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null)
  return (<><SEOHead title="FAQ" description="Agent Lee investor FAQ — 30 questions covering product, market, team, and investment." /><div className="max-w-3xl mx-auto px-4 py-20"><div className="text-center mb-16"><div className="inline-block border border-cyan-800 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">FAQ</div><h1 className="text-4xl font-black text-white mb-4">Investor Questions, Answered</h1><p className="text-gray-400">30 questions covering product, market, safety, and investment thesis.</p></div><div className="space-y-2">{faqs.map(([q,a],i)=><div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"><button className="w-full text-left px-6 py-4 flex justify-between items-start gap-4" onClick={()=>setOpen(open===i?null:i)}><span className="text-white font-semibold text-sm">{q}</span><span className="text-cyan-400 shrink-0 mt-0.5">{open===i?'−':'+'}</span></button>{open===i&&<div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">{a}</div>}</div>)}</div></div></>)
}
