"use client";

interface SelectFilterProps {
  label: string;
  options: (string[] | number[]);
}

const SelectFilter = ({label, options}: SelectFilterProps) => {
  const handleChange = () => {
    alert("dispara filtrar por" + label);
  };

  return (
    <select className="flex border w-auto h-10 mx-1 rounded" name="vivienda" id="vivienda" onChange={() => handleChange()}>
      <option value={label} >{label}</option>
      {options.map((opt, index) => {
        return (<option value={opt}>{opt}</option>)
      })} 
    </select>
  );
};

export default SelectFilter;
