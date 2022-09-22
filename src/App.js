import logo from './logo.svg';
import './App.css';

const url ='https://i.gifer.com/origin/82/821db1c1269c1d2d78abada219a95744.gif'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={url} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Aqui a los parametros se les llama atributos este es uno {props.msj}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ayer tronaba pero hoy no
        </a>
        {/* Y el parametro especial se accede asi */}
        {props.children}
      </header>
    </div>
  );
}

export default App;
