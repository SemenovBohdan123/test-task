import { FC } from "react";

interface TableCellProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
      HTMLTableHeaderCellElement
    >,
    "type"
  > {}

const TableCell: FC<TableCellProps> = ({ children }) => {
  return <td className="table__cell">{children}</td>;
};

export default TableCell;
