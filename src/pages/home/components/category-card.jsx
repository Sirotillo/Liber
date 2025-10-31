import React from "react";

export const CategoryCard = ({ title, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </div>
  );
};
