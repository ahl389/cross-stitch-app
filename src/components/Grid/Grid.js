import React , { Component } from 'react';
import GridCell from '../GridCell/GridCell';

class Grid extends Component {
  

  render(){
      let cells = []; 
      for (let i=0; i < 100; i++){
        cells.push(<GridCell key={i} />)
      }


      return (
        // child components go here
        <div className="container"> 
          {cells}
         </div>
          
      )
  }
}

export default Grid;