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
