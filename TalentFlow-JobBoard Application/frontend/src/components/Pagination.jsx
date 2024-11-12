import ReactPaginate from "react-paginate";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Pagination = ({
  jobs,
  jobsPerPage,
  currentPage,
  handlePageChange,
  length,
}) => {
  return (
    <ReactPaginate
      previousLabel={<FaAngleLeft />} // Left arrow
      nextLabel={<FaAngleRight />} // Right arrow
      pageCount={Math.ceil(jobs.length / jobsPerPage)}
      onPageChange={handlePageChange}
      containerClassName="pagination mt-4 flex justify-center items-center"
      pageClassName="page-item mx-3"
      pageLinkClassName="page-link px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white"
      activeClassName="active bg-blue-500 text-white"
      previousClassName="previous-btn px-4 py-2 text-lg border rounded-md bg-gray-200 hover:bg-blue-500"
      nextClassName="next-btn px-4 py-2 text-lg border rounded-sm bg-gray-200 hover:bg-blue-500"
    />
  );
};

export default Pagination;
