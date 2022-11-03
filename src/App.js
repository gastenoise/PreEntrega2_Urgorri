import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Main from './components/Main'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
    <BrowserRouter>
        <NavBar/>
        <Header nombre="Iván" apellido="Pérez" dinero="2500"/>
        <Main/>
    </BrowserRouter>
    )         
}

export default App