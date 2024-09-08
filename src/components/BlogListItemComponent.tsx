export default function BlogListItemComponent() {
    return (
        <li className="flex lg:flex-row gap-4 lg:gap-6 justify-between items-center">
            <a
                href="/blogs/1"
                className="flex-[3] font-medium hover:opacity-80 text-[0.9rem] lg:text-base line-clamp-1 lg:line-clamp-2"
            >
                Menjadi Tidak Tahu di Era Informasi
            </a>
            <div className="flex-[1]">
                <p className="text-right text-xs lg:text-sm whitespace-nowrap">
                    4 March 2023
                </p>
            </div>
        </li>
    )
}
