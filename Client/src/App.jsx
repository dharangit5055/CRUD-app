import "./App.css";
import CreateUser from "./createUser";
import UpdateUser from "./updateUser";
import User from "./user";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <User/> */}
      {/* <CreateUser/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={User} />
          <Route path="/create" Component={CreateUser} />
          <Route path="/update" Component={UpdateUser} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
