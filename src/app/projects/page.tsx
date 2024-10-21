import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import ProjectsComponent from '@/partials/pages/projects/page/ProjectsComponent'

export const dynamic = 'force-dynamic'

export default function ProjectsPage() {
    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <BaseTitleComponent>Projects</BaseTitleComponent>
                    <BaseParagraphComponent>
                        These are some of my work projects that I contribute in
                        the past.
                    </BaseParagraphComponent>
                    <div className="mt-6">
                        <ProjectsComponent />
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
