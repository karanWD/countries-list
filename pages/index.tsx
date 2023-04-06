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

export type CountriesDataType = {
  name: { common: string }
  capital: string[]
  region: string
  population: number
  flags: { png: string, svg: string, alt: string }
}
type ResponseType = {
  data: Array<CountriesDataType>
}
export default function Home() {
  const [fetchCountries, countriesRes] = useRequest()
  const [fetchCountriesRegion, countriesRegionRes] = useRequest()
  const [renderedCountries, setRenderedCountries] = useState([])
  const router = useRouter()
  const {query} = router
  const searchQuery = query.q as string
  const regionQuery = query.r as string
  const sortQuery = query.sort as "POPULATION" | "NAME"
  const countries = countriesRes?.data as Array<CountriesDataType>


  useEffect(() => {
    if (searchQuery && countries) {
      let includeArr = countries.filter(item => item.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
      if (includeArr.length > 0) {
        const sortedArr = sortHandler(sortQuery ??"",includeArr)
        setRenderedCountries(sortedArr)
      } else {
        setRenderedCountries([])
        for (let item of countries) {
          let commonPercent = checkMatches(item.name.common.toLowerCase(), searchQuery.toLowerCase())
          if (commonPercent > 70) {
            setRenderedCountries(prev =>sortHandler(sortQuery ??"",[...prev, item]))
          }
        }
      }
    } else if (regionQuery) {
      fetchCountriesRegion({url: ApiRoutes.FETCH_BY_REGION + "/" + regionQuery})
          .then(res => {
            const sortedArr = sortHandler(sortQuery ??"",res)
            setRenderedCountries(sortedArr)
          })
    } else {
      if (!countries) {
        fetchCountries({url: ApiRoutes.FETCH_COUNTRIES})
            .then(res => {
              const sortedArr = sortHandler(sortQuery ??"",res)
              setRenderedCountries(sortedArr)
            })
      } else {
        const sortedArr = sortHandler(sortQuery ??"",countries)
        setRenderedCountries(sortedArr)
      }
    }
  }, [searchQuery, regionQuery,sortQuery])


  const sortHandler = (type,array) => {
    const arr = [...array]
    if (type === "NAME") {
      arr.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      })
    } else if (type==="POPULATION"){
      arr.sort(function (a, b) {
        return b.population - a.population;
      });
    }
    return arr
  }

  return (
      <>
        <Head>
          <title>Country App </title>
          <meta name="description" content="Generated by create next app"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="flex items-center justify-between container py-10 mx-auto">
          <Searchbar/>
          <div className="flex justify-end gap-4 ">
            <SortContainer sortHandler={sortHandler}/>
            <RegionContainer/>
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 gap-20 container mx-auto">
          {
            (!renderedCountries || countriesRes.loading || countriesRegionRes.loading) ?
                <h1>LOADINg</h1> :
                renderedCountries.length > 0 ?
                    renderedCountries.map((item, index) => (
                        <CountryItem key={"COUNTRY_ITEM" + index}
                                     name={item.name.common}
                                     flag={item.flags}
                                     population={item.population}
                                     region={item.region}
                                     capital={item.capital}
                        />
                    ))
                    : <div>There is no data about this country</div>
          }
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
