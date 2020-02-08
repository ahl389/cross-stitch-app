import React, { Component } from 'react';

class ButtonSwitch extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.props.switchFunctionality(this.props.type);
    }

    render() {
        console.log(this.props.mode)
        console.log(this.props.label)
        const selected = this.props.mode === this.props.type ? 'switchSelected' : '';
        const classNames = `module buttonSwitch mrs pxs ${selected}`

        return (
            <div className={classNames} onClick={this.handleClick}>
                {this.props.label}
            </div>
        )
    }
}

export default ButtonSwitch;
