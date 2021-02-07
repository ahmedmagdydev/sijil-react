import React from "react";

function CreateAccount() {
  return (
    <div className="p-5">
      <h2 className="text-center mb-4" style={{ color: "#0a4065" }}>
        To create account, follow these steps:
      </h2>
      <div className="row">
        <div className="col-md-4  pb-4">
          <div className="step step-1">
            <h4>Step 1:</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="col-md-4 pb-4 ">
          <div className="step step-2">
            <h4>Step 2:</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="col-md-4 pb-4 ">
          <div className="step step-3">
            <h4>Step 3:</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <p className="text-left ">
        Note: if you don&apos;t have registration form our team will gladly
        assist you. Contact us at rm@sijil.com
      </p>
    </div>
  );
}

export default CreateAccount;
