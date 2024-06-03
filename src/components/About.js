import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  //console.log("contructor-Parent");

  componentDidMount() {
    //console.log("Component Did mount- Parent");
  }
  render() {
    //console.log("Render-Parent");
    return (
      <div>
        <h1>About Us</h1>
        <h2> This Is About Page </h2>
        <UserClass name={"First"} location={"Faridabad"} />
      </div>
    );
  }
}
export default About;
