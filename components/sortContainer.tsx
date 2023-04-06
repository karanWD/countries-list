import React, {useEffect, useState} from "react";
import {RegionItem} from "@/components/regionContainer";
import {useRouter} from "next/router";


const SortContainer = () =>{
  const router = useRouter()
  const {query} = router
  const [isOpen, setOpen] = useState(false)
  const [currentSort, setSort] = useState<string | null>(null)
  const clickHandler = (value)=>{
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
      <div className="w-44 relative" onClick={()=>setOpen(prev=>!prev)}>
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                className="shadow-md flex justify-between w-full text-custom-dark bg-white rounded-md text-sm px-4 py-3.5 text-center inline-flex items-center dark:bg-custom-navy "
                type="button">
          {currentSort ? "sort by "+currentSort.toLowerCase() : "Select Sort"}
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none"
               stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div id="dropdownHover"
             className={`${(isOpen) ? "block" : "hidden"} z-10  bg-white absolute inset-0 divide-y divide-gray-100 rounded-lg shadow w-full h-[120px] transform translate-y-12 shadow-xl dark:bg-gray-700`}>
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