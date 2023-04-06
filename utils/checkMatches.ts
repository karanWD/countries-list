export const checkMatches = (main = "", query = "") => {
  let searchQuery = [...query]
  let count = 0;
  let deleteCount = 1
  if (main[0]!==searchQuery[0]) return 0
  for (let i in main) {
    for (let j in searchQuery) {
      if (main[i] === searchQuery[j]) {
        searchQuery.splice(0, deleteCount)
        count++
        deleteCount = 1
      } else {
        deleteCount++
      }
    }
    deleteCount = 1
  }
  let percent = (count * 100) / main.length
  return percent;
}
