import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //   };

  // constructor() {
  //         super();
  //         // return a new function
  //         // bind event handler to this
  //         this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // error function
  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   handleDecrement = () => {
  //     this.setState({ value: this.state.value - 1 });
  //   };

  render() {
    return (
      <div class="m-10">
        <div>
          <p class="mb-2">counter #{this.props.counter.id}</p>
          {this.props.counter.value > 0 && (
            <button
              class="p-1 border border-gray-300 rounded-lg bg-gray-300 mr-5"
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              <RemoveIcon />
            </button>
          )}
          {this.props.counter.value === 0 && (
            <button
              class="p-1 border border-gray-300 rounded-lg bg-gray-500 mr-5" disabled
            >
              <RemoveIcon />
            </button>
          )}

          <span class={this.getCounterClasses()}>{this.formatCount()}</span>

          <button
            class="p-1 border border-gray-300 rounded-lg bg-gray-300 mr-5"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            <AddIcon />
          </button>

          <button
            class="p-1 border border-gray-300 rounded-lg bg-gray-300"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }

  getCounterClasses() {
    let classes = "px-3 py-1 text-white mr-5 border-gray-300 ";
    classes +=
      this.props.counter.value === 0
        ? "bg-yellow-500 rounded-full"
        : "bg-sky-500 rounded-lg";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
