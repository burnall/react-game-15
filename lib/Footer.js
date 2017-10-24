class Footer extends React.Component {
  render() {
    return <div>Moves: {this.props.moves} State: {this.props.onChange() ? 'Congrats!' : 'In progress'}</div>;
  }
}

export default Footer;
