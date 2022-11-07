import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Layout from '~/layouts/default'
import PostCard from '~/features/subjects/PostCard'

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <Head>
        <title>Subjects</title>
      </Head>
      <div className="mx-auto mt-10 text-center">
        <h1 className="mb-8 text-6xl bg-gradient-to-t bg-clip-text font-extrabold text-transparent from-primary to-secondary">
          Subjects
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}
