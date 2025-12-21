import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'

export const Post = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/blogs/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'src/blogs',
    documentTypes: [Post],
    fieldOptions: {
        bodyFieldName: 'content',
        typeFieldName: '__typename',
    },
    markdown: { rehypePlugins: [highlight as any] },
})
