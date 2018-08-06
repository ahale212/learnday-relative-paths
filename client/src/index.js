'use strict'

import React from "react"
import ReactDOM from 'react-dom'
import {browserHistory, Route, Router} from "react-router"
import axios from 'axios'


class Home extends React.Component {

    state = {
        greeting: ''
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get('api/greeting')
            .then(res => {
                this.setState({greeting: res.data});
            });
    }

    render() {
        return (
            <div>
                <h1>Welcome to Relative Paths</h1>
                <h2>Our Server Says <strong>{this.state.greeting}</strong></h2>
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={Home}>
        </Route>
    </Router>
), document.getElementById('root'))
