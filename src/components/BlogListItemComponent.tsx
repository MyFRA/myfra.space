import { DateUtil } from '@/utils/DateUtil'
import { Blog } from 'contentlayer/generated'

export default function BlogListItemComponent({ blog }: { blog: Blog }) {
    return (
        <li className="flex lg:flex-row gap-4 lg:gap-6 justify-between items-center">
            <a
                href={blog.url}
                className="flex-[3] font-medium hover:opacity-80 text-[0.9rem] lg:text-base line-clamp-1 lg:line-clamp-2"
            >
                {blog.title}
            </a>
            <div className="flex-[1]">
                <p className="text-right text-xs lg:text-sm whitespace-nowrap">
                    {DateUtil.formatDateStringToDmY(blog.date)}
                </p>
            </div>
        </li>
    )
}
