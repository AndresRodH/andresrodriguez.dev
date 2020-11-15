import {Layout} from 'components/layout'
import {getAllPostIds, getPostData, PostData} from 'lib/posts'
import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import {NextSeo, ArticleJsonLd} from 'next-seo'
import {siteMetadata} from 'config'
import {format, parseISO} from 'date-fns'
import 'twin.macro'
import {useMutation, useQueryCache} from 'react-query'
import {useEffect} from 'react'
import {ViewCounter} from 'components/view-counter'
import {incrementViews} from 'lib/api'
import {styled} from 'twin.macro'

type Props = PostData

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;

  & > * {
    grid-column: 2;
  }
`

export default function Post({
  id,
  title,
  description,
  date,
  contentHtml,
  banner,
  modifiedAt,
}: Props) {
  const router = useRouter()
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
  const dateModified = modifiedAt
    ? parseISO(modifiedAt).toISOString()
    : undefined
  const url = `${siteMetadata.siteUrl}${router.pathname}`
  const postImage = {
    url: `${siteMetadata.siteUrl}${banner}`,
    alt: title,
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
            modifiedTime: dateModified,
          },
        }}
      />
      <ArticleJsonLd
        authorName="Andrés Rodríguez"
        datePublished={datePublished.toISOString()}
        dateModified={dateModified}
        description={description}
        publisherName="Andrés Rodríguez"
        publisherLogo={siteMetadata.logo}
        images={[postImage.url]}
        title={title}
        url={url}
      />
      <Wrapper>
        <div />
        <main className="prose">
          <header>
            <h1 tw="sm:text-5xl! mb-0! text-center">{title}</h1>
            <div className="my-4 flex flex-col sm:flex-row text-lg justify-center font-semibold items-center">
              <time dateTime={date}>
                {format(datePublished, 'LLLL d, yyyy')}
              </time>
              <span className="sm:mx-4">~</span>
              <ViewCounter id={id} />
            </div>
          </header>
          <p>
            <em>{description}</em>
          </p>
          <article dangerouslySetInnerHTML={{__html: contentHtml}} />
        </main>
        <div />
      </Wrapper>
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
