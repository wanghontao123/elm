import React, { Component } from 'react';
import './style.less'
import PrivateRoute from '@@/PrivateRoute'

export default class index extends Component {
    render() {
        return (
            <div className="layouts_user">
                <PrivateRoute route={this.props.route.router}/>
            </div>
        );
    }
}