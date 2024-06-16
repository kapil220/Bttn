import React, { useState, useEffect } from "react";
import axios from "axios";

function JsonServer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users") // Note the port 3001 here matches json-server port
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Data from JSON Server:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.size} - {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JsonServer;
