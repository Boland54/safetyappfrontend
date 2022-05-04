import React, { Component } from "react";

// Importing geolocated reducer function
import { geolocated } from "react-geolocated";

class Map extends Component {
render() {

	
	// Check geolocation supported in
	// browser or not
	return this.props.isGeolocationAvailable ? (

	// Check location is enable in
	// browser or not
	this.props.isGeolocationEnabled ? (

		// Check coordinates of current
		// location is available or not
		this.props.coords ? (
		<div>
			<h3 style={{ color: "black" }}>
			Your current latitude and longitude is
			</h3>
			
			<p>latitude = {this.props.coords.latitude}</p>
			<p>longitude = {this.props.coords.longitude}</p>
			

			<h3 style={{ color: "black" }}>
			Please put it in the comment section below
			</h3>
		</div>
		) : (
		<h1>Getting the location data</h1>
		)
	) : (
		<h1>Please enable location on your browser</h1>
	)
	) : (
	<h1>Please, update your or change the browser </h1>
	);
}
}

// Binding geolocated() reducer function to
// App component, while exporting it
export default geolocated()(Map);