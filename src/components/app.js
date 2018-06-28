import React, { Component } from "react";
import Picker from "./picker";
import { Button } from "./button";
import Clock from "./clock";

export default class App extends Component {
	render() {
		// return	<div className="grid"><Clock /></div>
		
		return (
			<div className="grid">
				<h1 className="grid__title">Birthday Countdown</h1>
				<div className="grid__skew-dark-blue" />
				<div className="grid__skew-light-blue" />
        <Picker />
        { Button('Generate Countdown') }
        <Clock />
			</div>
		);
	}
}
