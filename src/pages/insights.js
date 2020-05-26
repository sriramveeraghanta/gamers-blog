import React from "react";
// React Bootstrap...
import {Navbar, Nav, NavDorpDown} from "react-bootstrap";
// Layouts used...
import BasicLayout from "../components/layouts/BasicLayout";
// Icons or image imports...
import GamingGirlImage from "../images/4090.jpg";
import KeepCalmImage from "../images/4003.jpg";

function InsightsPage() {
    return (
        <BasicLayout>
            <section class="insights-bg">
                <div class="container insights-header text-center">
                    Insert coins to begin...
                </div>
            </section>

            <section class="faded-container faded-one">
                <div class="container my-box box-one">
                    <div class="row my-columns">
                        <div class="col-md-4 text-center insight-image">
                            <img src={GamingGirlImage} width="100%" height="500px"></img>
                        </div>
                        <div class="col-md-8 text-center insight-content">
                            <h2 class="insight-h2">Just One More Game</h2>
                            <blockquote class="blockquote text-center">
                                <p class="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section class="faded-container faded-two">
                <div class="container my-box box-two">
                    <div class="row my-columns">
                        <div class="col-md-6 text-center">
                            <img src={KeepCalmImage} width="100%" height="500px"></img>
                        </div>
                        <div class="col-md-6 text-center">
                        <h2 class="insight-h2">Gaming in Progress</h2>
                            <blockquote class="blockquote text-center">
                                <p class="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            
        </BasicLayout>
        
    );
}

export default InsightsPage