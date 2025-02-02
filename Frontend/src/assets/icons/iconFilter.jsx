import * as React from "react";

const IconFilter = ({ color = "#FFF9F6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
        {...props}

  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M21.25 12H8.895m-4.361 0H2.75m1.784 0a2.18 2.18 0 1 1 4.36 0 2.18 2.18 0 0 1-4.36 0Zm16.716 6.607h-5.748m0 0a2.182 2.182 0 0 1-3.722 1.541 2.18 2.18 0 0 1-.639-1.541m4.361 0a2.18 2.18 0 0 0-4.361 0m0 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m11.034 0a2.18 2.18 0 1 1 4.36 0 2.18 2.18 0 0 1-4.36 0Z"
    ></path>
  </svg>
);

export default IconFilter;
