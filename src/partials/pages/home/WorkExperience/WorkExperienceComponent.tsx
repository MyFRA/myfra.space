import BaseTitleComponent from '@/components/BaseTitleComponent'
import WorkExperienceItemComponent from './partials/WorkExperienceItemComponent'

export default function WorkExperienceComponent() {
    return (
        <div>
            <BaseTitleComponent>Work Experience</BaseTitleComponent>
            <div className="flex flex-col gap-8">
                <WorkExperienceItemComponent />
                <WorkExperienceItemComponent />
            </div>
        </div>
    )
}
