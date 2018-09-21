import React, { Component } from "react";
import { Button } from 'antd';

import { connect } from 'react-redux';
import { increment, incrementAsync, decrement, decrementAsync } from "../../actions";

class App extends Component {
	state = {
		title: "Hello Wrold!"
	}

	handleClick = () => {
		console.log("Hello Wrold!");
	}

    render() {
        return (
        	<div className="textAlign">
	            <h1 onClick={this.handleClick}>{ this.state.title }</h1>
	            <h1>test redux</h1>
	            <Button type="primary" onClick={this.props.add}>increment</Button>
	            <Button type="primary" onClick={this.props.addAsync}>incrementAsync</Button>
	            <Button type="primary" onClick={this.props.minus}>decrement</Button>
	            <Button type="primary" onClick={this.props.minusAsync}>decrementAsync</Button>
        	</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        total: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add() {
            dispatch(increment())
        },
        addAsync() {
            dispatch(incrementAsync())
        },
        minus() {
            dispatch(decrement())
        },
        minusAsync() {
            dispatch(decrementAsync())
        }
    }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default ConnectedApp;
