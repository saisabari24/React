import React, { useState } from "react";

const Button = () => {
  const [buttonText, setbuttonText] = useState("Click me please");

  function handleClick() {
    setbuttonText("Thanks,been clicked");
  }

  return (
    <button onClick={handleClick} className="btn btn-danger">
      {buttonText}
    </button>
  );
};

export default Button;
// import React, { Component } from "react";

// export default class Button extends Component {
//   state = { buttonText: "Click me please", color: "blue" };
//   handleClick = () => {
//     this.setState({ buttonText: "Thanks,been clicked" });
//   };
//   render() {
//     const { buttonText } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick} className="btn btn-success">
//           {buttonText}
//         </button>
//       </div>
//     );
//   }
// }
