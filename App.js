import React, { useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">

      <form>

      <div className='container'>

        <div> 
          <label className='nombrelabel' htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"

          />
        </div>
        <br></br>
        <div>
          <label className='apellidoslabel' htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"

          />
        </div>
        <br></br>
        <div>
          <label className='correolabel' htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
          />
        </div>
      </div>
        <br></br>
        <div className='botones'>
          <button className='buttonverde' type="submit">Enviar</button>
          <button className='buttonrojo' type="button" >Cancelar</button>

        </div> 

      </form>
        <div>
          <h2 className='colorh2'>Usuarios Guardados:</h2>
          <table className='tablaform'>
            <thead>
              <tr className='tabla'>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

            </tbody>
          </table>
        </div>

    </div>
  );
}

export default App;

