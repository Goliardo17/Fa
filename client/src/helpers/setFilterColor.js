export const setFilterColor = (array, value) => {
    const checkedInFilters = array.includes(value)

    if (checkedInFilters) {
      const after = array.filter((item) => item !== value)

      return after
    } else {
      array.push(value)

      return array
    }
}