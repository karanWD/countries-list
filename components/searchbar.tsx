import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import SearchSVG from "@/svgs/searchSVG";


const Searchbar = () => {
  const router = useRouter()
  const {query} = router
  const [value, setValue] = useState("")
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    router.push({
      query: {q: e.target.value, sort: router.query.sort}
    })
    setValue(e.target.value)
  }
  useEffect(() => {
    query.q &&
    setValue(query.q as string)
  }, [query])
  return (
      <div
          className="bg-white dark:bg-custom-navy flex items-center w-full lg:w-1/3 shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-md">
        <span className="ml-3 w-5 h-5 text-gray-400"><SearchSVG/></span>
        <input className="p-4 flex-1 bg-transparent" placeholder="Search for country..." type="text" value={value}
               onInput={changeHandler}/>
      </div>
  )
}

export default Searchbar