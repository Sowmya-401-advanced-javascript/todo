import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ToDo from './components/todo/todo-connected.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfigurationProvider } from './configurationContext'
import Login from './login/login';
import LoginContext from './login/context';

export default function App() {

  const configuration = {
    showCompletedItems: true,
    maxItemsPerScreen: 3,
    sortBy: "difficulty"
  }

    return (
      <>
        <Navbar bg="light" expand="lg"></Navbar>
        <Navbar.Brand href="#home">Home</Navbar.Brand>

        <LoginContext>
          <Login />
        </LoginContext>

        <ConfigurationProvider value={configuration}>
          <ToDo />
        </ConfigurationProvider>
      </>
    );
}
