import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
        const { onReset, counters, onDelete, onDecrement, onIncrement } = this.props;

    return (
      <div>
        <button
          class="m-10 block px-4 py-2 border bg-gray-300 mb-3 rounded-lg font-bold"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
