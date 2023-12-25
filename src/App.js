import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="user">Users</h1>
          <table border={1} className="t">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  )
}

export default App