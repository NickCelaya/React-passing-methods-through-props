
1. //Capturing input values

  this.state = {
    inputValue: "",
  }

  receiveInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  <input type="text" value={this.state.inputValue} onChange={this.receiveInput} placeholder="Search" />





2.// A way to push input values into an array that exists on state object...array can be called anything you want
addToList = (event) => {     //// create array in state and push names to it with click event
    this.setState({
      array: this.state.array.concat([event.target.value]) + this.state.inputValue, ///concat method
      array: [...this.state.array, ...event.target.value]+this.state.inputValue/// spread operator method
    })
  }


  
3. //A way to capture data from multiple input fields.
   //event.target.name targets the name property on the input elements
   //then places the input value onto the key/value pair in the state object.  
  this.state = {
    password: "",
    username: "",
  }

  receiveInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  <input type="text" value={this.state.password} name="password" onChange={this.receiveInput} placeholder="Create Username" />
  <input type="text" value={this.state.username} name="username" onChange={this.receiveInput} placeholder="Create Password" />