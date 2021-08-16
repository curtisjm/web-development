import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { SortColumn } from '../Movies'

// bootstrap docs for table: https://getbootstrap.com/docs/5.0/content/tables/

interface Props {
    columns: Column[]
    sortColumn: SortColumn
    onSort: (sortColumn: SortColumn) => void
    data: any[]
}

export type Column = 
    | {
        key?: undefined
        path: string
        label: string
        content?: (arg0: any) => JSX.Element
    }
    | {
        path?: undefined
        key: string
        content?: (arg0: any) => JSX.Element
    }

const Table = ({ columns, sortColumn, onSort, data }: Props) => {
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
