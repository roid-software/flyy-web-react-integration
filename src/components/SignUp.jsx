import React, { useEffect, useState } from 'react'
import axios from 'axios'
const SignUp = () => {
    const [userName, setUserName] = useState("")
    const headers = {
        'Content-Type': 'application/json',
        'Partner-Key': 'YOUR_PARTNERkey '
    };

    async function auth(data) {
        await axios.post(`https://stage-partner-api.theflyy.com/v1/"YOUR_PARTNER_ID"/user/${userName}/user_token`, data, { headers }).then((res) => {
            var data1 = {
                package_name: "YOUR package",
                partner_id: "YOUR_PARTNER_ID",
                ext_user_token: res.data.token,
                device_id: res.data.device_id,
                environment: "STAGE"
        }
        console.log(data1,"<<<data1")
            // window.onload = function () {
            //     var flyySDK = new FlyySDK();
            //     flyySDK.initSDK(JSON.stringify(data1));
            // }
            window.flyySdk.initSDK(JSON.stringify(data1))
          
        })
}
return (
    <>
        <input type='text' placeholder='Enter your username' onChange={(e) => {
            setUserName(e.target.value)
        }} />
        <button onClick={() => {
            auth({ "is_new": true, "username": userName })
        }}> Start Fly SDK</button>
    </>
)
}

export default SignUp