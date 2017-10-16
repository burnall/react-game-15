class Cell extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = 'cell' + (this.props.activeCell == this.props.id ? ' activeCell' : '');
    return (
      <div className={className} onClick={this.onClick.bind(this)}>
        {this.props.v ? this.props.v : ' '}
      </div>
    );
  }

  onClick() {
    this.props.selectCell(this.props.id);
    console.log('clicked', this.props.v);
  }
}

export default Cell;
