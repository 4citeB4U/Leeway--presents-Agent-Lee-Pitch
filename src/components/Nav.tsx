/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.COMPONENT.NAV.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Nav module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\components\Nav.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Problem', path: '/problem' },
  { label: 'Solution', path: '/solution' },
  { label: 'Architecture', path: '/architecture' },
  { label: 'Governance', path: '/governance' },
  { label: 'Standards', path: '/standards' },
  { label: 'GTM', path: '/gtm' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Investor One-Pager', path: '/investor-one-pager' },
  { label: 'Investor Memo', path: '/investor-memo' },
  { label: 'Demo Scripts', path: '/demo-scripts' },
  { label: 'FAQ', path: '/faq' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-cyan-400 font-semibold border-b border-cyan-400 pb-0.5'
      : 'text-gray-300 hover:text-cyan-300 transition-colors'

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <NavLink to="/" className="text-white font-bold text-lg tracking-tight">
              <span className="text-cyan-400">Agent</span> Lee
            </NavLink>
            <span className="hidden sm:block text-gray-600 text-xs border border-gray-700 rounded px-2 py-0.5">
              LeeWay Industry
            </span>
            <span className="hidden md:block text-cyan-900 text-xs">
              by LeeWay Innovations
            </span>
          </div>

          {/* Desktop nav — scrollable */}
          <div className="hidden lg:flex items-center gap-5 text-sm overflow-x-auto">
            {navItems.slice(1).map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm ${isActive ? 'bg-cyan-900 text-cyan-300' : 'text-gray-300 hover:bg-gray-800'}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
