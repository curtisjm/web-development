import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
// used to generate random ids
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'tasks-key-123'

function App() {
    const [tasks, setTasks] = useState([])
    const taskNameRef = useRef()

    // load stored tasks on start
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTasks) setTasks(storedTasks)
    }, [])

    // save tasks to local storage even after reload
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    function toggleTask(id) {
        // make a copy of current tasks so we don't change them
        // you should always copy a state variable, then use that copy to set a new state
        const newTasks = [...tasks]
        const task = newTasks.find(task => task.id === id)
        task.complete = !task.complete
        setTasks(newTasks)
    }

    function handleAddTask(e) {
        // current: whatever element we are currently referencing
        const name = taskNameRef.current.value
        if(name === '') return
        setTasks(prevTasks => {
            return [...prevTasks, { id: uuidv4(), name: name, complete: false }]
        })
        taskNameRef.current.value = null
    }

    function handleClearTasks() {
        const newTasks = tasks.filter(task => !task.complete)
        setTasks(newTasks)
    }

    return (
        <>
            <TodoList tasks={tasks} toggleTask={toggleTask} />
            <input ref={taskNameRef} type="text" />
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={handleClearTasks}>Clear Completed Tasks</button>
            <div>{tasks.filter(task => !task.complete).length} left to do</div>
        </>
    )
}

export default App
