import React from "react"
import BasicLayout from "../components/layouts/BasicLayout"

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
      <section className="gallery-grid">
        <img src="images/cat-1.jpg" alt="Cute cat" />
        <img src="images/cat-2.jpg" alt="Serious cat" />
      </section>
    </BasicLayout>
  )
}

export default GalleryPage
