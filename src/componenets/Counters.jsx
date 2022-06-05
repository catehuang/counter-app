import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // clone the state instead of changing directly
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        // clone the state instead of changing directly
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called " + counterId);
    const counters = this.state.counters.filter((c) => c.id != counterId);
    // this.setState({ counters: counters });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <p class="text-xl font-bold m-10">Counter App</p>
        <button
          class="m-10 block px-5 py-3 border bg-green-600 mb-3 rounded-lg text-white"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
