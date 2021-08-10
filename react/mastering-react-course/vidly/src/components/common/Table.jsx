import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

// bootstrap docs for table: https://getbootstrap.com/docs/5.0/content/tables/

const Table = ({ columns, sortColumn, onSort, data }) => {
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody columns={columns} data={data} />
        </table>
    )
}

export default Table
