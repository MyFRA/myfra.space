import type { Metadata, ResolvingMetadata } from 'next'
import BlogDetailComponent from './_component'
import { allBlogs } from 'contentlayer/generated'

type Props = {
    params: { slug: string }
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const blog = allBlogs.find(
        (blog) =>
            blog._raw.flattenedPath.replaceAll('blogs/', '') === params.slug
    )

    return {
        openGraph: {
            title: blog?.title,
            description: blog?.title,
            type: 'website',
            url: 'https://myfra.space/blogs/' + params.slug,
            images: [
                {
                    url: '/static/blogs/' + params.slug + '.png',
                    secureUrl: '/static/blogs/' + params.slug + '.png',
                    alt: blog?.title,
                },
            ],
        },
    }
}

export default function BlogDetailPage({
    params,
}: {
    params: { slug: string }
}) {
    return <BlogDetailComponent params={params} />
}
