import React from 'react'

export default function BaseTitleComponent({
    children,
}: {
    children: React.ReactNode
}) {
    return <h3 className="font-lora text-2xl font-semibold mb-4">{children}</h3>
}
