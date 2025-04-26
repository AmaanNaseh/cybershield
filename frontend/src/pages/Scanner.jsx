import React from "react";
import ThreatScanner from "../components/ThreatScanner";

const Scanner = () => {
  return (
    <div>
      <h1 className="text-white font-semibold text-lg italic text-center my-8">
        Scan any website to know its threat values which may be used to predict
        risk using our Analytics feature.
      </h1>
      <ThreatScanner />
    </div>
  );
};

export default Scanner;
