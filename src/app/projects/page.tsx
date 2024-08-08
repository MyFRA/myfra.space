import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import ProjectsComponent from '@/partials/pages/projects/page/ProjectsComponent'

export default function ProjectsPage() {
    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <BaseTitleComponent>Projects</BaseTitleComponent>
                    <BaseParagraphComponent>
                        These are some of my personal projects that I made in
                        the past. Some of them are still in use, some are not.
                        Mostly made them just for fun and to learn new things.
                    </BaseParagraphComponent>
                    <div className="mt-6">
                        <ProjectsComponent />
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
