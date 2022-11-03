import React from 'react';
import { Routes, Route } from "react-router-dom"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

function Main() {
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1 style={{textAlign:"center"}}>ERROR 404</h1>}/>
            </Routes>
        </main>
    )
}

export default Main