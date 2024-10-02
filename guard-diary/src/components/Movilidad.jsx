import React from "react";

const Movilidad = ({ movilidad, handleNestedChange }) => {
  return (
    <div>
      <h2 className="font-bold">Estado de Movilidad</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Vehículo</label>
          <input
            type="text"
            name="vehiculo"
            value={movilidad.vehiculo}
            onChange={(e) => handleNestedChange(e, "movilidad", "vehiculo")}
            className="w-full p-2 border rounded"
            placeholder="Nombre del Vehículo"
          />
        </div>
        <div>
          <label>Aceite</label>
          <input
            type="text"
            name="aceite"
            value={movilidad.aceite}
            onChange={(e) => handleNestedChange(e, "movilidad", "aceite")}
            className="w-full p-2 border rounded"
            placeholder="Estado del Aceite"
          />
        </div>
        {/* Añade más campos aquí según sea necesario */}
      </div>
    </div>
  );
};

export default Movilidad;
