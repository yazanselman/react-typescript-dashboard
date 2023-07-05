import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="table centered">
        <div className="row">
          <div className="column">
            <ul className="price">
              <li className="header">
                <br />
                <br />
                Features
              </li>
              <li>Centralized Teams</li>
              <li>Version History</li>
              <li>Plugin Administrator</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud storage</li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Starter
                <br />
                <span className="dollar">0</span>
                <p>per user per month</p>
                <div className="button_cont" style={{ alignItems: "center" }}>
                  <a
                    className="btn"
                    target="_blank"
                    rel="nofollow noopener"
                    href="/#"
                  >
                    Go Starter
                  </a>
                </div>
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Professional
                <br />
                <span className="dollar">25</span>
                <p>per user per month</p>
                <div className="button_cont" style={{ alignItems: "center" }}>
                  <a
                    className="btn"
                    target="_blank"
                    rel="nofollow noopener"
                    href="/#"
                  >
                    Go Professional
                  </a>
                </div>
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Organization
                <br />
                <span className="dollar">50</span>
                <p>per user per month</p>
                <div className="button_cont" style={{ alignItems: "center" }}>
                  <a
                    className="btn"
                    target="_blank"
                    rel="nofollow noopener"
                    href="/#"
                  >
                    Go Organization
                  </a>
                </div>
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <CheckCircleOutlineOutlinedIcon color="success" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
              <li>
                <HighlightOffOutlinedIcon color="error" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
