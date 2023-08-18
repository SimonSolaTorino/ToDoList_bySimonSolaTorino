const Checkbox = ({cambiar_check, check})=>{

    return (
        <div>
            <input type="checkbox" onChange={cambiar_check} checked={check} className="check_personalizado"></input>
        </div>
    );
}
export default Checkbox