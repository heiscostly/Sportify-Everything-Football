/* eslint-disable react/jsx-key */
import React, { Fragment } from "react";
import { useTable, usePagination } from "react-table";
import { TableContainer, TableSection } from "./TableStyles";

const TransactionTable = ({
  columns,
  data,
  loading,
  pageCount: controlledPageCount,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
        manualPagination: true,
        pageCount: controlledPageCount,
      },
      usePagination
    );

  return (
    <Fragment>
      <div className="position-relative">
        <TableSection isLoading={loading}>
          <TableContainer>
            <div className="table-responsive">
              <table className="table mb-0" {...getTableProps()}>
                <thead className="table-borderless">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}{" "}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={"_tr_" + i}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* <Pagination /> */}
          </TableContainer>
        </TableSection>
      </div>
    </Fragment>
  );
};

export default TransactionTable;
