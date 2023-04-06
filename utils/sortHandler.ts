export const sortHandler = (type:"NAME"|"POPULATION",array:any[]) => {
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