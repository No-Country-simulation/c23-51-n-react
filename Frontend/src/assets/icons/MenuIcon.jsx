import * as React from "react";

const MenuIcon = ({ color = "#FFF9F6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      d="M1.333 20q-.566 0-.949-.384a1.3 1.3 0 0 1-.384-.95q0-.565.384-.949.385-.384.95-.384h21.333q.566 0 .95.384t.383.95q0 .565-.384.95a1.27 1.27 0 0 1-.95.383zm0-6.667q-.566 0-.949-.384A1.3 1.3 0 0 1 0 12q0-.565.384-.95.385-.383.95-.383h21.333q.566 0 .95.384T24 12q0 .566-.384.95a1.28 1.28 0 0 1-.95.383zm0-6.666q-.566 0-.949-.384A1.3 1.3 0 0 1 0 5.333q0-.565.384-.949Q.769 4 1.334 4h21.333q.566 0 .95.384t.383.95q0 .564-.384.95a1.27 1.27 0 0 1-.95.383z"
    ></path>
  </svg>
);

export default MenuIcon;
