export default function BlogListItemComponent() {
    return (
        <li className="flex gap-6 justify-between items-center">
            <a
                href="/blogs/1"
                className="flex-[3] font-medium hover:opacity-80"
            >
                Menjadi Tidak Tahu di Era Informasi
            </a>
            <div className="flex-[1]">
                <p className="text-right text-sm">4 March 2023</p>
            </div>
        </li>
    )
}
