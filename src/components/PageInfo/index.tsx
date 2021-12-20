import * as C from './styles'

import peopleSpaceImg from '../../../public/images/people-space.svg'
import personSpaceImg from '../../../public/images/person-space.svg'
import peopleImg from '../../../public/images/people.svg'

export function PageInfo(){
    return(
        <>
            <C.Container>
                <div>
                    <h2>mas</h2>
                    <h1>e qual nosos difertencial?</h1>
                </div>


                <h1>
                    nós não investimos 
                    em <span>individualidade</span>, todos os nosso planos
                    <span> só</span> podem ser <span>consumidos em grupo</span>
                </h1>
                <main>
                    <img src={peopleImg} alt="" />
                    <h3>
                        e como isso <span>pode</span> ser <span>bom</span>?
                    </h3>
                </main>
            </C.Container>

            <C.ContainerImage>
                <h1>
                    acreditamos que <span> sozinho 
                            você  </span>
                    pode dominar o <span> mundo</span>    
                </h1>

                <img src={personSpaceImg} alt="" />
            </C.ContainerImage>

            <C.ContainerImage>
                <img src={peopleSpaceImg} alt="" />
                <h1>
                    mas <span>em grupo você</span> pode <span>transformar</span> o universo
                   <span>  onde o unico limite é a sua imaginação</span>
                </h1>
            </C.ContainerImage>
        </>
    )
}