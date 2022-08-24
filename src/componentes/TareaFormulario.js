import React from 'react'
import '../styles/TareaFormulario.css'

export const TareaFormulario = (props) => {
  return (
    <form className='tarea-formulario'>
        <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        />

        <button className='tarea-boton'>
            Agregar tarea
        </button>
    </form>
  )
}
