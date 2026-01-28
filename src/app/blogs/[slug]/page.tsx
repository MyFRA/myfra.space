'use client'

import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import { DiscussionEmbed } from 'disqus-react'
import { allBlogs } from 'contentlayer/generated'
import { DateUtil } from '@/utils/DateUtil'
import 'highlight.js/styles/tokyo-night-dark.min.css'
import { usePathname } from 'next/navigation'

export default function BlogDetailPage({
    params,
}: {
    params: { slug: string }
}) {
    const pathname = usePathname()
    const blog = allBlogs.find(
        (blog) => blog._raw.flattenedPath === params.slug
    )

    if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`)

    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <div>
                        <a
                            href="/blogs"
                            className="text-xs lg:text-sm hover:underline"
                        >
                            Back
                        </a>
                    </div>

                    <h1 className="text-base leading-normal lg:text-xl font-semibold text-center mt-2">
                        {blog?.title}
                    </h1>

                    <div className="my-6">
                        <p className="text-xs lg:text-sm mb-1">
                            Written by: Tomy Wibowo
                        </p>
                        <p className="text-xs lg:text-sm">
                            Published at:{' '}
                            {DateUtil.formatDateStringToDmY(blog?.date)}
                        </p>
                    </div>

                    <div className="mdx-reset">
                        <div
                            className="[&>*]:mb-3 [&>*:last-child]:mb-0"
                            dangerouslySetInnerHTML={{
                                __html: blog.content.html,
                            }}
                        />
                    </div>
                </CardComponent>

                <CardComponent>
                    <DiscussionEmbed
                        shortname="myfra-1"
                        config={{
                            url: window.location.origin + pathname,
                            identifier: blog._id,
                            title: blog.title,
                            language: 'id_ID', //e.g. for Traditional Chinese (Taiwan)
                        }}
                    />
                </CardComponent>
            </div>
        </AppLayout>
    )
}
