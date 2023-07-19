import React, { useState, useEffect } from "react";

const DataLoader = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data))
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            {el.username} - {el.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataLoader;
