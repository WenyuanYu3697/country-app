/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const maxButtons = totalPages > 5 ? 5 : totalPages;
  const handlePageIncrease = () => {
    currentPage < totalPages ? onPageChange(currentPage + 1) : onPageChange(totalPages);
  };

  const handlePageDecrease = () => {
    currentPage >= 1 ? onPageChange(currentPage - 1) : onPageChange(1);
  };

  const handlePageOnClick = (pageNumber: number) => {
    onPageChange(
      currentPage > pageNumber ? currentPage - (currentPage - pageNumber) : currentPage + (pageNumber - currentPage)
    );
  };

  return (
    <div className="flex justify-center items-baseline bg-gray dark:bg-black-200 text-black dark:text-white">
      <button className="p-[10px]" type="button" onClick={handlePageDecrease}>
        <KeyboardArrowLeftIcon />
      </button>
      <div>{currentPage > 5 ? '...' : null}</div>
      <div className="flex items-center">
        <div className="flex">
          {Array.from(
            {
              length: maxButtons,
            },
            (_, i) => (currentPage > maxButtons ? currentPage - maxButtons + i + 1 : i + 1)
          )
            .filter((pageNumber) => pageNumber !== totalPages)
            .map((pageNumber) => (
              <button
                key={pageNumber}
                className={currentPage === pageNumber ? 'bg-blue-600 p-[5px] rounded-full' : 'p-[5px] mr-[2px]'}
                onClick={() => handlePageOnClick(pageNumber)}
                value={pageNumber}
                type="button"
              >
                {pageNumber}
              </button>
            ))}
        </div>
        <div className={currentPage === maxButtons - 1 || currentPage === totalPages ? '' : 'mr-2'}>
          {currentPage === maxButtons - 1 || currentPage === totalPages ? null : '...'}
        </div>
        <button
          className={currentPage === totalPages ? 'bg-blue-600 p-[5px] mr-2 rounded-full' : 'p-[5px] mr-[2px]'}
          type="button"
          onClick={() => handlePageOnClick(totalPages)}
          value={totalPages}
        >
          {totalPages}
        </button>
      </div>
      <button className="p-[5px]" type="button" onClick={handlePageIncrease}>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};
