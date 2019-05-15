import React from "react";
import { checkPropTypes } from "prop-types";

const Table = props => {
  const itemsData = props.itemsData;
  const tableHeader = Object.keys(itemsData[0]);

  const style = {
    table: {
      margin: "0 auto",
      textAlign: "center",
      width: "100%"
    },
    th: {
      padding: "1rem 1rem",
      borderTop: "solid 1px grey",
      borderBottom: "solid 1px grey"
    },
    td: {
      padding: ".5rem 0"
    }
  };
  return (
    <table style={style.table}>
      <thead>
        <tr>
          {tableHeader.map(el => {
            return (
              <th style={style.th} key={`${el}-header`}>
                {" "}
                {el}{" "}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {itemsData.map((el, index) => {
          return (
            <tr key={`${el.frameSKU} - ${index}`}>
              <td style={style.td}>{el.frameSKU}</td>
              <td style={style.td}>{el.price}</td>
              <td style={style.td}> {el.brand} </td>
              <td style={style.td}> {el.color} </td>
              <td style={style.td}> {el.typeOfLense} </td>
              <td style={style.td}> {el.numberOfViews} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
