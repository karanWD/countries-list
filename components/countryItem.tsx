import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfoItem from "@/components/infoItem";

const CountryItem = ({name, flag, population, capital, region}) => {

  return (
      <Link href={name}>
        <div className="bg-white shadow-[1px_1px_15px_rgba(0,0,0,0.05)] dark:bg-custom-navy rounded-lg">
          {flag &&
              <div className="w-full h-[150px] relative"><Image layout="fill" src={flag.png} alt={flag.alt ?? name}/></div>}
          <div className="p-5">
            <div className="font-bold">{name}</div>
            <div className="my-4">
              <InfoItem value={new Intl.NumberFormat().format(population)} title={"Population"}/>
              <InfoItem value={region} title={"Region"}/>
              <InfoItem value={capital} title={"Capital"}/>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default CountryItem

