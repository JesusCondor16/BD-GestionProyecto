import React, { useState } from 'react';

export default function ProyectoForm() {
  const [proyectoId, setProyectoId] = useState('');
  const [estadoId, setEstadoId] = useState('');
  const [jefeId, setJefeId] = useState('');
  const [nombrePro, setNombrePro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [descripcionT, setDescripcionT] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      proyectoId,
      estadoId,
      jefeId,
      nombrePro,
      fechaInicio,
      fechaFin,
      descripcionT,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Proyecto ID:
        <input type="text" value={proyectoId} onChange={(e) => setProyectoId(e.target.value)} />
      </label>

      <label>
        Estado ID:
        <input type="text" value={estadoId} onChange={(e) => setEstadoId(e.target.value)} />
      </label>

      <label>
        Jefe ID:
        <input type="text" value={jefeId} onChange={(e) => setJefeId(e.target.value)} />
      </label>

      <label>
        Nombre del Proyecto:
        <input type="text" value={nombrePro} onChange={(e) => setNombrePro(e.target.value)} />
      </label>

      <label>
        Fecha de Inicio:
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
      </label>

      <label>
        Fecha Fin:
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
      </label>

      <label>
        Descripción:
        <textarea value={descripcionT} onChange={(e) => setDescripcionT(e.target.value)} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}
