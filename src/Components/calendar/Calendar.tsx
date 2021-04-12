import React, { Component } from "react";
import { connect } from "react-redux";

export class Calendar extends Component {
  render() {
    return <div>Calendar</div>;
  }
}

const mapStateToProps = (state:string) => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
