export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
    
      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer text-center rounded-lg bg-blue-500 w-80 py-4 px-20 font-size-xs text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Create Workspace" : "Create Workspace"}
      </button>
    </div>
  );
}
