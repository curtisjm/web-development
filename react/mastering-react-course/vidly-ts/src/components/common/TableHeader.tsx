import React, { Component } from 'react'

// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn }
        // if the current sort path is the same as the one clicked, swap sort order
        if (sortColumn.path == path) {
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
            // if path is different, sort based on new path in ascending order
        } else {
            sortColumn.path = path
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
    }

    renderSortIcon = column => {
        const { sortColumn } = this.props

        if (column.path !== sortColumn.path) return null
        if (sortColumn.order === 'asc')
            return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => (
                        <th
                            className="clickable"
                            key={column.path || column.key}
                            onClick={() => this.raiseSort(column.path)}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        )
    }
}

export default TableHeader
