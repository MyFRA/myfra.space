/* eslint-disable react/no-unescaped-entities */
import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'
import BlogContainerComponent from '@/components/BlogContainerComponent'
import BlogListItemComponent from '@/components/BlogListItemComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'

export default function BlogPage() {
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
                            <BlogListItemComponent />
                            <BlogListItemComponent />
                            <BlogListItemComponent />
                        </BlogContainerComponent>
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
