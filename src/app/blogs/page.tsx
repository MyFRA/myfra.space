import BlogContainerComponent from '@/components/BlogContainerComponent'
import BlogListItemComponent from '@/components/BlogListItemComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'

export default function BlogPage() {
    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <h1 className="text-lg lg:text-2xl font-semibold">Blog</h1>

                    <BlogContainerComponent>
                        <BlogListItemComponent />
                    </BlogContainerComponent>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
