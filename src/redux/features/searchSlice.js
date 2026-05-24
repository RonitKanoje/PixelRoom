import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTabs: "photos",
    results: [],
    loading: false,
    error: null,
  },

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTabs = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResult(state) {
      state.results = [];
    },
  },
});

export const { setActiveTabs, setError, setLoading, setQuery, setResults } =
  searchSlice.actions;

export default searchSlice.reducer;
