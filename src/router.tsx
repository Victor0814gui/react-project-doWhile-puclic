import { BrowserRouter, Route, Switch} from 'react-router-dom'

import { FormStep1 } from './pages/CreateUser/FormStep1'
import { FormStep2 } from './pages/CreateUser/FormStep2'
import { FormStep3 } from './pages/CreateUser/FormStep3'
import { Home } from './pages/Home'

import { CardConstrutor } from './pages/CardInfo/pageConstrutor'
import { CardDistruibuidor } from './pages/CardInfo/pageDistribuidor'
import { CardMinerador } from './pages/CardInfo/pageMinerador'

import { InfoUser } from './pages/InfoUser'
import { NotFound } from './pages/NotFound'

export function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormStep1}/>
        <Route path="/step2" exact component={FormStep2}/>
        <Route path="/step3" exact component={FormStep3}/>
        
        <Route path="/home" component={Home}/>

        <Route path="/minerador" component={CardMinerador}/>
        <Route path="/construtor" component={CardConstrutor}/>
        <Route path="/distribuidor" component={CardDistruibuidor}/>

        <Route path="/info" component={InfoUser}/>

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}