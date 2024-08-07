export default function WorkExperienceItemComponent() {
    return (
        <div>
            <div className="flex items-start lg:items-center justify-between">
                <div className="flex flex-col lg:flex-row lg:items-center gap-1.5 lg:gap-3">
                    <span className="font-semibold text-sm lg:text-base">
                        PT ABCDEFGHIJKL
                    </span>
                    <div className="flex items-center self-stretch gap-1.5">
                        <span className="border border-gray-300 text-xs flex items-center h-full px-2 py-0.5 lg:py-0">
                            REMOTE
                        </span>
                        <span className="border border-gray-300 text-xs flex items-center h-full px-2 py-0.5 lg:py-0">
                            FULL TIME
                        </span>
                    </div>
                </div>
                <span className="font-bold text-xs lg:text-sm">
                    Apr 2024 - Present
                </span>
            </div>
            <span className="mt-2.5 lg:mt-1 block font-medium tracking-wide text-sm lg:text-base">
                Fullstack Web Developer
            </span>
            <ul className="list-disc pl-6 mt-2">
                <li className="text-sm lg:text-base">
                    Lorem ipsum dolor sit amet.
                </li>
                <li className="text-sm lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, omnis!
                </li>
            </ul>
        </div>
    )
}
