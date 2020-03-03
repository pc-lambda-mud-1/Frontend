import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";

const Directions = props => {
  return (
    <div>
      <button onClick={e => props.handleClick(e)} value="n" />
      {/* <FontAwesomeIcon icon="angle-up" /> */}

      <button onClick={e => props.handleClick(e)} value="e" />
      {/* <FontAwesomeIcon icon="angle-right" /> */}

      <button onClick={e => props.handleClick(e)} value="s" />
      {/* <FontAwesomeIcon icon="angle-down" /> */}

      <button onClick={e => props.handleClick(e)} value="w" />
      {/* <FontAwesomeIcon icon="angle-left" /> */}
    </div>
  );
};

export default Directions;
