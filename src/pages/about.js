import React from "react"
// layouts
import BasicLayout from "../components/layouts/BasicLayout"
// icons
import AimIcon from "../images/icons/aim.png"
import TriangleIcon from "../images/icons/triangle-4.png"
import SolarIcon from "../images/icons/solar.png"
import HookIcon from "../images/icons/hook.png"

function AboutPage() {
  return (
    <BasicLayout>
      <section class="hero-unit about-bg">
        <div className="text-container">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10 align-self-center text-container">
                <h1 class="text-center">
                  The right man in the wrong place can make all the difference
                  in the world.
                </h1>
                <span id="startchange"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-liver">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <p class="text-center lead">
                Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="container">
          <h2 class="text-center mb-4">Leadership Team</h2>
          <div class="row">
            <div class="col-md-3 text-center">
              <img src={AimIcon} width="150" height="150" />
              <h5 className="mt-4 mb-4">AIM</h5>
            </div>
            <div class="col-md-3 text-center">
              <img src={TriangleIcon} width="150" height="150" />
              <h5 className="mt-4 mb-4">Versatility</h5>
            </div>
            <div class="col-md-3 text-center">
              <img src={SolarIcon} width="150" height="150" />
              <h5 className="mt-4 mb-4">Solar</h5>
            </div>
            <div class="col-md-3 text-center">
              <img src={HookIcon} width="150" height="150" />
              <h5 className="mt-4 mb-4">Hook</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="container text-center">
          <h2>Mortal Kombat</h2>
          <blockquote class="blockquote text-center">
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </blockquote>
          <div class="row justify-content-center">
            <p class="col-md-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </BasicLayout>
  )
}

export default AboutPage
