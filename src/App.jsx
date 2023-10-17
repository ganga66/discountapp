
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const[amount,setamount]=useState('')
  const[discount,setdiscount]=useState('')
  const[total,settotal]=useState('')
  const[saving,setsaving]=useState('')

  console.log(amount);
  console.log(discount);
  console.log(total);
  console.log(saving);

  const calculate=(e)=>{
    let result = amount-(amount*discount/100)
    console.log(result);
    settotal(result)
    let save = result-amount
    console.log(save);
    setsaving(save)
  }
  const reset=(e)=>{
    setamount('')
    setdiscount('')
    settotal('')
    setsaving('')
  
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className='head'>DISCOUNT APP</h1>
        <p>A discount calculator is a utility tool that shows you the price of goods and services after a discount and also the amount you save. </p>

         <div className="input">
            <TextField onChange={e=>setamount(e.target.value)} value={amount} id="outlined-basic" label="Amount" variant="outlined" /><br /><br />
            <TextField onChange={e=>setdiscount(e.target.value)} value={discount} id="outlined-basic" label="Discount %" variant="outlined" /><br /><br />
         </div>
        <div className="button">
            <Button variant="contained"  onClick={calculate} color='success'>Calculate</Button>
            <Button variant="contained"  onClick={reset} color='error'>Reset</Button>
          </div>
          <div className="card">
             <h2 className='symbol'>&#8377;</h2><br />
             <h2 className='text'>Total Rupees :{total}</h2>
        </div>
        <div className="card">
             <h2 className='symbol'>&#8377;</h2><br />
             <h2 className='text'>saving :{saving}</h2>
        </div>
       </div>
    </div>
  );
}

export default App;
