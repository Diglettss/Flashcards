import React from 'react'
import "./Landing.css"
import "./study"

export default function Landing() {
  return (
    <div className="landing-page">
        <div className="hero">
            <img className="hero-img" src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg" alt="hero-img" />
            <div className="cta">
                <h1>Flashy</h1>
                <p>Helping you study...blah blah</p>
            </div>
        </div>
    </div>
  )
}
