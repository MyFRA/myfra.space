'use client'

import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import { DiscussionEmbed } from 'disqus-react'
import { DateUtil } from '@/utils/DateUtil'
import 'highlight.js/styles/tokyo-night-dark.min.css'
import { usePathname } from 'next/navigation'
import { allWrittenScenes } from 'contentlayer/generated'

export default function BlogDetailPage({
    params,
}: {
    params: { slug: string }
}) {
    const pathname = usePathname()
    const writtenScene = allWrittenScenes.find(
        (writtenScene) =>
            writtenScene._raw.flattenedPath.replaceAll(
                'written-scenes/',
                ''
            ) === params.slug
    )

    if (!writtenScene)
        throw new Error(`Written Scene not found for slug: ${params.slug}`)

    return (
        <AppLayout>
            <div className="app-container font-imfellenglish">
                <CardComponent>
                    <div>
                        <a
                            href="/written-scenes"
                            className="text-xs lg:text-sm hover:underline"
                        >
                            Back
                        </a>
                    </div>

                    <h1 className="leading-normal text-lg lg:text-2xl font-semibold text-center mt-4">
                        {writtenScene?.title}
                    </h1>

                    <div
                        className="mdx-reset mt-4 lg:mt-7 text-sm lg:text-base"
                        style={{ listStyleType: 'none' }}
                    >
                        <div
                            className="[&>*]:mb-3 [&>*:last-child]:mb-0 list-none"
                            dangerouslySetInnerHTML={{
                                __html: writtenScene.content.html,
                            }}
                        />
                    </div>

                    <div className="mt-7 lg:mt-10">
                        <p className="text-xs lg:text-sm mb-1">
                            Written by: Tomy Wibowo
                        </p>
                        <p className="text-xs lg:text-sm">
                            Published at:{' '}
                            {DateUtil.formatDateStringToDmY(writtenScene?.date)}
                        </p>
                    </div>
                </CardComponent>

                <CardComponent>
                    <DiscussionEmbed
                        shortname="myfra-1"
                        config={{
                            url: window.location.origin + pathname,
                            identifier: writtenScene._id,
                            title: writtenScene.title,
                            language: 'id_ID', //e.g. for Traditional Chinese (Taiwan)
                        }}
                    />
                </CardComponent>
            </div>
        </AppLayout>
    )
}
