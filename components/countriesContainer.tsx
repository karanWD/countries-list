import React from "react";
import CountryItem from "@/components/countryItem";

const CountriesContainer = ({data}) =>{
  return(
      data.length > 0 ?
          data.map((item, index) => (
              <CountryItem key={"COUNTRY_ITEM" + index}
                           name={item.name.common}
                           flag={item.flags}
                           population={item.population}
                           region={item.region}
                           capital={item.capital}
              />
          ))
          :
          <div>There is no data about this country</div>
  )
}


export default CountriesContainer