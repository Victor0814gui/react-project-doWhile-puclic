import styled from 'styled-components'


export const Container =  styled.div<{active: boolean}>`
    border: 3px solid ${props => props.active ? 'var(--color-card-green)' : 'transparent'};
    color: var(--white);
    text-decoration: none;

    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;

    img{
        width: 25px;
        height: 25px;
    }
`;