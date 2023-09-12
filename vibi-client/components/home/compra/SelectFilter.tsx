import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setPropertyTypeFilter,
  setRoomsFilter,
  setMaxPriceFilter,
  setCityFilter
} from "../../../redux/actions/filterActions"


interface SelectFilterProps {
  label: string;
  options: (string | number)[];
  filter:string
}

const SelectFilter: React.FC<SelectFilterProps> = ({ label, options,filter}) => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state:any) => state.filters);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

 
    switch (name) {
      case "propertyType":
        console.log(name,value);
        
        dispatch(setPropertyTypeFilter(value));
        break;
      case "rooms":
        dispatch(setRoomsFilter(Number(value)));
        break;
      case "maxPrice":
        dispatch(setMaxPriceFilter(Number(value)));
        console.log("maxPrice", value,name);
        break;
      case "city":
        dispatch(setCityFilter(value));
        break;
      default:
        console.log("default", name, value);
        
        break;
    }
    console.log(filterState);
    
  };

  return (
    <select
      className="flex border w-auto h-10 mx-1 rounded"
      name={filter}
      id={label}
      onChange={handleChange}
      value={filterState[filter] || ""
      } 
    >
      <option disabled hidden value="">{label}</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {filter === "maxPrice" && "$"}{opt}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
