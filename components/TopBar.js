import React, { useState, useEffect } from 'react'


const TopBar = ({ }) => {


    return (
        <div className='top-bar'>
            <h1>TopBar</h1>

            <style jsx global> {`
                .top-bar {
                    background-color: #0070f3;
                    color: white;
                }
                h1 {
                    margin: 0;
                    padding: 16px 38px;
                }
            `}</style>
        </div>
    )
}
export default TopBar;