interface PageButtonProps {
  isCurrentPage: boolean;
  page: number | "..." | ">";
}

const PageButton = ({ isCurrentPage, page }: PageButtonProps) => {
  return (
    <div className={`w-10 h-10  rounded border justify-center items-center flex ${isCurrentPage ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-gray-200 text-blue-950 hover:bg-red-500 hover:border-red-500 hover:text-white hover:cursor-pointer'}`}>
      <div className="text-center text-base font-semibold">{page}</div>
    </div>
  );
};

export default PageButton;