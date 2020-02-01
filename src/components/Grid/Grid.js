import React , { Component } from 'react';
import GridCell from '../GridCell/GridCell';

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawing: false
        }

        this.rows = 50;
        this.columns = 50;
        this.beginDrawing = this.beginDrawing.bind(this);
        this.endDrawing = this.endDrawing.bind(this);
    }

    beginDrawing() {
        this.setState({drawing: true})
    }

    endDrawing() {
        this.setState({drawing: false})
    }

    generateCells(r) {
        let cells = [];

        for (let c=0; c < this.columns; c++) {
            cells.push(
                <GridCell 
                    key={c} 
                    row={r} 
                    col={c} 
                    drawing={this.state.drawing} 
                    beginDrawing={this.beginDrawing}
                    endDrawing={this.endDrawing} />
            )
        }

        return cells;
    }

    generateRows() {
        let rows = [];

        for (let r=0; r < this.rows; r++) {
            rows.push(
                <div className = "module row">
                    <div class="container">
                        {this.generateCells(r)}
                    </div>
                </div>
            )
        }

        return rows;
    }

    render(){
        return (
            // child components go here
            <div className="module grid" onMouseLeave={this.endDrawing}> 
                {this.generateRows()}
            </div>
            
        )
    }
}

export default Grid;