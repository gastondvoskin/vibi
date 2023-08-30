'use client'

const SearchBar = () => {
  const handleSubmit = () => {
    alert("Dispara filtrar por ciudad");
  };

    return (
    <form onSubmit={() => handleSubmit()}>
        <input type="text" placeholder="Busca por ciudad"/>
        <button type="submit">BUSCAR</button>
    </form>
  )
}

export default SearchBar