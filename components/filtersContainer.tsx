import React from "react";
import Searchbar from "@/components/searchbar";
import SortContainer from "@/components/sortContainer";
import RegionContainer from "@/components/regionContainer";


const FiltersContainer = () => {
  return(
      <div className="flex items-center justify-between container py-10 mx-auto">
        <Searchbar/>
        <div className="flex justify-end gap-4 ">
          <SortContainer/>
          <RegionContainer/>
        </div>
      </div>
  )
}

export default FiltersContainer