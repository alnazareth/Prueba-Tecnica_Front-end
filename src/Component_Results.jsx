import React, { useEffect, useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

function Results({ users }) {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async (username) => {
      const url = `https://api.github.com/users/${username}`;
      const response = await fetch(url);
      const userData = await response.json();
      return userData.followers;
    };

    Promise.all(users.map((user) => fetchFollowers(user.login)))
      .then((data) => setFollowers(data));
  }, [users]);

  useEffect(() => {
    // Actualiza las opciones del gráfico cuando cambian los usuarios o los seguidores
    setOptions({
      data: users.slice(0, 10).map((user, index) => ({
        category: user.login,
        followers: followers[index],
      })),
      series: [{ type: "bar", xKey: "category", yKey: "followers" }],
    });
  }, [users, followers]);

  const [options, setOptions] = useState({
    data: users.slice(0, 10).map((user, index) => ({
      category: user.login,
      followers: followers[index],
    })),
    series: [{ type: "bar", xKey: "category", yKey: "followers" }],
  });

  const tableRows = users.slice(0, 10).map((user, index) => (
    <tr key={user.id}>
      <th scope="row"><img src={user.avatar_url} className="avatar_url" alt={`${user.login}`}  title={`${user.login}`} /></th>
      <td><a target="_blank" href={`${user.html_url}`}>{user.login}</a></td>
      <td>{followers[index]}</td>
      <td>{user.id}</td>
    </tr>
  ));

  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <td>Avatar</td>
            <th scope="col">link</th>
            <th scope="col">Followers</th>
            <th scope="col">Id</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>

      <AgChartsReact options={options} />
    </div>
  );
}

export default Results;
