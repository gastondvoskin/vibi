"use client";
import SearchBar from "./SearchBar";
import SelectFilter from "./SelectFilter";

const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[88px]">
      <SearchBar />
      <div className="flex">
        <SelectFilter label="Tipo de vivienda" options={["Casa", "Departamento"] } filter="propertyType"/>
        <SelectFilter label="Habitaciones" options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}  filter="rooms"/>
        <SelectFilter label="Presupuesto hasta" options={[ 100000, 200000, 300000, 400000, 500000]} filter="maxPrice"/>
      </div>
    </div>
  );
};

export default Filters;
