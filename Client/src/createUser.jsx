import React from "react";

function CreateUser() {
  return (
    <div>
      <h2>Create new user</h2>
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
      <button>Submit</button>
    </div>
  );
}

export default CreateUser;
