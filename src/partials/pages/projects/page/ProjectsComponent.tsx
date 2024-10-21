'use client'

import { useEffect, useState } from 'react'
import ProjectItemComponent from './ProjectItemComponent'
import { ProjectType } from '@/types/ProjectType'
import axios from 'axios'

export default function ProjectsComponent() {
    /**
     * States
     *
     */
    const [projects, setProjects] = useState<ProjectType[]>([])

    /**
     * Deps
     *
     */
    useEffect(() => {
        loadProjects()
    }, [])

    /**
     * Methods
     *
     */
    const loadProjects = () => {
        axios.get('/static/json/projects.json').then((res) => {
            setProjects(res.data)
        })
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
                <ProjectItemComponent project={project} key={i} />
            ))}
        </div>
    )
}
