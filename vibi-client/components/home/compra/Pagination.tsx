import PageButton from "./PageButton";

interface PaginationProps {
  numberOfPages: number;
  changePage: Function;
  currentPage: number;
}


const Pagination = ({ numberOfPages, changePage, currentPage }: PaginationProps) => {
 const arrayOfPages = []; 

  for (let i = 1; i <= numberOfPages; i++) {
    arrayOfPages.push(i);
  }

  return (
    <section className="w-80 h-10 mt-10 mb-40 justify-start items-start gap-4 inline-flex">
        <PageButton currentPage={currentPage} page={1} changePage={changePage}/>
        <PageButton currentPage={currentPage} page={2} changePage={changePage}/>
        <PageButton currentPage={currentPage} page={3} changePage={changePage}/>
        {/* <PageButton currentPage={currentPage} page="..." changePage={changePage}/>
        <PageButton currentPage={currentPage} page={12} changePage={changePage}/>
        <PageButton currentPage={currentPage} page=">" changePage={changePage}/> */}
    </section>
  );
};

export default Pagination;
