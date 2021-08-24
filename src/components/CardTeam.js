import React, { Component } from "react";
import Team from "./Team";
class CardTeam extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 border ">
        <div className="card">
          <div className="card-header">
            <img src={this.props.img} className="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <h5>{this.props.name}</h5>
            <h6>{this.props.position}</h6>
            <div>{this.props.phone}</div>
            <div>{this.props.email}</div>
            <div>{this.props.website}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardTeam;
