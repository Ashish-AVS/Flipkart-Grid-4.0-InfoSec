import React from "react";
const quarantineRepos = [
  {
    id: 1,
    repo: "Car Parking",
    score: "36",
    remarks:
      "The Repo scores 92 but the author ThatAwes0meGuy seems to be malicious",
    display: "block"
  },
  {
    id: 2,
    repo: "Car Parking",
    score: "36",
    remarks:
      "The Repo scores 92 but the author ThatAwes0meGuy seems to be malicious",
    display: "block"
  },
];

export default function Quarantine() {

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Quarantine Zone
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              The following repositories need to be reviewed   before they are used by the
              organisation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 justify-center">
            {quarantineRepos.map((el, id) => (
              <div key={id} className="flex flex-col border rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  <div className="flex flex-row justify-between">
                  <span> {el.repo}</span>
                  <span>Score:   {el.score}</span>
                  </div>
                </h3>
                <p className="text-gray-500 mb-4">
                  {el.remarks} We recommend you to review these changes and take
                  an informed decision before moving ahead
                </p>
                
              <div className="flex flex-row">
         
               <button class="w-20 h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Repo</button>
               <button class="w-20 h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-red-400 rounded-lg focus:shadow-outline hover:bg-red-500">Accept</button>
               <button class="w-20 h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-800">Reject</button>
              </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

