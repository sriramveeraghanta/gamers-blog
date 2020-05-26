import React from "react"
import BasicLayout from "../components/layouts/BasicLayout"
// images
import img4011 from "../images/4011.jpg"
import img5000 from "../images/5000.jpg"
import img7445 from "../images/7445.jpg"
import img7448 from "../images/7448.png"
import img7450 from "../images/7450.jpg"
import img7451 from "../images/7451.jpg"
import img7457 from "../images/7457.jpg"
import img7459 from "../images/7459.jpg"
import img7472 from "../images/7472.jpg"
import img7479 from "../images/7479.jpg"
import img7481 from "../images/7481.jpg"
import img7482 from "../images/7482.jpg"

function GalleryPage(props) {
  return (
    <BasicLayout>
      <section className="hero-unit gallery-bg">
        <div className="text-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h2>
                  Wanting something does not give you the right to have it.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h3 className="text-center mt-4 mb-4"> Gallery Images</h3>
      </div>
      <section className="gallery-grid mt-2">
        <img src={img4011} alt="not-found" />
        <img src={img5000} alt="not-found" />
        <img src={img7445} alt="not-found" />
        <img src={img7448} alt="not-found" />
        <img src={img7450} alt="not-found" />
        <img src={img7451} alt="not-found" />
        <img src={img7457} alt="not-found" />
        <img src={img7459} alt="not-found" />
        <img src={img7472} alt="not-found" />
        <img src={img7479} alt="not-found" />
        <img src={img7481} alt="not-found" />
        <img src={img7482} alt="not-found" />
      </section>
    </BasicLayout>
  )
}

export default GalleryPage
