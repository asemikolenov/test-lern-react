import React, { Component } from "react";
import { isThisTypeNode } from "typescript";

export class TestClass extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      count     : 1, 
      interval  : 0 
    }
  }

  render() {
    console.log("this.interval:",this.state.interval)
    return (
      <div>
        <div>test props: {this.objToString(this.props)}</div>
        <div>test props: {this.objToString(this.state)}</div>
        {
          !this.state.interval
            ? <button
                class='btn btn-primary'
                onClick={()=>this.startCounter()}
              >
                Start Counter
              </button>
            : <button 
                class='btn btn-primary'
                onClick={()=>this.stopCounter()}
              >
                Stop Counter
              </button>
        }
        <br/>
        <button
          class='btn btn-secondary'
          onClick={()=> this.props.click()}
        >
          CLICK
        </button>
      </div>
    )
  }

  startCounter(){
    var interval = setInterval( ()=> { 
      this.setState( 
        ()=> ({count:this.state.count + 1, interval:interval}) ) 
      }
      , 1000
    )
  }
  stopCounter(){
    clearInterval(this.state.interval);
    this.setState( 
      ()=> ({interval:0 }) 
    ) 
  }

  objToString(obj){
    var arr = []
    for (var val in obj) {
      arr.push(val + ": " + obj[val]) 
    }
    return `{ ${arr.join(", ")} }`;
  }
}
