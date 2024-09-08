import type React from 'react'

export default function CardComponent({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="p-5 lg:p-10 bg-white rounded-sm">{children}</div>
}
