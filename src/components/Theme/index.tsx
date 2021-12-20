
import { ReactNode } from 'react';
import { Sidebaritem } from '../Sidebaritem/index';
import { useForm } from '../../context/formContext';


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
                    active={state.currentStep ===1}
                />
                <Sidebaritem
                    title="Proficional"
                    description="Se identifique"
                    path="/step2"
                    active={state.currentStep ===2}

                />
                <Sidebaritem
                    title="Contatos"
                    description="Se identifique"
                    path="/step3"
                    active={state.currentStep ===3}

                />
            </div>

            <div>
                {children}
            </div>
        </C.Container>
    )
}