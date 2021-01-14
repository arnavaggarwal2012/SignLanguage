import { Component } from 'react';
import Particles from 'react-particles-js';
import Images from './Components/images.js'
import './App.css';

const particles = {
  polygon: {
    enable: true,
    type: 'inside',
    move: {
      radius: 10
    },
    url: 'path/to/svg.svg'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input : '',
      final : '',
    }
   }
   submitValue = (e) => {
      this.setState({
        input:e.target.value,
      })
   }
   onSubmitValue = (e) => {
    this.setState({
      final:this.state.input
    })
  }
  resetValue = () => {
    this.setState({
      final: '',
      input: '',
    })}
    enterKey = (e) => {
      console.log(e)
    }
  render(){
  return (
    <div className="App">
      {/* <Particles params={particles}  className="particles"/> */}
      <div className="header"><h1>combining opposites : normal & deaf</h1></div>
      <div className="Content">
        <div className="about"><span id="typewriter">About section 
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sunt magnam, perspiciatis blanditiis, obcaecati quaerat repellat ea et a veniam nisi vel. Harum temporibus in dolore voluptatibus nulla officia fuga vel, iusto soluta alias eos! Facere necessitatibus eligendi voluptas consequuntur in molestias! Aperiam culpa eveniet commodi error vel repellat nihil?
       </span>
       </div>
        <div className="inputField">
        <input type="text" placeholder="type text" onChange = {this.submitValue} className="inputValue"></input>
                    <button type="submit" onClick = {this.onSubmitValue} onKeyPress={this.enterKey}>Translate</button>
                    <button  onClick = {this.resetValue}>Reset </button>
        </div>
        <div className="images">
          <Images text={this.state.final}/>
        </div>
      </div>
      <div className="footer">Made with <i class="fas fa-heart text-danger" aria-hidden="true"></i></div>
    </div>
  );
}}

export default App;
