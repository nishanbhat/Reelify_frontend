import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Nishan is Coding!</span>
            </div>
            <div style={{ float: 'right' }}>This is sample landing page.</div>
        </>
    )
}

export default LandingPage
