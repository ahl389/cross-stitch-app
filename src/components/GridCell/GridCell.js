import React , { Component } from 'react';

class GridCell extends Component { 
    constructor(props){
        super(props);

        this.state = {
            fill: '#ffffff'
        }

        this.paintCell = this.paintCell.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.handleOver = this.handleOver.bind(this);
        this.handleUp = this.handleUp.bind(this);
    }

    paintCell() {
        this.setState({
            fill: '#79cdcd'
        });
    }

    handleDown(){
        // when mouse is depressed, change the background, and set parent state to "drawing: true"
        this.paintCell()
        this.props.beginDrawing();
    }

    handleOver(){
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

    render(){
        return (
            <div 
                className="module gridCell" 
                onMouseDown={this.handleDown}
                onMouseOver={this.handleOver}
                onMouseUp={this.handleUp}
                style={{backgroundColor: this.state.fill}}>
            </div>
                
        )
    }
}

export default GridCell;