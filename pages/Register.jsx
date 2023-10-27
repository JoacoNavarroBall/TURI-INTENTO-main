import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Reservar.css";

const Reservar = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reservas, setReservas] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto de reserva
    const reserva = {
      id,
      name,
      email,
      date,
    };

    // Agregar la reserva al estado
    setReservas([...reservas, reserva]);

  };

  return (
    <div className="reservar">
      <h2 className="reservar__title">Reservar Tour {id}</h2>
      <form className="reservar__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit" className="reservar__btn">
          Reservar
        </button>
      </form>

      {/* Sección para mostrar historial de reservas */}
      {reservas.length > 0 && (
        <div className="reserva-historial">
          <h3>Historial de Reservas:</h3>
          <ul>
            {reservas.map((reserva, index) => (
              <li key={index}>
                <strong>Tour:</strong> {reserva.id}, <strong>Nombre:</strong>{" "}
                {reserva.name}, <strong>Email:</strong> {reserva.email},{" "}
                <strong>Fecha:</strong> {reserva.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reservar;

