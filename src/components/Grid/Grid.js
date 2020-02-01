import React , { Component } from 'react';
import GridCell from '../GridCell/GridCell';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.rows = 50;
        this.columns = 50;
    }

    generateCells(r) {
        let cells = [];

        for (let c=0; c < this.columns; c++) {
            cells.push(
                <GridCell key={c} row={r} col={c} />
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
            <div className="module grid"> 
                <div class = "container">
                    {this.generateRows()}
                </div>
            </div>
            
        )
    }
}

export default Grid;