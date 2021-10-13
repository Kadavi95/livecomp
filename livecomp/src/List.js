import React, { Component } from "react";
import { SimpleButton } from "./SimpleButton.js";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Olek", "Ala", "Ula"],
    };
  }

  reverseList = () => {
    this.setState({
      names: this.state.names.reverse(),
    });
  };
  render() {
    console.log(`Komponent List, metoda render`);
    return ( <div>
        <SimpleButton callback={this.reverseList} text="Change the order"></SimpleButton>
        {this.state.names.map((name,index) => {
            return (
                <h5 id={name.toLocaleLowerCase()} key={name}>{name}</h5>
            )
        })}
    </div>

    )
  }
}
