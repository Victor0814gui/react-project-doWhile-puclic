import * as C from './styles'

import distribuidorImg from '../../../../public/images/distribuidor.svg'
import teacherImg from '../../../../public/icons/teacher.svg'
import textAlignImg from '../../../../public/icons/textalign-left.svg'
import infoCircleImg from '../../../../public/icons/info-circle.svg'


export function CardDistruibuidor(){
    return(
       <>
            <C.Container>
                <div>
                    <img src={distribuidorImg} alt="" />
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
                    criar e vender<br/>
                    seu produtos
                </h2>

                <div className="flex">
                    <img src={textAlignImg} alt="" />
                    <h1>descrição</h1>
                </div>
                <h2>
                    aqui você ira  aprender a criar estruturas mais trabalhosas, e
                    mais complexas  
                </h2> 
                <div className="flex">
                    <img src={infoCircleImg} alt="" />
                    <h1>obrigatório</h1>
                </div>
                <h2>
                    você terá um mês para criar um projeto  funcional e que gere  ao   
                    menos 1000R$ dos quais serão reinvestidos em equipamentos 
                    para todos que precisarem mas não tivere, como adquirir 
                </h2>               
            </C.Info>
       </>
    )
}