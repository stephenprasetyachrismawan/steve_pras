import React from "react";
import gelombangs from "../images/svgwaves4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./com.css";

function Gelombang() {
  return (
    <div>
      <img src={gelombangs} className="Glmbng w-100" />
      {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 124.14285714285714,147.89285714285714 248.28571428571428,162.78571428571428 374,175 C 499.7142857142857,187.21428571428572 627.0000000000001,196.75 727,178 C 826.9999999999999,159.25 899.7142857142856,112.21428571428571 1014,100 C 1128.2857142857144,87.78571428571429 1284.1428571428573,110.39285714285714 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#b8b8ff"
          fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 149.8928571428571,256.3928571428571 299.7857142857142,246.78571428571428 416,238 C 532.2142857142858,229.21428571428572 614.7500000000002,221.25 732,231 C 849.2499999999998,240.75 1001.2142857142856,268.2142857142857 1125,277 C 1248.7857142857144,285.7857142857143 1344.3928571428573,275.8928571428571 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#b8b8ff"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg> */}
    </div>
  );
}

export default Gelombang;
