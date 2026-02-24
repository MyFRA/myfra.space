/* eslint-disable react/no-unescaped-entities */
import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'
import BlogContainerComponent from '@/components/BlogContainerComponent'
import BlogListItemComponent from '@/components/BlogListItemComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import { allWrittenScenes } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function BlogPage() {
    const writtenScenes = allWrittenScenes.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )

    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <BaseTitleComponent>Written Scenes</BaseTitleComponent>
                    <BaseParagraphComponent>
                        A collection of written scenes - brief moments,
                        observations, and quiet reflections I capture from time
                        to time.
                    </BaseParagraphComponent>

                    <div className="mt-5">
                        <BlogContainerComponent>
                            {writtenScenes.map((blog, idx) => (
                                <BlogListItemComponent blog={blog} key={idx} />
                            ))}
                        </BlogContainerComponent>
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
