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
