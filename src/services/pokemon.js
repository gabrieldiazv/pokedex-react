
import { DETALLE_POKEMON, URL_POKEAPI_SPRITES } from '../constants'

export const obtenerDetallePokemon = async (idPokemon) => {
  const res = await fetch(`${DETALLE_POKEMON}${idPokemon}`)
  const data = await res.json()
  return data
}

export const obtenerSpritePokemon = (idPokemon) => {
  return `${URL_POKEAPI_SPRITES}${idPokemon}.gif`
}
