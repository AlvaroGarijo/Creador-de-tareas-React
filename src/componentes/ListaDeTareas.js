import React, { useState } from 'react'
import { TareaFormulario } from './TareaFormulario'
import { Tarea } from './Tarea'
import '../styles/ListaDeTareas.css'


export const ListaDeTareas = () => {

    const [tareas, setTareas]=useState([])
    
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){                                  //verificamos que la tarea no está vacía
            tarea.texto = tarea.texto.trim();                   // Le quitamos los espacios innecesarios
            const tareasActualizadas = [tarea, ...tareas];       //generamos array con todas las tareas anteriores y la tarea nueva
            setTareas(tareasActualizadas)                        //Actualizamos el estado
        }
        console.log(tarea);
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

  return (
    <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea) =>
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada= {tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea} />
                )
            }
        </div>
    </>
  )
}
