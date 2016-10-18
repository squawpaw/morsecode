import React from 'react'
import ReactDOM from 'react-dom'
import Morse from 'morse'

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="header-div">
				<TextToEncode />
			</div>
			)
	}
}

class MorseCodeWrapper extends React.Component{

// this might be a bad idea.  Check out the added MCW component
	render(){
		console.log('rendering');
		return(
			<div className="morse-wrapper">
				<div className="morse-dashes">{this.props.morseData}</div>
			</div>
			)
	}
}

class TextToEncode extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: "",
			morse: ""
		}
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(e){
		console.log(this.state.morse)
		this.setState({
			text: e.target.value,
			morse: Morse.encode(e.target.value)
		})
	}

	render(){
		return(
			<div className="text-to-morse">
				<textarea type="text" 
				placeholder="type here"
				id="text-to-translate"
				onChange={this.handleUserInput}
				value={this.state.text}></textarea>
				<MorseCodeWrapper morseData={this.state.morse} />
			</div>
			)
	}
}

console.log(Morse.encode('hello there'))


ReactDOM.render(<Header/>,document.getElementById('header'));


// below is the parent component
// from my markdown app
// I would like to separate out the 
// divs into their own component, but I'm not
// sure how to maintain states....

/*
var Hi = React.createClass({
  
  getInitialState: function(){
    return {
      text: ""
    }
  },
  
  insertMarked: function(st){
    return {
      __html: marked(st)
    }
  },
  
  handleUserInput: function(e){
    this.setState({
      text: e.target.value
    })
  },
  
 /* render: function(){
    return (<div>
        <Navbar />
      
      <div className="container">
        <Header />
          
        <div className="textDiv bg1">
        <textarea className="textbox" 
          id = "textID" 
          onChange={this.handleUserInput} 
          value={this.state.text} 
          placeholder="Type some Markdown here..."/>
        </div>
        <div className="bg2">
        <div className="displayDiv" 
          dangerouslySetInnerHTML={this.insertMarked(this.state.text)} />
        </div>
        <Hints />
      </div>
        </div>
           )
  }
});*/