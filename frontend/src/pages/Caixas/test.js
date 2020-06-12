// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
// import api from '../../services/api';
// import './styles.css';

// export default function Caixa() {;

//     const nome = "Caixa02"
//     const [n_caixa, setCaixa] = useState('')

//     async function ChamarCaixa(e){
//         e.preventDefault();

//         const data = {
//             nome,
//             n_caixa
//         };

//             await api.post('caixas', data)
//             console.log(data)
        
//     }
   
//     return (
//                 <>
//         <div className="items-grid">
//             <form onSubmit={ChamarCaixa}>
             
//                 <button 
//                 type="submit" 
//                 value={'02'} 
//                 onClick={e => setCaixa(e.target.value)}>
//                     Caixa 02 livre
//                 </button>
             
//             </form>
        
//         </div>
//             <a href="#abrirModal">Caixa 02 Livre</a>

//             <div id="abrirModal" class="modal">
           
//             <h2>Janela Modal</h2>
//             <p>Esta é uma simples janela de modal.</p>
//             <p>Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou formulários</p>
//             <a href="#fechar" title="Fechar" class="fechar">fechar janela</a>
//             </div>

// </>
//     )
// }