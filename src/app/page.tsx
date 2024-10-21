import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import AboutMeComponent from '@/partials/pages/home/AboutMe/AboutMeComponent'
import AchievementsComponent from '@/partials/pages/home/Achievements/AchievementsComponent'
import TopAboutComponent from '@/partials/pages/home/TopAbout/TopAboutComponent'
import WorkExperienceComponent from '@/partials/pages/home/WorkExperience/WorkExperienceComponent'

export const dynamic = 'force-dynamic'

export default function Home() {
    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <TopAboutComponent />
                    <div className="flex flex-col gap-8">
                        <AboutMeComponent />
                        <hr />
                        <WorkExperienceComponent />
                        <hr />
                        <AchievementsComponent />
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
