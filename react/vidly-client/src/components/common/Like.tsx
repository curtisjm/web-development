import React from 'react'

interface Props {
    onClick: () => void
    liked: boolean | undefined
}

// input: liked (bool)
// output: onClick

const Like = (props: Props) => {
    let classes = 'fa fa-heart'
    if (!props.liked) classes += '-o'
    return (
        <i
            onClick={props.onClick}
            style={{ cursor: 'pointer' }}
            className={classes}
            aria-hidden="true"
        ></i>
    )
}

export default Like
