import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div>No se encontraron detalles de usuario.</div>;
  }

  const { name, email, phone, website } = state;

  return (
    <div>
      <h1 className="text-5xl font-semibold pt-6 mb-8">Detalle del Médico</h1>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td><strong>Website:</strong></td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;

