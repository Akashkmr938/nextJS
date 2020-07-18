import React from "react";

const Navigation = (props) => {
  return (
    <>
      {props.navigationData.map((navigation, index) => {
        return <li key={index}>{navigation.name}</li>;
      })}
    </>
  );
};

export default Navigation;
