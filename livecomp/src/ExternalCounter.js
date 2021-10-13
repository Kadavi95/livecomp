import React, { Component } from 'react';
import { SimpleButton } from './SimpleButton.js';

let externalCounter = 0

export class ExternalCounter extends Component {
    // constructor(props){
    //     super(props)
    // }
    incrementCounter = () => {
        externalCounter++;
        this.forceUpdate();
    }
    render(){
        return (
            <div>
                <SimpleButton callback={this.incrementCounter} text="External counter"></SimpleButton>
                <div className="h5 text-center p-2">
                    Licznik zewnętrzny: {externalCounter}
                </div>
            </div>
        )
    }

 
}