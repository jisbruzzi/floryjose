import type { GrayMatterFile } from "gray-matter"
import React, { PropsWithChildren, useReducer } from "react"
import { getBySlug, getPortfolioItems, getTech } from "../lib/landingParts"
import markdownToHtml from "../lib/markdownToHtml"

interface HomeProps {
  main: GrayMatterFile<string>,
}

export default function Homepage(props: HomeProps) {
  return <div className="mx-auto bg-white">
    <div
    className="prose  my-8 prose-compact notprint:prose-weaker print:my-2 print:prose-super-compact print:prose-bluedots"
      dangerouslySetInnerHTML={{ __html: props.main.content }}
    />
  </div>
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  async function htmlPart(name: string): Promise<GrayMatterFile<string>> {
    const post = getBySlug(name)
    const content = await markdownToHtml(post.content || '')
    return {
      ...post,
      content,
      orig: ""
    }
  }

  return {
    props: {
      main:await htmlPart("main.md")
    },
  }
}