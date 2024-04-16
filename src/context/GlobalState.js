import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
//Initial state

const initialState ={
    transactions:[
      
        ]
}

// create context
export const GlobalContext = createContext(initialState);


//provider component
export const GlobalProvider =({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
   // Actions to call our reducer
  function deleteTransactions(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    });
  }
  // add transaction
  function addTransactions(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    });
  }
   
   
   
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        { children}
    </GlobalContext.Provider>
    )
}