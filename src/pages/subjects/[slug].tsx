import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import type { GetStaticPropsContext } from 'next'
import Layout from '~/layouts/default'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import ContentTable from '~/features/subjects/ContentTable'

export default function PostLayout({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="w-[100rem] mx-auto prose lg:prose-xl flex flex-col justify-center  mt-10  md:px-10 px-4">
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="mx-auto">
          {post.image && (
            <Image src={post.image} alt={post.title} width={500} height={100} />
          )}
        </div>
        <caption className="text-slate-400 text-xs">{post.summary}</caption>
        <MDXContent components={{ ContentTable }} />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === 'subjects/' + params?.slug,
  )
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}
