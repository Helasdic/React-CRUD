import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/home";
import Item from "./component/pages/item";
import User from "./component/pages/user";
import AddUser from "./component/pages/AddUser";
import AddItems from "./component/pages/AddItems";
import Login from "./component/pages/login";
import UpdateItems from "./component/pages/updateItems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/registrasi" element={<AddUser />} />
        <Route path="/items" element={<Item />} />
        <Route path="/additems" element={<AddItems />} />
        <Route path="/items/update/:id" element={<UpdateItems />}></Route>
        <Route path="/users/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
