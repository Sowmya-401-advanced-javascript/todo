import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ToDo from './components/todo/todo-connected.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
      <>
        <Navbar bg="light" expand="lg"></Navbar>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <ToDo />
      </>
    );
}
