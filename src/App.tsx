import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import Architecture from './pages/Architecture'
import Governance from './pages/Governance'
import Standards from './pages/Standards'
import GTM from './pages/GTM'
import Pricing from './pages/Pricing'
import InvestorOnePager from './pages/InvestorOnePager'
import InvestorMemo from './pages/InvestorMemo'
import DemoScripts from './pages/DemoScripts'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}
