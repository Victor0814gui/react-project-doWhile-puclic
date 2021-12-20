import * as C from './styles'



import mineradorImg from '../../../../public/images/minerador.svg'
import teacherImg from '../../../../public/icons/teacher.svg'
import textAlignImg from '../../../../public/icons/textalign-left.svg'


export function CardMinerador(){
    return(
       <>
            <C.Container>
                <div>
                    <img src={mineradorImg} alt="" />
                </div>
                <h1>minerador </h1>
                <h2>nivel: basico</h2>
            </C.Container>

            <C.Info>
                <div className="flex">
                    <img src={teacherImg} alt="" />
                    <h1>o que ira aprender?</h1>
                </div>
                <h2>
                    Html<br/>
                    CSS<br/>
                    JS
                </h2>

                <div className="flex">
                    <img src={textAlignImg} alt="" />
                    <h1>descrição</h1>
                </div>
                <h2>
                    você ira aprender <span>forma mais  clara possivel</span> como funiona 
                    cada uma das ferramentas acima, entendo do basico ate o
                    intermediario, e criado paginas funcionais e bonitas
                </h2>                
            </C.Info>
       </>
    )
}