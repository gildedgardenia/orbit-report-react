import React from 'react';
import axios from 'axios';

export default class Satellites extends React.Component {
   state = {
      satellites: []
   }

   componentDidMount() {
      axios.get('https://handlers.education.launchcode.org/static/satellites.json')
      .then(res => {
         const satellites = res.data;
         this.setState(satellites);
      })
   }

   render() {
      return (
         <table>
            <thead>
         <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Launch Date</th>
            <th>Orbit Type</th>
            <th>Operational</th>
         </tr>
         </thead>
         <tbody>
            {
                  this.state.satellites
                  .map(satellite => 
                     <tr key={satellite.name}>
                        <td>{satellite.name}</td>
                        <td>{satellite.type}</td>
                        <td>{satellite.launchDate}</td>
                        <td>{satellite.orbitType}</td>
                        <td>{satellite.operational.toString()}</td>
                     </tr>
                     )
            }
            </tbody>
         </table>
      )
   }
   }