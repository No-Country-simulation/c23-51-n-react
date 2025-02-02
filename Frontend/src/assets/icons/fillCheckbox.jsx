import * as React from "react";

const FillCheckbox = ({ color = "#FFF9F6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="25"
    fill="none"
    viewBox="0 0 27 25"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4"
    ></path>
    <path
      fill="#FFF9F6"
      fillRule="evenodd"
      d="M24.546 5.11a1.5 1.5 0 0 1 0 2.122L13.303 18.475a1.6 1.6 0 0 1-2.263 0L5.454 12.89a1.499 1.499 0 1 1 2.121-2.121l4.596 4.596L22.424 5.11a1.5 1.5 0 0 1 2.122 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FillCheckbox;
