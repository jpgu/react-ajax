import React, {Component} from 'react';

class Nav extends Component{
  componentDidMount(){
    fetch('list.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }    
    })
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        console.log(json);
      }.bind(this));
    }
    
  render(){
    return(
      <h1>Ajax rendering</h1>
      <h2>React - Ajax</h2>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Nav></Nav>      
    </div>
  );
}

export default App;