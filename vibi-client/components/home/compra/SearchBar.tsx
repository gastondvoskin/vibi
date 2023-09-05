'use client'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const handleSubmit = () => {
    alert("Dispara filtrar por ciudad");
  };

    return (
    <form className="flex" onSubmit={() => handleSubmit()}>
        <input className="border w-96 h-10 rounded" type="text" placeholder="Busca por ciudad"/>
        <button type="submit" className="w-10 h-10 p-2 bg-primary"><MagnifyingGlassIcon /></button> 
    </form>
  )
}

export default SearchBar

