import {useState} from 'react';
import Addition from './components/Addition';
import Subtract from './components/Subtract';
import Division from './components/Division';
import Multiply from './components/Multiply';
import './App.css'

let var1;
let var2;
function App() {
  const [variable,setVariable]=useState({
    "variable1":"",
    "variable2":"",
    "result":" ",

})

const update1=(event)=>{

  setVariable({
    ...variable,
    "variable1":event.target.value,
  })

  
}

const update2=(event)=>{
 
  setVariable({
    ...variable,
    "variable2":event.target.value,
  })


 }
 const changes=(e)=>{
  e.preventDefault();
  console.log("variable1",variable.variable1);
  console.log("variable2",variable.variable2);
  
    setVariable(
      {
        ...variable,
      }
    )

 

 }
 const reset=(event)=>{
  setVariable({
    "variable1":"",
    "variable2":"",
    "result":""
  })

 }





  return (
    <div className="App">
    <div className="variable-div">
    <div className='heading-div'>
    <h1>Simple calculator!!</h1>
    </div>


    <div className='result-div'>
    <p> the result is {variable.result}</p>
     
     </div>
    <form onSubmit={changes} className="variable-form">
    <input value={variable.variable1} type="number" pattern='[0-9]' onChange={update1}></input>
    <input value={variable.variable2} type="number" pattern='[0-9]'  onChange={update2}></input>
    <button type='submit' className='button-form'>Calculate!!</button>
    </form>

    <nav className='operations-nav'>
    <Addition variable={variable} setVariable={setVariable}></Addition>
    <Subtract variable={variable} setVariable={setVariable}></Subtract>
    <Division variable={variable} setVariable={setVariable}></Division>
    <Multiply variable={variable} setVariable={setVariable}></Multiply>
    <button onClick={reset}> Resett!!</button>


    
    
    </nav>
    </div>
  
    </div>
  );
}

export default App;
