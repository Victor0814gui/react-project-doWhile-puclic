import {Link} from 'react-router-dom'

import * as C from './styles'


type Props = {
    title?: string;
    description?: string;
    path: string;
    active: boolean;
    icon: any;
}

export function Sidebaritem({title, description, path, active,icon}: Props){
    return(
        <C.Container active={active}>
            <Link  to={path}>
                <div >
                    <img src={icon} alt="" />
                </div>
                
            </Link>
        </C.Container>
    )
}