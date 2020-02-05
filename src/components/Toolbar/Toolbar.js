import React , { Component } from 'react';
import OptionHandler from '../OptionHandler/OptionHandler';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        // two modes: select, and stitch (names TBD)
        // When mode is 'select', you can click individual stitches to delete or make changes
        // When mode is 'stitch', you can paint colors on the grid
        this.state = {
            mode: 'select'
        }

        this.switchMode = this.switchMode.bind(this)
    }

    switchMode(select){
        this.setState({
            mode: select
        });
    }

    render(){
        return (
            <div className = "module w100 toolbar">
                <div className = "container">
                    { 
                        // Show Mode Switch option handler always
                        <OptionHandler 
                            switchMode={this.switchMode.bind()} 
                            label='Mode' 
                            options={['Select', 'Stitch']} /> 
                    }
                    {
                        // Show other option handlers based on mode
                        this.state.mode !== 'select'
                        ? <OptionHandler label='Palette' options={['Add']} />
                        : <OptionHandler label='Tools' options={['Delete', 'Swap Thread']} />
                    }
                </div>
                
            </div>
            
        )
    }
}

export default Toolbar;
