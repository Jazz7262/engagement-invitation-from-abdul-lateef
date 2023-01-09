import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div className="slide-wrapper">
                <div
                    className="slide-content"
                    data-aos="fade-up"
                    data-aos-offset="300"
                >
                    <div className="img-container">
                        <img alt="frame" src="./assets/images/frame.png" />
                    </div>
                    <div className="text-content">
                        <h3>
                            We Are Arranging
                            <br />
                            Our Daughter's Engagement
                        </h3>
                        <h1>Save Our Date</h1>
                        <p>
                            15<sup>th</sup> January, 2023
                        </p>
                    </div>
                </div>
                <img
                    className="wheel wheel-top-left"
                    src="../assets/images/wheel.png"
                    alt="Wheel"
                />
                <img
                    className="wheel wheel-bottom-right"
                    src="../assets/images/wheel.png"
                    alt="Wheel"
                />
            </div>
        </section>
    );
}

export default Slide;
