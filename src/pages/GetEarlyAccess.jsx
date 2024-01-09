import React from "react";
import Button from "../components/Button";

const GetEarlyAccess = () => {
  return (
    <div className="bg-secondary px-8 py-8 w-auto md:px-auto ">
      <div className="form bg-primary px-2 py-6 text-center   max-w-8 rounded-lg flex flex-col gap-4 shadow-lg md:w-auto">
        <div className="text-3xl font-bold px-2 md:">
          Get early access today
        </div>
        <p className="text-[14px] md:px-24">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any question, our support team would
          be happy to help you.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-8 items-center md:w-auto">
          <input
            type="email"
            name="mail@example.com"
            placeholder="mail@example.com"
            className="rounded-full px-8 py-4 mb-2 md:px-48"
          ></input>
          <Button className={"px-20 py-4 md:px-auto"}>
            Get Started For Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetEarlyAccess;
