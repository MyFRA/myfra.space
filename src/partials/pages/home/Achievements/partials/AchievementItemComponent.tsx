'use client'

import { AchievementType } from '@/types/AchievementType'
import { createRef } from 'react'

export default function AchievementItemComponent({
    achievement,
}: {
    achievement: AchievementType
}) {
    /**
     * Refs
     *
     */
    const modalRef = createRef<HTMLDialogElement>()

    return (
        <div className="relative">
            <div>
                <div className="flex items-center gap-0.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-medal text-yellow-500"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 4v3m-4 -3v6m8 -6v6" />
                        <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
                    </svg>
                    <span className="font-semibold">
                        {achievement.position}
                    </span>
                </div>
                <h4 className="font-semibold font-lora mt-1">
                    {achievement.title}
                </h4>
                <p className="text-sm mt-0.5">{achievement.description}</p>
                <button
                    type="button"
                    onClick={() => {
                        modalRef.current?.showModal()
                    }}
                    className="flex items-center text-xs gap-1 border border-gray-300 px-2 py-1 rounded-sm mt-2.5 hover:bg-slate-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-certificate"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                        <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                        <path d="M6 9l12 0" />
                        <path d="M6 12l3 0" />
                        <path d="M6 15l2 0" />
                    </svg>
                    View Certificate
                </button>
            </div>
            <div>
                <p className="absolute top-0 right-0 font-bold text-xs lg:text-sm">
                    {achievement.date}
                </p>
            </div>

            <dialog className="modal" ref={modalRef}>
                <div className="modal-box rounded-sm p-10 lg:w-4/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-slate-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </form>
                    <div>
                        <img
                            className="w-full rounded-sm"
                            src={
                                '/static/achievements/' +
                                achievement.certificate
                            }
                            alt={achievement.certificate}
                        />
                    </div>
                </div>
            </dialog>
        </div>
    )
}
