import Game from './Game';
import Header from './Header';


class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rows: 5, columns: 5};
  }

  render() {
    return (
      <div>
        <Header {...this.state} onChangeSize={this.onChangeSize.bind(this)} />
        <Game rows={this.state.rows} columns={this.state.columns} />
      </div>);
  }

  onChangeSize(rows, columns) {
    this.setState({rows: rows, columns: columns});
  }
}

export default Container;
