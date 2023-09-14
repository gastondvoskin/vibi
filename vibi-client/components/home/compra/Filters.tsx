"use client";
/* import SearchBar from "./SearchBar"; */
import SelectFilter from "./SelectFilter";
import { useAppDispatch} from "../../../redux/hooks";
import {
  setPropertyTypeFilter,
  setRoomsFilter,
  setMaxPriceFilter,
  setCityFilter
} from "../../../redux/actions/filterActions"
import { setCurrentPageAction } from "../../../redux/actions/publicationActions";



const Filters = () => {
  const dispatch = useAppDispatch();
  const handleClick = ()=> {
    dispatch(setCurrentPageAction(1));
    dispatch(setPropertyTypeFilter(null));
    dispatch(setRoomsFilter(null));
    dispatch(setMaxPriceFilter(null));
    dispatch(setCityFilter(null))
  }
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[88px]">
      {/* <SearchBar /> */}
      <div className="flex">
        <SelectFilter label="Tipo de vivienda" options={["Casa", "Departamento"] } filter="propertyType"/>
        <SelectFilter label="Habitaciones" options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}  filter="rooms"/>
        <SelectFilter label="Presupuesto hasta" options={[ 100000, 200000, 300000, 400000, 500000]} filter="maxPrice"/>
        <button className="flex border w-auto h-10 mx-1 rounded items-center justify-center" onClick={handleClick}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filters;
