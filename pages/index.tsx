import type { GrayMatterFile } from "gray-matter"
import React, { PropsWithChildren, useEffect, useReducer, useState } from "react"
import Foliage1 from "../components/Foliage1";
import Foliage2 from "../components/Foliage2";
import Foliage3 from "../components/Foliage3";
import { getBySlug, getPortfolioItems, getTech } from "../lib/landingParts"
import markdownToHtml from "../lib/markdownToHtml"

interface HomeProps {
  main: GrayMatterFile<string>,
}
function Foliage(){
  return <div>
    <Foliage1 color="#554133"/>
    <div className="-mt-8">
      <Foliage2 color="#C89670"/>
    </div>
    <div className="-mt-8">
      <Foliage3 color="#57717F"/>
    </div>
    <div className="-mt-8">
      <Foliage3 color="#C89670"/>
    </div>
  </div>
}

export default function Homepage(props: HomeProps) {
  const [name,setName]=useState<string|null>(null);
  useEffect(()=>{
    setName(new URLSearchParams(window.location.search).get("n"));
  },[])
  return <>
  <div className="absolute sm:left-0 -left-8">
    <Foliage/>
  </div>
  <div className="absolute sm:right-0 -right-12">
    <Foliage/>
  </div>
  <div className="mx-auto container max-w-screen-sm">
    <div
      className="prose m-8 prose-compact font-baskerville"
      dangerouslySetInnerHTML={{ __html: props.main.content }}
      />
  </div>
  </>
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