import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. R. Abdul Lateef Sahab</h2>

                <h5 className="address mb-3">
                    H.No. #1/374, Near Shelley School,
                    <br /> RTC Colony,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 88971 61222, <br />
                    +91 70932 83840.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
