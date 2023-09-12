import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setPropertyTypeFilter,
  setMinRoomsFilter,
  setMaxRoomsFilter,
  setMinPriceFilter,
  setMaxPriceFilter,
  setCityFilter
} from "../../../redux/actions/filterActions"


interface SelectFilterProps {
  label: string;
  options: (string | number)[];
}

const SelectFilter: React.FC<SelectFilterProps> = ({ label, options }) => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state:any) => state.filters);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Determina qué filtro estás actualizando según el nombre del select
    switch (name) {
      case "propertyType":
        console.log(name,value);
        
        dispatch(setPropertyTypeFilter(value));
        break;
      case "minRooms":
        dispatch(setMinRoomsFilter(Number(value)));
        break;
      case "maxRooms":
        dispatch(setMaxRoomsFilter(Number(value)));
        break;
      case "minPrice":
        dispatch(setMinPriceFilter(Number(value)));
        break;
      case "maxPrice":
        dispatch(setMaxPriceFilter(Number(value)));
        break;
      case "city":
        dispatch(setCityFilter(value));
        break;
      default:
        console.log("default", name, value);
        
        break;
    }
  };

  return (
    <select
      className="flex border w-auto h-10 mx-1 rounded"
      name={label}
      id={label}
      onChange={handleChange}
      value={filterState[label] || ""
      } 
    >
      <option value="">{label}</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
