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
        <li className="w-full lg:w-fit">
            <a
                href={href}
                className={`text-sm lg:border rounded font-medium border-gray-300 py-4 lg:py-1 px-2 flex items-center gap-1.5 hover:bg-slate-50 ${
                    isActive ? 'bg-slate-50' : ''
                }`}
            >
                {icon}
                {title}
            </a>
        </li>
    )
}
