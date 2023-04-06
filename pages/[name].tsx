import React, {useEffect} from "react";
import useRequest from "@/hooks/useRequest";
import {ApiRoutes} from "@/enums/ApiRoutes";
import {useRouter} from "next/router";
import Image from "next/image";
import InfoItem from "@/components/infoItem";
import ListInfoItem from "@/components/listInfoItem";
import BorderCountries from "@/components/borderCountries";
import ArrowSVG from "@/svgs/arrowSVG";
import {CountriesDataType} from "@/pages/index";


const CountryDetailPage = () => {
  const [fetchInfo, countryInfoRes] = useRequest()
  const resData = countryInfoRes?.data as Array<CountriesDataType>
  const router = useRouter()
  const {query} = router
  const data = resData?.length > 0 ? resData[0] : null

  useEffect(() => {
    query.name &&
    fetchInfo({url: ApiRoutes.FETCH_BY_NAME + "/" + query.name + "?fullText=true"})
  }, [query])

  return (
      <section className="container mx-auto px-4 lg:px-0">
        <div className="py-5">
          <button className="flex items-center gap-2 shadow bg-white dark:bg-custom-navy text-custom-dark dark:text-white py-3 px-7" onClick={()=>router.back()}>
            <span className="w-5 h-5 relative inline-block"><ArrowSVG/></span>
            Back
          </button>
        </div>
        {
          data ?
              <div className="flex flex-wrap items-center">
                <div className="w-full mx-auto lg:mx-0 lg:w-1/2 h-[200px] lg:h-[400px] relative">
                  <Image src={data.flags.png} alt={data.flags.alt} layout="fill"/>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-20">
                  <h1 className="font-extrabold text-2xl">{data.name.common}</h1>
                  <div className="w-full my-10 flex flex-wrap lg:flex-nowrap gap-12">
                    <div className="w-full lg:w-fit flex flex-col gap-3">
                      <ListInfoItem title={"Native names"} value={data.name.nativeName} targetKey={"common"} />
                      <InfoItem value={new Intl.NumberFormat().format(data.population)} title={"Population"}/>
                      <InfoItem value={data.region} title={"Region"}/>
                      <InfoItem value={data.subregion} title={"Sub Region"}/>
                      <ListInfoItem title={"Capitals"} value={data.capital}/>
                    </div>
                    <div className="w-full lg:w-fit flex flex-col gap-3">
                      <ListInfoItem title={"Top Level Domains"} value={data.tld}/>
                      <ListInfoItem title={"Currencies"} value={data.currencies} targetKey={"name"}/>
                      <ListInfoItem title={"Languages"} value={data.languages}/>
                    </div>
                  </div>
                  <div className="my-5 flex flex-wrap items-center gap-2 ">
                    <span className="text-sm w-full lg:w-fit"> Border Countries:</span>
                    {data?.borders ? data.borders.map((item, index) => <BorderCountries code={item} key={"BORDER_ITEM" + index}/>) : "No information about it"}
                  </div>
                </div>
              </div>
              :
              <DetailLoading/>
        }
      </section>
  )
}

export default CountryDetailPage

export const DetailLoading = () =>{
  return(
      <div className="w-full flex flex-wrap items-center gap-20">
        <div className="w-full mx-auto lg:mx-0 lg:w-1/2 h-[200px] lg:h-[400px] relative animate-pulse bg-custom-secondary dark:bg-custom-navy"></div>
        <div className="w-full lg:w-fit">
          <div className="h-4 w-full lg:w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
          <div className="w-full my-10 flex flex-wrap gap-12">
            <div className="w-full lg:w-fit flex flex-col gap-3">
              <div className="h-2 w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
              <div className="h-2 w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
              <div className="h-2 w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
            </div>
            <div className="w-full lg:w-fit flex flex-col gap-3">
              <div className="h-2 w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
              <div className="h-2 w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
              <div className="h-2 w-40 bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

// export async function getServerSideProps(ctx){
//   console.log(ctx.query)
//   const res = await fetch("https://restcountries.com/v3.1/name/"+ctx.query.name+"?fullText=true")
//   const data = res.json()
//   console.log(data)
//   return{
//     props:{}
//   }
// }