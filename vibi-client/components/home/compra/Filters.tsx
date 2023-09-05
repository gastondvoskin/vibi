"use client";
import SearchBar from "./SearchBar";
import SelectFilter from "./SelectFilter";

const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[88px]">
      <SearchBar />
      <div className="flex">
        <SelectFilter label="Tipo de vivienda" options={["Casa", "Departamento"]}/>
        <SelectFilter label="Habitaciones" options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
        <SelectFilter label="Presupuesto" options={["Hasta 80.000", "Desde 80.000 hasta 160.000", "Desde 160.000 hasta 240.000", "Desde 240.000"]}/>
      </div>
    </div>
  );
};

export default Filters;
