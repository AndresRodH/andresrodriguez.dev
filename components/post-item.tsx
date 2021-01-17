import {format, parseISO} from 'date-fns'
import {GetSortedPostsData} from 'lib/posts'
import Link from 'next/link'

export function PostItem({id, title, description, date}: GetSortedPostsData) {
  return (
    <div className="py-8">
      <div className="mb-4">
        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
          <p className="text-gray-600">
            {format(parseISO(date), 'LLLL d, yyyy')}
          </p>
        </div>
      </div>
      <div className="sm:col-span-3 lg:col-span-2">
        <Link key={id} href={`/blog/${id}`}>
          <a className="mb-3 inline-block text-gray-900 transition-colors duration-200 hover:text-indigo-500 text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
            {title}
          </a>
        </Link>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
