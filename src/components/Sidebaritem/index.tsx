import {Link} from 'react-router-dom'

import * as C from './styles'


type Props = {
    title: string;
    description: string;
    path: string;
    active: boolean;
}

export function Sidebaritem({title, description, path, active}: Props){
    return(
        <C.Container>
            <Link  to={path}>
                <img src="" alt="" />
                a
            </Link>
        </C.Container>
    )
}