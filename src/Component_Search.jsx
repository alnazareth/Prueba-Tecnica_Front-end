import React, { useState } from 'react';



function Component_Search({ onSearch }) {
  const [username, setUsername] = useState('Nombre del repo aqui');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Search by username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Component_Search;
