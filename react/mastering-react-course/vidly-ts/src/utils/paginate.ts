import _ from 'lodash'

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize
    // convert items array to lodash wrapper
    // go to startIndex and take all items for current page
    // pick items for current page
    // convert lodash object to regular array
    return _(items).slice(startIndex).take(pageSize).value()
}
