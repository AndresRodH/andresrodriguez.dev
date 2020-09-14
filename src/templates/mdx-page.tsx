import React from 'react'
import {SEO} from 'components/seo/seo'

export default function MdxPage({children, pageContext: {frontmatter}}) {
  return (
    <>
      <SEO description={frontmatter.description} title={frontmatter.title} />
      <main className="prose prose-lg mx-auto px-4">{children}</main>
    </>
  )
}
