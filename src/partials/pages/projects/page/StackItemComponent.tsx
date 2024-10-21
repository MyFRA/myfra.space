export default function StackItemComponent({
    tech_stack,
}: {
    tech_stack: string
}) {
    return (
        <span className="text-xs border rounded-sm px-2 py-0.5 border-gray-300">
            {tech_stack}
        </span>
    )
}
