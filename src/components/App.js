import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Sagar", "Bishal", "Deepak"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relative, index) => {
            return <li key={"relativeListItem" + (index + 1)}>{relative}</li>;
          })}
        </ol>
      </>
    );
  }
}

export default App;
