import { createContext, useContext, ReactNode, useReducer } from 'react'



type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

const initialData: State ={
    currentStep: 0,
    name:'',
    email: '',
    level: 0,
    github: '',
}

type Action = {
    type: FormActions;
    payload: any;
}

interface ContextType {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

export const FormContext = createContext<ContextType | undefined>(undefined)

export function formReducer(state : State, action: Action){
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
            return state
    }
}


export function FormProvider({children}: FormProviderProps){

    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}


export function useForm(){
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do formProvider')
    }
    return context
}

