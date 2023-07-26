import { ReactNode } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
  children: ReactNode,
  title?: string
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Luis Ruiz"/>
            <meta name="description" content={`Información sobre el pokémon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
