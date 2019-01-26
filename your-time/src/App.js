import React from "react";
import Titles from "./Modules/Titles";
import Calendar from "./Modules/Calendar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Calendar />
      </div>
    );
  }
};

export default App;
