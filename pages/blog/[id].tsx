import {Layout} from 'components/layout'
import {getAllPostIds, getPostData, PostData} from 'lib/posts'
import {GetStaticPaths, GetStaticProps} from 'next'
import {NextSeo, ArticleJsonLd} from 'next-seo'
import {siteMetadata} from 'config'
import {format, parseISO} from 'date-fns'
import {useMutation, useQueryCache} from 'react-query'
import {useEffect} from 'react'
import {ViewCounter} from 'components/view-counter'
import {incrementViews} from 'lib/api'
import hydrate from 'next-mdx-remote/hydrate'
import {components} from 'components/mdx-components'

type Props = PostData

export default function Post({
  id,
  mdxSource,
  frontMatter: {title, description, date, banner, modifiedAt},
}: Props) {
  const queryCache = useQueryCache()
  const [mutate] = useMutation(incrementViews, {
    onSuccess: (result) => {
      queryCache.setQueryData(['post-stats', id], result)
    },
  })

  useEffect(() => {
    mutate(id)
  }, [id, mutate])

  const datePublished = parseISO(date)
  const dateModified = modifiedAt ? parseISO(modifiedAt) : undefined
  const url = `${siteMetadata.siteUrl}/blog/${id}`
  const postImage = {
    url: `${siteMetadata.siteUrl}${banner}`,
    width: 1280,
    height: 675,
    alt: title,
  }
  const content = hydrate(mdxSource, {components})

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          type: 'article',
          images: [postImage],
          article: {
            publishedTime: datePublished.toISOString(),
            modifiedTime: dateModified?.toISOString(),
          },
        }}
      />
      <ArticleJsonLd
        authorName="Andrés Rodríguez"
        datePublished={datePublished.toISOString()}
        dateModified={dateModified?.toISOString()}
        description={description}
        publisherName="Andrés Rodríguez"
        publisherLogo={siteMetadata.logo}
        images={[postImage.url]}
        title={title}
        url={url}
      />
      <article className="max-w-2xl mx-auto">
        <header className="px-8 py-16">
          <h1 className="max-w-screen-lg mx-auto leading-tight font-black text-4xl sm:text-5xl sm:text-center">
            {title}
          </h1>
          <h2 className="font-semibold text-xl sm:text-2xl sm:text-center mt-4 text-gray-500 max-w-screen-md mx-auto">
            {description}
          </h2>
        </header>
        <article className="prose max-w-none w-full px-8 mx-auto">
          {content}
        </article>
        <div className="my-4 text-gray-600 flex flex-col sm:flex-row text-lg justify-center font-semibold items-center">
          <div>
            <span className="mr-2">Last Updated:</span>
            <time className="text-gray-900 font-bold" dateTime={date}>
              {format(dateModified || datePublished, 'LLLL d, yyyy')}
            </time>
          </div>
          <span className="sm:mx-4 text-teal-400">~</span>
          <ViewCounter id={id} />
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, {id: string}> = async ({
  params,
}) => {
  if (params?.id) {
    const postData = await getPostData(params.id)
    return {
      props: postData,
    }
  }
  return {props: {} as Props}
}
