import * as React from "react";

const ThunderIcon = ({ color = "#FFF9F6", ...props }) => (
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
      strokeWidth="2"
      d="M17.684 3.603c.52-.659.03-1.603-.836-1.603h-6.716a1.06 1.06 0 0 0-.91.502l-5.081 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.85z"
    ></path>
  </svg>
);

export default ThunderIcon;
