export default function CreatePage() {
  return (
    <div
      className=" h-full w-full 
     flex items-center space-y-4 pt-14  justify-evenly flex-col"
    >
      {/*<div className=" w-[60%]">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Smart Contract Name
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>*/}

      <div className=" max-w-sm min-w-[60%] ">
        <div className="relative">
          <input className="peer h-12 dark:bg-gray-700 dark:border-gray-600 w-full  placeholder:text-white text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          <label className="absolute cursor-text bg-gray-700 px-1 text-opacity-50 left-2.5 top-2.5 text-white text-lg transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90 peer-focus:bg-base-100">
            Smart Contract Name...
          </label>
        </div>
      </div>

      <div className=" max-w-sm min-w-[60%] ">
        <div className="relative">
          <input className="peer h-12 dark:bg-gray-700 dark:border-gray-600 w-full  placeholder:text-white text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          <label className="absolute cursor-text bg-gray-700 px-1 text-opacity-50 left-2.5 top-2.5 text-white text-lg transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90 peer-focus:bg-base-100">
            Smart Contract Name...
          </label>
        </div>
      </div>

      <div className=" max-w-sm min-w-[60%] ">
        <div className="relative">
          <input className="peer h-12 dark:bg-gray-700 dark:border-gray-600 w-full  placeholder:text-white text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          <label className="absolute cursor-text bg-gray-700 px-1 text-opacity-50 left-2.5 top-2.5 text-white text-lg transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90 peer-focus:bg-base-100">
            Smart Contract Name...
          </label>
        </div>
      </div>

      <div className=" max-w-sm min-w-[60%] ">
        <div className="relative">
          <input className="peer h-12 dark:bg-gray-700 dark:border-gray-600 w-full  placeholder:text-white text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
          <label className="absolute cursor-text bg-gray-700 px-1 text-opacity-50 left-2.5 top-2.5 text-white text-lg transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-sm peer-focus:text-white peer-focus:scale-90 peer-focus:bg-base-100">
            Smart Contract Name...
          </label>
        </div>
      </div>
      {/*<div className=" w-[60%]">
        {" "}
        <label
          for="TokenSymbol"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Token Symbol
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      <div className=" w-[60%]">
        {" "}
        <label
          for="MetaDataURL"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Meta Data URL
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      <div className=" w-[60%]">
        {" "}
        <label
          for="TokenSupply"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Token Supply
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>*/}
      <button class=" text-xl relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logo_light to-logo_dark group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Create
        </span>
      </button>
      <div className=" w-[60%] pt-10">
        {" "}
        <label
          for="Deployed"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Deployed at
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
    </div>
  );
}
