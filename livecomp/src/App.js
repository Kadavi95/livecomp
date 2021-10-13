// import logo from './logo.svg';
import React, { Component } from "react";
import { Message } from "./Message.js";
import { List } from "./List.js";
import { ExternalCounter } from "./ExternalCounter.js";
import { HooksMessage } from "./HooksMessage.js";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showMessage: true,
    };
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleChange = () => {
    this.setState({
      showMessage: !this.state.showMessage,
    });
  };
  render() {
    console.log(`Komponent App, metoda render`);
    return (
      <div className="container text-center">
        <div className="row p-2">
          <div className="col-4">
            {/* <Message message={`Licznik:  ${this.state.counter}`} callback={this.incrementCounter
            } text="Inkrementuj licznik">
            </Message> */}
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={this.state.showMessage}
                onChange={this.handleChange}
              />
              <label className="form-check-label">Pokaż</label>
            </div>
            {this.state.showMessage && <HooksMessage message={`Licznik: ${this.state.counter}`} callback={this.incrementCounter} text="Increment"/>}
          </div>
          <div className="col-4">
            <List></List>
          </div>
          <div className="col-4">
            <ExternalCounter></ExternalCounter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
