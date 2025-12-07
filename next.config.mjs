import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import { remarkKroki } from 'remark-kroki';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, remarkMath, remarkKroki],
        rehypePlugins: [
            rehypeKatex,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                }
            ]
        ],
    },
})

export default withMDX(nextConfig)