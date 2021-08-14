import React from 'react'
import { TextField } from './TextField'
import { Counter } from './Counter'

const App: React.FC = () => {
    return (
        <>
            <TextField
                text="hello"
                person={{ firstName: 'John', lastName: 'Doe' }}
                handleChange={e => {
                    console.log(e)
                }}
            />
            <Counter>
                {(count, setCount) => (
                    <div>
                        {count}
                        <button onClick={() => setCount(count + 1)}></button>
                    </div>
                )}
            </Counter>
        </>
    )
}

export default App
