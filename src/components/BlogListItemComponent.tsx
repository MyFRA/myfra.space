export default function BlogListItemComponent() {
    return (
        <li>
            <a href="/blogs/1" className="flex gap-6 justify-between items-start hover:underline">
                <p className="text-sm lg:text-base w-5 lg:w-20">11/9</p>
                <div className="w-full">
                    <h3 className="text-sm lg:text-base font-semibold">Menjadi Tidak Tahu di Era Informasi</h3>
                </div>
                <p className="text-sm lg:text-base font-semibold">2023</p>
            </a>
        </li>
    )
}
