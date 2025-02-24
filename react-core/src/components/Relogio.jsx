import { Component } from "react"

export default class Relogio extends Component{
  constructor(props){
    super(props)
    this.state = { hora: new Date(), counter : 0}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.setState({ hora: new Date()}),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  handleClick(){
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render(){
    return(
      <>
      <button onClick={this.handleClick}>Click me</button>
      <h3>{this.state.counter}</h3>
      <h1>Hora actual:{this.state.hora.toLocaleTimeString()}</h1>
      </>
    );
  }
}