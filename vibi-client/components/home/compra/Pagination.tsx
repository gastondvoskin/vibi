import PageButton from "./PageButton";

interface PaginationProps {
  numberOfPages: number;
}


const Pagination = ({ numberOfPages }: PaginationProps) => {
 const arrayOfPages = []; 

  for (let i = 1; i <= numberOfPages; i++) {
    arrayOfPages.push(i);
  }

  return (
    <section className="w-80 h-10 mt-10 mb-40 justify-start items-start gap-4 inline-flex">
        <PageButton isCurrentPage={true} page={1}/>
        <PageButton isCurrentPage={false} page={2}/>
        <PageButton isCurrentPage={false} page={3}/>
        <PageButton isCurrentPage={false} page="..."/>
        <PageButton isCurrentPage={false} page={12}/>
        <PageButton isCurrentPage={false} page=">"/>
    </section>
  );
};

export default Pagination;
