import React from "react";
import $ from "jquery";
import AOS from "aos";
// import "../styles/CustomModel.css";

function CustomModel() {
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
        // <section id="modal">
        //     <div className="modal-content">
        //         <div className="modal-heading">
        //             <span className="modal-title">
        //                 SSV Family's Wedding Invitation
        //             </span>
        //         </div>
        //         <div className="modal-body">
        //             <p>From</p>
        //             <span className="modal-description">
        //                 Mr. & Mrs. P. Shaikh Sha Vali Sahab
        //             </span>
        //         </div>
        //         <div className="modal-footer">
        //             <button className="btn btn-primary" onClick={handleClick}>
        //                 Open
        //             </button>
        //         </div>
        //     </div>
        // </section>

        /********* */
        <section id="card">
            <div className="card-wrapper">
                {/* <div className="strip-wrapper">
                    <div className="top-strip"></div>
                </div> */}
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
                    <button className="btn btn-primary" onClick={handleClick}>
                        Open
                    </button>
                </div>
            </div>
        </section>
        // <section>
        //     <div
        //         class="modal fade text-center py-5"
        //         id="subscribeModal"
        //         tabindex="-1"
        //         role="dialog"
        //         aria-labelledby="exampleModalLabel"
        //         aria-hidden="true"
        //     >
        //         <div class="modal-dialog modal-md" role="document">
        //             <div class="modal-content">
        //                 <div class="modal-body">
        //                     <div class="top-strip"></div>
        //                     <a
        //                         class="h2"
        //                         href="https://www.fiverr.com/share/qb8D02"
        //                         target="_blank"
        //                     >
        //                         Sunlimetech
        //                     </a>
        //                     <h3 class="pt-5 mb-0 text-secondary">Newsletter</h3>
        //                     <p class="pb-1 text-muted">
        //                         <small>
        //                             Sign up to update with our latest news and
        //                             products.
        //                         </small>
        //                     </p>

        //                     <p class="pb-1 text-muted">
        //                         <small>
        //                             Your email is safe with us. We won't spam.
        //                         </small>
        //                     </p>
        //                     <div class="bottom-strip"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}

export default CustomModel;
