import React, { Component } from "react"
import "./Nick.css"


class NickTest extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: "It's Nick",
            inputValue: "",
        }
    }

    changer = () => {
    if (this.state.name === "It's Nick"){
        this.setState({
            name: "It's Pete"
        })
        } else {
            this.setState({                             
                name: "It's Nick"
            })
        }
    }

    // receiveInput = (event) => {
    //     this.setState({
    //         inputValue: event.target.value
    //     })
    // }


render(){

    let xray = this.props.starwars  ///getting props from app component 
    const WAR = xray.map( (element, index) => {
        return(
            <div key={index}>
            <h3>{element.name}</h3>
            {/* <h3>{element.height}</h3> */}
          </div>
        )
    })
    return(
        <div>
            <h1>It's just jsx in here</h1>

            {/* <input type="text" onChange={this.receiveInput}></input> */}
                
                <h3>This is the value from app passing value as props:{this.props.incomingValue}</h3>

                <h4>this is is stuff array from app state: { WAR }</h4>
                <h1>{ WAR[1] }</h1>

            <h3 className = "words" onClick={ this.changer }>Soooo...What is your name? {this.state.name}</h3>
            <i className="material-icons">attach_money</i>
            <i class="material-icons">content_cut</i>
        </div>

    )
 }

}


export default NickTest