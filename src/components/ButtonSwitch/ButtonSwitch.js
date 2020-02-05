import React, { Component } from 'react';

class ButtonSwitch extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.props.switchFunctionality(this.props.type);
    }

    render(){
        return (
            <div className = "module buttonSwitch mrs" onClick={this.handleClick}>
            </div>
        )
  }
}

export default ButtonSwitch;
