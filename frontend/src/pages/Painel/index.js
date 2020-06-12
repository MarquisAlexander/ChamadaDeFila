import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { BsCalendar, BsClockHistory } from "react-icons/bs";

import api from '../../services/api'

import logo from '../../assets/logostore.png';
import painel from '../../assets/painel1.png';

import './styles.css';

 function Caixa() {

    var dNow = new Date();
    var data = dNow.getDate() + "/"+ (dNow.getMonth()+1)+ "/" + dNow.getFullYear();
    var hora =  dNow.getHours() + ":" + dNow.getMinutes() + ":" + dNow.getSeconds();
    
    const [caixas, setCaixas] = useState([]);
    const [caixas1, setCaixas1] = useState([]);
 

    useEffect(() =>{
    api.get('painel1', {
          }).then(response => {
              setCaixas1(response.data)
          });console.log(data)
         api.get('painel', {
            }).then(response => {
            setCaixas(response.data)
            });
        })

      
    return (
        <>
        <div className='painel'>
            <div className='multi'>
                <div className='logo'>
                    <img src={logo} alt="logo" width='100px' height='100%'/>
                </div>

                <div className='caixa-player'>
                    <img src={painel} />
                </div>
                {/* <div className='caixa-player'>
                    <ReactPlayer
                    className='player-video'
                    url='https://www.youtube.com/watch?v=zSWdZVtXT7E'
                    width= '100%'
                    height= '100%' 
                    loop='true'
                    
                    />
                </div> */}
                <div className='horadata'>
                    <BsCalendar size={52} className="icon"/>
                    <p>{hora}</p>
                    <BsClockHistory size={52} className="icon" />
                    <p>{data}</p>
                    
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

export default Caixa;