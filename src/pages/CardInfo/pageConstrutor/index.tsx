import * as C from './styles'

import construtorImg from '../../../../public/images/construtor.svg'
import teacherImg from '../../../../public/icons/teacher.svg'
import textAlignImg from '../../../../public/icons/textalign-left.svg'


export function CardConstrutor(){
    return(
       <>
            <C.Container>
                <div>
                    <img src={construtorImg} alt="" />
                </div>
                <h1>construtor </h1>
                <h2>nivel: intermediario</h2>
            </C.Container>

            <C.Info>
                <div className="flex">
                    <img src={teacherImg} alt="" />
                    <h1>o que ira aprender?</h1>
                </div>
                <h2>
                    sites<br/>
                    apps<br/>
                    automações
                </h2>

                <div className="flex">
                    <img src={textAlignImg} alt="" />
                    <h1>descrição</h1>
                </div>
                <h2>
                    aqui você ira aprender a como desenver apps, sites e automações,
                    mas durante o curso você terá que cria ao menos 10 projetos
                    que solucione problemas onde você vive, e dessa forma antes de reclamar
                    é obrigatorio que você primeiro entenda e busque uma solução
                </h2>                
            </C.Info>
       </>
    )
}