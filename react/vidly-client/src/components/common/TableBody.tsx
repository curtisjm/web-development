import React, { Component } from 'react'
import _ from 'lodash'
import { Column } from './Table'

interface Props {
    data: any[]
    columns: Column[]
}

class TableBody extends Component<Props> {
    // render custom content for specialty columns
    renderCell = (item: any, column: Column) => {
        if (column.content) return column.content(item)

        if (typeof column.path === 'string') return _.get(item, column.path)
    }

    createKey = (item: any, column: Column) => {
        return item._id + (column.path || column.key)
    }

    render() {
        const { data, columns } = this.props
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item._id}>
                        {columns.map(column => (
                            <td key={this.createKey(item, column)}>
                                {this.renderCell(item, column)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        )
    }
}

export default TableBody
