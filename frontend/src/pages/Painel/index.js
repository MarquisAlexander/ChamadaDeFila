import React, { useState, useEffect } from 'react';

import api from '../../services/api'

export default function Caixa() {

    const [caixas, setCaixas] = useState([]);

    useEffect(() => {
        api.get('painel', {
        }).then(response => {
            setCaixas(response.data)
        })
    })

    return (
        <>
        <div>
            <ul>
                {caixas.map(caixa => (
                    <li key={caixa.id}>
                      <p>{caixa.nome}</p>  
                    </li>   
                ))}
            </ul>
            painel
        </div>
        </>
    )
}