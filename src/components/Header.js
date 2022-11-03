import React from "react";

function Header(prop) {
    return (
        <header>
            <div style={{textAlign:"center"}}>
        <h1>Bienvenido {prop.nombre} {prop.apellido}!</h1>
        <h3>Tu saldo actual es de {prop.dinero} pesos! </h3>
            </div>
        </header>
    )
}

export default Header