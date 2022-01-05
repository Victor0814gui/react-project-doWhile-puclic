import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {Theme} from '../../../components/Theme'

import { useForm, FormActions } from '../../../context/formContext'

import step1Img from '../../../../public/images/step1.svg'
import unsubscribeImg from  '../../../../public/images/unsubscribed.webp'

import * as C from './styles'


export function FormStep1(){

    const [nameUser, setNameUser] = useState('')
    const [validateInput, setValidateInput] = useState(false)

    
    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])


    function handleNameChange(event: FormEvent){
        event.preventDefault()

        dispatch({
            type: FormActions.setName,
            payload: nameUser,
        })

        if(nameUser !== ''){
            history.push('/step2')
        }else{
            setValidateInput(true)
        }
    }

    function handleChangeBorder(){
        setValidateInput(false)
    }

    return(
        <C.Container>
            <main>
                <Theme>
                </Theme>
            </main>
            <div>
                <img src={step1Img} alt="" />
                <p>passo {state.currentStep}/3</p>
                <h2>pra começar</h2>
                
                {!validateInput ? (
                    <h1>digite seu Nome</h1>
                ) :(
                    <h1>você ainda não <br/> digitou seu Nome</h1>
                )}

                    <form onSubmit={handleNameChange}>
                        <label htmlFor="text"></label>
                        <input 
                            type="text" 
                            autoFocus
                            onChange={event => setNameUser(event.target.value)}
                            onClick={handleChangeBorder}
                            value={nameUser}
                            id="text"
                            style={{border: `3px solid ${!validateInput ? '#53FB37' : '#fd7171ec'}` }}
                        />
                        <button type="submit">Proximo</button>
                    </form>
            </div>
        </C.Container>
    )
}