"use client";

const SelectFilter = () => {
  const handleChange = () => {
    alert("dispara filtrar por tipo de vivienda");
  };

  return (
    <select name="vivienda" id="vivienda" onChange={() => handleChange()}>
      <option value="" disabled>
        Tipo de vivienda
      </option>
      <option value="casa">Casa</option>
      <option value="departamento">Departamento</option>
    </select>
  );
};

export default SelectFilter;
