import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("contructor-Parent");
  }

  componentDidMount() {
    console.log("Component Did mount- Parent");
  }
  render() {
    console.log("Render-Parent");
    return (
      <div>
        <h1>About Us</h1>
        <h2> This Is About Page </h2>
        <UserClass name={"child1"} location={"Faridabad"} />
        <UserClass name={"Child2"} location={"Faridabad"} />
        <UserClass name={"Child3"} location={"Faridabad"} />
      </div>
    );
  }
}
export default About;
