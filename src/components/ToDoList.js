import {useRef, useState} from 'react';
import ItemList from './ItemList';

const ToDoList = () =>{
    const [lista, setLista] = useState([])
    const [input, setInput] = useState('')
    const id = useRef(1)

    
    const guardar_tarea = ()=>{
        const objeto_tarea = {
            nombre_tarea: input,
            id_tarea: id.current
        }

        if(input.length >2){
            setLista([...lista, objeto_tarea])
            setInput('')
            id.current = id.current + 1

        }
    }

    const borrar_tarea = (id)=>{
        const nueva_lista = lista.filter(elemento => elemento.id_tarea !== id)
        setLista(nueva_lista)
    }

    return (
        <div>
            <div className='contenedor_todolist'>
                <input className='input_estilo' type='text' placeholder='tarea...' value={input} onChange={(e)=>setInput(e.target.value) /*esto para guardar lo que se ponga en el input*/}></input>
                <button onClick={guardar_tarea} className="botones">guardar</button>
            </div>
            {lista.map(item => <ItemList  tarea={item} key={item.id} borrar_tarea={borrar_tarea}/> )}

        </div>
    );
}

export default ToDoList
