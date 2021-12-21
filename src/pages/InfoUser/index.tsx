import { Link } from "react-router-dom"
import { useForm } from "../../context/formContext"




export function InfoUser(){

    const { state, dispatch } = useForm()

    return(
        <div>
            <Link to="/home">Voltar</Link>
            <h3>{state.email}</h3>
            <h3>{state.password}</h3>
            <h3>{state.name}</h3>
        </div>
    )
}