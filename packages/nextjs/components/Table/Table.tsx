import React, { ReactNode, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export type Column = ReactNode[];
interface TableProps {
  headers: string[];
  columns: Column[];
  onShowMore?: () => void;
}
const Table: React.FC<TableProps> = ({ headers, columns, onShowMore = () => ({}) }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-[1768px] w-full flex flex-col items-center bg-[#151F30] rounded-lg">
      <div className="flex w-full font-bold bg-[#1E293B] p-[30px] rounded-t-lg">
        {headers.map(header => (
          <span className=" flex-1" key={header}>
            {header}
          </span>
        ))}
      </div>
      {columns.length === 0 ? (
        <div className="p-[20px] w-full text-sm">
          <span>There is no hook on this moment</span>
        </div>
      ) : (
        <>
          {columns.slice(0, showMore ? columns.length : 5).map((column, columnIndex) => (
            <div className="flex w-full py-[20px] px-[30px] items-center hover:bg-[#202C3F] " key={columnIndex}>
              {column.map((row, rowIndex) => (
                <span className="flex-1" key={rowIndex}>
                  {row}
                </span>
              ))}
            </div>
          ))}
          {columns.length > 5 && (
            <div className="w-full py-[20px] flex justify-center border-t-2 border-[#0F172A]">
              <button className="flex items-center font-bold" onClick={onShowMore}>
                <span>Load More</span>
                <MdArrowDropDown />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Table;
