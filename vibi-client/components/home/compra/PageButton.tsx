interface PageButtonProps {
  currentPage: number;
  page: number | "..." | ">";
  changePage: Function;
}

const PageButton = ({ currentPage, page, changePage }: PageButtonProps) => {
  /* console.log('page en PageButton: ', page) */
  return (
    <button onClick={() => changePage(page)} className={`w-10 h-10  rounded border justify-center items-center flex ${currentPage === page ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-gray-200 text-blue-950 hover:bg-red-500 hover:border-red-500 hover:text-white hover:cursor-pointer'}`}>
      <div className="text-center text-base font-semibold">{page}</div>
    </button>
  );
};

export default PageButton;