import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Subscriber(props) {
    
    const userTo = props.userTo
    const userFrom = props.userFrom

    const [subscribeNumber, setSubscriberNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false)


    useEffect(() => {

        const subscribeNumberVariables = { userTo: userTo, userFrom: userFrom }
        axios.post('/api/subscribe/subscribeNumber', subscribeNumberVariables)
            .then(response => {
                if (response.data.success) {
                    setSubscriberNumber(response.data.subscribeNumber)
                } else {
                    alert('Failed to get subscriber Number')
                }
            })

            axios.post('/api/subscribe/subscribed', subscribeNumberVariables)
            .then(response => {
                if (response.data.success) {
                    setSubscribed(response.data.subcribed)
                } else {
                    alert('Failed to get Subscribed Information')
                }
            })

        },[])
    return (
        <div>
            <button style={{
                backgroundColor: `${Subscribed ? '#AAAAA' : 'Black'}`,
                borderRadius: '4px', color: 'white',
                padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
            }}>
                {subscribeNumber} {Subscribed ? 'Subscribed' :
                    'Subscribe'}
            </button>
        </div>
    )
}

export default Subscriber