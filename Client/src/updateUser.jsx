import React from "react";

function UpdateUser() {
  return (
    <div>
      <h2>Update user</h2>
      <label htmlFor="">Name :</label>
      <input type="text" />
      <br />
      <br />
      <label htmlFor="">E-mail :</label>
      <input type="text" />
      <br />
      <br />
      <label htmlFor="">Password :</label>
      <input type="text" />
      <br />
      <br />
      <button>Update</button>
    </div>
  );
}

export default UpdateUser;
