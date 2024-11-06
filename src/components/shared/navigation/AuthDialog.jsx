import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SuccessIcon } from "@/services";
import { Fragment, useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const DialogHeader = ({ title, text }) => {
  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700 !leading-[1.4] text-center">
        {title}
      </h1>
      <p className="text-sm md:text-base !leading-[1.4] md:!leading-[1.5] text-center text-black-600">
        {text}
      </p>
    </div>
  );
};

const AuthDialog = ({ isOpen, setIsOpen }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signInStage, setSignInStage] = useState(1);
  const [signUpStage, setSignUpStage] = useState(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (phone.length > 5) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [phone]);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent
        showCloseIcon={true}
        className="w-full max-w-[540px] h-auto min-h-[286px] sm:min-h-[438px] rounded-xl md:rounded-3xl flex flex_center flex-col px-4 md:px-8 lg:px-[60px] pt-10 md:pt-[60px] pb-6 md:pb-[60px] bg-white gap-6 md:gap-12"
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
        {/* <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <SuccessIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
          </div>
          <div className="text-center flex flex-col gap-3 sm:gap-4">
            <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-700">
              Order Confirmed!
            </DialogTitle>
            <p className="text-base text-black-700">
              We're glad to see you again. Let's dive into your courses.
            </p>
          </div>
          <DialogClose
            // onClick={handleContinue}
            className="px-10 py-4 bg-main-600 text-white rounded-xl max-w-max mx-auto outline-none border-none"
          >
            Continue
          </DialogClose>
        </div> */}

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
                wrapperClass={"col-span-2 md:col-span-1"}
                required
              />
              <Input
                placeholder="Last Name"
                name="lastName"
                wrapperClass={"col-span-2 md:col-span-1"}
                required
              />
            </div>
          </Fragment>
        )}

        <div className="w-full flex_center flex-col">
          <Button
            size="lg"
            className={cn(
              "w-full h-11 md:h-[52px] text-base font-semibold !leading-[1.2] rounded-xl",
              isButtonDisabled && "bg-disabled"
            )}
            disabled={isButtonDisabled}
          >
            Continue
          </Button>
          {signInStage && (
            <p className="text-sm md:text-base font-normal text-black-600 mt-2 md:mt-3">
              Don't have an account?{" "}
              <span
                className="font-semibold text-main-600 hover:underline cursor-pointer"
                onClick={() => {
                  setSignUpStage(1);
                  setSignInStage(null);
                }}
              >
                Sign Up
              </span>
            </p>
          )}
          {signUpStage && (
            <p className="text-sm md:text-base font-normal text-black-600 mt-2 md:mt-3">
              Already Have an account?{" "}
              <span
                className="font-semibold text-main-600 hover:underline cursor-pointer"
                onClick={() => {
                  setSignInStage(1);
                  setSignUpStage(null);
                }}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
