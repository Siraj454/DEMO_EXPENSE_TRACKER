import React,{createContext, useReducer} from 'react';
import TransReducer from './transactionReducer';



let initialTransactions=[{desc:"hookk" ,amount:50},
                        {desc:"attemp", amount: 30},
                           {desc:"look",amount:50},]

export const transContext =createContext(initialTransactions);

export const TransProvider=({children})=>{
    let [state,dispatch]=useReducer(TransReducer,initialTransactions);
    
    function addTransaction (transObj){
        dispatch( {
               type:"ADD_TRANSACTION",
                          payload:{
                              amount:transObj.amount,
                              desc:transObj.desc
                          },
                            })
                        }
return (
    <transContext.Provider value={{transactions:state,
                              addTransaction}}>
        {children}
    </transContext.Provider>

)    }               