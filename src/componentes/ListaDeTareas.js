import Reac, { useState } from 'react'
import { TareaFormulario } from './TareaFormulario'
import '../styles/ListaDeTareas.css'
import { useState } from 'react'

export const ListaDeTareas = () => {

    const [tareas, setTareas]=useState([])


  return (
    <>
        <TareaFormulario/>
        <div className='tareas-lista-contenedor'>
            Lista de tareas
        </div>
    </>
  )
}
