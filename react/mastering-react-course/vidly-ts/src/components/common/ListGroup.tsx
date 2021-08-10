import React from 'react'

// pass text and value properties in order to make ListGroup implementation flexible
// can use the component for any kind of list
const ListGroup = ({
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
}) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item === selectedItem
                            ? 'clickable list-group-item active'
                            : 'clickable list-group-item'
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
