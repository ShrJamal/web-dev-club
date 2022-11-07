import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import type { GetStaticPropsContext } from 'next'
import Layout from '~/layouts/default'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === 'subjects/' + params?.post,
  )
  return {
    props: {
      post,
    },
  }
}

export default function PostLayout({ post }: { post: Post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </Layout>
  )
}
