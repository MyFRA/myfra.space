'use client'

import BaseTitleComponent from '@/components/BaseTitleComponent'
import AchievementItemComponent from './partials/AchievementItemComponent'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AchievementType } from '@/types/AchievementType'

export default function AchievementsComponent() {
    /**
     * States
     *
     */
    const [achievements, setAchievements] = useState<AchievementType[]>([])

    /**
     * Deps
     *
     */
    useEffect(() => {
        loadAchievements()
    }, [])

    /**
     * Methods
     *
     */
    const loadAchievements = () => {
        axios.get('/static/json/achievements.json').then((res) => {
            setAchievements(res.data)
        })
    }

    return (
        <div>
            <BaseTitleComponent>Achievements</BaseTitleComponent>
            <div className="flex flex-col gap-6">
                {achievements.map((achievement, i) => (
                    <AchievementItemComponent
                        achievement={achievement}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}
