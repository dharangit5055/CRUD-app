import React, { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([
    { name: "Dharaneesh", email: "nad@gmail.com", age: 23 },
    { name: "Gowtham", email: "vsg@gmail.com", age: 22 },
    { name: "Jagadeep", email: "jkk@gmail.com", age: 21 },
  ]);
  return (
    <div>
      <h2>CRUD App</h2>
      <Link to="/create">
        <button>Add+</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to="/update">
                  <button>Edit</button>
                </Link>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
