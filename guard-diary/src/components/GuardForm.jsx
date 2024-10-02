import React, { useState } from 'react';

const GuardForm = () => {
  const [formData, setFormData] = useState({
    guardiaDique: '',
    fecha: '',
    jefeGuardia: '',
    encargadoMovilidad: '',
    encargadoEmbarcacion: '',
    encargadoComunicacion: '',
    guardavidas: '',
    nombreMovilidad: '',
    estadoMovilidad: {
      aceite: '',
      refrigerante: '',
      aceiteHidraulico: '',
      liquidoFrenos: '',
      bocha: '',
      ruedaAuxilio: '',
      matafuegos: '',
      cubiertas: '',
      llavesCruz: '',
      gato: '',
    },
    kilometraje: {
      inicial: '',
      final: '',
    },
    combustible: {
      inicial: '',
      final: '',
    },
    combustibleGuardia: {
      inicial: '',
      final: '',
    },
    aceiteDisponible: {
      inicial: '',
      final: '',
    },
    agua: {
      inicial: '',
      final: '',
    },
    nombreEmbarcacion: '',
    combustibleEmbarcacion: {
      inicial: '',
      final: '',
    },
    novedades: [''], // array para múltiples novedades
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, parentName, childName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [parentName]: {
        ...prevData[parentName],
        [childName]: value,
      },
    }));
  };

  const handleNovedadesChange = (index, value) => {
    const newNovedades = [...formData.novedades];
    newNovedades[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      novedades: newNovedades,
    }));
  };

  const handleAddNovedad = () => {
    setFormData((prevData) => ({
      ...prevData,
      novedades: [...prevData.novedades, ''],
    }));
  };
  const copyToClipboard = () => {
    // Crear el mensaje a copiar
    const message = `Guardia Dique: ${formData.guardiaDique}\nFecha: ${formData.fecha}\nJefe de Guardia: ${formData.jefeGuardia}\nEncargado de Movilidad: ${formData.encargadoMovilidad}\nEncargado de Embarcación: ${formData.encargadoEmbarcacion}\nEncargado de Comunicación: ${formData.encargadoComunicacion}\nGuardavidas: ${formData.guardavidas}\n\nMOVILIDAD:\nNombre de Movilidad: ${formData.nombreMovilidad}\nEstado de Movilidad:\n- Aceite: ${formData.estadoMovilidad.aceite}\n- Refrigerante: ${formData.estadoMovilidad.refrigerante}\n- Aceite Hidráulico: ${formData.estadoMovilidad.aceiteHidraulico}\n- Líquido de Frenos: ${formData.estadoMovilidad.liquidoFrenos}\n- Bocha: ${formData.estadoMovilidad.bocha}\n- Rueda de Auxilio: ${formData.estadoMovilidad.ruedaAuxilio}\n- Matafuegos: ${formData.estadoMovilidad.matafuegos}\n- Cubiertas: ${formData.estadoMovilidad.cubiertas}\n- Llaves Cruz: ${formData.estadoMovilidad.llavesCruz}\n- Gato: ${formData.estadoMovilidad.gato}\nKilometraje:\n- Inicial: ${formData.kilometraje.inicial}\n- Final: ${formData.kilometraje.final}\nCombustible:\n- Inicial: ${formData.combustible.inicial}\n- Final: ${formData.combustible.final}\nCombustible en Guardia:\n- Inicial: ${formData.combustibleGuardia.inicial}\n- Final: ${formData.combustibleGuardia.final}\nAceite Disponible en Guardia:\n- Inicial: ${formData.aceiteDisponible.inicial}\n- Final: ${formData.aceiteDisponible.final}\nAgua:\n- Inicial: ${formData.agua.inicial}\n- Final: ${formData.agua.final}\n\nEMBARCACIÓN:\nNombre de Embarcación: ${formData.nombreEmbarcacion}\nCombustible:\n- Inicial: ${formData.combustibleEmbarcacion.inicial}\n- Final: ${formData.combustibleEmbarcacion.final}\n\nNOVEDADES:\n${formData.novedades.join('\n')}`;

    // Crear un elemento de texto temporal
    const textArea = document.createElement("textarea");
    textArea.value = message;

    // Agregar el elemento al documento y seleccionarlo
    document.body.appendChild(textArea);
    textArea.select();

    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Mostrar un mensaje al usuario indicando que se copió al portapapeles
    alert('¡El mensaje se copió al portapapeles!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Genera el mensaje para WhatsApp
    const message = `Guardia Dique: ${formData.guardiaDique}\nFecha: ${formData.fecha}\nJefe de Guardia: ${formData.jefeGuardia}\nEncargado de Movilidad: ${formData.encargadoMovilidad}\nEncargado de Embarcación: ${formData.encargadoEmbarcacion}\nEncargado de Comunicación: ${formData.encargadoComunicacion}\nGuardavidas: ${formData.guardavidas}\n\nMOVILIDAD:\nNombre de Movilidad: ${formData.nombreMovilidad}\nEstado de Movilidad:\n- Aceite: ${formData.estadoMovilidad.aceite}\n- Refrigerante: ${formData.estadoMovilidad.refrigerante}\n- Aceite Hidráulico: ${formData.estadoMovilidad.aceiteHidraulico}\n- Líquido de Frenos: ${formData.estadoMovilidad.liquidoFrenos}\n- Bocha: ${formData.estadoMovilidad.bocha}\n- Rueda de Auxilio: ${formData.estadoMovilidad.ruedaAuxilio}\n- Matafuegos: ${formData.estadoMovilidad.matafuegos}\n- Cubiertas: ${formData.estadoMovilidad.cubiertas}\n- Llaves Cruz: ${formData.estadoMovilidad.llavesCruz}\n- Gato: ${formData.estadoMovilidad.gato}\nKilometraje:\n- Inicial: ${formData.kilometraje.inicial}\n- Final: ${formData.kilometraje.final}\nCombustible:\n- Inicial: ${formData.combustible.inicial}\n- Final: ${formData.combustible.final}\nCombustible en Guardia:\n- Inicial: ${formData.combustibleGuardia.inicial}\n- Final: ${formData.combustibleGuardia.final}\nAceite Disponible en Guardia:\n- Inicial: ${formData.aceiteDisponible.inicial}\n- Final: ${formData.aceiteDisponible.final}\nAgua:\n- Inicial: ${formData.agua.inicial}\n- Final: ${formData.agua.final}\n\nEMBARCACIÓN:\nNombre de Embarcación: ${formData.nombreEmbarcacion}\nCombustible:\n- Inicial: ${formData.combustibleEmbarcacion.inicial}\n- Final: ${formData.combustibleEmbarcacion.final}\n\nNOVEDADES:\n${formData.novedades.join('\n')}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-xl font-bold mb-4">Formulario de Guardia Dique</h1>

      <label className="block mb-2">Guardia Dique:</label>
      <input type="text" name="guardiaDique" value={formData.guardiaDique} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Fecha:</label>
      <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Jefe de Guardia:</label>
      <input type="text" name="jefeGuardia" value={formData.jefeGuardia} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Encargado de Movilidad:</label>
      <input type="text" name="encargadoMovilidad" value={formData.encargadoMovilidad} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Encargado de Embarcación:</label>
      <input type="text" name="encargadoEmbarcacion" value={formData.encargadoEmbarcacion} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Encargado de Comunicación:</label>
      <input type="text" name="encargadoComunicacion" value={formData.encargadoComunicacion} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Guardavidas:</label>
      <input type="text" name="guardavidas" value={formData.guardavidas} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Nombre de Movilidad:</label>
      <input type="text" name="nombreMovilidad" value={formData.nombreMovilidad} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <h2 className="text-lg font-bold mb-2">Estado de Movilidad:</h2>
      {Object.keys(formData.estadoMovilidad).map((key) => (
        <div key={key} className="mb-4">
          <label className="block mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type="text"
            value={formData.estadoMovilidad[key]}
            onChange={(e) => handleNestedChange(e, 'estadoMovilidad', key)}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}

      <h2 className="text-lg font-bold mb-2">Kilometraje:</h2>
      <label className="block mb-1">Inicial:</label>
      <input
        type="text"
        name="kilometraje.inicial"
        value={formData.kilometraje.inicial}
        onChange={(e) => handleNestedChange(e, 'kilometraje', 'inicial')}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-1">Final:</label>
      <input
        type="text"
        name="kilometraje.final"
        value={formData.kilometraje.final}
        onChange={(e) => handleNestedChange(e, 'kilometraje', 'final')}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Combustible:</h2>
      <label className="block mb-1">Inicial:</label>
      <input
        type="text"
        name="combustible.inicial"
        value={formData.combustible.inicial}
        onChange={(e) => handleNestedChange(e, 'combustible', 'inicial')}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-1">Final:</label>
      <input
        type="text"
        name="combustible.final"
        value={formData.combustible.final}
        onChange={(e) => handleNestedChange(e, 'combustible', 'final')}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Combustible en Guardia:</h2>
      <label className="block mb-1">Inicial:</label>
      <input
        type="text"
        name="combustibleGuardia.inicial"
        value={formData.combustibleGuardia.inicial}
        onChange={(e) => handleNestedChange(e, 'combustibleGuardia', 'inicial')}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-1">Final:</label>
      <input
        type="text"
        name="combustibleGuardia.final"
        value={formData.combustibleGuardia.final}
        onChange={(e) => handleNestedChange(e, 'combustibleGuardia', 'final')}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Aceite Disponible en Guardia:</h2>
      <label className="block mb-1">Inicial:</label>
      <input
        type="text"
        name="aceiteDisponible.inicial"
        value={formData.aceiteDisponible.inicial}
        onChange={(e) => handleNestedChange(e, 'aceiteDisponible', 'inicial')}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-1">Final:</label>
      <input
        type="text"
        name="aceiteDisponible.final"
        value={formData.aceiteDisponible.final}
        onChange={(e) => handleNestedChange(e, 'aceiteDisponible', 'final')}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Agua:</h2>
      <label className="block mb-1">Inicial:</label>
      <input
        type="text"
        name="agua.inicial"
        value={formData.agua.inicial}
        onChange={(e) => handleNestedChange(e, 'agua', 'inicial')}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-1">Final:</label>
      <input
        type="text"
        name="agua.final"
        value={formData.agua.final}
        onChange={(e) => handleNestedChange(e, 'agua', 'final')}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Nombre de Embarcación:</h2>
      <input
        type="text"
        name="nombreEmbarcacion"
        value={formData.nombreEmbarcacion}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Combustible de Embarcación:</h2>
      <label className="block mb-1">Inicial:</label>
      <input
        type="text"
        name="combustibleEmbarcacion.inicial"
        value={formData.combustibleEmbarcacion.inicial}
        onChange={(e) => handleNestedChange(e, 'combustibleEmbarcacion', 'inicial')}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-1">Final:</label>
      <input
        type="text"
        name="combustibleEmbarcacion.final"
        value={formData.combustibleEmbarcacion.final}
        onChange={(e) => handleNestedChange(e, 'combustibleEmbarcacion', 'final')}
        className="w-full p-2 border rounded mb-4"
      />

      <h2 className="text-lg font-bold mb-2">Novedades:</h2>
      {formData.novedades.map((novedad, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            value={novedad}
            onChange={(e) => handleNovedadesChange(index, e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddNovedad} className="bg-blue-500 text-white p-2 rounded mb-4">
        Agregar Novedad
      </button>

      <button type="button" onClick={copyToClipboard} className="bg-blue-500 text-white p-2 rounded mb-4">
        Copiar al Portapapeles
      </button>

      <button type="submit" className="bg-green-500 text-white p-2 rounded">Enviar</button>
    
    </form>
  );
};

export default GuardForm;
