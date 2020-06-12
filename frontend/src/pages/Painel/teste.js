// import React, { useState, useEffect, useLayoutEffect, memo } from 'react';

// import api from '../../services/api'

// import './styles.css';

//  function Caixa() {

//     const sleep = (milliseconds) => {
//         return new Promise(resolve => setTimeout(resolve, milliseconds))
//       }

//       const [caixas, setCaixas] = useState([]);

//            api.get('painel', {
//            }).then( response => {
//                setCaixas(response)
//                })
      
//     return (
//         <>
//         <div>
//         {(caixas => (
//                         <li key={caixas.id}>
//                         <p>{caixas.n_caixa}</p>  
//                         </li>   
//                     ))}
        
//         </div>
//         </>
//     )
// }

// export default Caixa;