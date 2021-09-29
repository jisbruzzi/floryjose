import type { GrayMatterFile } from "gray-matter"
import React, { PropsWithChildren, useEffect, useReducer, useState } from "react"
import { getBySlug, getPortfolioItems, getTech } from "../lib/landingParts"
import markdownToHtml from "../lib/markdownToHtml"

interface HomeProps {
  main: GrayMatterFile<string>,
}

function Hero(){
  return <div className="relative">
    <img src="assets/novios.jpg" className="w-full rounded-t-lg"/>
    <div className="absolute top-0 w-full flex">
      <div className="w-min mx-auto whitespace-nowrap  rounded-md bg-opacity-60 bg-tomate  text-white m-8 
      font-serif
      p-1 md:p-4
      text-2xl md:text-6xl ">
        ¡Nos casamos!
      </div>
    </div>
  </div>
}

export default function Homepage(props: HomeProps) {
  const [name,setName]=useState<string|null>(null);
  useEffect(()=>{
    setName(new URLSearchParams(window.location.search).get("n"));
  },[])
  return <div className="mx-auto container">
    <div className="m-4 mt-8 bg-piel rounded-lg shadow-lg">
      <Hero/>
      {name && <p>{name}, ¡estás invitado a nuestro casamiento!</p>}
      <div
      className="prose m-8 prose-compact notprint:prose-weaker print:my-2 print:prose-super-compact print:prose-bluedots"
      dangerouslySetInnerHTML={{ __html: props.main.content }}
      />

    </div>
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