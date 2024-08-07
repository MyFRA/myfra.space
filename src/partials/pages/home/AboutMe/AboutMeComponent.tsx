import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'

/* eslint-disable react/no-unescaped-entities */
export default function AboutMeComponent() {
    return (
        <div>
            <BaseTitleComponent>About</BaseTitleComponent>
            <BaseParagraphComponent>
                I am a software engineer with more than 4 years of experience in
                software development. I currently focus on web and android
                development, but I am also open to other technologies as long as
                they can solve people's problems. I am able to speak Indonesian
                and English, currently I am studying Japanese. In addition to
                the above, I like to write and play musical instruments in my
                spare time
            </BaseParagraphComponent>
        </div>
    )
}
