import React from "react";
import Card from "../card/card";

const CardLists = (props) => {
  return (
    <>
      {/* <h2>
            hello
        </h2> */}
      <div className="card-list">
        {props.customer.map((customers) => (
          <>
            <Card customerCard={customers} />
          </>
        ))}{" "}
      </div>
    </>
  );
};

export default CardLists;
