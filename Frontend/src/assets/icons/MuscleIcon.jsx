import * as React from "react";

const MuscleIcon = ({ color = "#FFF9F6", ...props }) => (
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
      strokeLinejoin="round"
      strokeMiterlimit="2"
      strokeWidth="2"
      d="M10.685 18a5.76 5.76 0 0 1 6.18-4.19c2.78.295 4.99 2.64 5.13 5.43a5.8 5.8 0 0 1-.28 2.095c-.13.4-.52.665-.945.665H5.879a4 4 0 0 1-3.922-4.785L5 2h6l2 3.5-4.285 3.065L7.5 7m1.22 1.565L11 17"
    ></path>
  </svg>
);

export default MuscleIcon;
