/*
LEEWAY HEADER — DO NOT REMOVE

REGION: APP
TAG: CORE.SDK.APP.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = App module
WHY = Part of CORE region
WHO = LEEWAY Align Agent
WHERE = src\App.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { HashRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
const Problem = lazy(() => import('./pages/Problem'))
const Solution = lazy(() => import('./pages/Solution'))
const Architecture = lazy(() => import('./pages/Architecture'))
const Governance = lazy(() => import('./pages/Governance'))
const Standards = lazy(() => import('./pages/Standards'))
const GTM = lazy(() => import('./pages/GTM'))
const Pricing = lazy(() => import('./pages/Pricing'))
const InvestorOnePager = lazy(() => import('./pages/InvestorOnePager'))
const InvestorMemo = lazy(() => import('./pages/InvestorMemo'))
const DemoScripts = lazy(() => import('./pages/DemoScripts'))
const FAQ = lazy(() => import('./pages/FAQ'))

export default function App() {
  const fallback = <div className="min-h-screen bg-gray-950 flex items-center justify-center"><div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" /></div>
  return (
    <HashRouter>
      <Suspense fallback={fallback}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="problem" element={<Problem />} />
            <Route path="solution" element={<Solution />} />
            <Route path="architecture" element={<Architecture />} />
            <Route path="governance" element={<Governance />} />
            <Route path="standards" element={<Standards />} />
            <Route path="gtm" element={<GTM />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="investor-one-pager" element={<InvestorOnePager />} />
            <Route path="investor-memo" element={<InvestorMemo />} />
            <Route path="demo-scripts" element={<DemoScripts />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
