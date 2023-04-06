import React, {FC} from "react";
import CountryItem from "@/components/countryItem";
import {CountriesDataType} from "@/pages";

type Props={
  data:Array<CountriesDataType>
}
const CountriesContainer:FC<Props> = ({data}) =>{
  return(
      <>
        {
          data.length > 0 ?
              data.map((item, index) => (
                  <CountryItem key={"COUNTRY_ITEM" + index}
                               name={item.name.common}
                               flag={item.flags}
                               population={item.population}
                               region={item.region}
                               capital={item.capital?.length >0 ? item.capital[0] : ""}
                  />
              ))
              :
              <div>There is no data about this country</div>
        }
      </>

  )
}


export default CountriesContainer