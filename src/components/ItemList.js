import Checkbox from "./Checkbox"
import { useState } from "react"

const ItemList = ({tarea, borrar_tarea})=>{

    const [check, setCheck] = useState(false)

    const cambiar_check =()=>{
        setCheck(!check)
    }

    return (
        <div className="contenedor_tareas">
            <Checkbox cambiar_check={cambiar_check} check={check}/>
            <p className={check ? 'subrayado texto_tarea' : 'texto_tarea'}> {tarea.nombre_tarea} </p>
            <button onClick={()=>borrar_tarea(tarea.id_tarea)} className="botones"> borrar </button>
        </div>
    )
}
export default ItemList