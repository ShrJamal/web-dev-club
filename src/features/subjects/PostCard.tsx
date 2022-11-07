import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import type { Post } from 'contentlayer/generated'

export default function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="card m-4 w-96 bg-base-100 shadow-xl image-full h-[15rem]"
    >
      <figure>
        <Image
          src={post.image || 'https://placeimg.com/400/225/arch'}
          alt="Shoes"
          height={200}
          width={400}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{post.title}</h2>
        <div className="flex-1"></div>
        <div className="card-actions justify-between items-center">
          <time dateTime={post.date} className="text-sm text-base-content">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
      </div>
    </Link>
  )
}
