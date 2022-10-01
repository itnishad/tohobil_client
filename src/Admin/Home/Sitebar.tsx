import React from 'react'
import classes from "./AdminHome.module.css";
import {Link } from "react-router-dom";

const Sitebar = () => {
  return (
    <div
          id={classes.sideNav}
          className="col-12 col-md-auto border-end border-end flex-column bg-dark"
        >
          <nav className="navbar no-border flex-md-nowrap container-fluid bg-dark justify-content-center">
            <div className="navbar-brand d-flex col-md-4 mr-0">
              <a className="text-light" href="@">TOHOBIL</a>
            </div>
          </nav>

          <div className="d-none d-md-flex flex-column mb-auto">
            <ul className="nav ms-4 flex-column">
              <li className="nav-item">
                {/* First NAV */}

                <Link to="../../" className='nav-link'>
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.257"
                    height="17.1"
                    viewBox="0 0 19.257 17.1"
                  >
                    <g
                      id="Group_1513"
                      data-name="Group 1513"
                      transform="translate(-56.45 -380.45)"
                    >
                      <g id="person" transform="translate(53 377)">
                        <path
                          id="Path_909"
                          data-name="Path 909"
                          d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z"
                          fill="none"
                          stroke="#5d5e65"
                          strokeWidth="1.1"
                        />
                      </g>
                      <g id="arrow-up-1" transform="translate(66.92 379.047)">
                        <path
                          id="Path_910"
                          data-name="Path 910"
                          d="M8.08,9.745,6.434,8.1a.5.5,0,0,0-.707,0L4.08,9.745"
                          transform="translate(0)"
                          fill="none"
                          stroke="#5d5e65"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                      </g>
                    </g>
                  </svg>
                  User List</Link>

                {/* Second NAV */}
                <Link to="../../activeList" className="nav-link">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="15.234"
                    viewBox="0 0 24.566 18.9"
                  >
                    <g id="folder" transform="translate(0.461 -60.55)">
                      <path
                        id="Path_544"
                        data-name="Path 544"
                        d="M1.385,67.231c0-1.145.932-1.077,2.077-1.077h12c1.145,0,2.077-.068,2.077,1.077v.692h1.385V65.615a1.848,1.848,0,0,0-1.846-1.846H8.769v-.923A1.848,1.848,0,0,0,6.923,61H1.846A1.848,1.848,0,0,0,0,62.846V75.5l1.385-2.217Z"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                      <path
                        id="Path_546"
                        data-name="Path 546"
                        d="M18.258,250.691H.719a.692.692,0,0,1-.587-1.059l5.189-8.308A.692.692,0,0,1,5.908,241H22.041a1.615,1.615,0,0,1,1.348,2.5l-4.554,6.877A.692.692,0,0,1,18.258,250.691Z"
                        transform="translate(-0.026 -171.691)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                    </g>
                  </svg>
                  Active Campaign
                  </Link>

                {/* Third NAV */}
                <Link to="../../inActiveList" className="nav-link">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="15.234"
                    viewBox="0 0 24.566 18.9"
                  >
                    <g id="folder" transform="translate(0.461 -60.55)">
                      <path
                        id="Path_544"
                        data-name="Path 544"
                        d="M1.385,67.231c0-1.145.932-1.077,2.077-1.077h12c1.145,0,2.077-.068,2.077,1.077v.692h1.385V65.615a1.848,1.848,0,0,0-1.846-1.846H8.769v-.923A1.848,1.848,0,0,0,6.923,61H1.846A1.848,1.848,0,0,0,0,62.846V75.5l1.385-2.217Z"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                      <path
                        id="Path_546"
                        data-name="Path 546"
                        d="M18.258,250.691H.719a.692.692,0,0,1-.587-1.059l5.189-8.308A.692.692,0,0,1,5.908,241H22.041a1.615,1.615,0,0,1,1.348,2.5l-4.554,6.877A.692.692,0,0,1,18.258,250.691Z"
                        transform="translate(-0.026 -171.691)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                    </g>
                  </svg>
                  Inavtive Campaign
                </Link>
                {/* Forth NAV */}
                <Link to="../../user/verification" className="nav-link">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="15.234"
                    viewBox="0 0 24.566 18.9"
                  >
                    <g id="folder" transform="translate(0.461 -60.55)">
                      <path
                        id="Path_544"
                        data-name="Path 544"
                        d="M1.385,67.231c0-1.145.932-1.077,2.077-1.077h12c1.145,0,2.077-.068,2.077,1.077v.692h1.385V65.615a1.848,1.848,0,0,0-1.846-1.846H8.769v-.923A1.848,1.848,0,0,0,6.923,61H1.846A1.848,1.848,0,0,0,0,62.846V75.5l1.385-2.217Z"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                      <path
                        id="Path_546"
                        data-name="Path 546"
                        d="M18.258,250.691H.719a.692.692,0,0,1-.587-1.059l5.189-8.308A.692.692,0,0,1,5.908,241H22.041a1.615,1.615,0,0,1,1.348,2.5l-4.554,6.877A.692.692,0,0,1,18.258,250.691Z"
                        transform="translate(-0.026 -171.691)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                    </g>
                  </svg>
                  User Verification
                </Link>
                {/* sixth NAV */}
                <Link to="../../withdrawRequest" className="nav-link"> 
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.8"
                    height="18.8"
                    viewBox="0 0 18.8 18.8"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.6 -0.6)"
                    >
                      <rect
                        id="Rectangle_82"
                        data-name="Rectangle 82"
                        width="7.8"
                        height="7.8"
                        rx="1"
                        transform="translate(1 1)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                      <rect
                        id="Rectangle_83"
                        data-name="Rectangle 83"
                        width="7.8"
                        height="7.8"
                        rx="1"
                        transform="translate(11.2 1)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                      <rect
                        id="Rectangle_84"
                        data-name="Rectangle 84"
                        width="7.8"
                        height="7.8"
                        rx="1"
                        transform="translate(1 11.2)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                      <circle
                        id="Ellipse_44"
                        data-name="Ellipse 44"
                        cx="3.9"
                        cy="3.9"
                        r="3.9"
                        transform="translate(11.2 11.2)"
                        fill="none"
                        stroke="#5d5e65"
                        strokeWidth="1.1"
                      />
                    </g>
                  </svg>
                  Withdraw Request
                </Link>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Sitebar;