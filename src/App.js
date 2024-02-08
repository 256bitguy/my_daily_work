import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const tableHeaderStyle = {
      display: 'flex',
      background: '#e0e0e0',
      fontWeight: 'bold',
      justifyContent:"space-between"
    };
  
    const tableCellStyle = {
      flex: 1,
      padding: '10px',
      textAlign: 'left',
      border: '1px solid #ccc',
    };
    return (
      <div style={{
          
         border:"1px solid black",
         height:"100vh",width:"100vx",
         justifyContent:"center",
          
      }}>
  <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",border:"2px solid black",justifyContent:"center"}}>
  <input type='text' placeholder='search by work,date,title,subject' 
  style={{
    flex:"5",
    borderRadius:"10px",
    margin:"10px",
    padding:"10px",
    width:"40vw",
    height:"20px",
    border:"3px solid black",
    fontSize:"30px",
    background:"#ffffff"
    }}/>
    <button 
    style={{ background:"#624663",flexBasis:"100px",flex:"1",height:"50px",width:"130px",borderRadius:"20px",fontSize:"20px",color:"white",margin:"7px"}}
    >search</button>
  </div>
  <div style={{border:"1px solid black"}}>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={tableHeaderStyle}>
        <tr>
          <th style={tableCellStyle}>Header 1</th>
          <th style={tableCellStyle}>Header 2</th>
          <th style={tableCellStyle}>Header 3</th>
        </tr>
      </thead>
      <tbody>
        {/* Table body content goes here */}
      </tbody>
    </table>
  </div>
      </div>
    );
  }
}

export default App;
