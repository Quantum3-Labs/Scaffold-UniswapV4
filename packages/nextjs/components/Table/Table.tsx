import React from "react";
import { MdArrowDropDown } from "react-icons/md";

type Column = string[];
interface TableProps {
  headers: string[];
  columns: Column[];
  onShowMore?: () => void;
}
const Table: React.FC<TableProps> = ({ headers, columns, onShowMore = () => ({}) }) => {
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
          {columns.map((row, index) => (
            <div className="flex w-full py-[20px] px-[30px]" key={index}>
              {row.map(value => (
                <span className="flex-1" key={value}>
                  {value}
                </span>
              ))}
            </div>
          ))}
          <div className="w-full py-[20px] flex justify-center border-t-2 border-[#0F172A]">
            <button className="flex items-center font-bold" onClick={onShowMore}>
              <span>Load More</span>
              <MdArrowDropDown />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
