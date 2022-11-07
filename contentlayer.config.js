import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    id: {
      type: 'string',
      description: 'id of the post',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The subtitle of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Subject summary',
      required: true,
    },
    image: {
      type: 'string',
      description: 'thumbnail image of the subject',
      required: false,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {},
})
