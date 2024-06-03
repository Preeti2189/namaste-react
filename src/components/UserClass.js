import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    //console.log("Component DId Mount- child" + this.props.name);
    //api calls made here:
    const data = await fetch("https://api.github.com/users/Preeti2189");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    //console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact : 9891492000</h3>
      </div>
    );
  }
}
export default UserClass;
