/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.COMPONENT.SEOHEAD.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = SEOHead module
WHY = Part of UI region
WHO = LEEWAY Align Agent
WHERE = src\components\SEOHead.tsx
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
}

export function SEOHead({ title, description }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title} — Agent Lee | LeeWay Industries</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
