import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "loc",
        avatar_url: "fummy.com/photo.png",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymeister");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} alt="hello there" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Contact: @akshaymeister</h4>
      </div>
    );
  }
}

export default UserClass;
