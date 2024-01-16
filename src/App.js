import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/Main/main'

function App() {
  let links = ['Главное', 'Мои работы', 'И типо что-то']

  const [counter, setCounter] = useState(0)

  const plus = () => {
    setCounter(counter+1)
    console.log(counter)
  }
  const minus = () => {
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <div className="App">
      <Header links={links} />
        <Main counter={counter} minus={minus} plus={plus}/>
    </div>
  );
}

export default App;
