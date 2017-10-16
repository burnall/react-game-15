import Row from './Row';
import Cell from './Cell';

class Game extends React.Component {
 
  constructor(props) {
    super(props); 
    const cells = permutate(
      range(this.props.rows * this.props.columns));
    this.state = {activeCell: -1, cells: cells};
  } 

  render() {
    const len = this.props.rows;
    const r = range(this.props.columns);
    const matrix = range(this.props.rows).map(i => r.map(j => len * i + j));

    return (
      <div>
        {matrix.map((row, ri) => (
          <Row key={ri}>
            {row.map(cellId => 
              <Cell key={cellId} 
                    id={cellId} 
                    v={this.state.cells[cellId]} 
                    activeCell={this.state.activeCell}
                    selectCell={this.selectCell.bind(this)} />)}
          </Row>
        ))}
      </div>
    );  
  }

  selectCell(cellId) {
    if (isNeighbour(this.state.activeCell, cellId)) {
      this.setState({activeCell: cellId, cells: this.state.cells});
    }
  }

  moveCell() {
  
  }

}

export default Game;

function range(n) {
  return Array.from(Array(n).keys());
}

function rand(n) {
  return Math.floor(n * Math.random()); 
}

function permutate(items) {
  for (let i = 0; i < items.length - 2; i++) {
    const r = rand(items.length - 0 - i);
    dummy = items[i];
    items[i] = items[i + r];
    items[i + r] = dummy;
  }
  return items;
}

