import Head from 'next/head'
import useRequest from "@/hooks/useRequest";
import {useEffect, useState} from "react";
import {ApiRoutes} from "@/enums/ApiRoutes";
import CountryItem from "@/components/countryItem";
import {useRouter} from "next/router";
import Searchbar from "@/components/searchbar";
import {checkMatches} from "@/utils/checkMatches";
import {id} from "postcss-selector-parser";
import RegionContainer from "@/components/regionContainer";
import SortContainer from "@/components/sortContainer";
import FiltersContainer from "@/components/filtersContainer";
import LoadingPage from "@/components/loadingPage";
import CountriesContainer from "@/components/countriesContainer";
import {sortHandler} from "@/utils/sortHandler";

export type CountriesDataType = {
  name: { common: string ,nativeName:Array<any>}
  capital: string[]
  region: string
  population: number
  flags: { png: string, svg: string, alt: string }
  borders: any[]
  languages:any[]
  currencies:any[]
  tld:string
  subregion:string
}
type ResponseType = {
  data: Array<CountriesDataType>
}

export default function Home() {
  const [fetchCountries, countriesRes] = useRequest()
  const [fetchCountriesRegion, countriesRegionRes] = useRequest()
  const [renderedCountries, setRenderedCountries] = useState<Array<CountriesDataType>>([])

  const router = useRouter()
  const {query} = router
  const searchQuery = query.q as string
  const regionQuery = query.r as string
  const sortQuery = query.sort as "POPULATION" | "NAME"
  const countries = countriesRes?.data as Array<CountriesDataType>

  const searchFilterHandler = ()=>{
    let includeArr = countries.filter(item => item.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
    if (includeArr.length > 0) {
      const sortedArr = sortHandler(sortQuery ??"",includeArr)
      setRenderedCountries(sortedArr as Array<CountriesDataType>)
    } else {
      setRenderedCountries([])
      for (let item of countries) {
        let commonPercent = checkMatches(item.name.common.toLowerCase(), searchQuery.toLowerCase())
        if (commonPercent > 70) {
          setRenderedCountries(prev =>sortHandler(sortQuery ??"",[...prev, item]))
        }
      }
    }
  }

  const regionFilterHandler = () =>{
    fetchCountriesRegion({url: ApiRoutes.FETCH_BY_REGION + "/" + regionQuery})
        .then(res => {
          const sortedArr = sortHandler(sortQuery ??"",res)
          setRenderedCountries(sortedArr)
        })
  }
  const fetchHandler = ()=>{
    fetchCountries({url: ApiRoutes.FETCH_COUNTRIES})
        .then(res => {
          const sortedArr = sortHandler(sortQuery ??"",res)
          setRenderedCountries(sortedArr)
        })
  }

  const defaultHandler = () =>{
    const sortedArr = sortHandler(sortQuery ??"",countries)
    setRenderedCountries(sortedArr)
  }


  useEffect(() => {
    if (searchQuery && countries) {searchFilterHandler()}
    else if (regionQuery) {regionFilterHandler()}
    else {
      if (!countries) {fetchHandler()}
      else {defaultHandler()}
    }
  }, [searchQuery, regionQuery,sortQuery,countries])




  return (
      <>
        <Head>
          <title>Country App </title>
          <meta name="description" content="Created by Karan_Shams_Pirzadeh"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <FiltersContainer />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 mx-auto py-5 container px-12 lg:px-0">
            <LoadingPage loading={!renderedCountries || !countriesRes.data ||countriesRes.loading || countriesRegionRes.loading}>
                <CountriesContainer data={renderedCountries} />
            </LoadingPage>
        </div>
      </>
  )
}

// export async function getStaticProps(context) {
//   const res = await fetch("https://restcountries.com/v3.1/all")
//   const data = await res.json()
//   console.log(data)
//   return {
//     props: {
//       // countries:data
//     }, // will be passed to the page component as props
//   }
// }
