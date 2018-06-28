import React, { Component } from "react";

export default class Clock extends Component {
	render() {
		return (
			<div className="clock">
				<div className="clock__days clock__box">
					<div>
						<label className="clock__title">DAYS</label>
						<label className="clock__amount">20</label>
					</div>
				</div>
				<div className="clock__hours clock__box">
					<div>
						<label className="clock__title">HOURS</label>
						<label className="clock__amount">20</label>
					</div>
				</div>
				<div className="clock__minutes clock__box">
					<div>
						<label className="clock__title">MINUTES</label>
						<label className="clock__amount">20</label>
					</div>
				</div>
				<div className="clock__seconds clock__box">
					<div>
						<label className="clock__title">SECONDS</label>
						<label className="clock__amount">20</label>
					</div>
				</div>
			</div>
		);
	}
}
