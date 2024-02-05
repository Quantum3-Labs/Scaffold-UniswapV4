import React, { ReactNode } from "react";

type Column = ReactNode[];
interface TableProps {
  headers: string[];
  columns: Column[];
}
const DataTable: React.FC<TableProps> = ({ headers, columns }) => {
  return (
    <div className="max-w-[1768px] w-full flex flex-col items-center bg-[#151F30] rounded-lg">
      <div className="flex w-full font-bold bg-[#1E293B] p-[30px] rounded-t-lg">
        {headers.map(header => (
          <span className="flex-1" key={header}>
            {header}
          </span>
        ))}
      </div>
      <>
        {columns.map((column, columnIndex) => (
          <div
            className="flex w-full py-[20px] px-[30px] items-center rounded-lg border-b border-[#334155]"
            key={columnIndex}
          >
            {column.map((row, rowIndex) => (
              <span className="flex-1" key={rowIndex}>
                {row}
              </span>
            ))}
          </div>
        ))}
      </>
    </div>
  );
};

export default DataTable;
