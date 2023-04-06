import React, {useState} from "react";
import {useRouter} from "next/router";


const Searchbar = () => {
  const router = useRouter()
  const [value, setValue] = useState()
  const changeHandler = (e) => {
    router.push({
      query: {q: e.target.value,sort:router.query.sort}
    })
    setValue(e.target.value)
  }
  return (
      <div className="bg-white flex  w-1/3 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md">
        <span className="py-4 w-14"></span>
        <input className="p-4 flex-1" placeholder="Search for country..." type="text" value={value} onInput={changeHandler}/>
      </div>
  )
}

export default Searchbar