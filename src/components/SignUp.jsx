import React, { useEffect, useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const headers = {
    "Content-Type": "application/json",
    "Partner-Key": "PUO89q5z6du2Ppb4nXymNr2kq7UbdorvssM2Cur1",
  };

  async function auth(data) {
    await axios
      .post(
        `https://stage-partner-api.theflyy.com/v1/8fce343fa6170bf1ecb5/user/${userName}/user_token`,
        data,
        { headers }
      )
      .then((res) => {
        var sdkdata = {
          package_name: "com.abhinav.stage",
          partner_id: "8fce343fa6170bf1ecb5",
          ext_user_token: res.data.token,
          device_id: res.data.device_id,
          environment: "STAGE",
        };
        window.flyySdk.initSDK(JSON.stringify(sdkdata));
      });
  }
  return (
    <>
      <div className="login-form-bd">
        <div className="form-wrapper">
          <div className="form-container">
            <h1> Demo SDK</h1>
            <div className="form-control">
              <input
                type="text"
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Enter your username"
              />
            </div>
            <button
              onClick={() => {
                auth({ is_new: true, username: userName });
              }}
              className="login-btn"
            >
              Start Here
            </button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
          <img src={"./sdk_in_html.png"} style={{ width: "80vw" }} />
          <img src={"./sdk_in_react_component.png"} style={{ width: "80vw" }} />
        </div>
      </div>
    </>
  );
};

export default SignUp;
