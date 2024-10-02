import React, { useState } from "react";

const IngresoEmbarcaciones = () => {
  const [formData, setFormData] = useState({
    nombreEmbarcacion: "",
    tipo: "",
    // Añade más campos si es necesario
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Ingreso de Embarcaciones</h1>
      <form className="space-y-6">
        <div>
          <label className="block">Nombre de la Embarcación</label>
          <input
            type="text"
            name="nombreEmbarcacion"
            value={formData.nombreEmbarcacion}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Nombre de la Embarcación"
          />
        </div>
        <div>
          <label className="block">Tipo de Embarcación</label>
          <input
            type="text"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Tipo de Embarcación"
          />
        </div>
        {/* Añade más campos si es necesario */}
      </form>
    </div>
  );
};

export default IngresoEmbarcaciones;
