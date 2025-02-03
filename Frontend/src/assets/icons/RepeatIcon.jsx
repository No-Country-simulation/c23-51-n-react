import * as React from "react";

const RepeatIcon = ({ color = "#FFF9F6", ...props }) => (
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
      d="m6.85 19 .85.85q.3.3.288.7a1.05 1.05 0 0 1-.288.7q-.3.3-.712.313a.93.93 0 0 1-.713-.288L3.7 18.7a.9.9 0 0 1-.213-.325 1.167 1.167 0 0 1 .002-.75.86.86 0 0 1 .212-.325l2.575-2.575a.93.93 0 0 1 .713-.287q.413.013.712.312.275.3.288.7a.91.91 0 0 1-.288.7l-.85.85h10.15v-3q0-.424.287-.712A.97.97 0 0 1 18 13q.424 0 .713.288A.96.96 0 0 1 19 14v3q0 .825-.587 1.413A1.92 1.92 0 0 1 17 19zm10.3-12H7v3a.97.97 0 0 1-.288.713A.96.96 0 0 1 6 11a.97.97 0 0 1-.712-.288A.97.97 0 0 1 5 10V7q0-.824.588-1.412A1.93 1.93 0 0 1 7 5h10.15l-.85-.85a.92.92 0 0 1-.288-.7q.012-.4.288-.7.3-.3.712-.312a.94.94 0 0 1 .713.287L20.3 5.3q.15.15.213.325t.062.375q0 .2-.062.375a.85.85 0 0 1-.213.325l-2.575 2.575q-.3.3-.712.288a1.02 1.02 0 0 1-.713-.313q-.275-.3-.288-.7a.91.91 0 0 1 .288-.7z"
    ></path>
  </svg>
);

export default RepeatIcon;
