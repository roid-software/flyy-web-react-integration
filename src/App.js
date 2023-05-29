import './App.css';
import SignUp from "./components/SignUp"
import React, { useEffect } from 'react';
function App() {

  useEffect(() => {
    window.onload = function () {
      // const flyySDK = new FlyySDK();
      // flyySDK.startReferralTracking();
      // console.log(window.flyySdk,"<<<window.flySdk")
      
    };
  }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.theflyy.com/web-assets/flyy_sdk_package/v1.0.7/flyy-sdk.js';
  //   script.async = true;
  //   script.onload = () => {
  //     const flyySDK = new FlyySDK();
  //     flyySDK.startReferralTracking();
  //   };
  //   document.head.appendChild(script);
  // }, []);
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
