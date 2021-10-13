import React, { Component } from 'react';
import { SimpleButton} from './SimpleButton.js'

export class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSpan: false
        }
    }
    handleClick = (event) => {
        this.setState({
            showSpan: !this.state.showSpan
        })
        this.props.callback(event)
    }
    getMessangeElement() {
        let div = <div id="messageDiv" className="h5 text-center p-2 bg-info">
            {this.props.message}
        </div>
        return this.state.showSpan ? <span>{div}</span> : div;
    }
    render(){
        console.log(`Komponent Message, metoda render.`);
        return (
         <div>
             <SimpleButton theme="primary" {...this.props} callback={this.handleClick}></SimpleButton>
             {/* <div id="messageDiv" className="h5 text-center p-2">
                 {this.props.message}
             </div> */}
             {this.getMessangeElement()}
         </div>
        )
    }
    componentDidMount(){
        console.log(`Komponent Message, metoda DidMount`);
    }
    componentDidUpdate(){
        console.log("Komponent Message, metoda DidUpdate");
    }
    componentWillUnmount(){
        console.log("Komponent Message, metoda  will unmount");
    }
}