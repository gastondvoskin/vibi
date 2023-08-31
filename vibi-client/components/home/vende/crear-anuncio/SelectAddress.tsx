

interface Props {
  first: string;
  options: string[];
  onSelect: () => void;
}


export default function SelectAddress({ first, options, onSelect }: Props) {
  return (
    <>
      <select
        onChange={onSelect}
        className="pl-4 pr-2 py-[13px]  border w-[141px] text-sm text-vibiGreyInput border-vibiGreyInput rounded-[4px] outline-none hover:border-primary focus:border-primary"
      >
        <option defaultValue={first} >{first}</option>
        {options?.map((e) => 
          <option className="text-vibiDarkBlue" key={e}>{e}</option>
        )}
      </select>
    </>
  );
}
