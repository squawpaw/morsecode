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
		console.log('rendering...');
		return(
				<div className="morse-dashes" id="morse-dashes-id">{this.props.morseData}</div>
			)
	}
}

class Blinky extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			flashText: ""
		}
		/*this.actionButton = this.actionButton.bind(this);*/
	}
	actionButtonWrapper(){
		let count = -1;
		let blinkStatus = 0;
		let stateText = document.getElementById('morse-dashes-id').textContent;
		let numText = stateText.replace(/\./g, 1)
			.replace(/-/g, 3)
			.replace(/\s/g, 6);
		let numArr = numText.split('');
		let numArrLen = numArr.length;

	let actionButton = function(){

	let switchOn = function(msTime){
		$("#div3").css('background-color','yellow');
		delayTime(msTime);
	}

	let delayTime = function(msTime){
		setTimeout(switchOff, msTime*90);
	}

	let switchOff = function(){
		$("#div3").css('background-color','green');
		setTimeout(actionButton, 20)
	}

	count += 1;
	console.log(numArr);

	if (count < numArrLen && numArr[count] == 6){
		delayTime(3)
	} else if (count < numArrLen){
		switchOn(numArr[count])
	};
	}

	actionButton();
}

	render(){
		return (
			<div className="blinky-div">
			<button id="action" onClick={(e)=>{
				e.preventDefault;
				this.actionButtonWrapper()}}> 
				Transmit </button>
			<div id="div3">Morse Flash!</div>
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