import { Router } from './router';

import { FormProvider } from './context/formContext';


export function App(){
  return(
    <FormProvider>

      <Router/>   
    </FormProvider>
  )
}