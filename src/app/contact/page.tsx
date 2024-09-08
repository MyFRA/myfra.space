import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import AccountButtonComponent from '@/partials/pages/home/TopAbout/partials/AccountButtonComponent'

export default function ContactPage() {
    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <BaseTitleComponent>Contact</BaseTitleComponent>
                    <BaseParagraphComponent>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Debitis nesciunt soluta beatae aperiam non dolore.
                        Alias, at. Debitis, veniam omnis!
                    </BaseParagraphComponent>
                    <div className="flex flex-col-reverse lg:flex-row mt-5 gap-2.5 lg:gap-6">
                        <div className="flex-[4] flex gap-2.5 flex-col">
                            <div className="flex gap-4">
                                <div className="flex-[1]">
                                    <label
                                        htmlFor="firstname"
                                        className="font-semibold text-sm"
                                    >
                                        Firstname
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        className="border border-gray-300 block mt-1.5 rounded-sm py-1 px-2 outline-none text-sm w-full"
                                        placeholder="Firstname"
                                    />
                                </div>
                                <div className="flex-[1]">
                                    <label
                                        htmlFor="lastname"
                                        className="font-semibold text-sm"
                                    >
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        className="border border-gray-300 block mt-1.5 rounded-sm py-1 px-2 outline-none text-sm w-full"
                                        placeholder="Lastname"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-semibold text-sm"
                                >
                                    Email
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border border-gray-300 block mt-1.5 rounded-sm py-1 px-2 outline-none text-sm w-full"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="font-semibold text-sm"
                                >
                                    Message
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="border border-gray-300 block mt-1.5 rounded-sm py-1 px-2 outline-none text-sm w-full h-24"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <div className="mt-2 flex justify-end">
                                <button className="flex items-center bg-[#232323] text-white rounded-sm px-2 py-1.5 gap-1 text-sm hover:bg-opacity-80">
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
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-send"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M10 14l11 -11" />
                                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                    </svg>
                                    Send
                                </button>
                            </div>
                        </div>
                        <div className="self-stretch w-[1px] bg-gray-300"></div>
                        <div className="flex-[1]">
                            <ul className="flex lg:flex-col gap-2 lg:gap-3 lg:mt-4">
                                <AccountButtonComponent
                                    classname="lg:w-full lg:justify-start"
                                    title="Linkedin"
                                    href="https://www.linkedin.com/in/myfra/"
                                    icon={
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
                                            className="icon icon-tabler icons-tabler-outline w-5 icon-tabler-brand-linkedin"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                            <path d="M8 11l0 5"></path>
                                            <path d="M8 8l0 .01"></path>
                                            <path d="M12 16l0 -5"></path>
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                        </svg>
                                    }
                                />
                                <AccountButtonComponent
                                    classname="lg:w-full lg:justify-start"
                                    title="Email"
                                    href="mailto:tomyntapss@gmail.com"
                                    icon={
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
                                            className="icon icon-tabler icons-tabler-outline w-5 icon-tabler-mail"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                            <path d="M3 7l9 6l9 -6"></path>
                                        </svg>
                                    }
                                />
                                <AccountButtonComponent
                                    classname="lg:w-full lg:justify-start"
                                    title="Github"
                                    href="https://github.com/MyFRA"
                                    icon={
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
                                            className="icon icon-tabler icons-tabler-outline w-5 icon-tabler-brand-github"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                        </svg>
                                    }
                                />
                                <AccountButtonComponent
                                    classname="lg:w-full lg:justify-start"
                                    title="CV"
                                    href=""
                                    icon={
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
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                            <path d="M9 9l1 0" />
                                            <path d="M9 13l6 0" />
                                            <path d="M9 17l6 0" />
                                        </svg>
                                    }
                                />
                            </ul>
                        </div>
                    </div>
                </CardComponent>
            </div>
        </AppLayout>
    )
}
