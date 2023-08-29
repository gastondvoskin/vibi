"use client";
import SearchBar from "./SearchBar";
import SelectFilter from "./SelectFilter";

const Filters = () => {
  const handleChange = () => {
    alert("dispara filtrar por tipo de vivienda");
  };
  return (
    <div>
      <SearchBar />
      <SelectFilter />
      
      {/* <select name="vivienda" id="vivienda" onChange={() => handleChange()}>
        <option value="" disabled>
          Tipo de vivienda
        </option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
      </select> */}
    </div>
  );
};

export default Filters;
