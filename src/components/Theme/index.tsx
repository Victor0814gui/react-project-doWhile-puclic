
import { ReactNode } from 'react';
import { Sidebaritem } from '../Sidebaritem/index';
import { useForm } from '../../context/formContext';

import userImg from '../../../public/icons/user.svg'
import keyImg from '../../../public/icons/key.svg'
import emailImg from '../../../public/icons/email.svg'

import * as C from './styles'

type ChildrenProps = {
    children: ReactNode
}

export function Theme({children}:ChildrenProps){

    const {state} = useForm()

    return(
        <C.Container>
            <div>
                <Sidebaritem
                    title="Pessoal"
                    description="Se identifique"
                    path="/"
                    icon={userImg}
                    active={state.currentStep ===1}
                />
                <Sidebaritem
                    title="Proficional"
                    description="Se identifique"
                    path="/step2"
                    icon={emailImg}
                    active={state.currentStep ===2}
                />
                <Sidebaritem
                    title="Contatos"
                    description="Se identifique"
                    path="/step3"
                    icon={keyImg}
                    active={state.currentStep ===3}
                />
            </div>

            <div>
                {children}
            </div>
        </C.Container>
    )
}