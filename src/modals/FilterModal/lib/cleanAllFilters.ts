const cleanAllFilters = (
  setPlatformFilter: Function,
  setScoreFilter: Function,
  setStatusFilter: Function
) => {
  setPlatformFilter([]);
  setScoreFilter([]);
  setStatusFilter([]);
}

export { cleanAllFilters }