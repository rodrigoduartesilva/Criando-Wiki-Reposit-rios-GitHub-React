import React from 'react';
import { ItemContainer } from './Styles';

const ItemRepo = () => {
    return (
        <ItemContainer>
            <h3>Rodrigo</h3>
            <p>dio/rodrigo</p>
            <a href='#'>Ver repositório</a><br />
            <a href='#' className='remover'>Remover</a>
            <hr />
        </ItemContainer>
    )
}

export { ItemRepo };