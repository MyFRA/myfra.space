import BaseParagraphComponent from '@/components/BaseParagraphComponent'
import BaseTitleComponent from '@/components/BaseTitleComponent'

/* eslint-disable react/no-unescaped-entities */
export default function AboutMeComponent() {
    return (
        <div>
            <BaseTitleComponent>About</BaseTitleComponent>
            <BaseParagraphComponent>
                Software Engineer with 4+ years of experience in the
                professional industry. Can assist in making products, both
                websites and applications individually or as a team. I am
                currently focused on learning English to improve my
                communication skills and becoming fluent in speaking.
            </BaseParagraphComponent>
        </div>
    )
}
