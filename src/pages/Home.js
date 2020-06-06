// import React, { Component } from 'react';
import React from "react";
import Categories from "../components/renderings-home";
import { Component } from "react";
import './category-styles.css'

function Home() {

    return (
        <div className="row mt-3">
            <div class="col-6 d-flex align-items-stretch">
                <div class="portfolio-card">
                    <a href="https://orlandocarnate.com/3dportfolio/#/Architecture" class="btn btn-primary">
                        <h5>Architectural Renderings</h5>
                        <img class="img-responsive portfolio-img" src='./images/architectural/Comfort-Inn-Exterior-2020.jpg' />
                        <div class="mb-2 text-center">
                            <p>Modeled and rendered in 3DS Max, Twinmotion.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-6 d-flex align-items-stretch">
                <div class="portfolio-card">
                    <a href="./#/Tradeshows" class="btn btn-primary">
                        <h5>Tradeshow Renderings</h5>
                        <img class="img-responsive portfolio-img" src='./images/Plum-30x30-view2.jpg' />
                        <div class="mb-2 text-center">
                            <p>Modeled and rendered in 3DS Max.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-6 d-flex align-items-stretch">
                <div class="portfolio-card">
                    <a href="https://www.youtube.com/playlist?list=PLv0bey_3GrtIx5w71fSIR25fJ38iyN_11" target="_blank" class="btn btn-primary">
                        <h5>Animations (view on <i className="fab fa-youtube"></i>Youtube)</h5>
                        <img class="img-responsive portfolio-img" src='./images/sun-nuclear-480px.gif' />
                        <div class="mb-2 text-center">
                            <p>A video playlist of my animations, modeled and rendered in 3DS Max and Twinmotion.</p>
                        </div>
                    </a>
                </div>
            </div>


         </div>
        )


}

export default Home;