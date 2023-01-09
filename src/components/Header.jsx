import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />
            <h3>
                Begin With The Name Of Allaah, The Most Benificient And The Most
                Merciful
            </h3>

            {/* <h4 className="mt-4">
                    Under the spirutual patronage of:
                    <br />
                    Qutub-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir
                    Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                    Rahamatullaahi Alaih, Adoni.
                </h4> */}

            <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Hazrath Khaja Sayyid Shah Abdul Khader Muhammad
                Muhammad-ul-Hussaini Chisti-ul-Qadri Lingband Jagathguru
                Rahamatullaahi Alaih Al-Maroof Jagathguru Khader Linga Saheb,
                Kowthalam.
            </h4>
        </section>
    );
}

export default Header;
