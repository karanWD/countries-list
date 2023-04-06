import React, {useEffect, useState} from "react";
import {RegionItem} from "@/components/regionContainer";
import {useRouter} from "next/router";
import ChevronSVG from "@/svgs/chevronSVG";


const SortContainer = () =>{
  const router = useRouter()
  const {query} = router
  const [isOpen, setOpen] = useState(false)
  const [currentSort, setSort] = useState<string | null>(null)

  const clickHandler = (value:string)=>{
    setSort(value)
    router.push({query: {...query,sort: value}})
  }
  const clearHandler = () =>{
    setSort(null)
    router.push({query: {...query,sort:""}})
  }
  useEffect(() => {
    query.sort ? setSort(query.sort as string) : setSort(null);setOpen(false)
  }, [query])


  return(
      <div className="w-1/2 lg:w-44 relative" onClick={()=>setOpen(prev=>!prev)}>
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                className="shadow-[0_0_15px_rgba(0,0,0,0.05)] flex justify-between w-full  bg-white rounded-md text-sm px-4 py-3.5 text-center inline-flex items-center dark:bg-custom-navy "
                type="button">
          {currentSort ? "sort by "+currentSort.toLowerCase() : "Select Sort"}
          <span className={`transition-all duration-300 relative w-4 h-4 transform ${isOpen?"rotate-0":"rotate-180"}`}><ChevronSVG/></span>
        </button>
        <div id="dropdownHover"
             className={`${(isOpen) ? "block" : "hidden"} z-10  bg-white absolute inset-0 divide-y divide-gray-100 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.05)] w-full h-[120px] transform translate-y-14 shadow-xl dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <RegionItem title={"Population"} clickHandler={() => clickHandler("POPULATION")}/>
            <RegionItem title={"Country Name"} clickHandler={() => clickHandler("NAME")}/>
            <hr/>
            <RegionItem title={"Clear sort"} clickHandler={clearHandler}/>
          </ul>
        </div>
      </div>
  )
}

export default SortContainer