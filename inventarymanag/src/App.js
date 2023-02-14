import logo from './logo.svg';
import './App.css';

import { InputText} from 'primereact/InputText';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";        
import "primeicons/primeicons.css";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputText />
      </header>
    </div>
  );
}

export default App;
