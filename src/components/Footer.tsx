/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.COMPONENT.FOOTER.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = Footer module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\components\Footer.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-bold text-lg mb-2">
              <span className="text-cyan-400">Agent</span> Lee
            </div>
            <p className="text-gray-400 text-sm">Software as a Civilization</p>
            <p className="text-gray-500 text-xs mt-2">A LeeWay Innovations product, held by LeeWay Industry</p>
          </div>
          <div>
            <div className="text-gray-300 font-semibold text-sm mb-2">LeeWay Industry</div>
            <p className="text-gray-500 text-xs">Mother Company · Founded by Leonard J. Lee</p>
            <p className="text-gray-500 text-xs mt-1">Engineering Arm: LeeWay Innovations</p>
          </div>
          <div>
            <div className="text-gray-300 font-semibold text-sm mb-2">Core Law</div>
            <p className="text-gray-400 text-xs italic">
              "Many agents exist. Few execute. One system runs."
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} LeeWay Industry. All rights reserved. Agent Lee is a governed agentic operating system built by LeeWay Innovations.
        </div>
      </div>
    </footer>
  )
}
