class Header extends React.Component {
  render() {
    return ( 
      <div className="header">
        <label htmlFor="inputRows">Rows:</label>
        <input id="inputRows" defaultValue={this.props.rows} size="1"/>
        <label htmlFor="inputColumns">Columns:</label>
        <input id="inputColumns" defaultValue={this.props.columns} size="1"/>
        <button onClick={this.apply.bind(this)} >Apply</button>
      </div>);
  }

  apply() {
    const rows = parseInt(document.getElementById('inputRows').value, 10);
    const columns = parseInt(document.getElementById('inputColumns').value, 10);
    this.props.onChangeSize(rows, columns);
  }
}

export default Header;
