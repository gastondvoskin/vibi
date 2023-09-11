interface GeneralDescriptionProps {
    description: string | undefined;
}

const GeneralDescription = ({description}: GeneralDescriptionProps) => {
  return (
    <div className="w-96 text-slate-600 text-base font-normal leading-normal my-8">
        <h2 className="text-zinc-900 text-xl font-bold">Descripción general</h2>
        <div>{description}</div>
    </div>
  );
};

export default GeneralDescription;

