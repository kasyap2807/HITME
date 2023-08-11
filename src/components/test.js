import React, { Component } from 'react'

export class ClassComponentCounter extends Component {

    constructor(){
        super()
        this.state={
            count:0,
            name:""
        }
    }

    componentDidMount(){
        document.title = `Count ${this.state.count} Times`;
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count)
        console.log("updating document");
        document.title = `count ${this.state.count} Times`;
    }

  render() {
    return (
      <div>
        <h2>ClassComponentCounter</h2>
        <input type='text'value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <br/>
        <button onClick={()=>{
            this.setState({count : this.state.count+1})
        }}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassComponentCounter