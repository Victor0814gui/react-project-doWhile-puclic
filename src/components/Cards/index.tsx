import * as C from './styles'
import mineradorImg from '../../../public/images/minerador.svg'
import construtorImg from '../../../public/images/distribuidor.svg'
import distribuidorImg from '../../../public/images/construtor.svg'
import { useHistory } from 'react-router-dom';


export function Cards(){

    const history = useHistory()

    function handleRedirectRouteConstrutor(){
        history.push('/construtor')
    }
    function handleRedirectRouteMinerador(){
        history.push('/minerador')
    }

    function handleRedirectRouteDistribuidor(){
        history.push('/distribuidor')
    }

    return(
        <C.SectionCard>
            <article onClick={handleRedirectRouteMinerador}>
                    <div>
                        <img src={mineradorImg} alt="" />
                    </div>
                    <h2>
                        minerador
                    </h2>
                <main>
                    <h3>
                        nivel: basico
                    </h3>
                    <h4>o que ira aprender?</h4>
                    <ul>
                        <li> Html</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                    <p>saiba mais... </p>
                </main>
            </article>
            <article onClick={handleRedirectRouteConstrutor}>
                <div>
                    <img src={distribuidorImg} alt="" />
                </div>
                <h2>
                    construtor 
                </h2>
              <main>
                <h3>
                    nivel: intermediario
                </h3>
                <h4>o que ira aprender?</h4>

                <ul>
                    <li> sites</li>
                    <li>apps</li>
                    <li>automações</li>
                </ul>
                <p>saiba mais...</p>
              </main>
            </article>
            <article onClick={handleRedirectRouteDistribuidor}>
                    <div>
                        <img src={construtorImg} alt="" />
                    </div>
                    <h2>distribuidor</h2>
                <main>
                    <h3>nivel: Hard</h3>
                    <h4>o que ira aprender?</h4>
                    <ul>
                        <li> criar e vender</li>
                        <li>seu produtos</li>
                    </ul>
                    <p>saiba mais...</p>
                </main>
            </article>
        </C.SectionCard>
    )
}