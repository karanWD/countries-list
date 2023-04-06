import React from "react";
import Searchbar from "@/components/searchbar";
import SortContainer from "@/components/sortContainer";
import RegionContainer from "@/components/regionContainer";


const FiltersContainer = () => {
  return(
      <div className="flex flex-wrap items-center justify-between container py-5 lg:py-10 mx-auto px-4   lg:px-0">
        <Searchbar/>
        <div className="w-full lg:w-fit flex justify-end gap-4 text-custom-dark dark:text-white mt-4 lg:mt-0">
          <SortContainer/>
          <RegionContainer/>
        </div>
      </div>
  )
}

export default FiltersContainer