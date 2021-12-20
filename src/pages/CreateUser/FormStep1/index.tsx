import { ChangeEvent, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {Theme} from '../../../components/Theme'

import { useForm, FormActions } from '../../../context/formContext'

import * as C from './styles'

export function FormStep1(){
    
    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    function handleNextStep(){
        if(state.name !== ''){
            history.push('/step2')
        }else{
            alert("preencha os dados")
        }
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        dispatch({
            type: FormActions.setName,
            payload: event.target.value,
        })
    }

    return(
        <C.Container>
            <Theme>
                <div>
                    <p>passo {state.currentStep}/3</p>
                    <h1>vamos começar com seu nome</h1>
                    <p>preecha o nome abaixo com seu nome completo</p>

                    <hr />

                        <label htmlFor="text"></label>
                        <input 
                            type="text" 
                            autoFocus
                            onChange={handleNameChange}
                            id="text"
                        />
                    <button onClick={handleNextStep}>Proximo</button>
                </div>
            </Theme>
        </C.Container>
    )
}