import { ReactElement } from 'react'

export default function AccountButtonComponent({
    href,
    title,
    icon,
    classname,
}: {
    href: string
    title: string
    icon: ReactElement
    classname?: string
}) {
    return (
        <li className="flex-1 lg:flex-[unset]">
            <a
                href={href}
                target="_blank"
                className={`flex border px-2 lg:px-3 py-1 w-full lg:w-fit text-xs justify-center items-center gap-1 border-gray-300 rounded-sm hover:bg-slate-50 ${
                    classname ? classname : ''
                }`}
            >
                {icon}
                {title}
            </a>
        </li>
    )
}
