import React from "react"

//NEW WAY
function App () {
    const [ count, setCount ] = React.useState(0)
    const [ answer, setAnswer] = React.useState("Yes")

    function increment () {
        setCount(prevCount => prevCount + 1)
    }

    function decrement () {
        setCount(prevCount => prevCount - 1)
    }

    function change () {
        answer === "Yes" ?
        setAnswer("No") :
        setAnswer("Yes")
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
            <h1>{answer}</h1>
            <button onClick={change}>Change!</button>
        </div>
    )
}

//OLD WAY
/*
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Change!</button>
            </div>
        )
    }
}
*/

export default App

