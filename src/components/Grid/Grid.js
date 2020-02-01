import React , { Component } from 'react';
import GridCell from '../GridCell/GridCell';

class Grid extends Component {
  
  render(){
      return (
        // child components go here
        <div className="container">
          <GridCell />
         </div>
          
      )
  }
}

export default Grid;