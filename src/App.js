// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Satellites from './components/Satellites';

function App() {

    return (
      <div className='App'>
        <h1>Orbit Report</h1>
        <div>
          <Satellites/>
        </div>
      </div>


      // <div className="App">
      //   <header className="App-header">
      //     <h1>Orbit Report</h1>
      //     {/* <table className="satellite-table">
      //       <tr>
      //         <th>Name</th>
      //         <th>Type</th>
      //         <th>Operational</th>
      //         <th>Orbit Type</th>
      //         <th>Launch Date</th>
      //       </tr>
      //       <tr>
      //         <td>Sirius 1</td>
      //         <td>Communication</td>
      //         <td>true</td>
      //         <td>LOW</td>
      //         <td>2007-11-17</td>
      //       </tr>
      //     </table> */}
      //     {/* Search goes here */}

      //     <ul>
      //       { data && data.length > 0 && data.map(item => (
      //         <li>{item.name}</li>
      //       ))}
      //     </ul>

      //     <h3>Satellite Count:</h3>
      //     <div>
      //       Total:
      //       { data && data.length >0 && <span>data.length</span>}
      //     </div>
      //   </header>
      // </div>
    );
  }

export default App;
