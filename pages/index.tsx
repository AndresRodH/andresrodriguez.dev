import {SEO} from 'components/seo'
import {Layout} from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <main className="container mx-auto flex justify-center px-4">Hay</main>
    </Layout>
  )
}
