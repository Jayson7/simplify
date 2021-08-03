import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container-footer">
            <div className="div1">
              <div>Front End Development</div>
              <div>Back End Development</div>
              <div>Database integration</div>
              <div>Programming</div>
              <div>AI </div>
              <div>Machine Learning</div>
            </div>
            <div className="div2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              sapiente nesciunt praesentium perferendis illo molestias libero
            </div>

            <div className="div3">
              <div>Blog</div>
              <div>E - Commerce</div>
              <div>Portfolio</div>
              <div>Educational</div>
              <div>Dashboards</div>
            </div>
          </div>
          <hr />
          <hr />
          <div className="copyright">
            Simplify @copyright 2021
            <strong>Jayson</strong>
          </div>
        </div>
      </div>
    );
  }
}
