"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="border-[1px] w-full rounded-full shadow-sm md:w-auto py-2 hover:shadow-md transition hover:border-green-300 cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <div className="px-6 text-sm font-semibold">Anywhere</div>
          <div className="hidden px-6 text-sm font-semibold sm:block border-x-[1px] flex-1 text-center">
            Anyweek
          </div>
          <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
            <div className="hidden sm:block">Add Guest</div>
            <div className="p-2 text-white rounded-full bg-rose-300 hover:bg-rose-500">
              <BiSearch size={18} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
