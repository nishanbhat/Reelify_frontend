import React from 'react'
import { SmileOutlined } from '@ant-design/icons';
import { FaRegSurprise, FaSurprise } from 'react-icons/fa';
function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> OMG Nishan's coding Wild !!!  <FaRegSurprise/></p>
        </div>
    )
}

export default Footer
