import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputvalue,setinputvalue]= useState('');
  const [result, setresult]= useState<number|null>(null);
  const handleMul=async ()=>{
    const number=parseFloat(inputvalue);
    const response = await fetch('http://localhost:3001/multiplication',{
        method:'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({item:number}),
    });
    const data = await response.json();
    setresult(data);
  }
  return (
    <div className="App" >
      <textarea value={inputvalue}
      onChange={(e)=>setinputvalue(e.target.value)}>
      </textarea>
      <button onClick={handleMul}>
        нажми, чтобы удвоить число
      </button >
      <label>
        Результат:
      </label>
      <textarea value={result?.toString()}>
      </textarea>
    </div>
  );
}

export default App;
