import { WorkExperienceType } from '@/types/WorkExperienceType'

export default function WorkExperienceItemComponent({
    workExperience,
}: {
    workExperience: WorkExperienceType
}) {
    return (
        <div className="border-b pb-8">
            <div className="flex items-start lg:items-center justify-between">
                <div className="flex flex-col lg:flex-row lg:items-center gap-1.5 lg:gap-3">
                    <span className="font-semibold text-sm lg:text-base">
                        {workExperience.company}
                    </span>
                    <div className="flex items-center self-stretch gap-1.5">
                        {workExperience.jobType.map((jobType, i) => (
                            <span
                                className="border border-gray-300 text-xs flex items-center h-full px-2 py-0.5 lg:py-0"
                                key={i}
                            >
                                {jobType}
                            </span>
                        ))}
                    </div>
                </div>
                <span className="font-bold text-xs lg:text-sm">
                    {workExperience.start_date} - {workExperience.end_date}
                </span>
            </div>
            <span className="mt-2.5 lg:mt-1 block font-medium tracking-wide text-sm lg:text-base">
                {workExperience.role}
            </span>
            <ul className="list-disc pl-6 mt-2">
                {workExperience.jobs.map((job, i) => (
                    <li className="text-sm lg:text-base" key={i}>
                        {job}
                    </li>
                ))}
            </ul>
        </div>
    )
}
