import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';
import React from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';

interface Props{
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
      <Layout title='Algun Pokemon'>
          <h1>{pokemon.name}</h1>
      </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map( (value, index) => `${ index + 1 }` );
  return {
    paths: pokemon151.map( id => ({
        params: {id}
    })),
    fallback: false,
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } = params as { id: string };
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    
    return {
      props: {
        pokemon: data,
        
      }
    }
  }

  
export default PokemonPage