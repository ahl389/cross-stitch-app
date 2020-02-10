import React, { Component } from 'react';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';

class OptionHandler extends Component {
    constructor(props) {
        super(props);
        this.switchFunctionality = this.switchFunctionality.bind(this);
    }

    switchFunctionality() {
        console.log('switching stuff')
    }

    render() {
        const switchFunctionality = this.props.switchMode ? this.props.switchMode : this.switchFunctionality;

        return (
            <div className="module w100 pm optionHandler">
                <div className="container-extender">
                    <div className="module p100">
                        <h3>{this.props.label}</h3>
                    </div>

                    {this.props.options.map(option =>
                        <ButtonSwitch
                            mode={this.props.mode}
                            switchFunctionality={switchFunctionality}
                            label={option}
                            type={option.toLowerCase()} />)}
                </div>
            </div>
        )
    }
}

export default OptionHandler;
