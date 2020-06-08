import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import api from '../../services/api'

import './styles.css';

export default function Caixa() {

    const [caixas, setCaixas] = useState([]);
    const [caixas1, setCaixas1] = useState([]);

    useEffect(() => {
        api.get('painel', {
        }).then(response => {
            setCaixas(response.data)
        })
    })

    useEffect(() => {
        api.get('painel1', {
        }).then(response => {
            setCaixas1(response.data)
        })
    })

    return (
        <>
        <div className='painel'>
            <div className='multi'>
                <div className='logo'>
                    <img src="https://www.lojaodascarnes.com.br/wp-content/uploads/2019/02/lojao-das-carnes-favicon.png" alt="logo"/>
                </div>

                <div className='caixa-player'>
                    <ReactPlayer
                    className='player-video'
                    url='https://www.youtube.com/watch?v=zTitoHKsyJg'
                    width= '100%'
                    height= '100%' 
                    />
                </div>
                <div className='horadata'>
                    <p>18:30</p>
                    <p>06/05/2020</p>
                </div>
            </div>



            <div className='caixas'>
                <strong>Caixa Livre</strong>
                    <div className='caixas1'>
                        {caixas1.map(caixa => (
                            <li key={caixa.id}>
                            <p>{caixa.n_caixa}</p>  
                            </li>   
                        ))}
                    </div>
                <div className='text'>Ultimas chamadas</div>
                <ul>
                    {caixas.map(caixa => (
                        <li key={caixa.id}>
                        <p>{caixa.n_caixa}</p>  
                        </li>   
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}