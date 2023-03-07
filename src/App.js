import logo from "./logo.svg";
import "./App.css";
import SignUp from "./myModules/SignUp";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";

import testjson from "../src/myModules/test.json";

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    console.log(testjson);
    console.log(data)
  },[]);
  return (
    <div className="App">
<SignUp></SignUp>
{data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
