import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Table.jsx";
import Filter from "./Filter.jsx";
import { data } from "./sampleData";

import "./reset.css";
import "./styles.css";

const itemsData = data[3];

class App extends Component {
  render() {
    const style = {
      body: {
        height: "100vh",
        margin: "0 auto",
        marginTop: "5rem",
        width: "90%"
      }
    };
    return (
      <div className="app" style={style.body}>
        <Filter />
        <Table itemsData={itemsData} />
      </div>
    );
  }
}

App.defaultProps = {
  itemsData
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
