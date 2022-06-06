import React, { Component } from "react";
import Counters from "./componenets/Counters";
import Navbar from "./componenets/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
          // ajax call
          console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // clone the state instead of changing directly
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // clone the state instead of changing directly
    counters[index] = { ...counter };
    counters[index].value-- ;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called " + counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default App;
