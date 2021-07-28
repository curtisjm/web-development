import React from 'react'

const ListGroup = props => {
    // pass text and value properties in order to make ListGroup implementation flexible
    // can use the component for any kind of list
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
        props
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item === selectedItem
                            ? 'list-group-item active'
                            : 'list-group-item'
                    }
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    )
}

// set default values for some props
ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id',
}

export default ListGroup
