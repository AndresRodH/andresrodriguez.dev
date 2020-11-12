import {Layout} from 'components/layout'
import {getAllPostIds, getPostData, PostData} from 'lib/posts'
import {GetStaticPaths, GetStaticProps} from 'next'
import Image from 'next/image'
import {NextSeo, ArticleJsonLd} from 'next-seo'
import {siteMetadata} from 'config'
import Markdown from 'react-markdown'
import {format, parseISO} from 'date-fns'
import 'twin.macro'
import {useMutation, useQueryCache} from 'react-query'
import {useEffect} from 'react'
import {ViewCounter} from 'components/view-counter'
import {incrementViews} from 'lib/api'

type Props = PostData

export default function Post({
  id,
  title,
  description,
  date,
  contentHtml,
  banner,
  bannerCredit,
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
  const url = `${siteMetadata.siteUrl}/blog/${id}`
  const postImage = {
    url: `${url}${banner}`,
    alt: bannerCredit,
  }

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
          },
        }}
      />
      <ArticleJsonLd
        authorName="Andrés Rodríguez"
        datePublished={datePublished.toISOString()}
        description={description}
        publisherName="Andrés Rodríguez"
        publisherLogo={siteMetadata.logo}
        images={[postImage.url]}
        title={title}
        url={url}
      />
      <main className="prose mx-auto sm:px-0">
        <h1 tw="sm:text-5xl! mb-0! text-center">{title}</h1>
        <div className="my-4 text-center items-center">
          <time className="mr-4" dateTime={date}>
            {format(datePublished, 'LLLL d, yyyy')}
          </time>
          <ViewCounter id={id} />
        </div>
        <div className="block relative h-80 w-full">
          <Image
            src={banner}
            layout="fill"
            alt={title}
            className="object-cover"
          />
        </div>
        <small className="text-center">
          <Markdown>{bannerCredit}</Markdown>
        </small>
        <p className="px-4 sm:px-0">
          <em>{description}</em>
        </p>
        <article
          className="px-4 sm:px-0"
          dangerouslySetInnerHTML={{__html: contentHtml}}
        />
      </main>
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
