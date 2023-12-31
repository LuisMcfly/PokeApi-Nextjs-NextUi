import { useEffect, useState } from "react";

import { Layout } from "@/components/layouts"
import { NoFavoritos } from "@/components/ui";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemon";

const FavoritosPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons())
  }, [])
  

  return (
    <Layout title="Favoritos">

      {
        favoritePokemons.length === 0 ? 
        (<NoFavoritos />) 
        :
        (<FavoritePokemons pokemons={ favoritePokemons }/>)
      }
       
    </Layout>
  )
}

export default FavoritosPage;
