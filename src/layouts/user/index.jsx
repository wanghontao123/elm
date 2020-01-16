import React, { Component } from 'react'
import PrivateRoute from '@@/PrivateRoute'
import './style.less'

export default class extends Component {
    render() {
        return (
            <div className="layouts_user">
                <PrivateRoute route={this.props.route.router}/>
            </div>
        );
    }
}