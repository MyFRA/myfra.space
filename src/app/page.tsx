import BlogContainerComponent from '@/components/BlogContainerComponent'
import BlogListItemComponent from '@/components/BlogListItemComponent'
import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import AboutMeComponent from '@/partials/pages/home/AboutMe/AboutMeComponent'
import TopAboutComponent from '@/partials/pages/home/TopAbout/TopAboutComponent'
import WorkExperienceComponent from '@/partials/pages/home/WorkExperience/WorkExperienceComponent'

export default function Home() {
    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <TopAboutComponent />
                    <div className="flex flex-col gap-8">
                        <AboutMeComponent />
                        <WorkExperienceComponent />
                    </div>

                    {/* <div>
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="font-semibold text-base lg:text-lg">
                                Projects
                            </h1>
                            <a
                                href=""
                                className="text-xs lg:text-sm hover:underline"
                            >
                                {' '}
                                View All{' '}
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/MyFRA/Farah-Greeting-App"
                                    target="_blank"
                                    className="flex justify-between items-center hover:underline"
                                >
                                    <div>
                                        <h3 className="text-sm lg:text-base font-semibold">
                                            Farah Greeting App
                                        </h3>
                                        <p className="text-[15px] mt-0.5 hidden lg:block">
                                            An app or game with a birthday theme
                                            that I made specifically for a girl
                                            I like as a birthday gift
                                        </p>
                                    </div>
                                    <p className="text-sm lg:text-base font-semibold">
                                        2023
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-5" />

                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-base lg:text-lg">
                                Blogs
                            </h1>
                            <a href="" className="text-sm hover:underline">
                                {' '}
                                View All{' '}
                            </a>
                        </div>
                        <BlogContainerComponent>
                            <BlogListItemComponent />
                        </BlogContainerComponent>
                    </div> */}
                </CardComponent>
            </div>
        </AppLayout>
    )
}
