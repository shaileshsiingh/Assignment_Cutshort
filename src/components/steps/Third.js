import { useStepperContext } from "../../contexts/StepperContext";
import Image2 from './image2.png'
import Image3 from './image3.png'


export default function Third() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold	text-center	">How are you planning to use Eden?</h1>
      <p className="text-gray-500 text-xs text-center">We'll streamline your setup experience accordingly</p>
      <div className="w-full mx-2 flex-1">
        
        <div className="bg-white my-2 p-1 flex rounded mx-2">
          <section className="cursor-pointer border border-gray-500 rounded hover:border-blue-700 mr-7" >
<img className=" mx-2 flex-1" src={Image2} alt="" />
<h2 className="font-bold text-center mt-4">For myself</h2>
<p className="text-gray-500 text-xs p-8  ">Write better. Think more clearly. Stay organised</p>
</section>

<section className="cursor-pointer border border-gray-500 rounded hover:border-blue-700">
  <img className=" mx-2 flex-1 " src={Image3} alt="" />
<h2 className="font-bold text-center mt-4">For my Team</h2>
<p className="text-gray-500 text-xs p-8 ">Wikis, Docs, Tasks & Projects, all in one place</p>
</section>
        </div>
      </div>
    
    </div>
  );
}

