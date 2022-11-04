import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Orbit Report</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Operational</th>
            <th>Orbit Type</th>
            <th>Launch Date</th>
          </tr>
          <tr>
            <td>Sirius 1</td>
            <td>Communication</td>
            <td>true</td>
            <td>LOW</td>
            <td>2007-11-17</td>
          </tr>
        </table>
        {/* Search goes here */}

        <h3>Satellite Count:</h3>
        <div>
          Total:
          <span>1</span>
        </div>
      </header>
    </div>
  );
}

export default App;
