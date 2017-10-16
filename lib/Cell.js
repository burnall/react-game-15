class Cell extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = 'cell' + (this.props.moveable ? ' moveable' : '');
    return (
      <div className={className} id={this.props.id} onClick={this.onClick.bind(this)}>
        {this.props.v ? this.props.v : ' '}
      </div>
    );
  }

  onClick() {
    this.props.clickCell(this.props.id);
    console.log('clicked', this.props.v);
  }
}

export default Cell;
