import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <table>
       <tbody>
            <tr>
                <td>Enter the Input</td>
                <td><input type="text" id="inputtext" /></td>
            </tr>
            <tr>
                <td></td>
                <td><button type="button" id="add" onClick={window['addRecord']}>Add </button>
                <button type="button" id="display" onClick={window['calculateRecord']}>Calculate hamming distance</button>
                </td>
            </tr>
        </tbody>
        </table>
       <div id='values'></div>
       <div id='opHamming'></div>
    </div>
  );
}

export default App;
