import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Caixa() {

    const nome = "Caixa04"
    const [n_caixa, setCaixa] = useState('')

    async function ChamarCaixa(e){
        e.preventDefault();

        const data = {
            nome,
            n_caixa
        };

            await api.post('caixas', data)
            console.log(data)
        
    }

    return (
        <div className="items-grid">
            <form onSubmit={ChamarCaixa}>
              
                <button 
                type="submit" 
                value={'04'} 
                onClick={e => setCaixa(e.target.value)}>
                    Caixa  04 livre
                </button>
            </form>
        </div>
    )
}