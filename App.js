import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement --JS object ==> HTMLElement(render)

//JSX code...html like syntax,

const elem = <span>React Element </span>;
const title = <h1 className="head">hello JSX!!</h1>;
//console.log(jsxHeading);

//React Functional component
// const HeadingComponent = () => {
//   return;
//   <h1 className="heading">Namaste React Functional Component</h1>;
// };

const HeadingComponent = () => (
  <div id="container">
    {title}

    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
