class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, "10");

    if (!isNaN(count)) {
      this.setState({
        count: count
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did Update");

    if (prevState.count !== this.state.count) {
      const json = localStorage.setItem("count", this.state.count);
    }
  }

  render() {
    const handleAddOne = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };

    const handleMinusOne = () => {
      this.setState({
        count: this.state.count - 1
      });
    };

    const handleReset = () => {
      this.setState({
        count: 0
      });
    };
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={handleAddOne}>+1</button>
        <button onClick={handleMinusOne}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
