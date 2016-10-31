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
			<div className="blinky-div">
			This div will be used for a future feature...
			<button id="action">Transmit</button>
			<div id="div3">M</div>
			</div>
			)
	}
}

class TestForSVG extends React.Component{
	render(){
		return (
			<div>
				<object type="image/svg+xml" data="svg/MorseSVG2.svg" id="morse-svg">
	  			Your browser does not support SVG
				</object>
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
		this.setState({
			text: e.target.value,
			morse: Morse.encode(e.target.value)
		})
	}

	render(){
		return(
			<div>
			<div className="morse-title">
			<span id="code1">-- --- .-. ... . .......</span> <TestForSVG /> <span id="code2">..-. - .--</span></div>

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


$(function(){
	$("#action").click(function(){
		actionButton();
	})
})


let count = -1;
let blinkStatus = 0;
let testArr = [3,5,1,3,5,3,3,1,1,5,1,1,1];
let morseStr = "---.-.-..-.-.--.-.--.--.--.---.-.--.-...-.-.-.-...-.-.-.--.-.---.-.-.--.--.--.--.----.-.---.-.--...-.---.-.-.-...-.--.-.-.--.---"
let morseArr = morseStr.split('');
let arrLen = testArr.length;

console.log(morseArr);

let backToGreen = function(){
  $("#div3").css('background-color','green');
  setTimeout(actionButton, 200);
};
let greenToYellow = function(){
  $("#div3").css("background-color", "yellow");
  delayOn(testArr[count]);
}
let delayOn = (msTime) =>{
  setTimeout(backToGreen, testArr[count]*35);
}
let delaySpace = (msTime) =>{
  setTimeout(greenToYellow,10)
}

let actionButton = function(){
  count += 1;
  if (count < arrLen){
  delaySpace(testArr[count]);
  } else {}
  };
