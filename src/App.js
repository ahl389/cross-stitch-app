import React, { Component } from 'react';
import Canvas from './components/Canvas/Canvas';
import Toolbar from './components/Toolbar/Toolbar';
import './paint.scss';
import './App.scss';

class App extends Component {
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

    switchMode(select) {
        this.setState({
            mode: select
        });
    }

    render() {
        return (
            <section className="banner">
                <div className="container-extender">
                    <div className="module w25">
                        <div className="container">
                            <Toolbar switchMode={this.switchMode.bind()} mode={this.state.mode} />
                        </div>
                    </div>

                    <div className="module w75">
                        <div class="container">
                            <Canvas mode={this.state.mode} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
