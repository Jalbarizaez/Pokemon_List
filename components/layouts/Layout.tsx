import React, { FC } from 'react'
import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

export const Layout: FC<{title?: string}> = ({children,title}) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Eduardo Albarizaes" />
        <meta name="description" content="Información sobre el pokémon XXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>

      <Navbar></Navbar>

      <main style={{
          padding: '0px 20px'
      }}>
          {children}
      </main>
    </>
  );
}
