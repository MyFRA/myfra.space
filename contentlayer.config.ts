import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blogs/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (blog) => `/${blog._raw.flattenedPath}`,
        },
    },
}))

export const WrittenScene = defineDocumentType(() => ({
    name: 'WrittenScene',
    filePathPattern: `written-scenes/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (writtenScene) => `/${writtenScene._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'src',
    documentTypes: [Blog, WrittenScene],
    fieldOptions: {
        bodyFieldName: 'content',
        typeFieldName: '__typename',
    },
    markdown: { rehypePlugins: [highlight as any] },
})
