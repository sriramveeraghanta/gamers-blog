import React from "react"
// import { Link } from "gatsby"
// react bootstrap
import { Carousel } from "react-bootstrap"
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
      <div className="container pt-4 pb-4">
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
    <section className="section bg-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex">
            <div className="align-self-center">
              <h2 className="text-light">Live Streams</h2>
              <button className="btn btn-info">Join Now</button>
            </div>
          </div>
          <div className="col-md-9">
            <Carousel>
              <Carousel.Item>
                <iframe
                  title="dota2 battle pass"
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/0duWutCV4V0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  title="top games"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/zaFdx5KR1Pw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/qh01mXB4uhY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  </BasicLayout>
)

export default IndexPage
