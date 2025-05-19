'use client'

import BaseTitleComponent from '@/components/BaseTitleComponent'
import WorkExperienceItemComponent from './partials/WorkExperienceItemComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { WorkExperienceType } from '@/types/WorkExperienceType'

export default function WorkExperienceComponent() {
    /**
     * States
     *
     */
    const [workExperiences, setWorkExperiences] = useState<
        WorkExperienceType[]
    >([])

    /**
     * Deps
     *
     */
    useEffect(() => {
        loadWorkExperiences()
    }, [])

    /**
     * Methods
     *
     */
    const loadWorkExperiences = () => {
        axios.get('/static/json/work-experiences.json').then((res) => {
            res.data.reverse()
            setWorkExperiences(res.data)
        })
    }

    return (
        <div>
            <BaseTitleComponent>Work Experience</BaseTitleComponent>
            <div className="flex flex-col gap-8">
                {workExperiences.map((workExperience, i) => (
                    <WorkExperienceItemComponent
                        workExperience={workExperience}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}
