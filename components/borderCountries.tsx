import React, {useEffect} from "react";
import useRequest from "@/hooks/useRequest";
import {ApiRoutes} from "@/enums/ApiRoutes";
import Link from "next/link";


const BorderCountries = ({code}) => {
  const [fetchName, nameRes] = useRequest()
  useEffect(() => {
    code &&
    fetchName({url: ApiRoutes.FETCH_BY_CODE + "/" + code + "?fields=name"})
  }, [code])
  console.log(nameRes)
  return (
      nameRes.data &&
      <Link href={nameRes.data.name.common}>
        <div className="bg-white shadow-md py-1 px-4 text-sm ">
          {nameRes.data.name.common}
        </div>
      </Link>
  )
}

export default BorderCountries