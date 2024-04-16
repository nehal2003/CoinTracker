import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Transactions = ({transaction}) => {
    const {deleteTransactions} = useContext(GlobalContext);
 const sign = transaction.amount<0 ?'-':'+';

    return (
    <li className= {sign==='-'?"minus":"plus"}>
    {transaction.text}
 <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransactions(transaction
    .id)} className="delete-btn">x</button>
</li> 
  )
}

export default Transactions
