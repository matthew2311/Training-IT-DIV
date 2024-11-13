import React, { Component } from 'react'
import { IClassComponentProps, IClassComponentState } from './Class.interfaces'
import './Class.css'

class ClassComponent extends Component<IClassComponentProps, IClassComponentState> {
    constructor(props: IClassComponentProps) {
        super(props)

        this.state = {
            counter: 0,
            textValue: ''
        }
    }

    componentDidMount(): void {
        console.log("Ini component did mount")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("Ini component did update")
    }

    componentWillUnmount(): void {
        console.log('ini component will unmount')
    }

    handleAddButton = () => {
        this.setState((prevState: IClassComponentState) => ({
            counter: prevState.counter + 1
        }))
    }

    handleMinusButton = () => {
        this.setState((prevState: IClassComponentState) => ({
            counter: prevState.counter - 1
        }))
    }

    handleChangeTextValue = (value: string) => {
        this.setState({
            textValue: value
        })
    }

    render(): React.ReactNode {
        const { title, stringArray, testFunc } = this.props
        const { counter, textValue } = this.state

        return (
            <div>
                <div>
                    {title}
                </div>
                <button onClick={this.handleAddButton}>+</button>
                <div>
                    {counter}
                </div>
                <button onClick={this.handleMinusButton}>-</button>
                <div className='string-array-section'>
                    {stringArray.map((item: string, index: number) => {
                        return (
                            <div key={index} style={{ marginRight: '8px' }}>{item}</div>
                        )
                    })}
                </div>
                <div>{textValue}</div>
                <button onClick={() => testFunc('test')}>test</button>
                <input type="text" value={textValue} onChange={(event) => { this.handleChangeTextValue(event.target.value) }} />
            </div>
        )
    }
}

export default ClassComponent