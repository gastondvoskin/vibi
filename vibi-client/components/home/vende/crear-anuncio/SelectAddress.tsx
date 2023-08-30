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
        className="pl-4 pr-2 py-[13px] border w-[141px] text-sm border-vibiGreyInput rounded-[4px] outline-none focus:border-primary"
      >
        <option disabled>{first}</option>
        {options?.map((e) => 
          <option key={e}>{e}</option>
        )}
      </select>
    </>
  );
}
