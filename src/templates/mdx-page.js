import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function MdxPage({ children, pageContext: { frontmatter } }) {
  return (
    <>
      <SEO
        description={frontmatter.description}
        title={frontmatter.title}
        slug={frontmatter.slug}
      />
      <Layout>{children}</Layout>
    </>
  )
}
