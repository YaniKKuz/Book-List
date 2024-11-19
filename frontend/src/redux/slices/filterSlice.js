import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false
}

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
        state.author = action.payload
    },
    setOnliFavoriteFilter: (state) => {
    state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters: () => {
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilters, setAuthorFilter, setOnliFavoriteFilter } =
  filterSlice.actions
export const selecteTtilteFilter = (state) => state.filter.title
export const selecteAuthorFilter = (state) => state.filter.author
export const selecteOnlyFavorite = (state) => state.filter.onlyFavorite
export default filterSlice.reducer
