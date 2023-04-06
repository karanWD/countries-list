import React, {Dispatch, FC, SetStateAction, useEffect} from "react";
import useRequest from "@/hooks/useRequest";
import {ApiRoutes} from "@/enums/ApiRoutes";
import Link from "next/link";
import {AxiosRequestConfig} from "axios";

type Props = {
  code: string
}
type Response = {
   name: { common: string }
}
const BorderCountries: FC<Props> = ({code}) => {
  const [fetchName, nameRes] = useRequest()
  const data = nameRes?.data as any
  useEffect(() => {
    code &&
    fetchName({url: ApiRoutes.FETCH_BY_CODE + "/" + code + "?fields=name"})
  }, [code])

  return (
      nameRes.data &&
      <Link href={data.name.common}>
          <div className="bg-white dark:bg-custom-navy text-custom-dark dark:text-white shadow-md py-1 px-4 text-sm ">
            {data.name.common}
          </div>
      </Link>
  )
}

export default BorderCountries