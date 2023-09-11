import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correoElectronico: '',
  });
  const [tablaData, setTablaData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.apellidos && formData.correoElectronico) {
      setTablaData([...tablaData, formData]);
      setFormData({
        nombre: '',
        apellidos: '',
        correoElectronico: '',
      });
    } else {
      alert('Completa todos los campos');
    }
  };

  const handleCancelar = () => {
    setFormData({
      nombre: '',
      apellidos: '',
      correoElectronico: '',
    });
  };

  return (
    <div className="App">

      {/*<h1>Formulario</h1>*/}

      <form onSubmit={handleSubmit}>
      <h1>Formulario</h1>

        <div className='container'>

          <div> {/*prueba container*/}
            <label className='nombrelabel' htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <label className='apellidoslabel' htmlFor="apellidos">Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <label className='correolabel' htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correoElectronico}
              onChange={handleChange}
            />
          </div>
        </div>
        <br></br>
        <div className='botones'>
          <button className='buttonverde' type="submit">Enviar</button>
          <button className='buttonrojo' type="button" onClick={handleCancelar}>Cancelar</button>

        </div> {/*cierra div app*/}

      </form>
      {tablaData.length > 0 && (
        <div>
          <h2 className='colorh2'>Usuarios Guardados:</h2>
          <table className='tablaform'>
            <thead>
              <tr className='tabla'>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo </th>
              </tr>
            </thead>
            <tbody>
              {tablaData.map((data, index) => (
                <tr key={index}>
                  <td>{data.nombre}-{data.apellidos}-{data.correoElectronico}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
