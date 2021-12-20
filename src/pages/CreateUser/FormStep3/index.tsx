import { ChangeEvent, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Theme} from '../../../components/Theme'

import { useForm, FormActions } from '../../../context/formContext'


export function FormStep3(){
    
    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === ''){
            history.push('/')
        }
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])



    return(
        <Theme>
            <div>
                <p>passo 3/3 </p>
                <h1>O que melhor descreve você, {state.name}</h1>
                <p>preecha o nome abaixo com seu nome completo</p>

                <hr />
                <Link to="/step2">
                    Voltar
                </Link>
            </div>
        </Theme>
    )
}