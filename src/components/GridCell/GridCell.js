import React, { Component } from 'react';

class GridCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fill: '#ffffff',
            stitch: false
        }

        this.select = this.select.bind(this);
        this.paintCell = this.paintCell.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleOver = this.handleOver.bind(this);
        this.handleUp = this.handleUp.bind(this);
    }

    select() {
        if (this.props.mode === 'select' && this.state.stitch) {
            this.props.select(this.props.row, this.props.col);
        }
    }

    paintCell() {
        this.setState({
            fill: '#79cdcd',
            stitch: true
        });
    }

    handleDown() {
        if (this.props.mode === 'stitch') {
            // when mouse is depressed, change the background, and set parent state to "drawing: true"
            this.paintCell()
            this.props.beginDrawing();
        }
    }

    handleOver() {
        // when mouse is moving over a cell, if parent state "drawing" is true, change background
        // this way, mouse over will only paint a cell if mouse is also depressed
        if (this.props.drawing) {
            this.paintCell();
        }
    }

    handleUp() {
        // when mouse stops being depressed, set parent state to "drawing: false"
        this.props.endDrawing()
    }

    render() {
        const classNames = `module gridCell ${this.props.target ? 'gridCellSelected' : ''}`;

        return (
            <div
                className={classNames}
                onClick={this.select}
                onMouseDown={this.handleDown}
                onMouseOver={this.handleOver}
                onMouseUp={this.handleUp}
                style={{ backgroundColor: this.state.fill }}>
            </div>

        )
    }
}

export default GridCell;