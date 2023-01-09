import React from "react";
import $ from "jquery";
import AOS from "aos";
import "../styles/CustomModel.css";

function CustomModel1() {
    function handleClick() {
        $("#card").fadeOut();
        // $("#modal").fadeOut();
        $(".navbar").css("z-index", "2");
        $(".swing-icon").css("z-index", "2");
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        document.getElementById("audio").play();
    }
    return (
        <section id="card">
            <div className="card-outer-wrapper">
                <div className="card-inner-wrapper">
                    <div className="card-content">
                        <h1 className="card-title m-0">
                            Rangare Family's Engagement Invitation
                        </h1>
                        <img
                            src="../assets/images/line-divider.png"
                            alt="line_divider"
                            className="line-divider mb-4"
                        />
                        <h4>From:</h4>
                        <h4 className="invitor-name mb-5">
                            Mr. & Mrs. R. Abdul Lateef Sahab
                        </h4>
                        <button
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Open
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomModel1;
