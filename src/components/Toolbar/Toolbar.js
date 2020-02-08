import React, { Component } from 'react';
import OptionHandler from '../OptionHandler/OptionHandler';

class Toolbar extends Component {
    render() {
        return (
            <div className="module w100 toolbar">
                <div className="container">
                    {
                        // Show Mode Switch option handler always
                        <OptionHandler
                            switchMode={this.props.switchMode}
                            label='Mode'
                            options={['Select', 'Stitch']} />
                    }
                    {
                        // Show other option handlers based on mode
                        this.props.mode !== 'select'
                            ? <OptionHandler label='Palette' options={['Add']} />
                            : <OptionHandler label='Tools' options={['Delete', 'Swap Thread']} />
                    }
                </div>

            </div>

        )
    }
}

export default Toolbar;
