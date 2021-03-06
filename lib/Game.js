import Row from './Row';
import Cell from './Cell';
import Header from './Header';
import Footer from './Footer';

class Game extends React.Component {
 
  constructor(props) {
    super(props); 
    this.state = this.getState(props);
    this.moves = 0;
  }

  getRandom(rows, columns) {
    return  permutate(
      range(rows * columns));
  }

  getState(options) {
    const rows = options.rows || this.state.rows;
    const columns = options.columns || this.state.columns;
    const cells = options.cells || this.getRandom(rows, columns);
    return {
      emptyCell: cells.findIndex(el => el === 0),
      cells: cells,
      rows: rows,
      columns: columns
    };
  }

  initState(rows, columns) {
    this.moves = 0;
    this.setState(this.getState({rows, columns}));
  }

  render() {
    const cols = this.state.columns;
    const r = range(cols);
    const matrix = range(this.state.rows).map(i => r.map(j => cols * i + j));

    return (
      <div>
        <Header {...this.props} onChangeSize={this.initState.bind(this)} />
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
        <Footer moves={this.moves} onChange={this.isVictory.bind(this)} />
      </div>
    );
  }

  clickCell(cellId) {
    if (this.isMoveable(cellId)) {
      const cells = this.state.cells;
      const eid = this.state.emptyCell;
      cells[eid] = cells[cellId];
      cells[cellId] = 0;
      this.setState(this.getState({cells: cells}));
      this.moves++;
    }
  }

 isMoveable(cellId) {
    const eid = this.state.emptyCell;
    return eid !== -1 && eid !== cellId && 
      Math.abs(div(eid, this.state.columns) - div(cellId, this.state.columns)) + 
      Math.abs(eid % this.state.columns - cellId % this.state.columns) === 1; 
  }

  isVictory() {
    return this.state.cells.slice(0, -1).every((v, i) => i + 1 === v);
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

