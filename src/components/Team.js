import React, { Component } from "react";
import CardTeam from "./CardTeam";
import info from "./info";
class Team extends Component {
  // if(client=== "Designer"){
  //   title = "Deseign is my life";
  // }else{
  //   title = "programing is my life";

  // }
  constructor() {
    super();
    this.state = {
      info: info,
      members: [],
      counter: 0
    };
    this.clickEvent = this.clickEvent.bind(this);
  }
  clickEvent() {
    if (this.state.counter < this.state.info.length) {
      this.state.members.push(this.state.info[this.state.counter]);
      this.setState(function (prevState) {
        return { counter: prevState.counter + 1 };
      });
      this.newMembers = this.state.members.map(function (member) {
        return (
          <CardTeam
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            website={member.website}
          />
        );
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div></div>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={this.clickEvent}
        >
          click me
        </button>
        {this.newMembers}
      </div>
    );
  }
}
export default Team;
