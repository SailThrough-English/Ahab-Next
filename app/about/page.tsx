import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Nossa Equipe' })

export default function Page() {
  return (
    <>
      {allAuthors.map((author: Authors) => {
        const mainContent = coreContent(author)
        return (
          <AuthorLayout key={author.slug} content={mainContent}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        )
      })}
    </>
  )
}
