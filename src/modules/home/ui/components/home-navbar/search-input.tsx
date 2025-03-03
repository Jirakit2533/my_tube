import { SearchIcon } from "lucide-react";


{/*SearchInput component */}
export const SearchInput = () =>  {
  // TODO: Add search functionality
return (
    <form className="flex max-w-[600px]">
      <div className="w-full">
          <input
            type="text"
            placeholder="ค้นหา"
            className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500" />
            {/* TODO: add remove search button */}
      </div>
        <button
          type="submit"
          className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full fover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" >
          <SearchIcon className="size-5" />
        </button> 
      </form>
          
            
  );
} 