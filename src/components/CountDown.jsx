import React, { useState } from "react";
import Duration from "duration-js";
import Clock from "./Clock";
import "../styles/CountDown.css";

function CountDown() {
    let date1 = new Date("2023 1 15 02:00 PM");
    const [duration, setDuration] = useState({});

    function getDuration() {
        let date2 = new Date();

        let diff = new Duration(date1 - date2);

        setDuration({
            days: diff.hours() > 99 ? diff.days() : 0,
            hours: diff.hours() > 99 ? diff.hours() % 24 : diff.hours(),
            mins: diff.minutes() % 60,
            secs: diff.seconds() % 60,
        });
    }

    setInterval(getDuration, 1000);

    return (
        <section id="count-down">
            <div className="count-down-wrapper">
                <div className="main">
                    <div className="row">
                        <div className="col-lg-5 bg-container">
                            <div className="bg-color">
                                <div className="title">
                                    <div className="content">
                                        <h5>We are waiting for</h5>
                                        <h1>The Big Day ...</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 my-auto clock">
                            <Clock duration={duration} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDown;
