import { ReactElement } from 'react'

export default function NavLinkComponent({
    title,
    icon,
    href,
    isActive,
}: {
    title: string
    icon: ReactElement
    href: string
    isActive: boolean
}) {
    return (
        <li className="w-full md:w-fit">
            <a
                href={href}
                className={`text-sm md:border rounded font-medium border-gray-300 py-4 md:py-1 px-2 flex items-center gap-1.5 hover:bg-slate-50 ${
                    isActive ? 'bg-slate-50' : ''
                }`}
            >
                {icon}
                {title}
            </a>
        </li>
    )
}
