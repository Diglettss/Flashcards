import React from "react";
import "./Landing.css";
import study1 from "../../assets/study1.jpg";
import study2 from "../../assets/study2.jpg";
import study3 from "../../assets/study3.jpg";

export default function Landing() {
    return (
        <div className="landing-page">
            <div class="split left">
                <div class="centered">
                    <img
                        className="study-img"
                        src={study1}
                        alt="study-img"
                        height={350}
                    />
                </div>
            </div>

            <div class="split right">
                <div class="centered">
                    <h1>Flashy</h1>
                    <p>The perfect study tool for you!</p>
                </div>
            </div>
        </div>

        //     <div className="landing-page">
        //         <div className="hero">
        //             <img className="study-img" src={study1} alt="study-img" height={350}/>
        //             <div className="message">
        //                 <h1>Flashy</h1>
        //                 <p>The perfect study tool for you!</p>
        //             </div>
        //         </div>
        //     </div>
        // );
    );
}
