import React from "react";
import Image from "next/image";

const CountryItem = ({name, flag, population, capital, region}) => {

  return (
      <div className="bg-white shadow-lg dark:bg-custom-navy">
        {flag &&<div className="w-full h-[150px] relative"><Image layout="fill" src={flag.png} alt={flag.alt} /></div>}
        <div className="p-5">
          <div className="font-bold">{name}</div>
          <div className="my-4">
          <DescriptionItem value={new Intl.NumberFormat().format(population)} title={"Population"}/>
          <DescriptionItem value={region} title={"Region"}/>
          <DescriptionItem value={capital} title={"Capital"}/>
          </div>
        </div>
      </div>
  )
}

export default CountryItem

export const DescriptionItem = ({title, value}) => {
  return (
      <div className="text-sm">
        <span className="text-gray-900 font-regular">{title} :</span>
        <span className="text-gray-500 px-1 font-light">{value}</span>
      </div>
  )
}