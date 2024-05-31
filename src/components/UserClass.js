import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");

    this.state = {
      count1: 1,
      count2: 4,
      count3: 7,
    };
  }
  componentDidMount() {
    console.log("Component DId Mount- child" + this.props.name);
  }
  render() {
    console.log(this.props.name + "Child render");
    const { name, location } = this.props;
    const { count1, count2, count3 } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          tap Here!!
        </button>
        <h2>Name: {name}</h2>
        <h1>Count : {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 * 2,
            });
          }}
        >
          multiply by 2
        </button>
        <h1>Count : {count3}</h1>
        <button
          onClick={() => {
            this.setState({
              count3: this.state.count3 + 4,
            });
          }}
        >
          plus4
        </button>
        <h3>Location: {location}</h3>
        <h3>Contact : 9891492000</h3>
      </div>
    );
  }
}
export default UserClass;
