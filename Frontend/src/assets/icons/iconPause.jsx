import * as React from "react";

const PauseIcon = ({ color = "#FFF9F6", ...props }) => (
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
      d="M16.167 22q-.757 0-1.295-.797-.537-.796-.539-1.917V5.714q0-1.12.54-1.916.538-.796 1.294-.798.755 0 1.295.798.54.8.538 1.916v13.572q0 1.119-.538 1.917T16.167 22m-7.334 0q-.756 0-1.294-.797-.538-.796-.539-1.917V5.714q0-1.12.539-1.916T8.833 3q.756 0 1.296.798.54.8.538 1.916v13.572q0 1.119-.538 1.917T8.833 22"
    ></path>
  </svg>
);

export default PauseIcon;
