import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Engagement Ceremony</h1>
                    <p>
                        On Sunday, 15<sup>th</sup> January, 2023,
                        <br />
                        22<sup>nd</sup> Jamaad-ul-Aakhar, 1444 Hijri,
                        <br />
                        Time: 02:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        KGN Function Hall,
                        <br /> R&B Guest House Road,
                        <br /> Near RTC Bus Stand,
                        <br /> Adoni - 518 301.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
