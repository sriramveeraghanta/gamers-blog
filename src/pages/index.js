import React from "react"
// import { Link } from "gatsby"
// layouts
import BasicLayout from "../components/layouts/BasicLayout"
// images
import HuMong from "../images/7457.jpg"

const IndexPage = () => (
  <BasicLayout>
    <div className="hero-unit">
      <div className="text-container">
        <div className="container">
          <div className="row ">
            <div className="col-sm-6">
              <h3>For All Occasion HairStyle is a Must Try Fashion</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section index-helo">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 align-self-end">
            <h2 className="page-title">Find out about us in history</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-danger">Install Now</button>{" "}
            <button className="btn btn-danger">Watch Trailer</button>
          </div>
        </div>
      </div>
    </section>
  </BasicLayout>
)

export default IndexPage
