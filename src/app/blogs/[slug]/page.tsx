'use client'

import CardComponent from '@/components/CardComponent'
import AppLayout from '@/layouts/AppLayout'
import { DiscussionEmbed } from 'disqus-react'
import { allBlogs } from 'contentlayer/generated'
import { DateUtil } from '@/utils/DateUtil'
import 'highlight.js/styles/tokyo-night-dark.min.css'

export default function BlogDetailPage({
    params,
}: {
    params: { slug: string }
}) {
    const blog = allBlogs.find(
        (blog) => blog._raw.flattenedPath === params.slug
    )

    if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`)

    return (
        <AppLayout>
            <div className="app-container">
                <CardComponent>
                    <div>
                        <a
                            href="/blogs"
                            className="text-xs lg:text-sm hover:underline"
                        >
                            Back
                        </a>
                    </div>

                    <h1 className="text-base leading-normal lg:text-xl font-semibold text-center mt-2">
                        {blog?.title}
                    </h1>

                    <div className="my-6">
                        <p className="text-xs lg:text-sm mb-1">
                            Written by: Tomy Wibowo
                        </p>
                        <p className="text-xs lg:text-sm">
                            Published at:{' '}
                            {DateUtil.formatDateStringToDmY(blog?.date)}
                        </p>
                    </div>

                    <div className="mdx-reset">
                        <div
                            className="[&>*]:mb-3 [&>*:last-child]:mb-0"
                            dangerouslySetInnerHTML={{
                                __html: blog.content.html,
                            }}
                        />
                    </div>
                    {/* <div className="text-gray-700 text-[15px] pt-5">
                        <h3 className="mb-1 font-semibold text-base lg:text-lg">
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi enim velit alias nisi vitae doloribus
                            harum dolor obcaecati odio veritatis.
                        </p>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae aspernatur magnam velit error
                            repellat dicta libero fuga inventore sequi quod, rem
                            corrupti eligendi autem cupiditate ipsa hic tenetur
                            sit ea!
                        </p>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, exercitationem dolor hic animi illo
                            numquam maiores! Quasi voluptatum expedita incidunt
                            doloremque at! Vero assumenda quia sed temporibus!
                            Suscipit iure ipsam, rerum doloremque, nihil fugit
                            assumenda aspernatur facere sunt, quibusdam
                            similique!
                        </p>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Cum at distinctio voluptates consequatur
                            dolores velit officia aspernatur beatae harum,
                            laborum temporibus? Voluptatum veniam est laborum
                            voluptatem doloribus esse, ratione saepe? Amet
                            pariatur ullam laudantium, officiis vitae,
                            cupiditate quia non ipsum quo quis molestias!
                            Veritatis aut deleniti nisi enim nemo voluptatum!
                        </p>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi obcaecati, beatae nostrum dolorem magni
                            tempore magnam exercitationem ut quisquam, mollitia
                            deleniti incidunt culpa deserunt saepe amet, maxime
                            quis nulla eaque optio. Architecto natus ducimus
                            voluptas sapiente cumque id vero porro, possimus
                            consectetur debitis dicta quae eos eaque, cum est
                            earum fuga ab soluta incidunt? Quaerat dolores
                            distinctio rem ea corrupti! Aspernatur architecto
                            quod tempore in cumque animi est hic id illo velit.
                            Assumenda, laboriosam ex id commodi enim quia, eius
                            aliquid doloribus aut facere magnam dolorum vitae
                            quibusdam voluptates cumque. Aut neque sint impedit
                            quod temporibus quo soluta, commodi debitis.
                        </p>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint dolor enim fugiat voluptatum facilis
                            itaque accusamus quisquam repudiandae praesentium
                            incidunt laboriosam laborum temporibus placeat modi
                            consequuntur sapiente nam eos, quidem molestias hic
                            possimus. Odio tempore dolorum minus reprehenderit
                            dolores nesciunt.
                        </p>
                        <p className="indent-4 lg:indent-10 mb-3 text-sm text-justify lg:text-base">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Magnam sapiente recusandae quasi. Optio fuga
                            voluptas rerum nisi quidem doloribus cupiditate
                            excepturi voluptates necessitatibus? Dolores officia
                            deserunt quod iste hic blanditiis voluptate
                            delectus, sapiente labore molestias reiciendis ipsa
                            esse ratione nobis in amet adipisci recusandae
                            asperiores nesciunt voluptas autem velit officiis?
                            Explicabo provident dolore placeat porro ratione,
                            amet numquam libero beatae, delectus odio impedit
                            consequatur ad vel dolor eveniet sapiente incidunt
                            quidem. Expedita quaerat, deleniti quae explicabo
                            neque, tempore saepe ullam non est, nisi blanditiis
                            repellendus. Explicabo sapiente voluptate ipsa unde
                            repellendus, perferendis sed modi ea ullam
                            repudiandae pariatur minima animi rem nulla. Quo
                            odit fuga possimus itaque? Rerum a, dolorem mollitia
                            et quas deleniti perspiciatis expedita libero
                            tempora molestiae provident debitis numquam ut
                            corporis similique consectetur, autem enim soluta
                            quo aperiam culpa voluptate officiis harum
                            doloremque? Illum excepturi ducimus in, consectetur
                            reiciendis omnis modi totam neque cupiditate
                            repellendus architecto voluptates, repudiandae ad
                            asperiores voluptas, numquam deleniti dolore
                            laudantium explicabo at consequatur id aut
                            voluptatibus? Enim, nam laudantium? Alias
                            dignissimos saepe labore blanditiis rerum dolorem
                            ab, dolores qui voluptates eos nihil voluptatem
                            doloremque in temporibus accusantium quo sit
                            officia. Amet soluta molestiae quaerat eligendi,
                            odit, cum aspernatur rem consequuntur aliquid
                            placeat dignissimos nihil eius et delectus eaque
                            perspiciatis autem? Omnis voluptatum dolorem
                            molestiae. Necessitatibus dicta excepturi eos esse
                            non praesentium quo, possimus molestiae quia ipsam
                            debitis voluptatibus est aliquam explicabo labore?
                        </p>
                    </div> */}
                </CardComponent>

                <CardComponent>
                    <DiscussionEmbed
                        shortname="myfra-1"
                        config={{
                            url: 'http://localhost:3000/blogs/1',
                            identifier: '1',
                            title: 'Anime',
                            language: 'id_ID', //e.g. for Traditional Chinese (Taiwan)
                        }}
                    />
                </CardComponent>
            </div>
        </AppLayout>
    )
}

// export const generateStaticParams = async () => allBlogs.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
//   return { title: post.title }
// }

// const PostLayout = ({ params }: { params: { slug: string } }) => {
//   const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug)
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

//   return (
//     <article className="mx-auto max-w-xl py-8">
//       <div className="mb-8 text-center">
//         <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
//           {format(parseISO(post.date), 'LLLL d, yyyy')}
//         </time>
//         <h1 className="text-3xl font-bold">{post.title}</h1>
//       </div>
//     </article>
//   )
// }

// export default PostLayout
