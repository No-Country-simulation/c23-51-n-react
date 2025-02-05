import * as React from "react";

const UserAvatar = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    fill="none"
    viewBox="0 0 100 100"
    {...props}
  >
    <g fill="#FA7E25" fillOpacity="0.8" clipPath="url(#a)">
      <path d="M14.97 85.58c4.32-12.9 13.07-20.65 26.39-23.4-6.23-3.15-10.3-8.01-11.64-14.85-1.34-6.87.41-13.01 5.18-18.15 8.21-8.85 22.12-8.81 30.33.09 3.99 4.32 5.88 9.51 5.44 15.37-.61 8.07-4.82 13.83-11.98 17.55 13.3 2.74 22.06 10.51 26.34 23.33C97.35 73.9 104.3 53.49 97.08 33.2 89.67 12.34 68.94-1.97 45.24.22 24.04 2.18 5.58 17.88 1.07 39.89-1.2 50.99.15 61.71 5.11 71.92c2.49 5.12 5.79 9.67 9.86 13.66"></path>
      <path d="M80.91 81.04c-2.29-4.78-5.72-8.65-10.08-11.65-4.64-3.18-9.77-5.03-15.41-5.29-2.93-.14-5.88-.08-8.82-.06-1.3 0-2.61.06-3.9.22-6.32.8-11.87 3.34-16.62 7.59-4.55 4.08-7.62 9.08-9.14 15-.06.23.06.62.24.78 3.24 2.84 6.79 5.24 10.65 7.14 6.99 3.44 14.39 5.2 22.2 5.23 1.83-.12 3.66-.16 5.48-.37 10.35-1.15 19.42-5.21 27.32-11.97.29-.25.39-.49.25-.86-.72-1.92-1.29-3.91-2.17-5.76M68.58 43.44c.06-10.38-8.23-18.69-18.54-18.69-10.38 0-18.66 8.27-18.61 18.69.05 10.33 8.57 18.71 19.08 18.44 9.79-.25 18.02-8.18 18.08-18.44z"></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h100v100H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default UserAvatar;
