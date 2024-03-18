import React, { ChangeEvent, FormEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

var useInput = (name: string) => {
  var [value, setValue] = useState<string>('')

  return {
    value,
    onChange: (ev: ChangeEvent<HTMLInputElement>) => setValue(ev.target.value)
  }
}

function App() {
  var nameInput = useInput('name')

  return (
    <div className="App">
      <h1>{nameInput.value}</h1>
      <form>
        <input
          {...nameInput}
        />
      </form>
    </div>
  );
}

export default App;
