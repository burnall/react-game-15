import Row from './Row';
import Cell from './Cell';

class Game extends React.Component {
 
  constructor(props) {
    super(props); 
    const cells = permutate(
      range(this.props.rows * this.props.columns));
    this.state = this.getState(cells); 
  }

  getState(cells) {
    return {
      emptyCell: cells.findIndex(el => el === 0),
      cells: cells
    };
  }

  render() {
    console.log('render', this.props);
    const cols = this.props.columns;
    const r = range(cols);
    const matrix = range(this.props.rows).map(i => r.map(j => cols * i + j));

    return (
      <div>
        {matrix.map((row, ri) => (
          <Row key={ri}>
            {row.map(cellId => 
              <Cell key={cellId} 
                    id={cellId} 
                    v={this.state.cells[cellId]} 
                    moveable={this.isMoveable(cellId)} 
                    clickCell={this.clickCell.bind(this)} />)}
          </Row>
        ))}
      </div>
    );
  }

  clickCell(cellId) {
    if (this.isMoveable(cellId)) {
      const cells = this.state.cells;
      const eid = this.state.emptyCell;
      cells[eid] = cells[cellId];
      cells[cellId] = 0;
      this.setState(this.getState(cells));
    }
  }

 isMoveable(cellId) {
    const eid = this.state.emptyCell;
    return eid !== -1 && eid !== cellId && 
      Math.abs(div(eid, this.props.columns) - div(cellId, this.props.columns)) + 
      Math.abs(eid % this.props.columns - cellId % this.props.columns) === 1; 
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

function div(a, b) {
    return Math.floor(a/b);
}

