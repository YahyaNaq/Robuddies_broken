import React, { Component } from 'react';

class Errorboundary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Error: false
		}
	}

	componentDidCatch(error, info) {
		return this.setState({ Error: true })
	}

	render() {
		if (this.state.Error) {
			return <h2 className="light-green">Sorry, an error occured!</h2>
		}
		return this.props.children
		}
}

export default Errorboundary;