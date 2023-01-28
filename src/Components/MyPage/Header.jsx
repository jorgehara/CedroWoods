import React from "react";

export const Header = () => {
  return (
    <div>
      <header>
        <h2>Mi app sin context</h2>
        <h3>Mi Cabecera</h3>
        <select name="language" className="bg-gray-200">
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
        <input type="radio" name="theme" id="light" value="light" className="bg-gray-200"/><label htmlFor="light">Claro</label>
        <input type="radio" name="theme" id="dark" value="dark" className="bg-gray-200"/><label htmlFor="dark">Oscuro</label>
        <button className="bg-gray-200 w-15 h-18">Iniciar Sesión</button>
      </header>
    </div>
  );
};
