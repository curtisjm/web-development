import React from 'react'
import Task from './Task'

// type rfc to use snippet for function component
export default function TodoList({ tasks, toggleTask }) {
    return (
        tasks.map(task => {
            // use a unique key to only rerender items of an array that are unique
            return <Task key={task.id} task={task} toggleTask={toggleTask} />
        })
    )
}
