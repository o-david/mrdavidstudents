import React, { useEffect, useRef, useState } from "react";
import { infoCircle } from "../assets";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
const VerificationRequired = ({email}) => {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    if (/^\d$/.test(value) || value === "") {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      if (index < 3 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  useEffect(() => {
    let interval;

    if (timer > 0 && isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsResendDisabled(false);
    }

    return () => clearInterval(interval);
  }, [digits, timer, isResendDisabled]);

  const isAllFieldsFilled = digits.every((digit) => digit !== "");
  const handleResendClick = () => {
    setTimer(120);
    setIsResendDisabled(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post("user/verifyMail", {"verificationCode": "0644", 
      "email":email});
      setEnterCode(true)
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.message)
    }

    // Here you can submit the form data to your API
    console.log('Form submitted:', formData);
    navigate("../successful/332");
  };
  return (
    <div className=" w-screen h-screen flex flex-col gap-6 bg-[rgba(0,0,0,0.3)] justify-center items-center absolute">
      <div className="w-2/5 p-6 bg-sec rounded">
        <div className=" flex flex-col gap-3 items-center">
          <img
            src={infoCircle}
            className="border border-[#EAECF0] lg:p-[0.875rem] p-[0.625rem] rounded-xl"
            alt=""
          />

          <h1 className=" font-semibold lg:text-[1.875rem] text-[1.25rem] text-center">
            Verification required
          </h1>
          <p className=" text-center text-[#475467] text-[0.875rem] lg:text-[1rem]">
            A 4 digit verification code has been sent to
            <br /> <span className=" font-semibold">{email && email}</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-4">
            <p className=" text-center font-semibold lg:font-bold text-[#475467] text-[0.875rem]  lg:text-[1rem]">
              Enter verification code
            </p>
            <div className="flex justify-center gap-4">
              {digits.map((digit, index) => (
                <input
                  className="w-[15.56%] border focus:border-[#5EBAA2] outline-none focus:shadow-[0_0_0_4px_#E7F5F1] rounded-lg aspect-square text-center"
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              ))}
            </div>
          </div>
          <button
            disabled={!isAllFieldsFilled}
            className="border text-sec3 text-[1rem] font-semibold rounded-lg bg-pry hover:bg-sec3 hover:text-white disabled:text-sec3 text-center py-[0.625rem] w-full disabled:bg-[rgba(255,255,255,0.5)]"
          >
            Continue
          </button>
        </form>
        <div className="flex gap-1 justify-center mt-3">
          <span className="text-[0.875rem] font-normal text-[#475467]">
            Didn’t receive the code?
          </span>
          {isResendDisabled ? (
            <span className="text-[0.875rem] font-semibold text-[#344054]">
              Resend in{" "}
              <span className="text-[#EF4444]">{`${Math.floor(timer / 60)}:${
                timer % 60
              }`}</span>
            </span>
          ) : (
            <span
              onClick={handleResendClick}
              className="cursor-pointer font-semibold text-[0.875rem] text-pry hover:underline"
            >
              Click to resend
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationRequired;
