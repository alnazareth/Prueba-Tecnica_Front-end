import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Component from './Component';
import Component_Search from './Component_Search';
import Component_Results from './Component_Results';
function App() {

  const [users, setUsers] = useState([]);

  const handleSearch = (username) => {

      if (username.trim().length < 4) {
        alert('El nombre de usuario debe tener al menos 4 caracteres');
        return;
      }
  
      if (username.trim() === 'iseijasunow') {
        alert('No se puede buscar la palabra "iseijasunow"');
        return;
      }

    const url = `https://api.github.com/search/users?q=${username}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setUsers(data.items);
    });

  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Github User Finder</h1>
         
        
        <div>
      <Component_Search onSearch={handleSearch} />
 
      {users.length > 0 && (
        <div>
          <Component_Results users={users} />
         
        </div>
      )}
      {users.length === 0 && (
  <div>
    No hay usuarios.
  </div>
)}
 
    </div>

      </header>

      <footer><a target="_blank"  href='https://github.com/alnazareth'>By Alnazareth</a></footer>
    </div>
  );
}

export default App;
