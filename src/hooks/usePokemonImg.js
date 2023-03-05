
import { useEffect, useState } from 'react'
import { obtenerDetallePokemon, obtenerSpritePokemon } from '../services/pokemon'

export const usePokemonImg = () => {
  const [idPokemon, setIdPokemon] = useState(1)
  const [urlImg, setUrlImg] = useState('')
  const [infoPokemon, setInfoPokemon] = useState({
    name: '',
    abilities: [],
    id: 1
  })
  useEffect(() => {
    getDetailPokemon()
    getGifPokemon()
  }, [idPokemon])

  const getDetailPokemon = () => {
    obtenerDetallePokemon(idPokemon).then((res) => {
      setInfoPokemon({
        name: res.name,
        abilities: res.abilities,
        id: res.id
      })
      console.log(typeof res.id)
    })
  }

  const getGifPokemon = () => {
    const url = obtenerSpritePokemon(idPokemon)
    setUrlImg(url)
  }

  const siguientePokemon = () => {
    if (idPokemon === 151) return
    setIdPokemon(idPokemon + 1)
  }

  const anteriorPokemon = () => {
    if (idPokemon === 1) return
    setIdPokemon(idPokemon - 1)
  }

  return { urlImg, infoPokemon, siguientePokemon, anteriorPokemon }
}
