import React from 'react'

export default function BaseParagraphComponent({
    children,
}: {
    children: React.ReactNode
}) {
    return <p className="text-sm lg:text-base leading-normal">{children}</p>
}
