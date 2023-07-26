

const toggleFavorite = ( id: number ) => {
    let favorites: number[] = JSON.parse( localStorage.getItem('favoritos') || '[]')

    favorites.includes( id ) ? favorites = favorites.filter( pokeId => pokeId !== id ) : favorites.push( id )

    localStorage.setItem('favoritos', JSON.stringify( favorites ))
}

const existInFavorites = ( id: number): boolean => { 

    if( typeof window ===  'undefined' ) return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('favoritos') || '[]')

    return favorites.includes( id )
}

const pokemons = () => {
    return JSON.parse( localStorage.getItem('favoritos') || '[]')
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons
}