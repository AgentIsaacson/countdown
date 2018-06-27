import React, { Component } from "react";
import Picker from "./picker";

export default class App extends Component {
	render() {
		return (
			<div className="grid">
				<h1 className="grid__title">Birthday Countdown</h1>
				<div className="grid__skew-dark-blue" />
				<div className="grid__skew-light-blue" />
				<Picker />
			</div>
		);
	}
}
