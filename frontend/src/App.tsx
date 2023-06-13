import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Chats from "./pages/Chats/Chats";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/chats"} element={<Chats />}/>
        </Routes>
    </div>
  );
}

export default App;
