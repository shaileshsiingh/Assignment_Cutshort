import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import First from "./components/steps/First";
import Second from "./components/steps/Second";
import Third from "./components/steps/Third";
import Final from "./components/steps/Final";
import Image from './images/image.png'

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "",
    "",
    "",
    "",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      <div className="flex justify-center">
      <img src={Image} alt="Logo" />
      <div className="w-6 h-7">
      <h1 className="text-2xl ml-2 font-bold text-center">Eden</h1>
      </div>
      </div>
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
