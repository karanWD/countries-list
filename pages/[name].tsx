import React, {useEffect} from "react";
import useRequest from "@/hooks/useRequest";
import {ApiRoutes} from "@/enums/ApiRoutes";
import {useRouter} from "next/router";
import Image from "next/image";
import InfoItem from "@/components/infoItem";
import ListInfoItem from "@/components/listInfoItem";
import BorderCountries from "@/components/borderCountries";


const CountryDetailPage = () => {
  const [fetchInfo, countryInfoRes] = useRequest()
  const router = useRouter()
  const {query} = router
  const data = countryInfoRes?.data?.length > 0 ? countryInfoRes?.data[0] : null
  useEffect(() => {
    query.name &&
    fetchInfo({url: ApiRoutes.FETCH_BY_NAME + "/" + query.name + "?fullText=true"})
  }, [query])

  return (
      <section className="container mx-auto">
        <div className="py-5">
          <button className="shadow bg-white py-3 px-10" onClick={()=>router.back()}> Back</button>
        </div>
        {
          data ?
              <div className="flex items-center gap-20">
                <div className="w-1/2 h-[400px] relative">
                  <Image src={data.flags.png} alt={data.flags.alt} layout="fill"/>
                </div>
                <div className="w-1/2">
                  <h1 className="font-extrabold text-2xl">{data.name.common}</h1>
                  <div className="w-full my-10 flex gap-12">
                    <div className="w-1/2 flex flex-col gap-3">
                      <ListInfoItem title={"Native names"} value={data.name.nativeName} targetKey={"common"} />
                      <InfoItem value={new Intl.NumberFormat().format(data.population)} title={"Population"}/>
                      <InfoItem value={data.region} title={"Region"}/>
                      <InfoItem value={data.subregion} title={"Sub Region"}/>
                      <ListInfoItem title={"Capitals"} value={data.capital}/>
                    </div>
                    <div className="w-1/2 flex flex-col gap-3">
                      <ListInfoItem title={"Top Level Domains"} value={data.tld}/>
                      <ListInfoItem title={"Currencies"} value={data.currencies} targetKey={"name"}/>
                      <ListInfoItem title={"Languages"} value={data.languages}/>
                    </div>
                  </div>
                  <div className="my-5 flex flex-wrap items-center gap-2">
                    <span className="text-sm "> Border Countries:</span>
                    {data?.borders ? data.borders.map((item, index) => <BorderCountries code={item} key={"BORDER_ITEM" + index}/>) : "No information about it"}
                  </div>
                </div>
              </div>
              :
              <h1>Loading</h1>
        }
      </section>
  )
}

export default CountryDetailPage

// export async function getServerSideProps(ctx){
//   console.log(ctx.query)
//   const res = await fetch("https://restcountries.com/v3.1/name/"+ctx.query.name+"?fullText=true")
//   const data = res.json()
//   console.log(data)
//   return{
//     props:{}
//   }
// }