export default function Final() {


  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div>
        <h1 className="text-2xl font-bold	text-center	">Congratulations!</h1>
      <p className="text-gray-500 text-xs text-center">You have completed the onboarding, you can start using the Eden!</p>
        </div>

        <a className="mt-10" href="/user/dashboard">
          <button         className="cursor-pointer rounded-lg bg-blue-500 py-4 px-20 font-size-xs text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
            Launch Eden
          </button>
        </a>
      </div>
    </div>
  );
}
