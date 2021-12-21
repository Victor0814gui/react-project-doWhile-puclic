import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Theme} from '../../../components/Theme'

import { useForm, FormActions } from '../../../context/formContext'

import step2Img from '../../../../public/images/step2.svg'

import * as C from './styles'

export function FormStep2(){

    const [emailUser, setEmailUser] = useState('')

    
    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === ''){
            history.push('/')
        }
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 2
        })

    }, [])

   

    function handleCapitureEmail(event: FormEvent){
        event.preventDefault()

        const email = emailUser
        
        dispatch({
            type: FormActions.setEmail,
            payload: email,
        })

        if(emailUser !== ''){
            history.push('/step3')
        }else{
            alert("preencha os dados")
        }
    }

    return(
        <C.Container>
            <main>
                <Theme>
                </Theme>
            </main>
            <div>
                <img src={step2Img} alt="" />
                <p>passo {state.currentStep}/3 </p>
                    <h2>blz, {state.email} </h2>
                    <h2>agora</h2>
                    <h1>digite seu email</h1>

               <form onSubmit={handleCapitureEmail}>
                    <label htmlFor="text"></label>
                    <input  
                        type="text" 
                        autoFocus
                        onChange={event => setEmailUser(event.target.value)}
                        id="text"
                    />
                    <button type="submit">Proximo</button>
               </form>
                <Link to="/">   
                    Voltar
                </Link>
            </div>
        </C.Container>
    )
}