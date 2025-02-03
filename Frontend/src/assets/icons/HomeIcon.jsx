import * as React from "react";

const HomeIcon = ({ color = "#FFF9F6", ...props }) => (
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
      d="M23 19.697v-7.751c0-.625-.129-1.243-.378-1.817a4.6 4.6 0 0 0-1.075-1.522l-7.44-6.974A2.35 2.35 0 0 0 12.502 1a2.35 2.35 0 0 0-1.607.633L3.452 8.607c-.46.43-.825.948-1.075 1.522A4.6 4.6 0 0 0 2 11.946v7.751c0 .611.246 1.197.683 1.629a2.35 2.35 0 0 0 1.65.674h16.334a2.35 2.35 0 0 0 1.65-.674A2.29 2.29 0 0 0 23 19.697"
    ></path>
  </svg>
);

export default HomeIcon;
