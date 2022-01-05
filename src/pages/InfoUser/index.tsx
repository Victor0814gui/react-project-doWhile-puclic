
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useForm } from "../../context/formContext"
import * as C from './styles'



export function InfoUser(){

    const { state, dispatch } = useForm()





    return(
        <C.Container>
            <Link to="/home">Voltar</Link>
            <C.Header>
                {!state.name ? 
                (
                    <div>
                        <h1>opa, sem dados para exibir</h1>
                        <p>cadastre seus dados <Link to="/">aqui</Link></p>
                    </div>
                ) : 
                (
                    <div>
                        <h1>
                            ola {state.name},<br/>
                            <span>abaixo estão seus dados cadastrais</span>
                        </h1>
                    </div>
                )}
            </C.Header>
            
            <C.Section>
                {!state.email ? 
                (<img src="/images/search-result-not-found.webp" alt="search-result-not-found" />)
                    :
                    (
                        <>
                            <div>
                                <h2>nome:</h2>
                                <h3>{state.name}</h3>
                            </div>
                            <div>
                                <h2>email:</h2>
                                <h3>{state.email}</h3>
                            </div>
                            <div>
                                <h2>password:</h2>
                                <h3>{state.password}</h3>
                            </div>
                        </>
                    )
                }
            </C.Section>
        </C.Container>
    )
}