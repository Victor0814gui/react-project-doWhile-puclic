import { ChangeEvent, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Theme} from '../../components/Theme'
import { useForm, FormActions } from '../../context/formContext'

import * as C from './style'

import ideaImage from '../../../public/images/idea.svg'
import userImage from '../../../public/images/tag-user.svg'
import { Cards } from '../../components/Cards';
import { PageInfo } from '../../components/PageInfo';

export function Home(){
    const history = useHistory()
    const { state, dispatch } = useForm()


    return(
        <>
        <C.Header>
            <h2>
                seja bem vindo(a)
                     
                {(state.name !== '') && (
                <span>,{state.name}</span>)}
            </h2>
            <C.ContainerImage onClick={() => history.push('/info')}>
                <img src={userImage} alt="" />
            </C.ContainerImage>
        </C.Header>
            <C.Container>
                <h1>O nosso maior desafio é solucionar </h1>
                <span>
                    os problemas de acesso a educação hoje
                    usando a tecnologia
                </span>
            </C.Container>
            <C.Section>
                <h1>e pensando nisso
                        apresentamos a todos as nossas ideias ou melhor
                    <br />
                    <span>
                         os nosso produtos
                    </span>
                </h1>
                <img src={ideaImage} alt="" />
            </C.Section>

            <Cards/>

            <PageInfo/>
           
        </>
    )
}