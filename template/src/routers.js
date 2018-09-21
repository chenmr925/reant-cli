import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// 路由配置
import Index from "pages/index/App"

class Wrap extends Component {
    render() {
        return (
            <div className="wrap">
                { this.props.children }
            </div>
        )
    }
}

class Routers extends Component {
    render() {
        return (
            <Router>
                <Wrap>
                    <Switch>
                        <Route exact path="/" component={ Index } />
                        <Route path="/index" component={ Index } />
                    </Switch>
                </Wrap>
            </Router>
        )
    }
}

export default Routers;