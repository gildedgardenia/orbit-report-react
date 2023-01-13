// import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { COLUMNS } from './components/columns';
import { useTable, useGlobalFilter } from "react-table";

function App() {

  const [satellites, setData] = useState([]);
  useEffect(() => {
      axios.get('https://handlers.education.launchcode.org/static/satellites.json')
        .then(res => setData(res.data.satellites))
    },[])

  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, state, setGlobalFilter, prepareRow } = useTable({columns, data: satellites}, useGlobalFilter);

  const { globalFilter } = state;

    return (

      <div className='App'>
        <h1>Orbit Report</h1>
        <div>
          <div className="search-container">
            <label for="search">Search: </label>
            <input
                name="search"
                type="text"
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </div>
        <div>
          <table {...getTableProps()}>
                  <thead>
                      {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                  <th {...column.getHeaderProps()}>
                                      {column.render('Header')}
                                  </th>
                              ))}
                          </tr>
                      ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                      {rows.map((row) => {
                          prepareRow(row);
                          return (
                              <tr {...row.getRowProps()}>
                                  {row.cells.map((cell) => {
                                      return (
                                          <td {...cell.getCellProps()}>
                                              {cell.render('Cell')}
                                          </td>
                                      );
                                  })}
                              </tr>
                          );
                      })}
                  </tbody>
              </table>
        </div>
      </div>
      </div>
    );
  }

export default App;
