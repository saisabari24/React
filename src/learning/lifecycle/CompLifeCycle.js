import React, { Component } from "react";

export default class CompLifeCycle extends Component {
  state = { data: 0, msg: "Learning life cycle" };
  handleEvent(e) {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div className="bg-warning">
        <h3>Parent Lifecycle Component</h3>
        <button onClick={(e) => this.handleEvent(e)}>Increment</button>
        <Child dataProp={this.state.data}></Child>
      </div>
    );
  }
}
//==================================================

class Child extends Component {
  //step 1
  constructor(props) {
    super(props);
    this.state = { name: "Murthy" };
    console.log(` In constructor of Child ${props.dataProp}`); //0
  }
  //step 2
  render() {
    return (
      <div className="container bg-dark text-white">
        Counter:<h3 id="txt1">{this.props.dataProp}</h3>
        Address:{this.state.address} - mail:{this.state.mail}
      </div>
    );
  }
  //step 3
  componentDidMount() {
    //fired only once, to initialize data by making REST API calls ajax =fetch/axios
    //subscribe to web socket/objservable - RXJS, load data from localstorage
    //fetch(url+this.props.dataProp)
    console.log(` In cDM  ${this.props.dataProp}`);
    console.log(`Welcome  ${this.state.name}`);
  }
  //step 4
  static getDerivedStateFromProps(props, state) {
    //this is called everytime whenever state/props are changed
    //validation of props/state, ajax call for live data
    //fetch(url+props.data).then(response=>store in variable)
    console.log(` In gDSFP  ${props.dataProp}`);
    console.log(` ${state.name}`);
    return { address: "Chennai", mail: "murthy@gmail.com" };
  }
  componentDidCatch(error) {
    console.log("some error occured", error);
  }
  //step 5
  shouldComponentUpdate(props, state) {
    // fired every time whenever state/props are changed
    if (props.dataProp > 5) return true;
    else return false;
  }
  //step 6
  componentDidUpdate() {
    //called every time when state/props are changed.
    //you can access real DOM - Javascript,jquery..,  JqGRID
    console.log("in cDU", document.getElementById("txt1").innerText);
  }
  componentWillUnmount() {
    // fired only once , avoid memory leaks by unsubscribing websocket/observable
    //clean data/cache.
    console.log("Child unmounted from VDM.... BYE");
  }
}

// import React, { Component } from "react";

// export default class CompLifeCycle extends Component {
//   state = { data: 0, msg: "Learning life cycle" };
//   handleEventIncrement(e) {
//     this.setState({ data: this.state.data + 1 });
//   }
//   handleEventDecrement(e) {
//     this.setState({ data: this.state.data - 1 });
//   }
//   render() {
//     return (
//       <div className="bg-warning">
//         <h3>Parent Lifecycle component</h3>
//         <button onClick={(e) => this.handleEventIncrement(e)}>
//           Increment
//         </button>{" "}
//         <button onClick={(e) => this.handleEventDecrement(e)}>Decrement</button>
//         <Child dataProp={this.state.data}></Child>
//       </div>
//     );
//   }
// }
// //------------------------------

// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "sai" };
//     console.log(`in Constructor of Child ${this.props.dataProp}`);
//     //no api calls should be made ,only props
//   }
//   render() {
//     return (
//       <div className="container bg-dark text-white">
//         Counter:<h3 id="txt1">{this.props.dataProp}</h3>
//       </div>
//     );
//   }
//   componentDidMount() {
//     //fired only once to initalize data by making rest api calls ajax fetech axios
//     //subscribe to websockets/obsverable rxjs, load data from local storae
//     console.log(`in cDM ${this.props.dataProp}`);
//     console.log(`in cDM :Welcome ${this.state.name}`);
//   }
// }
// // static getDerivedStateFromProps()

// //step5
// //@esl-ignore
// shouldComponentUpdate(props,state){
//     //fired everytime whenever state/props are changed
//     return true;
// }

// //step6
// componentDidUpdate(){
//     console.log("in cDU",document.getElementById("txt1").innerText)
// }
