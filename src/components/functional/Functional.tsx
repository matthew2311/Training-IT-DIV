import React, { useState, useEffect } from 'react'
import { IFunctionalComponentProps } from './Functiona.interfaces'

const FunctionalComponent = (props: IFunctionalComponentProps) => {
    const { title } = props

    const [counter, setCounter] = useState<number>(0)
    const [text, setText] = useState<string>('')

    const handleAddButton = () => {
        setCounter((prevCounter: number) => prevCounter + 1)
    }

    const handleMinusButton = () => {
        setCounter((prevCounter: number) => prevCounter - 1)
    }

    const handleChangeText = (value: string) => {
        setText(value)
    }

    useEffect(() => {
        console.log('use effect []')
    }, [])

    useEffect(() => {
        console.log('use effect [counter]')
    }, [counter])

    useEffect(() => {
        console.log('use effect [text]')
    }, [text])

    return (
        <div>
            <div>{title}</div>
            <button onClick={handleAddButton}>+</button>
            <div>{counter}</div>
            <button onClick={handleMinusButton}>-</button>
            <div>{text}</div>
            <input type="text" value={text} onChange={(event) => handleChangeText(event.target.value)} />

            {/* <ClassComponent /> */}
        </div>
    )
}

export default FunctionalComponent