import React, { Component } from 'react';
import { Header_Top, } from '@@'

export default class index extends Component {
    render() {
        const { title, content } = this.props
        return (
            <div className="homeMyServerPages">
                <Header_Top title={title} />
                <div className="section">
                    {content}
                </div>
            </div>
        );
    }
}