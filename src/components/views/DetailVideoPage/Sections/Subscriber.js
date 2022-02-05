import React, { useEffect, useState } from 'react'
function Subscriber(props) {

    return (
        <div>
            <button style={{
                backgroundColor: '#CC', borderRadius: '4px', color: 'white',
                padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
            }}>
                    Subscribe
            </button>
        </div>
    )
}

export default Subscriber