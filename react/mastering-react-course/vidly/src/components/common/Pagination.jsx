import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize)

    if (pagesCount === 1) return null

    // use lodash library to generate array with page numbers
    const pages = _.range(1, pagesCount + 1)

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        key={page}
                        className={
                            page === currentPage
                                ? 'page-item active'
                                : 'page-item'
                        }
                    >
                        <a
                            className="clickable page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// type validatioN
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default Pagination
