import {Layout} from 'components/layout'
import {PostItem} from 'components/post-item'
import {getSortedPostsData} from 'lib/posts'
import {GetStaticProps} from 'next'
import {NextSeo} from 'next-seo'
import Link from 'next/link'

type Props = {
  allPostsData: ReturnType<typeof getSortedPostsData>
}

export default function BlogPage({allPostsData}: Props) {
  return (
    <Layout>
      <NextSeo
        title="Blog | Andrés Rodríguez"
        description="List of Andrés Rodríguez's blog posts"
        canonical="https://andresrodriguez.dev/blog"
        openGraph={{
          url: 'https://andresrodriguez.dev/blog',
          title: 'Blog | Andrés Rodríguez',
          description: 'The tools I use for work, coding and music.',
        }}
      />
      <main className="container max-w-screen-sm mx-auto px-4 sm:px-0 text-gray-900">
        <h1 className="text-4xl font-bold">Blog</h1>
        <ul className="mt-8 grid gap-4 divide-y">
          {allPostsData.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <li>
                <PostItem {...post} />
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
