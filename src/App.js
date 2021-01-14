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
        <div className="about"><span id="typewriter">
        <p>American Sign Language (ASL) is the primary language of the deaf community in North America(but not limited to those borders). It uses a combination of hand movements, facial expressions, and body posture.</p>
<p>The Alphabet in sign language is the starting point for anyone who wants to communicate with a Deaf person.
There are more we can do with these sign language.
</p>
<p>
We can communicate underwater/space/through glass/in noisy place(where we can’t speak/communicating)
Using the alphabet in sign language is also called finger/Hand  spelling. It is commonly used in a few different situations, such as:
Spelling out a person's name, before you get to know their personalized 'name sign'
Spelling out a place name or location before you get to know its designated sign
Why this : When communicating with a Deaf person from another region (dialects and signs can be different, so being able to fingerspell is a great back-up)
</p>
<p>
ASL is a common sign language – though by far not the only one – for people who are d/Deaf or hard of hearing (deaf refers to the physical condition of deafness, while Deaf refers to belonging to the Deaf community). .
ASL “entails five parameters: handshapes, palm orientation, location (space on the body, around the signer), movement and of course, facial expressions”</p>

<p>Fact : About 15% of adults in America report hearing loss, and about 1 million use sign language to communicate.</p>
<p>Justifying the topic relation to theme : we have got theme “connecting opposites “ so in this theam we came up with idea to that we can make a project where we can initiate a helping hand to deaf 
Don’t think it's only useful to deaf but this project  could also be used by normal people who want to communicate with deafs or can try it where we can’t talk.</p>

<p>Its just like we are giving them a “virtual ear” to communicate.</p>

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
      <div className="footer">Made with Love <i class="fas fa-heart text-danger" aria-hidden="true"></i></div>
    </div>
  );
}}

export default App;
