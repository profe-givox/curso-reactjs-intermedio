import React from "react";
import { usersData } from "../data/usersData";
import '../styles/styles.css';
import { useTable } from "react-table/dist/react-table.development";

const DataTable =  () => {
    const data = React.useMemo(() => usersData,[]);

    const columns =  React.useMemo(() => 
                                        [
                                            {Header: "ID", accessor: 'id'},
                                            {Header: "Nombre", accessor: 'name'},
                                            {Header: "Email", accessor: 'email'},
                                            {Header: "Edad", accessor: 'age'},
                                        ],
                                    []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } 
                    = useTable({columns, data});

    return (
        <table {...getTableProps()} className="data-table">
            <thead>
                {headerGroups.map(hg => (
                    <tr {...hg.getHeaderGroupProps()}>
                        {hg.headers.map(col=>(
                            <th {...col.getHeaderProps()}>
                                {col.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map( r => {
                    prepareRow(r);
                    return(
                        <tr {...r.getRowProps()}>
                            {r.cells.map(celda =>(
                            <td {...celda.getCellProps()}>
                                {celda.render('Cell')}
                            </td>
                        ))}
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataTable;