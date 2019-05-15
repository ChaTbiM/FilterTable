import React, { Component } from "react";

import { data } from "./sampleData";

const colorData = data[0];
const lenseData = data[1];
const brandData = data[2];

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      colorData,
      brandData,
      lenseData
    };
  }

  changeVisible = e => {
    e.preventDefault();

    if (e.target.className === "target") {
      this.setState((prevState, props) => {
        return { isVisible: !prevState.isVisible };
      });
    }
  };

  // handleCheck = e => {
  //   const colorDataSelected = [...this.state.colorDataSelected];
  //   const foundIndex = this.state.colorData.findIndex(el => {
  //     return el.label === e.target.name;
  //   });
  //   colorDataSelected[foundIndex] = e.target.checked;

  //   this.setState({ colorDataSelected });
  //   console.log(this.state.colorDataSelected);
  // };

  handleCheck = e => {
    console.log(e.target.className);

    const newState = {};
    if (e.target.className === "target") {
      this.setState(prevState => ({ isVisible: !prevState.isVisible }));
    } else if (
      e.target.type === "checkbox" &&
      e.target.className === "colorFilter"
    ) {
      newState.colorData = [...this.state.colorData];

      const foundIndex = this.state.colorData.findIndex(el => {
        return el.label === e.target.name;
      });
      newState.colorData[foundIndex].selected = e.target.checked;

      this.setState({ colorData: newState.colorData });
    } else if (
      e.target.type === "checkbox" &&
      e.target.className === "brandFilter"
    ) {
      newState.brandData = [...this.state.brandData];

      const foundIndex = this.state.brandData.findIndex(el => {
        return el.label === e.target.name;
      });
      newState.brandData[foundIndex].selected = e.target.checked;

      this.setState({ brandData: newState.brandData });
    } else if (
      e.target.type === "checkbox" &&
      e.target.className === "lenseFilter"
    ) {
      newState.lenseData = [...this.state.lenseData];

      const foundIndex = this.state.lenseData.findIndex(el => {
        return el.label === e.target.name;
      });
      newState.lenseData[foundIndex].selected = e.target.checked;

      this.setState({ lenseData: newState.lenseData });
    }
  };

  clearFilters = e => {
    e.preventDefault();

    this.setState((prevState, props) => {
      const newState = {};
      newState.colorData = [...this.state.colorData].map(el => {
        return { label: el.label, selected: false, svg: el.svg };
      });

      newState.brandData = [...this.state.brandData].map(el => {
        return { label: el.label, selected: false, svg: el.svg };
      });

      newState.lenseData = [...this.state.lenseData].map(el => {
        return { label: el.label, selected: false, svg: el.svg };
      });

      return {
        colorData: newState.colorData,
        brandData: newState.brandData,
        lenseData: newState.lenseData
      };
    });
  };

  renderDropDown = (style, colorData, brandData, lenseData) => {
    return (
      <div style={style.dropDown} className="dropDown">
        <div className="top">
          <h3>Filter</h3>
          <button onClick={this.clearFilters} style={style.btn}>
            clear
          </button>
        </div>
        <div className="priceBar">Price Bar</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            marginTop: "2rem",
            marginBottom: "2rem"
          }}
          className="filters"
        >
          {
            <ul style={style.filterList} className="colorFilters">
              {colorData.map((el, index) => {
                return (
                  <li style={{ display: "flex" }}>
                    <input
                      key={index}
                      style={{ marginRight: ".5rem" }}
                      type="checkbox"
                      className="colorFilter"
                      checked={el.selected}
                      name={el.label}
                    />
                    {el.label}
                  </li>
                );
              })}
            </ul>
          }
          {
            <ul style={style.filterList} className="colorFilters">
              {brandData.map((el, index) => {
                return (
                  <li style={{ display: "flex" }}>
                    <input
                      key={index}
                      style={{ marginRight: ".5rem" }}
                      type="checkbox"
                      checked={el.selected}
                      className="brandFilter"
                      name={el.label}
                    />
                    {el.label}
                  </li>
                );
              })}
            </ul>
          }

          {
            <ul style={style.filterList} className="colorFilters">
              {lenseData.map((el, index) => {
                return (
                  <li style={{ display: "flex" }}>
                    <input
                      key={index}
                      style={{ marginRight: ".5rem" }}
                      type="checkbox"
                      checked={el.selected}
                      className="lenseFilter"
                      name={el.label}
                    />
                    {el.label}
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    );
  };

  render() {
    const { colorData, brandData, lenseData } = this.state;

    const style = {
      header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem"
      },
      btn: {
        color: "blue",
        backgroundColor: "transparent",
        padding: ".5rem 1rem",
        border: "solid 1px blue",
        position: "relative"
      },
      dropDown: {
        position: "absolute",
        top: "3rem",
        right: "0",
        backgroundColor: "white",
        minWidth: "355px"
      },
      filters: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      filterList: {
        margin: "0 1rem"
      }
    };
    return (
      <div className="header" style={style.header}>
        <h1> Detailed Frame Information </h1>

        <button
          className="target"
          style={style.btn}
          style={{ alignSelf: "flex-end" }}
          onClick={this.handleCheck}
          // onClick={this.forceUpdate}
        >
          filter
          {this.state.isVisible
            ? this.renderDropDown(style, colorData, brandData, lenseData)
            : null}
        </button>
      </div>
    );
  }
}

export default Filter;
