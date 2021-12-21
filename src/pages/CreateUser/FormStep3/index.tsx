import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Theme} from '../../../components/Theme'

import { useForm, FormActions } from '../../../context/formContext'

import step3Img from '../../../../public/images/step3.svg'

import * as C from './styles'

export function FormStep3(){
    
    const [valuePassword, setValuePassword] = useState('')
    const history = useHistory()
    const { state, dispatch } = useForm()


    useEffect(() => {
        if(state.email === ''){
            history.push('/step2')
        }
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])

    function handleCapturePassword(event: FormEvent){
        event.preventDefault()


        dispatch({
            type: FormActions.setPassword,
            payload: valuePassword,
        })

        if(valuePassword !== ''){
            history.push('/home')
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
                <img className="imgStep3" src={step3Img} alt="" />
                <p>passo 3/3 </p>
                <h2>agora crie uma</h2>
                <h1>senha</h1>

                <form onSubmit={handleCapturePassword}>
                    <label htmlFor="text"></label>
                    <input 
                        type="text" 
                        autoFocus
                        onChange={event => setValuePassword(event.target.value)}
                        id="text"
                    />
                    <button type="submit">
                        ir
                    </button>
                </form>
                <Link to="/step2">
                    Voltar
                </Link>

            </div>
       </C.Container>
    )
}