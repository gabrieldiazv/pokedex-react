import './App.css'
import { usePokemonImg } from './hooks/usePokemonImg'

function App () {
  const { urlImg, infoPokemon, siguientePokemon, anteriorPokemon } = usePokemonImg()
  return (
    <div className='contenedor-principal'>
      <img
        className='img-pokedex'
        src='/pokedex.png'
        alt='es una pokedex de pokemon'
      />
      <div className='contenedor-nro'>
        <p>N.º</p>
        <h2 className='numero'>
          {
           ((infoPokemon.id).toString().length) === 1
             ? `00${infoPokemon.id}`
             : ((infoPokemon.id).toString().length) === 2
                 ? `0${infoPokemon.id}`
                 : infoPokemon.id
          }
        </h2>
      </div>
      <div className='contenedor-nombre'>
        <h2>{infoPokemon.name}</h2>
      </div>
      <div className='contenedor-flechas'>
        <button className='btn-pokedex' onClick={anteriorPokemon}>
          ⬅
        </button>
        <button className='btn-pokedex' onClick={siguientePokemon}>
          ➡
        </button>
      </div>
      <img className='gif-pokemon' src={urlImg} alt='es un pokemon' />
    </div>
  )
}

export default App
