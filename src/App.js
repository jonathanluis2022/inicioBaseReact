import logo from './logo.svg';
import './App.css';
import{ Component } from 'react';

class App extends Component {
constructor(props) {
  super(props) 
 

  this.state = {
    name: 'Jonathan',
    counter : 0
  }
}

hanldePClick = () => {
  this.setState({name : 'Luis'})
}

handleAClick = (event) => {
  event.preventDefault();
  const { counter } = this.state
  this.setState({counter : counter + 1})
  
}

render() {

  const  { name , counter } = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.hanldePClick}>
          {name} {counter}
        </p>
        
        <a
          onClick={this.handleAClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          não vai para o linck
        </a>
      </header>
    </div>
  );
}

}

export default App;
