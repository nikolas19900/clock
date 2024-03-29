import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import renderHTML from 'react-render-html';
class App extends Component {

    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount(){
        var interval = setInterval(this.handleEvent,1000);
    }

  render(){
    return (
    <main class="main">
    <div class="clockbox">
        <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
            <g id="face">
                <circle class="circle" cx="300" cy="300" r="253.9"/>
                <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>
                <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
            </g>
            <g id="hour">
                <path class="hour-arm" d="M300.5 298V142"/>
                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
            </g>
            <g id="minute">
                <path class="minute-arm" d="M300.5 298V67"/>
                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
            </g>
            <g id="second">
                <path class="second-arm" d="M300.5 350V55"/>
                <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
            </g>
        </svg>
    </div>
    </main>
    )
  }

  handleEvent(){
    var hour = document.querySelector("#hour");
    var minute = document.querySelector("#minute");
    var second = document.querySelector("#second");

    var date = new Date();
    var tempHour = date.getHours();
    var tempMin = date.getMinutes();
    var tempSecond = date.getSeconds();
    var hrPosition = (tempHour * 360/12)+(tempMin*(360/60)/12);
    var mnPosition = (tempMin *360/60)+(tempSecond*(360/60)/60);
    var scPosition = tempSecond*360/60;

    hrPosition = hrPosition + (3/360);
    mnPosition = mnPosition + (6/60);
    scPosition = scPosition + 6;

    hour.style.transform = " rotate("+ hrPosition +"deg)";
    minute.style.transform = " rotate("+ mnPosition +"deg)";
    second.style.transform = " rotate("+ scPosition +"deg)";
  }




}

export default App;
