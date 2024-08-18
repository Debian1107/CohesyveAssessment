"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ToasterContainer, showToast } from "../../Components/Toaster";
const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleEmailentry = () => {
    // setIsOtpSent(true);
    window.location.href = "/dashboard";
  };

  const handleLogin = async () => {
    try {
      const result = await signIn("credentials", {
        redirect: false, // Ensure redirect is false to handle the response
        email,
        otp,
      });

      console.log("Sign-in result:", result);

      if (result.error) {
        showToast("error in creds", "error");
        console.error("Sign-in error:", result.error);
      } else {
        window.location.href = "/write-blogs";
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="text-black flex items-center justify-center min-h-screen bg-[#FCFCFC]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-[#C43939]">
          Email Registration
        </h2>
        {!isOtpSent ? (
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Please enter Email to view dashboard
            </label>
            <input
              type="email"
              className=" w-full px-3 py-2 mb-4 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleEmailentry}
              className="w-full px-4 py-2 font-bold text-white bg-[#C43939] rounded hover:bg-[#b32f2f]"
            >
              Login
            </button>
          </div>
        ) : (
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              OTP
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 mb-4 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 font-bold text-white bg-[#C43939] rounded hover:bg-[#b32f2f]"
            >
              Login
            </button>
          </div>
        )}
        {/* <div className="flex items-center justify-center gap-10">
          <button className="font-medium text-lg my-2">
            Don't have account Signup ?
          </button>
        </div> */}
      </div>
      <ToasterContainer />
    </div>
  );
};

export default Login;
