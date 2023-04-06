import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const RegionContainer = () => {
  const router = useRouter()
  const {query} = router
  const [currentRegion, setRegion] = useState<string | null>(null)
  const [isOpen, setOpen] = useState(false)

  const queryHandler = (value) => {
    router.push({query: {r: value,sort:query.sort}})
    setOpen(prev=>!prev)
  }
  const clearHandler = () =>{
    router.push({query: {r:"",sort:query.sort}})
  }

  useEffect(() => {
    query.r ? setRegion(query.r as string) : setRegion(null);setOpen(false)
  }, [query])

  return (
      <div className="w-44 relative" onClick={()=>setOpen(prev=>!prev)}>
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                className="shadow-md flex justify-between w-full text-custom-dark bg-white rounded-md text-sm px-4 py-3.5 text-center inline-flex items-center dark:bg-custom-navy "
                type="button">
          {currentRegion ?? "Select Region"}
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none"
               stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div id="dropdownHover"
             className={`${(isOpen) ? "block" : "hidden"} z-10  bg-white absolute inset-0 divide-y divide-gray-100 rounded-lg shadow w-full h-[230px] transform translate-y-12 shadow-xl dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <RegionItem title={"Africa"} clickHandler={() => queryHandler("africa")}/>
            <RegionItem title={"America"} clickHandler={() => queryHandler("america")}/>
            <RegionItem title={"Asia"} clickHandler={() => queryHandler("asia")}/>
            <RegionItem title={"Europe "} clickHandler={() => queryHandler("europe")}/>
            <RegionItem title={"Oceania"} clickHandler={() => queryHandler("oceania")}/>
            <hr/>
            <RegionItem title={"Clear filter"} clickHandler={clearHandler}/>
          </ul>
        </div>
      </div>
  )
}

export default RegionContainer


export const RegionItem = ({title, clickHandler}) => {
  return (
      <li>
        <div onClick={clickHandler}
             className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{title}</div>
      </li>
  )
}