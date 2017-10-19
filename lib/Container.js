import Game from './Game';
import Header from './Header';


class Container extends React.Component {

  render() {
    return (
      <div>
        <Game rows={5} columns={5} />
      </div>);
  }
}

export default Container;
