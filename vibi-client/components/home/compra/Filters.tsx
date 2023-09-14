"use client";
/* import SearchBar from "./SearchBar"; */
import SelectFilter from "./SelectFilter";
import { useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {
  setPropertyTypeFilter,
  setRoomsFilter,
  setMaxPriceFilter,
  setCityFilter
} from "../../../redux/actions/filterActions"
import { setCurrentPageAction } from "../../../redux/actions/publicationActions";



const Filters = () => {
  const {city,maxPrice, propertyType,rooms} = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch();
  const handleClick = ()=> {
    dispatch(setCurrentPageAction(1));
    dispatch(setPropertyTypeFilter(null));
    dispatch(setRoomsFilter(null));
    dispatch(setMaxPriceFilter(null));
    dispatch(setCityFilter(null))
  }

  const shouldRenderResetButton = city !== null || maxPrice !== null || propertyType !== null || rooms !== null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[88px]">
      {/* <SearchBar /> */}
      <div className="flex">
        <SelectFilter label="Provincia" options={[
    "Abancay",
    "Acomayo",
    "Aija",
    "Alto Amazonas",
    "Ambo",
    "Andahuaylas",
    "Anta",
    "Antabamba",
    "Antonio Raymondi",
    "Ascope",
    "Asunción",
    "Bagua",
    "Barranca",
    "Bolognesi",
    "Bolívar",
    "Bongará",
    "Cajabamba",
    "Cajamarca",
    "Cajatambo",
    "Calca",
    "Camaná",
    "Canas",
    "Cangallo",
    "Canta",
    "Caravelí",
    "Carlos Fermín Fitzcarrald",
    "Castilla",
    "Castrovirreyna",
    "Caylloma",
    "Celendín",
    "Chepén",
    "Chiclayo",
    "Chimbote",
    "Chincha",
    "Chincheros",
    "Chota",
    "Chumbivilcas",
    "Concepción",
    "Condesuyos",
    "Contumazá",
    "Corongo",
    "Cotabambas",
    "Cusco",
    "Cutervo",
    "Datem del Marañón",
    "Dos de Mayo",
    "Espinar",
    "Ferreñafe",
    "Grau",
    "Gran Chimú",
    "Huaral",
    "Huaraz",
    "Huarmey",
    "Huamalíes",
    "Huamanga",
    "Huancavelica",
    "Huanta",
    "Huánuco",
    "Huaylas",
    "Hualgayoc",
    "Huancayo",
    "Huarochirí",
    "Huaytará",
    "Ica",
    "Islay",
    "Jauja",
    "Julcán",
    "Junín",
    "La Convención",
    "La Mar",
    "La Uniòn",
    "Lambayeque",
    "Lauricocha",
    "Leoncio Prado",
    "Lima",
    "Loreto",
    "Lucanas",
    "Luya",
    "Marañón",
    "Mariscal Luzuriaga",
    "Mariscal Ramón Castilla",
    "Maynas",
    "Morropon",
    "Nazca",
    "Ocros",
    "Pachitea",
    "Pallasca",
    "Palpa",
    "Parinacochas",
    "Pàucar del Sara Sara",
    "Pacasmayo",
    "Paucartambo",
    "Pataz",
    "Pisco",
    "Prov. Const. del Callao",
    "Puerto Inca",
    "Pomabamba",
    "Putumayo",
    "Quispicanchi",
    "Recuay",
    "Requena",
    "Rodríguez de Mendoza",
    "San Ignacio",
    "San Marcos",
    "San Miguel",
    "San Pablo",
    "Santa",
    "Santa Cruz",
    "Santiago de Chuco",
    "Sihuas",
    "Sucre",
    "Tambopata",
    "Tarma",
    "Tayacaja",
    "Trujillo",
    "Ucayali",
    "Utcubamba",
    "Víctor Fajardo",
    "Vilcas Huamán",
    "Virú",
    "Yarowilca",
    "Yauli",
    "Yauyos",
    "Yungay"
] } filter="city"/>
        <SelectFilter label="Tipo de vivienda" options={["Casa", "Departamento"] } filter="propertyType"/>
        <SelectFilter label="Habitaciones" options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}  filter="rooms"/>
        <SelectFilter label="Presupuesto hasta" options={[ 100000, 200000, 300000, 400000, 500000]} filter="maxPrice"/>
        {
          shouldRenderResetButton &&
          <button className="flex border w-auto h-10 mx-1 rounded items-center justify-center" onClick={handleClick}>Eliminar filtros</button>
          }
      </div>
    </div>
  );
};

export default Filters;
