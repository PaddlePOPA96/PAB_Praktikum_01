class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
      this.setState({ count: this.state.count - 1 });
    }

    render() {
      return (
        <div>
          <h1>Counter</h1>
          <h1> {this.state.count} </h1>
          <button onClick={this.increment}>Tambah +1</button>
          <button onClick={this.decrement}>Kurang -1</button>
        </div>
      );
    }
  }

  // Render the Counter component
  ReactDOM.render(<Counter />, document.getElementById('root'));