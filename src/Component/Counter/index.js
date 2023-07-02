import { Component } from "react";
import "./index.css"
  class Counter extends Component{
    state={count:0}
    clickMe= () =>{
        this.setState((prev)=> ({count:prev.count+1}))
    }
    DecreaseMe =() =>{
        this.setState((prev) => ({count:prev.count-1}))
    }
    render(){
        const {count}=this.state
        return (
            <div className="Container">
            <h1>Counter</h1>
            <button onClick={this.clickMe}>Increase</button>
            <button onClick={this.DecreaseMe}>Decrease</button>
            <p>{count}</p>
            </div>
        )
    }
  }

export default Counter;
