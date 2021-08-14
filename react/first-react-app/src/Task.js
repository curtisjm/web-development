import React from 'react'

export default function Task({ task, toggleTask }) {
    function handleToggleTaskClick() {
        toggleTask(task.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={task.complete}  onChange={handleToggleTaskClick} />
                {task.name}
            </label>
        </div>
    )
}
