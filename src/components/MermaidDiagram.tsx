/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.COMPONENT.MERMAIDDIAGRAM.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = MermaidDiagram module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\components\MermaidDiagram.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({ startOnLoad: false, theme: 'dark' })

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = ''
      const id = 'mermaid-' + Math.random().toString(36).substr(2, 9)
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current) ref.current.innerHTML = svg
        })
        .catch(console.error)
    }
  }, [chart])
  return <div ref={ref} className="mermaid-diagram overflow-x-auto bg-gray-900 rounded-lg p-4" />
}
