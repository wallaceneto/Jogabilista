const cleanAllFilters = (

  setPlatformFilter: Function,
  setScoreFilter: Function,
  setStatusFilter: Function,
  setLoading: (value: boolean) => void,
  
) => {
  setLoading(true);

  setPlatformFilter([]);
  setScoreFilter([]);
  setStatusFilter([]);

  setTimeout(() => setLoading(false), 800);
}

export { cleanAllFilters }