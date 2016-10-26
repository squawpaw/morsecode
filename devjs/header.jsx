import React from 'react'
import ReactDOM from 'react-dom'
import Morse from 'morse'

/*

header-div
	div
		morse-title
		text-to-morse
		morse-dashes

*/

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

	componentDidUpdate(){
		console.log('updated!');
		checkTextAreaHeight();
	}

	render(){
		console.log('rendering');
		return(
				<div className="morse-dashes" id="morse-dashes-id">{this.props.morseData}</div>
			)
	}
}

class Blinky extends React.Component{
	render(){
		return (
			<div className="blinky-div">This div will be used for a future feature...</div>
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
		this.setState({
			text: e.target.value,
			morse: Morse.encode(e.target.value)
		})
	}

	render(){
		return(
			<div>
			<div className="morse-title">morse code translator 
			-- --- .-. ... . ....... ..-. - .--</div>

			<div className="text-to-morse">
				<textarea type="text" 
				placeholder="type here"
				id="text-to-translate"
				onChange={this.handleUserInput}
				value={this.state.text}></textarea>
				<Blinky />
			</div>

			<MorseCodeWrapper morseData={this.state.morse} />

			</div>
			)
	}
}

console.log(Morse.encode('hello there'));

ReactDOM.render(<Header/>,document.getElementById('header'));

function checkTextAreaHeight(){
   var textArea = document.getElementById("morse-dashes-id");
   textArea.scrollTop = textArea.scrollHeight;
}