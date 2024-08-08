import BaseTitleComponent from '@/components/BaseTitleComponent'
import AchievementItemComponent from './partials/AchievementItemComponent'

export default function AchievementsComponent() {
    return (
        <div>
            <BaseTitleComponent>Achievements</BaseTitleComponent>
            <div className="flex flex-col gap-6">
                <AchievementItemComponent />
                <AchievementItemComponent />
            </div>
        </div>
    )
}
