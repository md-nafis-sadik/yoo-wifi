import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SuccessIcon, validateEmail } from "@/services";
import { Fragment, useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const DialogHeader = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700 !leading-[1.4] text-center">
        {title}
      </h1>
      <p className="text-sm md:text-base !leading-[1.4] md:!leading-[1.5] text-center text-black-600">
        {text}
      </p>
    </div>
  );
};

const OTPInput = ({ setOtp, ...props }) => {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      containerClassName={"w-full"}
      onChange={(otp) => setOtp(otp)}
      autoFocus
      {...props}
    >
      <InputOTPGroup className={"w-full flex justify-center gap-3"}>
        {[...Array(6)].map((_, index) => (
          <InputOTPSlot
            index={index}
            key={index}
            readOnly
            className={
              "border-2 shadow-none text-black-600 rounded-[8px] md:rounded-xl h-10 md:h-[52px] w-10 md:w-[52px] text-lg md:text-[27px] !leading-[1.4]"
            }
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};

const BottomTextLink = ({ text, linkText, onClick }) => (
  <p className="text-sm md:text-base font-normal text-black-600 mt-2 md:mt-3">
    {text}{" "}
    <span
      className="font-semibold text-main-600 hover:underline cursor-pointer"
      onClick={onClick}
    >
      {linkText}
    </span>
  </p>
);

const AuthDialog = ({ isOpen, setIsOpen }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signInStage, setSignInStage] = useState(1);
  const [signUpStage, setSignUpStage] = useState(null);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (signInStage === 1) {
      setIsButtonDisabled(phone.length <= 5);
    } else if (signInStage === 2 || signUpStage === 3) {
      setIsButtonDisabled(otp.length !== 6);
    } else if (signUpStage === 1) {
      setIsButtonDisabled(
        name.firstName.length < 3 || name.lastName.length < 3
      );
    } else if (signUpStage === 2) {
      setIsButtonDisabled(!email || !validateEmail(email) || phone.length <= 5);
    }
  }, [signInStage, phone, otp, name, email]);

  const handleContinuePress = () => {
    if (signInStage === 1) {
      setSignInStage(2);
    } else if (signInStage === 2) {
      setSignInStage(3);
    } else if (signUpStage === 1) {
      setSignUpStage(2);
    } else if (signUpStage === 2) {
      setSignUpStage(3);
    } else if (signUpStage === 3) {
      setSignUpStage(4);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <div className="px-4">
        <DialogContent
          showCloseIcon={true}
          className={cn(
            "w-full max-w-[540px] h-auto min-h-[286px] sm:min-h-[438px] rounded-xl md:rounded-3xl flex flex_center flex-col px-4 md:px-8 lg:px-[60px] pt-10 md:pt-[60px] pb-6 md:pb-[60px] gap-6 md:gap-12",
            signInStage === 3 || signUpStage === 4 ? "bg-main-50" : "bg-white"
          )}
        >
          <DialogTitle className={"hidden"} />
          {signInStage === 1 && (
            <Fragment>
              <DialogHeader
                title="Welcome Back!"
                text="We're glad to see you again. Let's dive into your courses."
              />

              <PhoneInput
                defaultCountry="us"
                value={phone}
                className={cn(
                  "text-sm md:text-base !mt-0 font-normal !leading-normal w-full bg-white"
                )}
                onChange={(phone) => setPhone(phone)}
                style={{
                  "--react-international-phone-flag-background-color":
                    "transparent rounded-[20px]",
                }}
              />
            </Fragment>
          )}
          {(signInStage === 2 || signUpStage === 3) && (
            <Fragment>
              <DialogHeader
                title="Verification"
                text="A confirmation code has been sent to your email & phone number."
              />

              <OTPInput setOtp={setOtp} />
            </Fragment>
          )}

          {/* SIGN UP FLOW */}
          {signUpStage === 1 && (
            <Fragment>
              <DialogHeader
                title="Sign Up"
                text="Its super fun to Register. Get started!"
              />
              <div className="flex flex-col gap-2 md:gap-3 w-full">
                <Input
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) =>
                    setName({ ...name, firstName: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) =>
                    setName({ ...name, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </Fragment>
          )}
          {signUpStage === 2 && (
            <Fragment>
              <DialogHeader
                title="Sign Up"
                text="Its super fun to Register. Get started!"
              />
              <div className="flex flex-col gap-2 md:gap-3 w-full">
                <Input
                  placeholder="Email"
                  name="email"
                  onChange={(e) =>
                    setEmail(e.target.value.replace(/\s/g, "").toLowerCase())
                  }
                  required
                />
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  className={cn(
                    "text-sm md:text-base !mt-0 font-normal !leading-normal w-full bg-white"
                  )}
                  onChange={(phone) => setPhone(phone)}
                  style={{
                    "--react-international-phone-flag-background-color":
                      "transparent rounded-[20px]",
                  }}
                />
              </div>
            </Fragment>
          )}

          {/* SUCCESS FLOW */}
          {(signInStage === 3 || signUpStage === 4) && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center">
                <SuccessIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
              </div>
              <DialogHeader
                title={
                  signInStage ? "Log In Successful!" : "Sign up Successful!"
                }
                text={
                  signInStage
                    ? "Welcome back! Ready to continue?"
                    : "Thank you for joining us! Your account is ready"
                }
              />
            </div>
          )}

          <div className="w-full flex_center flex-col">
            <Button
              size="lg"
              className={cn(
                "h-11 md:h-[52px] text-base font-semibold !leading-[1.2] rounded-xl select-none",
                isButtonDisabled && "bg-disabled",
                signInStage === 3 || signUpStage === 4 ? "w-fit" : "w-full"
              )}
              disabled={isButtonDisabled}
              onClick={handleContinuePress}
            >
              {(signInStage === 1 || signUpStage === 2) && "Continue"}
              {(signInStage === 2 || signUpStage === 3) && "Verify"}
              {(signInStage === 3 || signUpStage === 4) && "Continue"}
              {signUpStage === 1 && "Next"}
            </Button>
            {signInStage && signInStage === 1 && (
              <BottomTextLink
                text="Don't have an account?"
                linkText="Register Now"
                onClick={() => {
                  setSignUpStage(1);
                  setSignInStage(null);
                }}
              />
            )}
            {signUpStage && signUpStage <= 2 && (
              <BottomTextLink
                text="Already Have an account?"
                linkText="Login"
                onClick={() => {
                  setSignInStage(1);
                  setSignUpStage(null);
                }}
              />
            )}
            {(signInStage === 2 || signUpStage === 3) && (
              <BottomTextLink
                text="Didn't receive any OTP?"
                linkText="Resend Code"
                onClick={() => {
                  // Function to send your otp
                }}
              />
            )}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default AuthDialog;
