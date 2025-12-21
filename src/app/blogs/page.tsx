/* eslint-disable react/no-unescaped-entities */
import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'
import BlogContainerComponent from '@/components/BlogContainerComponent'
import BlogListItemComponent from '@/components/BlogListItemComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import { allBlogs, Blog } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function BlogPage() {
    const blogs = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )

    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <BaseTitleComponent>Blogs</BaseTitleComponent>
                    <BaseParagraphComponent>
                        Even though I don't write often, I try to share my
                        thoughts and experiences from time to time. Hope you
                        find them useful!
                    </BaseParagraphComponent>

                    <div className="mt-5">
                        <BlogContainerComponent>
                            {blogs.map((blog, idx) => (
                                <BlogListItemComponent blog={blog} key={idx} />
                            ))}
                        </BlogContainerComponent>
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}

// import Link from 'next/link'
// import { compareDesc, format, parseISO } from 'date-fns'
// import { allBlogs, Blog } from 'contentlayer/generated'

// function PostCard(post: Blog) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), 'LLLL d, yyyy')}
//       </time>
//       <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
//     </div>
//   )
// }

// export default function Home() {

//   return (
//     <div className="mx-auto max-w-xl py-8">
//       <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>

//     </div>
//   )
// }
