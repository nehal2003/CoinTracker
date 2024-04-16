import React ,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
const [text,setText]=useState('');
const [amount,setAmount]=useState(0);

const {addTransactions} = useContext(GlobalContext)
 const onSubmit=e=>{
  e.preventDefault();
  const newTransaction ={
    id:Math.floor(Math.random()*672),
    text,
    amount:+amount
  }
  addTransactions(newTransaction)
 }
    return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
   

    </>
  )
}

export default AddTransaction
