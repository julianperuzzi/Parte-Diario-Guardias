import React from "react";

const Combustibles = ({ combustibleVehiculo, combustibleGuardia, handleNestedChange }) => {
  return (
    <div>
      <h2 className="font-bold">Combustibles</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Combustible Vehículo Inicial</label>
          <input
            type="text"
            value={combustibleVehiculo.inicial}
            onChange={(e) => handleNestedChange(e, "combustibleVehiculo", "inicial")}
            className="w-full p-2 border rounded"
            placeholder="Inicial"
          />
        </div>
        <div>
          <label>Combustible Vehículo Final</label>
          <input
            type="text"
            value={combustibleVehiculo.final}
            onChange={(e) => handleNestedChange(e, "combustibleVehiculo", "final")}
            className="w-full p-2 border rounded"
            placeholder="Final"
          />
        </div>
        {/* Añade más campos para otros combustibles */}
      </div>
    </div>
  );
};

export default Combustibles;
