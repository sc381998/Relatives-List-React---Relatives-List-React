import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relatives = ["Sagar", "Bishal", "Deepak"];
  render() {
    return (
      <>
        <ol key="realtiveList">
          {this.relatives.map((relative, index) => {
            return <li key={`relativeListItem${index + 1}`}>{relative}</li>;
          })}
        </ol>
      </>
    );
  }
}

export default App;
