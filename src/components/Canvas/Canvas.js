import React, { Component } from 'react';
import Grid from '../Grid/Grid';

class Canvas extends Component {


    render() {
        return (
            <div className="module w100">
                <div className="container">
                    <Grid mode={this.props.mode} />
                </div>
            </div>
        )
    }
}


export default Canvas;
