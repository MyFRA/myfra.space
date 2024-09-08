import ProjectItemComponent from './ProjectItemComponent'

export default function ProjectsComponent() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 1, 2, 3, 4, 5].map((e) => (
                <ProjectItemComponent key={e} />
            ))}
        </div>
    )
}
