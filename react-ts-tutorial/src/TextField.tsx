import React, { useRef, useState } from 'react'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: string
    ok?: boolean
    i?: number
    fn?: (bob: string) => void
    obj?: {
        f1: string
    }
    person: Person
	handleChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void
}

// specify that this is a react functional component
// specify pros
export const TextField: React.FC<Props> = ({ person, ok, handleChange }) => {
    // types with hooks
    const [count, setCount] = useState<number | null>(5)
    // hover over ref in input tag to find the type that we need to pass to useRef
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    setCount(12)
    setCount(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}
