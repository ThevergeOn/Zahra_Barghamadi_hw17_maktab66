import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <React.Fragment>
      {props.isSelectable ? (
        <div>
          <input
            type="checkbox"
            id={props.id}
            name={props.title}
            onChange={props.handleCheck}
          />
          <label htmlFor={props.id}>{props.title}</label>
        </div>
      ) : (
        <div>
          <label>{props.title}</label>
        </div>
      )}
    </React.Fragment>
  );
};

export default Item;

Item.protoTypes = {
  isSelectable: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.number,
  handleCheck: PropTypes.func,
};
